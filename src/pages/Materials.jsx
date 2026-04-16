import { ArrowLeft, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

const materialsData = [
  {
    id: 1,
    title: "Material Exemplo 1",
    description: "Descrição do material de exemplo",
    price: "R$ 97,00",
    image: "/assets/Group-1.png",
    category: "basico"
  },
  {
    id: 2,
    title: "Material Exemplo 2",
    description: "Descrição do material de exemplo",
    price: "R$ 147,00",
    image: "/assets/Group-3.png",
    category: "intermediario"
  },
  {
    id: 3,
    title: "Material Exemplo 3",
    description: "Descrição do material de exemplo",
    price: "R$ 197,00",
    image: "/assets/Group-4.png",
    category: "avancado"
  }
];

export default function Materials({ onBack }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const filteredMaterials = materialsData.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todos" || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="materials-page">
      <header className="materials-header">
        <div className="container">
          <button className="back-button" onClick={onBack}>
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          <h1>Biblioteca de Materiais</h1>
          <p>Explore nossos materiais exclusivos para aprender inglês</p>
        </div>
      </header>

      <div className="materials-filters">
        <div className="container">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Buscar materiais..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filters">
            <button
              className={selectedCategory === "todos" ? "active" : ""}
              onClick={() => setSelectedCategory("todos")}
            >
              Todos
            </button>
            <button
              className={selectedCategory === "basico" ? "active" : ""}
              onClick={() => setSelectedCategory("basico")}
            >
              Básico
            </button>
            <button
              className={selectedCategory === "intermediario" ? "active" : ""}
              onClick={() => setSelectedCategory("intermediario")}
            >
              Intermediário
            </button>
            <button
              className={selectedCategory === "avancado" ? "active" : ""}
              onClick={() => setSelectedCategory("avancado")}
            >
              Avançado
            </button>
          </div>
        </div>
      </div>

      <div className="materials-grid-section">
        <div className="container">
          {filteredMaterials.length === 0 ? (
            <div className="empty-state">
              <p>Nenhum material encontrado</p>
            </div>
          ) : (
            <div className="materials-grid">
              {filteredMaterials.map((material) => (
                <article key={material.id} className="material-card">
                  <div className="material-card__image">
                    <img src={material.image} alt={material.title} />
                  </div>
                  <div className="material-card__content">
                    <span className="material-card__category">{material.category}</span>
                    <h3>{material.title}</h3>
                    <p>{material.description}</p>
                    <div className="material-card__footer">
                      <strong className="material-card__price">{material.price}</strong>
                      <button className="material-card__button">
                        <ShoppingCart size={16} />
                        Adicionar
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
