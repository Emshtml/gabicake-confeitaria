import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      backgroundColor: "#ff7ba9",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ margin: 0, fontSize: "1.6rem", fontWeight: "bold" }}>🍰 Gabicake Confeitaria</h1>
      <nav>
        <Link href="/" style={{ margin: "0 1rem", textDecoration: "none", color: "#fff" }}>Home</Link>
        <Link href="/" style={{ margin: "0 1rem", textDecoration: "none", color: "#fff" }}>Catálogo</Link>
      </nav>
    </header>
  );
}
