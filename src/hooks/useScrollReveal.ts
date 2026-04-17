import { useEffect, type DependencyList } from "react";

export function useScrollReveal(dependencies: DependencyList = []) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Adiciona um pequeno delay para garantir que o DOM foi renderizado após a troca de página
    const timeoutId = window.setTimeout(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

      if (!elements.length) {
        return;
      }

      // Se o usuário prefere movimentos reduzidos ou o navegador não suporta IntersectionObserver,
      // mostra tudo imediatamente para evitar uma tela "travada".
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        typeof IntersectionObserver === "undefined"
      ) {
        elements.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      // Mostra imediatamente elementos que já estão no topo/viewport para evitar tela branca
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-visible");
        }
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          observer.observe(el);
        }
      });
    }, 50);

    return () => {
      window.clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, dependencies);
}
