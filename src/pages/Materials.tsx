import { ArrowLeft, ExternalLink, Search } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
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
  buyLink: string;
  price: string;
  buyLabel?: string;
};

type MaterialsProps = {
  onBack: () => void;
};

const contactLink = "https://www.instagram.com/_easyenglishnow/";

const materialsData: MaterialCardData[] = [
  {
    id: 1,
    title: "Beginner Student 2025",
    description:
      "English Course for Beginners with clear explanations and practical exercises.",
    image: "/capas/materials/beginner.png",
    category: "basico",
    badge: "Beginner",
    buyLink: "https://go.hotmart.com/Y105913159L",
    price: "€21,20",
  },
  {
    id: 2,
    title: "Intermediate Student 2025",
    description:
      "Intermediate English practice to expand confidence, fluency, and communication.",
    image: "/capas/materials/intermediate.png",
    category: "intermediario",
    badge: "Intermediate",
    buyLink: "https://pay.hotmart.com/L105913357U",
    price: "€21,20",
  },
  {
    id: 3,
    title: "Basic Grammar",
    description:
      "English Version with essential grammar, examples, and guided practice.",
    image: "/capas/materials/basic-grammar.png",
    category: "basico",
    badge: "Grammar",
    buyLink: "https://go.hotmart.com/N105913298R?dp=1",
    price: "€21,20",
  },
  {
    id: 4,
    title: "Sing & Learn",
    description:
      "10 intensive English lessons through music, pronunciation, and real lyrics.",
    image: "/capas/materials/sing-learn.png",
    category: "intermediario",
    badge: "Music",
    buyLink: contactLink,
    price: "Sob consulta",
    buyLabel: "Ask for access",
  },
  {
    id: 5,
    title: "100 Phrasal Verbs",
    description:
      "A practical English book with essential phrasal verbs for everyday situations.",
    image: "/capas/materials/100-phrasal-verbs.png",
    category: "intermediario",
    badge: "Vocabulary",
    buyLink: "https://go.hotmart.com/Q105913270T?dp=1",
    price: "€21,20",
  },
  {
    id: 6,
    title: "Made Easy",
    description:
      "A simple student book for building your English base with confidence.",
    image: "/capas/materials/easy-book.png",
    category: "basico",
    badge: "Easy Book",
    buyLink: "https://pay.hotmart.com/Y105805722H?bid=1778884940218",
    price: "€23,85",
  },
  {
    id: 7,
    title: "Business",
    description:
      "Business English for professional vocabulary, meetings, and workplace routines.",
    image: "/capas/materials/business.png",
    category: "avancado",
    badge: "Business",
    buyLink: "https://pay.hotmart.com/E105805825R?bid=1778884992332",
    price: "€21,09",
  },
  {
    id: 8,
    title: "Travel",
    description:
      "Travel English for airports, hotels, restaurants, and safer trips abroad.",
    image: "/capas/materials/travel.png",
    category: "intermediario",
    badge: "Travel",
    buyLink: "https://pay.hotmart.com/U105700615K?bid=1778885032496",
    price: "€17,86",
  },
];

function revealStyle(delay = 0): CSSProperties {
  return { "--reveal-delay": `${delay}ms` };
}

type LibraryCardProps = {
  material: MaterialCardData;
  delay?: number;
};

function LibraryCard({ material, delay = 0 }: LibraryCardProps) {
  return (
    <article
      className="library-item"
      data-reveal="up"
      style={revealStyle(delay)}
    >
      <a
        className="library-item__cover"
        href={material.buyLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={material.image}
          alt={`${material.title} cover`}
          loading="lazy"
        />
        <span className="library-item__badge">{material.badge}</span>
      </a>
      <div className="library-item__body">
        <h3 className="library-item__title">{material.title}</h3>
        <p>{material.description}</p>
        <div
          className="library-item__price"
          aria-label={`Price: ${material.price}`}
        >
          {material.price}
        </div>
        <a
          className="library-item__button"
          href={material.buyLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`${material.buyLabel ?? "Buy now"}: ${material.title}`}
        >
          <span>{material.buyLabel ?? "Buy now"}</span>
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Materials({ onBack }: MaterialsProps) {
  const { t, language } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<MaterialCategory>("todos");

  useScrollReveal([language, selectedCategory, searchTerm]);

  useEffect(() => {
    setSearchTerm("");
    setSelectedCategory("todos");
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
          onMouseEnter={(event) =>
            (event.currentTarget.style.transform = "translateX(-4px)")
          }
          onMouseLeave={(event) =>
            (event.currentTarget.style.transform = "translateX(0)")
          }
        >
          <ArrowLeft size={20} />
          {t.materials.back}
        </button>
      </div>

      <header className="materials-header">
        <div className="container">
          <span className="materials-header__eyebrow" data-reveal="up">
            English materials
          </span>
          <h1 data-reveal="up" style={revealStyle(80)}>
            Easy Languages
          </h1>
          <p data-reveal="up" style={revealStyle(160)}>
            Learn English at your own pace with practical books for every level.
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

          <div
            className="category-filters"
            data-reveal="up"
            style={revealStyle(100)}
          >
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
                  delay={index * 70}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
