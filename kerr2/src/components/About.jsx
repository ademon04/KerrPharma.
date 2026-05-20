/* ─── ABOUT ──────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from "react"
import useReveal from "../hooks/useReveal"

export default function About() {
  const ref = useReveal();
  return (
    <>
      <style>{`
        .about {
          padding: 120px 0;
          background: var(--c-slate);
          color: #fff;
          position: relative; overflow: hidden;
        }
        .about::after {
          content: 'KËRR';
          position: absolute; right: -20px; top: 50%;
          transform: translateY(-50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(8rem, 18vw, 18rem);
          font-weight: 600; letter-spacing: -0.04em;
          color: rgba(255,255,255,0.03);
          pointer-events: none; user-select: none;
          line-height: 1;
        }
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start;
        }
        .about-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem; letter-spacing: 0.22em;
          color: var(--c-gold); text-transform: uppercase;
          margin-bottom: 24px;
          display: flex; align-items: center; gap: 10px;
        }
        .about-label::before { content: ''; width: 28px; height: 1px; background: var(--c-gold); }
        .about-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          font-weight: 300; line-height: 1.15;
          color: #fff; margin-bottom: 24px;
        }
        .about-lead {
          color: rgba(255,255,255,0.6); line-height: 1.8;
          font-size: 0.95rem; font-weight: 300;
        }
        .about-values { display: flex; flex-direction: column; gap: 0; }
        .about-value {
          padding: 28px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: grid; grid-template-columns: 48px 1fr; gap: 20px;
          align-items: start;
        }
        .about-value:first-child { border-top: 1px solid rgba(255,255,255,0.08); }
        .value-num {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem; color: var(--c-gold); margin-top: 4px;
        }
        .value-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem; font-weight: 400; color: #fff;
          margin-bottom: 6px;
        }
        .value-desc { font-size: 0.82rem; color: rgba(255,255,255,0.5); line-height: 1.6; }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
      <section className="about" id="nosotros">
        <div className="container">
          <div className="about-grid reveal" ref={ref}>
            <div>
              <p className="about-label">Sobre Kërr Pharma</p>
              <h2 className="about-headline">
                Fundada en la precisión.<br />Guiada por la ciencia.
              </h2>
              <p className="about-lead">
                Desde 2013, Kërr Pharma desarrolla suplementos de alta pureza desde Basilea, Suiza, para pacientes con condiciones hepáticas y renales crónicas. Nuestro equipo de investigadores y médicos especialistas trabaja bajo los más estrictos estándares farmacéuticos europeos, con un solo objetivo: que cada cápsula sea un acto de cuidado medible.
              </p>
              <p className="about-lead" style={{ marginTop: "16px" }}>
                No hacemos suplementos genéricos. Hacemos formulaciones específicas, respaldadas por evidencia clínica, diseñadas para personas reales con necesidades concretas.
              </p>
            </div>
            <div className="about-values">
              {[
                { n: "01", t: "Rigor científico", d: "Cada fórmula pasa por validación clínica interna antes de salir al mercado. Sin atajos, sin compromiso." },
                { n: "02", t: "Transparencia total", d: "Ingredientes declarados, dosificaciones exactas. Lo que dice la etiqueta es lo que contiene el producto." },
                { n: "03", t: "Diseño con propósito", d: "La estética suiza no es decoración: refleja la precisión que aplicamos en cada paso del proceso de fabricación." },
                { n: "04", t: "Enfoque en el paciente", d: "Nos especializamos en quien más lo necesita: adultos mayores y personas con condiciones crónicas de órgano." },
              ].map((v) => (
                <div className="about-value" key={v.n}>
                  <span className="value-num">{v.n}</span>
                  <div>
                    <div className="value-title">{v.t}</div>
                    <div className="value-desc">{v.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}