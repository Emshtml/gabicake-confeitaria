import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "transform 0.3s",
      cursor: "pointer"
    }}>
      {product.isImage && (
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <Image src={product.url} alt={product.name} fill style={{ objectFit: "cover" }} />
        </div>
      )}
      <div style={{ padding: "1rem" }}>
        <h2 style={{ fontSize: "1.1rem", margin: "0 0 0.4rem" }}>{product.name}</h2>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>{product.size} • {product.date}</p>
        <p style={{ margin: "0.3rem 0 0", fontSize: "0.8rem", color: "#ff7ba9" }}>Categoria: {product.category}</p>
      </div>
    </div>
  );
}
