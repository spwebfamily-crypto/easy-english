import { ArrowLeft, Search, X } from "lucide-react";
import { useState, useEffect, type CSSProperties } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useTranslation } from "../contexts/LanguageContext";

type MaterialCategory = "todos" | "basico" | "intermediario" | "avancado";

type MaterialCardData = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Exclude<MaterialCategory, "todos">;
  badge: string;
  cta?: string;
};

type MaterialsProps = {
  onBack: () => void;
};

function revealStyle(delay = 0): CSSProperties {
  return { "--reveal-delay": `${delay}ms` };
}

type LibraryCardProps = {
  material: MaterialCardData;
  delay?: number;
  onClick: (material: MaterialCardData) => void;
  detailsLabel: string;
};

function LibraryCard({ material, delay = 0, onClick, detailsLabel }: LibraryCardProps) {
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
          <span>{detailsLabel}</span>
        </div>
      </div>
      <h3 className="library-item__title">{material.title}</h3>
    </article>
  );
}

export default function Materials({ onBack }: MaterialsProps) {
  const { t, language } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<MaterialCategory>("todos");
  const [activeMaterial, setActiveMaterial] = useState<MaterialCardData | null>(null);

  useScrollReveal([language]);

  const materialsData: MaterialCardData[] = t.materials.items.map((item, index) => ({
    ...item,
    image: [
      "/capas/easy-english-easy-book.png",
      "/capas/easy-travel.png",
      "/capas/easy-english-business.png"
    ][index],
    category: ["basico", "intermediario", "avancado"][index] as Exclude<MaterialCategory, "todos">
  }));

  // Reset search and category when language changes
  useEffect(() => {
    setSearchTerm("");
    setSelectedCategory("todos");
    setActiveMaterial(null);
  }, [language]);

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredMaterials = materialsData.filter((material) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      [
        material.title,
        material.description,
        material.badge,
        t.materials.categories[material.category],
      ].some((value) => value.toLowerCase().includes(normalizedSearch));
    const matchesCategory =
      selectedCategory === "todos" || material.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="materials-page">
      <div className="container">
        <button
          onClick={onBack}
          className="back-button"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "32px",
            marginTop: "32px",
            background: "none",
            border: "none",
            color: "var(--blue)",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(-4px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
        >
          <ArrowLeft size={20} />
          {t.materials.back}
        </button>
      </div>
      
      <header className="materials-header">
        <div className="container">
          <h1 data-reveal="up" style={revealStyle(80)}>
            {t.materials.title}
          </h1>

          <p data-reveal="up" style={revealStyle(160)}>
            {t.materials.description}
          </p>
        </div>
      </header>

      <div className="materials-filters">
        <div className="container">
          <div className="search-box" data-reveal="up">
            <Search size={18} />
            <input
              type="text"
              placeholder={t.materials.searchPlaceholder}
              aria-label="Buscar materiais"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="category-filters" data-reveal="up" style={revealStyle(100)}>
            {Object.entries(t.materials.categories).map(([value, label]) => (
              <button
                key={`${value}-${language}`}
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
              <p>{t.materials.empty}</p>
            </div>
          ) : (
            <div className="library-grid">
              {filteredMaterials.map((material, index) => (
                <LibraryCard 
                  key={`${material.id}-${language}`}
                  material={material} 
                  delay={index * 90} 
                  onClick={setActiveMaterial}
                  detailsLabel={t.materials.details}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {activeMaterial && (
        <div className="modal-overlay" onClick={() => setActiveMaterial(null)} key={`modal-${language}`}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-mobile">
              <button className="modal-close" onClick={() => setActiveMaterial(null)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={activeMaterial.image} alt={activeMaterial.title} />
              </div>
              <div className="modal-info">
                <span className="library-item__category">
                  {t.materials.categories[activeMaterial.category]}
                </span>
                <h2>{activeMaterial.title}</h2>
                <div className="modal-badge">{activeMaterial.badge}</div>
                <p>{activeMaterial.description}</p>
                {activeMaterial.cta && (
                  <a 
                    href={
                      activeMaterial.id === 1 
                        ? "https://pay.hotmart.com/Y105805722H?bid=1778884940218"
                        : activeMaterial.id === 2
                        ? "https://pay.hotmart.com/U105700615K?bid=1778885032496"
                        : "https://pay.hotmart.com/E105805825R?bid=1778884992332"
                    }
                    target="_blank" 
                    rel="noreferrer"
                    className="button-link button-link--pulse"
                    style={{ marginTop: '20px' }}
                  >
                    <span>{activeMaterial.cta}</span>
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
