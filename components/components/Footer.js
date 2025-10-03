export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#ff7ba9",
      color: "#fff",
      textAlign: "center",
      padding: "1rem",
      marginTop: "2rem",
      fontSize: "0.9rem"
    }}>
      © {new Date().getFullYear()} Gabicake Confeitaria. Todos os direitos reservados 🍰
    </footer>
  );
}
