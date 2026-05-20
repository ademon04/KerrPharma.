import useReveal from "../hooks/useReveal"
 
const PRODUCTS = [
  {
    code: "KP-01",
    name: "Hepatra·K",
    line: "Línea Hepática",
    tagline: "Regeneración y protección del tejido hepático",
    desc: "Complejo de silimarina micronizada, colina bitartrato y vitamina E d-alfa-tocoferol. Indicado para cirrosis hepática compensada, hepatitis crónica y daño por fármacos.",
    specs: [["Silimarina", "280 mg"], ["Colina", "150 mg"], ["Vit. E", "30 UI"], ["Cáps.", "60 / 30 días"]],
    accent: "#B8973A",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop",
  },
  {
    code: "KP-02",
    name: "Nephralin·K",
    line: "Línea Renal",
    tagline: "Soporte metabólico en insuficiencia renal crónica",
    desc: "Formulado con ketoácidos esenciales, vitamina B6 activa (P-5-P) y calcio citrato. Reduce la carga nitrogenada y preserva la función residual del riñón.",
    specs: [["Ketoácidos", "600 mg"], ["P-5-P", "50 mg"], ["Ca Citrato", "120 mg"], ["Cáps.", "90 / 45 días"]],
    accent: "#2B3A52",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80&fit=crop",
  },
  {
    code: "KP-03",
    name: "Vitalplex·Senior",
    line: "Línea 60+",
    tagline: "Micronutrientes ajustados para el metabolismo adulto mayor",
    desc: "Multivitamínico con dosis adaptadas al perfil de absorción de adultos sobre 60 años. Sin hierro añadido. Con metilfolato, B12 metilcobalamina y vitamina K2-MK7.",
    specs: [["Metilfolato", "400 mcg"], ["B12", "500 mcg"], ["K2-MK7", "90 mcg"], ["Tabs.", "60 / 60 días"]],
    accent: "#5A7A6A",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&q=80&fit=crop",
  },
];
 
export default function Products() {
  const ref = useReveal();
  return (
    <>
      <style>{`
        .products { padding: 120px 0; background: var(--c-bg); }
        .section-header {
          display: flex; justify-content: space-between;
          align-items: flex-end; margin-bottom: 64px;
          flex-wrap: wrap; gap: 24px;
        }
        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem; letter-spacing: 0.22em;
          color: var(--c-gold); text-transform: uppercase;
          margin-bottom: 16px;
          display: flex; align-items: center; gap: 10px;
        }
        .section-label::before { content: ''; width: 28px; height: 1px; background: var(--c-gold); }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 300; color: var(--c-ink); line-height: 1.15;
        }
        .products-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .product-card {
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          border-radius: 4px;
          overflow: hidden;
          transition: box-shadow var(--transition), transform var(--transition);
        }
        .product-card:hover {
          box-shadow: 0 24px 60px rgba(26,28,34,0.1);
          transform: translateY(-4px);
        }
        .product-card-top {
          height: 220px;
          display: flex; flex-direction: column;
          justify-content: flex-end; padding: 28px;
          position: relative; overflow: hidden;
        }
        .product-card-top img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .product-card:hover .product-card-top img {
          transform: scale(1.05);
        }
        .product-card-top-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(26,28,34,0.3) 0%, rgba(26,28,34,0.75) 100%);
        }
        .product-card-top-content {
          position: relative; z-index: 1;
        }
        .product-code {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.2em;
          color: rgba(255,255,255,0.5); margin-bottom: 8px;
        }
        .product-name-card {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem; font-weight: 400; color: #fff;
          line-height: 1; margin-bottom: 4px;
        }
        .product-tagline { font-size: 0.72rem; color: rgba(255,255,255,0.7); line-height: 1.4; }
        .product-card-body { padding: 28px; }
        .product-line-tag {
          display: inline-block;
          font-size: 0.6rem; letter-spacing: 0.14em; text-transform: uppercase;
          font-family: 'DM Mono', monospace;
          padding: 4px 10px; border-radius: 20px;
          margin-bottom: 16px;
        }
        .product-desc {
          font-size: 0.82rem; color: var(--c-ink-muted);
          line-height: 1.7; margin-bottom: 24px;
        }
        .product-specs {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0; border-top: 1px solid var(--c-border);
        }
        .spec-item {
          padding: 12px 0; display: flex; flex-direction: column; gap: 2px;
          border-bottom: 1px solid var(--c-border);
        }
        .spec-item:nth-child(odd) { padding-right: 16px; border-right: 1px solid var(--c-border); }
        .spec-item:nth-child(even) { padding-left: 16px; }
        .spec-key { font-size: 0.65rem; color: var(--c-ink-faint); letter-spacing: 0.08em; }
        .spec-val { font-size: 0.8rem; color: var(--c-ink); font-weight: 500; }
        @media (max-width: 900px) {
          .products-grid { grid-template-columns: 1fr; max-width: 460px; }
        }
      `}</style>
      <section className="products" id="productos">
        <div className="container">
          <div className="section-header reveal" ref={ref}>
            <div>
              <p className="section-label">Nuestras formulaciones</p>
              <h2 className="section-title">Tres líneas.<br />Un estándar.</h2>
            </div>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.code} product={p} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
 
function ProductCard({ product: p, delay }) {
  const ref = useReveal();
  return (
    <div className="product-card reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="product-card-top">
        <img src={p.image} alt={p.name} loading="lazy" />
        <div className="product-card-top-overlay" style={{
          background: `linear-gradient(160deg, ${p.accent}99 0%, rgba(26,28,34,0.85) 100%)`
        }} />
        <div className="product-card-top-content">
          <span className="product-code">{p.code}</span>
          <div className="product-name-card">{p.name}</div>
          <div className="product-tagline">{p.tagline}</div>
        </div>
      </div>
      <div className="product-card-body">
        <span className="product-line-tag" style={{
          background: `${p.accent}15`, color: p.accent,
          border: `1px solid ${p.accent}30`
        }}>{p.line}</span>
        <p className="product-desc">{p.desc}</p>
        <div className="product-specs">
          {p.specs.map(([k, v]) => (
            <div className="spec-item" key={k}>
              <span className="spec-key">{k}</span>
              <span className="spec-val">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}