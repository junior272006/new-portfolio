import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} — Junior N'Guetta — <span className="footer__tag">// Learning Today, Protecting Tomorrow</span>
      </p>
    </footer>
  );
}