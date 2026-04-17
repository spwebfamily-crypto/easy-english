import { ArrowLeft, Search, X } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type MaterialCategory = "todos" | "basico" | "intermediario" | "avancado";

type MaterialCardData = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Exclude<MaterialCategory, "todos">;
  badge: string;
};

type MaterialsProps = {
  onBack: () => void;
};

function buildMaterialsData(): MaterialCardData[] {
  return [
    {
      id: 1,
      title: "Easy Book",
      description: "O guia prático e ilustrado para destravar sua base no inglês com exercícios reais. Ideal para quem está começando e precisa de uma base sólida. Conteúdo focado em gramática essencial, vocabulário do dia a dia e pronúncia básica.",
      image: "/capas/easy-english-easy-book.png",
      category: "basico",
      badge: "Mais procurado",
    },
    {
      id: 2,
      title: "Easy Travel",
      description: "Sua bagagem linguística essencial para viajar o mundo sem medo de falar. Focado em situações reais de aeroporto, hotel e restaurantes. Aprenda como pedir informações, fazer check-in e se comunicar em emergências.",
      image: "/capas/easy-travel.png",
      category: "intermediario",
      badge: "Edição Especial",
    },
    {
      id: 3,
      title: "Easy Business",
      description: "Domine o vocabulário corporativo e as situações de trabalho mais comuns. Perfeito para reuniões, apresentações e negociações em inglês. Aprenda como escrever e-mails formais e participar de chamadas internacionais com confiança.",
      image: "/capas/easy-english-business.png",
      category: "avancado",
      badge: "Profissional",
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

type LibraryCardProps = {
  material: MaterialCardData;
  delay?: number;
  onClick: (material: MaterialCardData) => void;
};

function LibraryCard({ material, delay = 0, onClick }: LibraryCardProps) {
  return (
    <article 
      className="library-item" 
      data-reveal="up" 
      style={revealStyle(delay)}
      onClick={() => onClick(material)}
    >
      <div className="library-item__cover">
        <img src={material.image} alt={material.title} loading="lazy" />
        <span className="library-item__badge">{material.badge}</span>
        <div className="library-item__overlay">
          <span>Ver Detalhes</span>
        </div>
      </div>
      <h3 className="library-item__title">{material.title}</h3>
    </article>
  );
}

export default function Materials({ onBack }: MaterialsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<MaterialCategory>("todos");
  const [activeMaterial, setActiveMaterial] = useState<MaterialCardData | null>(null);

  useScrollReveal([searchTerm, selectedCategory]);

  const materialsData = buildMaterialsData();
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
            Biblioteca Digital
          </h1>

          <p data-reveal="up" style={revealStyle(160)}>
            Clique em uma das capas para explorar o conteúdo de cada material.
          </p>
        </div>
      </header>

      <div className="materials-filters">
        <div className="container">
          <div className="search-box" data-reveal="up">
            <Search size={18} />
            <input
              type="text"
              placeholder="Buscar livro..."
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
              <p>Nenhum livro encontrado.</p>
            </div>
          ) : (
            <div className="library-grid">
              {filteredMaterials.map((material, index) => (
                <LibraryCard 
                  key={material.id} 
                  material={material} 
                  delay={index * 90} 
                  onClick={setActiveMaterial}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {activeMaterial && (
        <div className="modal-overlay" onClick={() => setActiveMaterial(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveMaterial(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={activeMaterial.image} alt={activeMaterial.title} />
              </div>
              <div className="modal-info">
                <span className="library-item__category">
                  {categoryLabels[activeMaterial.category]}
                </span>
                <h2>{activeMaterial.title}</h2>
                <div className="modal-badge">{activeMaterial.badge}</div>
                <p>{activeMaterial.description}</p>
                {activeMaterial.id === 1 && (
                  <a 
                    href="https://hotmart.com/pt-br/marketplace/produtos/easy-english-now-beginner/U102785184A?sck=HOTMART_MEM_CA" 
                    target="_blank" 
                    rel="noreferrer"
                    className="button-link button-link--pulse"
                    style={{ marginTop: '20px' }}
                  >
                    <span>Quero meu Easy Book NOW</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
