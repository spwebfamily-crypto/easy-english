import { ArrowLeft, Search, ShoppingCart, type LucideIcon } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type MaterialCategory = "todos" | "basico" | "intermediario" | "avancado";

type MaterialCardData = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: Exclude<MaterialCategory, "todos">;
  badge: string;
  href: string;
  ctaLabel: string;
  icon: LucideIcon;
};

type MaterialsProps = {
  onBack: () => void;
  contactLink: string;
};

const defaultCtaLabel = "Pedir no Instagram";

function buildMaterialsData(contactLink: string): MaterialCardData[] {
  return [
    {
      id: 1,
      title: "Material Exemplo 1",
      description: "Material introdutório com exercícios práticos para destravar a base do inglês.",
      price: "R$ 97,00",
      image: "/assets/Group-1.png",
      category: "basico",
      badge: "Mais procurado",
      href: contactLink,
      ctaLabel: defaultCtaLabel,
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: "Material Exemplo 2",
      description: "Conteúdo intermediário com foco em fluidez, repertório e uso em situações reais.",
      price: "R$ 147,00",
      image: "/assets/Group-3.png",
      category: "intermediario",
      badge: "Nova coleção",
      href: contactLink,
      ctaLabel: defaultCtaLabel,
      icon: ShoppingCart,
    },
    {
      id: 3,
      title: "Material Exemplo 3",
      description: "Material avançado para acelerar compreensão, vocabulário e autonomia no idioma.",
      price: "R$ 197,00",
      image: "/assets/Group-4.png",
      category: "avancado",
      badge: "Aprofundado",
      href: contactLink,
      ctaLabel: defaultCtaLabel,
      icon: ShoppingCart,
    },
  ];
}

const categoryLabels: Record<MaterialCategory, string> = {
  todos: "Todos",
  basico: "Básico",
  intermediario: "Intermediário",
  avancado: "Avançado",
};

function revealStyle(delay = 0): CSSProperties {
  return { "--reveal-delay": `${delay}ms` };
}

type ProductCardProps = {
  material: MaterialCardData;
  delay?: number;
};

function ProductCard({ material, delay = 0 }: ProductCardProps) {
  const Icon = material.icon;

  return (
    <article className="product-card" data-reveal="up" style={revealStyle(delay)}>
      <div className="product-card__image-wrap">
        <div className="product-card__image">
          <img src={material.image} alt={material.title} loading="lazy" decoding="async" />
        </div>
        <span className="product-card__badge">{material.badge}</span>
      </div>

      <div className="product-card__content">
        <div className="product-card__top">
          <span className="product-card__category">{categoryLabels[material.category]}</span>
          <h3>{material.title}</h3>
        </div>

        <p>{material.description}</p>

        <div className="product-card__footer">
          <strong className="product-card__price">{material.price}</strong>
          <a className="product-card__button" href={material.href} target="_blank" rel="noreferrer">
            <Icon size={16} />
            {material.ctaLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Materials({ onBack, contactLink }: MaterialsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<MaterialCategory>("todos");

  useScrollReveal([searchTerm, selectedCategory]);

  const materialsData = buildMaterialsData(contactLink);
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredMaterials = materialsData.filter((material) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      [
        material.title,
        material.description,
        material.badge,
        categoryLabels[material.category],
      ].some((value) => value.toLowerCase().includes(normalizedSearch));
    const matchesCategory =
      selectedCategory === "todos" || material.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="materials-page">
      <header className="materials-header">
        <div className="container">
          <button className="back-button is-visible" onClick={onBack} type="button" data-reveal="left">
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>

          <h1 data-reveal="up" style={revealStyle(80)}>
            Biblioteca de Materiais
          </h1>

          <p data-reveal="up" style={revealStyle(160)}>
            Explore nossos materiais exclusivos para aprender inglês com clareza e progressão.
          </p>
        </div>
      </header>

      <div className="materials-filters">
        <div className="container">
          <div className="search-box" data-reveal="up">
            <Search size={18} />
            <input
              type="text"
              placeholder="Buscar materiais..."
              aria-label="Buscar materiais"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="category-filters" data-reveal="up" style={revealStyle(100)}>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <button
                key={value}
                className={selectedCategory === value ? "active" : ""}
                onClick={() => setSelectedCategory(value as MaterialCategory)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="materials-grid-section">
        <div className="container">
          {filteredMaterials.length === 0 ? (
            <div className="empty-state">
              <p>Nenhum material encontrado com esse filtro. Tente outro termo ou categoria.</p>
            </div>
          ) : (
            <div className="materials-grid">
              {filteredMaterials.map((material, index) => (
                <ProductCard key={material.id} material={material} delay={index * 90} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
