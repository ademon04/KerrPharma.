/* ─── WHY KËRR ───────────────────────────────────────────────────────── */
import { useEffect, useRef, useState } from "react"
import useReveal from "../hooks/useReveal"

export default function WhyKerr() {
  const ref = useReveal();
  const differentiators = [
    { icon: "⬡", title: "Origen suizo certificado", desc: "Fabricado bajo normativa GMP europea (EudraLex Vol. 4) en Basilea. Trazabilidad completa desde el ingrediente activo hasta el blister." },
    { icon: "⬡", title: "Sin excipientes innecesarios", desc: "Fórmulas limpias. Sin dióxido de titanio, colorantes artificiales ni aglomerantes derivados de OGM. Lo que no suma, no entra." },
    { icon: "⬡", title: "Dosificación basada en evidencia", desc: "Cada concentración responde a un estudio clínico. Publicamos las referencias científicas de base en nuestro material técnico." },
    { icon: "⬡", title: "Seguimiento post-venta clínico", desc: "Nuestro equipo de farmacéuticos responde consultas técnicas de prescriptores y pacientes. No vendemos; acompañamos." },
    { icon: "⬡", title: "Packaging farmacéutico de bajo impacto", desc: "Envases de vidrio ámbar reciclado. Insertos en papel certificado FSC. La coherencia de marca incluye nuestra responsabilidad ambiental." },
    { icon: "⬡", title: "Disponible con receta médica y sin ella", desc: "Clasificación como suplemento alimenticio con notificación sanitaria activa en México, Chile, Colombia y España." },
  ];

  return (
    <>
      <style>{`
        .why { padding: 120px 0; background: var(--c-surface); }
        .why-grid {
          display: grid; grid-template-columns: 380px 1fr;
          gap: 100px; align-items: start;
        }
        .why-sticky { position: sticky; top: 100px; }
        .why-features {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .why-item {
          padding: 32px 28px;
          border-bottom: 1px solid var(--c-border);
          border-right: 1px solid var(--c-border);
          transition: background var(--transition);
        }
        .why-item:hover { background: var(--c-bg); }
        .why-item:nth-child(even) { border-right: none; }
        .why-item:nth-last-child(-n+2) { border-bottom: none; }
        .why-icon {
          font-size: 1rem; color: var(--c-gold);
          margin-bottom: 14px; display: block;
        }
        .why-item-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; font-weight: 400;
          color: var(--c-ink); margin-bottom: 8px;
        }
        .why-item-desc { font-size: 0.78rem; color: var(--c-ink-muted); line-height: 1.65; }
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr; gap: 48px; }
          .why-sticky { position: static; }
          .why-features { grid-template-columns: 1fr; }
          .why-item { border-right: none !important; }
          .why-item:nth-last-child(1) { border-bottom: 1px solid var(--c-border); }
        }
      `}</style>
      <section className="why" id="ciencia">
        <div className="container">
          <div className="why-grid reveal" ref={ref}>
            <div className="why-sticky">
              <p className="section-label">¿Por qué Kërr?</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>
                No toda suplementación es igual
              </h2>
              <p style={{ color: "var(--c-ink-muted)", fontSize: "0.9rem", lineHeight: "1.75" }}>
                En un mercado saturado de promesas, Kërr Pharma elige la transparencia clínica y el rigor suizo como diferenciadores. Estas son las razones concretas por las que médicos especialistas y pacientes exigentes nos eligen.
              </p>
            </div>
            <div className="why-features" style={{ border: "1px solid var(--c-border)" }}>
              {differentiators.map((d) => (
                <div className="why-item" key={d.title}>
                  <span className="why-icon">{d.icon}</span>
                  <div className="why-item-title">{d.title}</div>
                  <div className="why-item-desc">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
