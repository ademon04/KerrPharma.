import { useState, useEffect, useRef } from "react";
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import WhyKerr from './components/WhyKerr'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from "./hooks/useReveal"


/* ─── DESIGN TOKENS ─────────────────────────────────────────────────── */
const tokens = {
  "--c-bg": "#F5F3EF",
  "--c-surface": "#FFFFFF",
  "--c-ink": "#1A1C22",
  "--c-ink-muted": "#5A5D6B",
  "--c-ink-faint": "#9B9EAD",
  "--c-slate": "#2B3A52",
  "--c-slate-light": "#3D5270",
  "--c-gold": "#B8973A",
  "--c-gold-light": "#D4AF5A",
  "--c-border": "#E2DDD6",
  "--c-border-strong": "#C8C3BA",
};

/* ─── GLOBAL STYLES injected once ──────────────────────────────────────*/
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      :root {
        ${Object.entries(tokens).map(([k,v]) => `${k}: ${v};`).join('\n')}
        --radius: 2px;
        --transition: 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      }

      html { scroll-behavior: smooth; }

      body {
        background: var(--c-bg);
        color: var(--c-ink);
        font-family: 'DM Sans', sans-serif;
        font-weight: 300;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
      }

      .serif { font-family: 'Cormorant Garamond', serif; }
      .mono  { font-family: 'DM Mono', monospace; }

      /* Reveal animation */
      .reveal {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .reveal.visible {
        opacity: 1;
        transform: none;
      }

      /* Utility */
      .container {
        max-width: 1160px;
        margin: 0 auto;
        padding: 0 32px;
      }
      @media (max-width: 768px) {
        .container { padding: 0 20px; }
      }
    `}</style>
  );
}


/* ─── APP ────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyKerr />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
