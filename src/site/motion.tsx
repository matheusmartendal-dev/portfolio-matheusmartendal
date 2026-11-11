import React, { useEffect, useRef, useState } from 'react';

/** Adiciona a classe `is-in` quando o elemento entra na tela (uma vez). */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('is-in');
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}

/** Progresso 0→1 enquanto o elemento atravessa a viewport (para seções sticky). */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const v = total > 0 ? -r.top / total : 0;
      setP(Math.min(1, Math.max(0, v)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return [ref, p] as const;
}

/** Texto dividido em palavras que sobem de dentro de uma máscara. */
export function Split({ text, className = '', as: Tag = 'span', inView = true }: { text: string; className?: string; as?: any; inView?: boolean }) {
  const ref = useInView<HTMLElement>(0.15);
  const words = text.split(' ');
  return (
    <Tag ref={inView ? ref : undefined} className={`split ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span className="w" key={i} aria-hidden="true">
          <span style={{ ['--i' as any]: i }}>{w}</span>
        </span>
      ))}
    </Tag>
  );
}

/** Parágrafo em linhas fixas que sobem em sequência. */
export function Lines({ lines, className = '' }: { lines: string[]; className?: string }) {
  const ref = useInView<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className={`lines ${className}`}>
      {lines.map((l, i) => (
        <span key={i}>
          <span style={{ ['--i' as any]: i }}>{l}</span>
        </span>
      ))}
    </div>
  );
}

/** Link/botão no estilo [ TEXTO ] com o texto rolando no hover. */
export function Bracket({
  label, href, onClick, current, className = '', external,
}: { label: string; href?: string; onClick?: (e: React.MouseEvent) => void; current?: boolean; className?: string; external?: boolean; key?: React.Key }) {
  const inner = (
    <>
      <span className="br">[</span>
      <span className="roll"><span>{label}</span><span aria-hidden="true">{label}</span></span>
      <span className="br">]</span>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`bracket ${className}`}
        aria-current={current ? 'page' : undefined}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`bracket ${className}`} aria-current={current ? 'page' : undefined}>
      {inner}
    </button>
  );
}

/** Wordmark gigante com letras que sobem em sequência. */
export function Wordmark({ text, className = '', logo }: { text: string; className?: string; logo?: string }) {
  const ref = useInView<HTMLDivElement>(0.1);
  return (
    <div ref={ref} className={`wordmark ${logo ? 'has-logo' : ''} ${className}`} aria-label={text} role="img">
      {logo && (
        <span className="ch wm-logo" style={{ ['--i' as any]: 0 }} aria-hidden="true">
          <img src={logo} alt="" referrerPolicy="no-referrer" decoding="async" />
        </span>
      )}
      {text.split('').map((c, i) => (
        <span className="ch" key={i} style={{ ['--i' as any]: i + (logo ? 1 : 0) }} aria-hidden="true">{c}</span>
      ))}
    </div>
  );
}

/** Frase em que cada palavra acende (cinza → branco) conforme o scroll. */
export function ScrubText({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = Array.from(el.querySelectorAll('.w')) as HTMLElement[];
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // começa a acender quando o topo passa 85% da tela; termina quando o fim passa 45%
      const start = vh * 0.85, end = vh * 0.45;
      const p = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height * 0.6)));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < n));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [text]);
  return (
    <p ref={ref} className={`scrub ${className}`} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <React.Fragment key={i}>
          <span className="w" aria-hidden="true">{w}</span>{' '}
        </React.Fragment>
      ))}
    </p>
  );
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
