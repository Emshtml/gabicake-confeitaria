import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff7fa", minHeight: "100vh", margin: 0, padding: 0 }}>
      <header style={{ background: "#ff80aa", color: "#fff", padding: "20px", textAlign: "center" }}>
        <h1>🍰 GabiCake Confeitaria</h1>
        <p>Os melhores bolos e doces artesanais!</p>
      </header>

      <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Nossos Produtos</h2>

        {/* Exemplo de cards de produtos */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>

      <Footer />
    </div>
  );
}
