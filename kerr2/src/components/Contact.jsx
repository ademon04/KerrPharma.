/* ─── CONTACT ────────────────────────────────────────────────────────── */
import { useEffect, useRef, useState } from "react"
import useReveal from "../hooks/useReveal"

export default function Contact() {
  const ref = useReveal();
  return (
    <>
      <style>{`
        .contact { padding: 120px 0; background: var(--c-bg); }
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start;
        }
        .contact-form-wrap {
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          border-radius: 4px; padding: 48px;
        }
        .form-group { margin-bottom: 24px; }
        .form-label {
          display: block; margin-bottom: 8px;
          font-size: 0.7rem; letter-spacing: 0.12em;
          color: var(--c-ink-muted); text-transform: uppercase;
          font-weight: 400;
        }
        .form-input, .form-textarea, .form-select {
          width: 100%; padding: 12px 16px;
          background: var(--c-bg); border: 1px solid var(--c-border);
          border-radius: var(--radius); color: var(--c-ink);
          font-family: 'DM Sans', sans-serif; font-size: 0.88rem;
          transition: border-color var(--transition);
          outline: none;
        }
        .form-input:focus, .form-textarea:focus, .form-select:focus {
          border-color: var(--c-slate);
        }
        .form-textarea { height: 120px; resize: vertical; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .contact-info { padding-top: 8px; }
        .contact-info-item {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 24px 0; border-bottom: 1px solid var(--c-border);
        }
        .contact-info-item:first-child { border-top: 1px solid var(--c-border); }
        .contact-info-icon {
          width: 36px; height: 36px; border-radius: 50%;
          background: var(--c-slate); color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.8rem; flex-shrink: 0;
        }
        .contact-info-label {
          font-size: 0.65rem; color: var(--c-ink-faint);
          letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px;
        }
        .contact-info-val { font-size: 0.88rem; color: var(--c-ink); }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
          .contact-form-wrap { padding: 28px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
      <section className="contact" id="contacto">
        <div className="container">
          <div style={{ marginBottom: "56px" }} className="reveal" ref={ref}>
            <p className="section-label">Contacto</p>
            <h2 className="section-title">Hablemos</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-form-wrap">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nombre</label>
                  <input className="form-input" type="text" placeholder="Dr. García" />
                </div>
                <div className="form-group">
                  <label className="form-label">Especialidad</label>
                  <input className="form-input" type="text" placeholder="Hepatología" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Correo electrónico</label>
                <input className="form-input" type="email" placeholder="contacto@clinica.mx" />
              </div>
              <div className="form-group">
                <label className="form-label">Motivo de contacto</label>
                <select className="form-select">
                  <option>Información sobre productos</option>
                  <option>Solicitud de muestras médicas</option>
                  <option>Distribución y mayoreo</option>
                  <option>Soporte técnico / farmacovigilancia</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Mensaje</label>
                <textarea className="form-textarea" placeholder="Cuéntenos cómo podemos ayudarle…" />
              </div>
              <button className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
                Enviar consulta
              </button>
            </div>
            <div className="contact-info">
              <p style={{ color: "var(--c-ink-muted)", fontSize: "0.9rem", lineHeight: "1.75", marginBottom: "32px" }}>
                Atendemos consultas de profesionales de la salud, distribuidores y pacientes. Nuestro equipo de farmacéuticos responde en un plazo máximo de 24 horas hábiles.
              </p>
              {[
                { icon: "✉", label: "Correo", val: "info@kerrpharma.com" },
                { icon: "☏", label: "Teléfono", val: "+41 61 000 0000 · Basilea, Suiza" },
                { icon: "⊕", label: "Sede LATAM", val: "Ciudad de México, México" },
                { icon: "◷", label: "Horario", val: "Lun–Vie · 08:00–18:00 CET" },
              ].map((i) => (
                <div className="contact-info-item" key={i.label}>
                  <div className="contact-info-icon">{i.icon}</div>
                  <div>
                    <div className="contact-info-label">{i.label}</div>
                    <div className="contact-info-val">{i.val}</div>
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