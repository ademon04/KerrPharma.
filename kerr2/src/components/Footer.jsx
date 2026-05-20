/* ─── FOOTER ─────────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <>
      <style>{`
        footer {
          background: var(--c-ink); color: rgba(255,255,255,0.4);
          padding: 48px 0;
        }
        .footer-inner {
          display: flex; justify-content: space-between;
          align-items: center; flex-wrap: wrap; gap: 24px;
        }
        .footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem; font-weight: 400; color: #fff;
          letter-spacing: 0.06em;
        }
        .footer-logo span {
          font-family: 'DM Mono', monospace;
          font-size: 0.55rem; color: var(--c-gold);
          letter-spacing: 0.18em; margin-left: 6px;
        }
        .footer-links {
          display: flex; gap: 28px; list-style: none;
          font-size: 0.72rem; letter-spacing: 0.08em;
        }
        .footer-links a {
          color: rgba(255,255,255,0.4); text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: #fff; }
        .footer-copy { font-size: 0.7rem; }
      `}</style>
      <footer>
        <div className="container footer-inner">
          <div className="footer-logo">
            Kërr<span>PHARMA · BASILEA · EST. 2013</span>
          </div>
          <ul className="footer-links">
            {["Privacidad", "Términos", "Farmacovigilancia", "Certificaciones"].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
          <p className="footer-copy">© 2026 Kërr Pharma AG. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
