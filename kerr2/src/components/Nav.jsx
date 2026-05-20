import { useEffect, useState } from "react"
 
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const links = ["Nosotros", "Productos", "Ciencia", "Contacto"];
 
  return (
    <>
      <style>{`
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background var(--transition), border-color var(--transition), backdrop-filter var(--transition);
          border-bottom: 1px solid transparent;
        }
        nav.scrolled {
          background: rgba(245,243,239,0.92);
          backdrop-filter: blur(12px);
          border-color: var(--c-border);
        }
        .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 72px;
        }
        .nav-logo {
          display: flex; align-items: baseline; gap: 6px;
          text-decoration: none; color: var(--c-ink);
        }
        .nav-logo-word {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem; font-weight: 600; letter-spacing: 0.04em;
        }
        .nav-logo-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.14em; color: var(--c-gold);
          text-transform: uppercase; padding-bottom: 2px;
        }
        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links a {
          text-decoration: none; color: var(--c-ink-muted);
          font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
          font-weight: 400; transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--c-ink); }
        .nav-cta {
          background: var(--c-slate); color: #fff !important;
          padding: 8px 20px; border-radius: var(--radius);
          font-size: 0.75rem !important; letter-spacing: 0.12em !important;
        }
        .nav-cta:hover { background: var(--c-slate-light); color: #fff !important; }
        .hamburger {
          display: none; background: none; border: none;
          cursor: pointer; flex-direction: column; gap: 5px;
        }
        .hamburger span {
          display: block; width: 24px; height: 1.5px;
          background: var(--c-ink); transition: all 0.3s;
        }
        .mobile-menu { display: none; }
        @media (max-width: 768px) {
          .nav-links-wrap { display: none; }
          .hamburger { display: flex; }
          .mobile-menu {
            display: flex;
            position: fixed; top: 72px; left: 0; right: 0; bottom: 0;
            background: var(--c-bg); z-index: 99;
            flex-direction: column; align-items: center; justify-content: center;
            gap: 32px; list-style: none;
            transform: translateX(100%); transition: transform var(--transition);
          }
          .mobile-menu.open { transform: none; }
          .mobile-menu a {
            text-decoration: none; color: var(--c-ink);
            font-family: 'Cormorant Garamond', serif;
            font-size: 2rem; font-weight: 300; letter-spacing: 0.06em;
          }
        }
      `}</style>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <span className="nav-logo-word">Kërr</span>
            <span className="nav-logo-tag">Pharma</span>
          </a>
          <div className="nav-links-wrap">
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className={l === "Contacto" ? "nav-cta" : ""}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            <span style={menuOpen ? { transform: "rotate(45deg) translate(4px, 4px)" } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: "rotate(-45deg) translate(4px, -4px)" } : {}} />
          </button>
        </div>
      </nav>
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
          </li>
        ))}
      </ul>
    </>
  );
}