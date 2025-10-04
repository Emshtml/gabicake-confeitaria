import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export async function getStaticProps() {
  // ✅ Importa fs e path apenas no servidor
  const fs = await import("fs");
  const path = await import("path");

  const assetsDir = path.join(process.cwd(), "public/assets");
  let files = [];

  try {
    files = fs.readdirSync(assetsDir).map((file) => {
      const filePath = path.join(assetsDir, file);
      const stats = fs.statSync(filePath);
      const ext = path.extname(file).toLowerCase();
      const isImage = [".png", ".jpg", ".jpeg", ".webp", ".gif"].includes(ext);

      let category = "Outros";
      if (file.toLowerCase().includes("bolo")) category = "Bolos";
      else if (file.toLowerCase().includes("doce")) category = "Doces";
      else if (file.toLowerCase().includes("sobremesa")) category = "Sobremesas";

      return {
        name: file,
        size: (stats.size / 1024).toFixed(2) + " KB",
        date: stats.mtime.toLocaleDateString(),
        isImage,
        url: `/assets/${file}`,
        category,
      };
    });
  } catch (error) {
    console.error("❌ Erro ao ler /public/assets:", error);
  }

  return { props: { files } };
}

export default function Home({ files }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", "Bolos", "Doces", "Sobremesas", "Outros"];

  const filteredFiles = files.filter(
    (file) =>
      (filter === "Todos" || file.category === filter) &&
      file.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#fff7fa", minHeight: "100vh" }}>
      <Header />
      <main
        style={{
          maxWidth: "1200px",
          margin: "2rem auto",
          padding: "1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#ff7ba9",
            padding: "2rem",
            textAlign: "center",
            color: "#fff",
            borderRadius: "12px",
            marginBottom: "2rem",
          }}
        >
          <h1 style={{ fontSize: "2.2rem", margin: 0 }}>
            Bem-vindo à GabiCake Confeitaria 🍰
          </h1>
          <p style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>
            Delícias irresistíveis feitas com amor 💖
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5rem",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
              width: "220px",
            }}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filteredFiles.map((file) => (
            <ProductCard key={file.name} product={file} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
 
