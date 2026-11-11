import React, { useEffect, useMemo, useState } from 'react';
import { useScrollProgress, prefersReducedMotion } from '../motion';

const COLS = 14;
const ROWS = 8;

/** Pseudo-aleatório determinístico (mesma montagem em toda visita). */
function rand(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

/**
 * Seção sticky: a imagem se monta em quadrados conforme o scroll,
 * cresce até quase a largura da tela e revela o wordmark.
 */
export interface LoopShot { src: string; project: string }

export default function Mosaic({ image, shots }: { image: string; shots: LoopShot[] }) {
  const [ref, raw] = useScrollProgress<HTMLDivElement>(1);
  const [narrow, setNarrow] = useState(() => window.matchMedia('(max-width: 767px)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const on = () => setNarrow(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  const p = prefersReducedMotion() ? 1 : raw;

  const tiles = useMemo(() => {
    const out: { c: number; r: number; th: number; dx: number; dy: number; s: number }[] = [];
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++) {
        const i = r * COLS + c;
        // quadrados do centro tendem a chegar antes
        const center = Math.hypot(c - COLS / 2, r - ROWS / 2) / Math.hypot(COLS / 2, ROWS / 2);
        out.push({
          c, r,
          th: Math.min(0.92, rand(i) * 0.7 + center * 0.25),
          dx: (rand(i + 99) - 0.5) * 2,
          dy: (rand(i + 199) - 0.5) * 2,
          s: 0.6 + rand(i + 299) * 0.9,
        });
      }
    return out;
  }, []);

  // Loop rápido das fotos dos projetos depois que a imagem termina de montar
  const [frame, setFrame] = useState(0);
  const looping = p > 0.62;
  const preload = raw > 0.05;
  useEffect(() => {
    if (!looping || shots.length < 2) return;
    const ms = prefersReducedMotion() ? 1400 : 170;
    const id = window.setInterval(() => setFrame((f) => (f + 1) % shots.length), ms);
    return () => window.clearInterval(id);
  }, [looping, shots.length]);

  // fases: 0–0.65 montagem · 0.55–0.85 cresce · 0.75–1 wordmark
  const assemble = Math.min(1, p / 0.5);
  const grow = Math.min(1, Math.max(0, (p - 0.42) / 0.3));
  const reveal = Math.min(1, Math.max(0, (p - 0.62) / 0.16));
  const width = narrow ? 80 + grow * 20 : 58 + grow * 32; // vw
  const ease = (x: number) => 1 - Math.pow(1 - x, 3);

  return (
    <section ref={ref} className="relative h-[150vh] md:h-[190vh]" aria-label="Arte">
      <div className="sticky top-0 h-[100svh] flex items-center justify-center overflow-hidden">
        <div
          className="relative"
          style={{ width: `${width}vw`, aspectRatio: narrow ? '1 / 1' : '24 / 11', maxHeight: '86svh' }}
        >
          {tiles.map((t, i) => {
            const local = Math.min(1, Math.max(0, (assemble - t.th) / 0.14));
            const e = ease(local);
            const spread = (1 - e) * 22;
            return (
              <div
                key={i}
                className="mosaic-tile"
                style={{
                  left: `${(t.c / COLS) * 100}%`,
                  top: `${(t.r / ROWS) * 100}%`,
                  width: `calc(${100 / COLS}% + 1px)`,
                  height: `calc(${100 / ROWS}% + 1px)`,
                  backgroundImage: `url(${image})`,
                  backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                  backgroundPosition: `${(t.c / (COLS - 1)) * 100}% ${(t.r / (ROWS - 1)) * 100}%`,
                  opacity: e,
                  transform: `translate(${t.dx * spread}vw, ${t.dy * spread}vh) scale(${1 + (1 - e) * (t.s - 1)})`,
                  filter: e < 1 ? `blur(${(1 - e) * 6}px)` : undefined,
                }}
              />
            );
          })}

          {/* Fotos dos projetos em loop rápido (substitui a arte quando a montagem termina) */}
          {preload && (
            <div className="absolute inset-0 overflow-hidden" style={{ opacity: reveal }} aria-hidden="true">
              {shots.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt=""
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: i === frame ? 1 : 0 }}
                />
              ))}
            </div>
          )}

          {/* Contador */}
          <div
            className="absolute right-[3%] bottom-[6%] text-right f-mono uppercase text-[10px] md:text-[0.76vw] leading-[1.5] text-[var(--c-smoke)] pointer-events-none mix-blend-difference tabular-nums"
            style={{ opacity: reveal }}
          >
            {String(frame + 1).padStart(2, '0')}/{String(shots.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
}
