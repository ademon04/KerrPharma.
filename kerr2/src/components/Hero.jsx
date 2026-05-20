/* ─── HERO ───────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center;
          padding-top: 72px;
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 75% 50%, rgba(43,58,82,0.06) 0%, transparent 70%),
            repeating-linear-gradient(0deg, transparent, transparent 79px, var(--c-border) 80px),
            repeating-linear-gradient(90deg, transparent, transparent 79px, var(--c-border) 80px);
          background-size: 100% 100%, 80px 80px, 80px 80px;
          pointer-events: none;
        }
        .hero-content { padding: 80px 0 80px 0; position: relative; }
        .hero-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.2em;
          color: var(--c-gold); text-transform: uppercase;
          margin-bottom: 28px;
          display: flex; align-items: center; gap: 12px;
        }
        .hero-eyebrow::before {
          content: ''; display: block;
          width: 32px; height: 1px; background: var(--c-gold);
        }
        .hero-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 5.5vw, 5.2rem);
          font-weight: 300; line-height: 1.08;
          color: var(--c-ink); margin-bottom: 28px;
          letter-spacing: -0.01em;
        }
        .hero-headline em {
          font-style: italic; color: var(--c-slate);
        }
        .hero-sub {
          color: var(--c-ink-muted); font-size: 1rem;
          max-width: 420px; line-height: 1.7;
          margin-bottom: 44px; font-weight: 300;
        }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
        .btn-primary {
          background: var(--c-slate); color: #fff;
          padding: 14px 32px; border: none; border-radius: var(--radius);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase;
          cursor: pointer; transition: background var(--transition);
          text-decoration: none;
        }
        .btn-primary:hover { background: var(--c-slate-light); }
        .btn-ghost {
          background: none; color: var(--c-ink);
          padding: 14px 24px; border: 1px solid var(--c-border-strong);
          border-radius: var(--radius);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; transition: border-color var(--transition), color var(--transition);
          text-decoration: none;
        }
        .btn-ghost:hover { border-color: var(--c-slate); color: var(--c-slate); }
        .hero-visual {
          position: relative; display: flex; justify-content: center; align-items: center;
          height: 100%;
        }
        .hero-card {
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          border-radius: 4px;
          padding: 48px 40px;
          width: 340px;
          box-shadow: 0 32px 80px rgba(26,28,34,0.08), 0 4px 12px rgba(26,28,34,0.04);
          position: relative;
        }
        .hero-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--c-gold), var(--c-slate));
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(184,151,58,0.08); border: 1px solid rgba(184,151,58,0.2);
          padding: 6px 12px; border-radius: 20px; margin-bottom: 28px;
          font-size: 0.65rem; color: var(--c-gold); letter-spacing: 0.1em;
          font-family: 'DM Mono', monospace; text-transform: uppercase;
        }
        .hero-badge::before { content: '●'; font-size: 0.5rem; }
        .product-mini-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 400; margin-bottom: 8px;
          color: var(--c-ink);
        }
        .product-mini-desc {
          font-size: 0.8rem; color: var(--c-ink-muted); line-height: 1.6;
          margin-bottom: 24px;
        }
        .product-mini-detail {
          display: flex; flex-direction: column; gap: 8px;
          border-top: 1px solid var(--c-border); padding-top: 20px;
        }
        .mini-row {
          display: flex; justify-content: space-between;
          font-size: 0.72rem; color: var(--c-ink-muted);
        }
        .mini-row strong { color: var(--c-ink); font-weight: 500; }
        .hero-stats {
          display: flex; gap: 40px; margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid var(--c-border);
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem; font-weight: 300;
          color: var(--c-slate); line-height: 1;
        }
        .stat-label { font-size: 0.72rem; color: var(--c-ink-muted); margin-top: 4px; }
        @media (max-width: 960px) {
          .hero { grid-template-columns: 1fr; min-height: auto; padding: 120px 0 60px; }
          .hero-visual { margin-top: 40px; justify-content: flex-start; }
          .hero-card { width: 100%; max-width: 380px; }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
        .hero-content > * { animation: heroFadeUp 0.8s ease both; }
        .hero-content > *:nth-child(1) { animation-delay: 0.1s; }
        .hero-content > *:nth-child(2) { animation-delay: 0.25s; }
        .hero-content > *:nth-child(3) { animation-delay: 0.4s; }
        .hero-content > *:nth-child(4) { animation-delay: 0.55s; }
        .hero-content > *:nth-child(5) { animation-delay: 0.7s; }
        .hero-visual { animation: heroFadeUp 1s ease 0.5s both; }
      `}</style>
      <section className="hero" id="home">
        <div className="container" style={{ display: "contents" }}>
          <div style={{ padding: "0 32px" }}>
            <div className="hero-content">
              <p className="hero-eyebrow">Suplementos clínicos · Origen Suizo</p>
              <h1 className="hero-headline">
                Ciencia que<br />
                <em>cuida con</em><br />
                precisión
              </h1>
              <p className="hero-sub">
                Formulaciones de alto estándar para el bienestar hepático y renal. Más de una década acompañando a quienes más lo necesitan.
              </p>
              <div className="hero-actions">
                <a href="#productos" className="btn-primary">Ver productos</a>
                <a href="#nosotros" className="btn-ghost">Nuestra historia</a>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="stat-num">10+</div>
                  <div className="stat-label">años en el mercado</div>
                </div>
                <div>
                  <div className="stat-num">3</div>
                  <div className="stat-label">líneas especializadas</div>
                </div>
                <div>
                  <div className="stat-num">CH</div>
                  <div className="stat-label">certificación suiza</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual" style={{ padding: "80px 32px" }}>
            <div className="hero-card">
              <div className="hero-badge">Producto destacado</div>
              <div className="product-mini-name">Hepatra·K</div>
              <p className="product-mini-desc">
                Complejo hepatoprotector con silimarina, colina y vitamina E. Formulado para adultos con condiciones hepáticas crónicas.
              </p>
              <div className="product-mini-detail">
                <div className="mini-row"><span>Presentación</span><strong>60 cápsulas</strong></div>
                <div className="mini-row"><span>Dosis diaria</span><strong>2 cápsulas</strong></div>
                <div className="mini-row"><span>Origen</span><strong>Basilea, Suiza</strong></div>
                <div className="mini-row"><span>Certificación</span><strong>ISO 22000 · GMP</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}