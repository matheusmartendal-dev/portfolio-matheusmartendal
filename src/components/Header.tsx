import React, { useEffect, useState } from 'react';
import { Menu, X, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import type { Route } from '../types';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: 'pt' | 'en';
  setLang: (val: 'pt' | 'en') => void;
  route: Route;
  onNavigate: (route: Route, anchor?: string) => void;
}

export default function Header({ darkMode, setDarkMode, lang, setLang, route, onNavigate }: HeaderProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isPt = lang === 'pt';

  const menuItems: { key: string; label: string; route: Route; anchor?: string; href: string }[] = [
    { key: 'home', label: isPt ? 'Início' : 'Home', route: '/', href: '#' },
    { key: 'lp', label: 'Landing Pages', route: '/landing-pages', href: '#/landing-pages' },
    { key: 'ai', label: isPt ? 'Automações IA' : 'AI Automations', route: '/automacoes-ia', href: '#/automacoes-ia' },
    { key: 'about', label: isPt ? 'Sobre Mim' : 'About Me', route: route, anchor: '#about', href: '#about' },
  ];

  useEffect(() => {
    setMounted(true);

    const handlePageScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    handlePageScroll();
    window.addEventListener('scroll', handlePageScroll, { passive: true });
    return () => window.removeEventListener('scroll', handlePageScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof menuItems)[number]) => {
    e.preventDefault();
    setNavOpen(false);
    onNavigate(item.route, item.anchor);
  };

  const renderNav = (className: string) => (
    <nav className={className}>
      {menuItems.map((item) => {
        const isActive = !item.anchor && item.route === route;
        return (
          <a
            key={item.key}
            href={item.href}
            onClick={(e) => handleNavClick(e, item)}
            className={`relative whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-sans font-bold transition-all duration-300 ${
              isActive 
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25' 
                : 'text-[#4f625d] dark:text-white/55 hover:text-[#102321] dark:hover:text-white'
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );

  return (
    <>
    <header className="relative w-full py-4 md:py-6 flex flex-row justify-between items-center gap-3 md:gap-4 select-none mb-6 md:mb-10 border-b border-[#e7dccf] dark:border-white/10 pb-4 md:pb-6">
      
      {/* Left side: Bio Identity Logo */}
      <div className="flex items-center text-left">
        <img 
          src="https://i.imgur.com/JRc2tPW.png" 
          alt="Matheus Martendal Logo" 
          width="1292"
          height="1268"
          className={`logo-cinema-hover h-12 md:h-20 w-auto object-contain select-none transition-all duration-300 hover:scale-110 dark:brightness-110 cursor-pointer ${darkMode ? '' : 'invert'}`}
          onClick={() => onNavigate('/')}
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Center: Pill capsule navigation bar */}
      {renderNav(`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 bg-white/75 dark:bg-[#102321]/80 backdrop-blur-xl rounded-full p-1.5 border border-white/70 dark:border-white/10 shadow-xl shadow-orange-950/10 z-40 transition-all duration-300 ${
        isScrolled ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'
      }`)}

      {/* Right side: compact action controls */}
      <div className="flex w-auto items-center justify-end gap-3 md:gap-4">

        {/* Action button panel */}
        <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
          {/* Language Toggle */}
          <div className="flex items-center bg-white/75 dark:bg-white/10 p-1 rounded-full border border-[#e7dccf] dark:border-white/10 text-[10px] md:text-[11px] font-mono font-bold leading-none gap-1 md:mr-1 shadow-inner select-none transition-all backdrop-blur">
            <button
              onClick={() => setLang('pt')}
              aria-pressed={isPt}
              className={`language-flag language-flag-br relative overflow-hidden px-2.5 md:px-3 py-1.5 md:py-2 rounded-full cursor-pointer transition-all ${
                isPt
                  ? 'text-white shadow-md font-extrabold scale-105 ring-2 ring-white/70'
                  : 'text-white/70 opacity-45 grayscale hover:opacity-85 hover:grayscale-0 hover:text-white'
              }`}
              title="Português"
            >
              <span className="relative z-10">PT</span>
            </button>
            <button
              onClick={() => setLang('en')}
              aria-pressed={!isPt}
              className={`language-flag language-flag-uk relative overflow-hidden px-2.5 md:px-3 py-1.5 md:py-2 rounded-full cursor-pointer transition-all ${
                !isPt
                  ? 'text-white shadow-md font-extrabold scale-105 ring-2 ring-white/70'
                  : 'text-white/70 opacity-45 grayscale hover:opacity-85 hover:grayscale-0 hover:text-white'
              }`}
              title="English"
            >
              <span className="relative z-10">EN</span>
            </button>
          </div>

          {/* Quick mail shortcut */}
          <a
            href="mailto:matheus.martendal@gmail.com"
            className="hidden md:flex p-3 rounded-full bg-white/75 dark:bg-white/10 border border-[#e7dccf] dark:border-white/10 text-[#4f625d] dark:text-white/70 hover:text-teal-500 dark:hover:text-teal-300 hover:border-orange-500/45 transition-all cursor-pointer shadow-sm backdrop-blur"
            title={isPt ? 'Enviar E-mail' : 'Send Email'}
          >
            <Mail className="w-5 h-5" />
          </a>

          {/* Mobile indicator pill/hamburger */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden p-2 text-[#102321] dark:text-white hover:text-teal-500 dark:hover:text-teal-300 transition-colors cursor-pointer"
            aria-label={isPt ? 'Abrir menu' : 'Open menu'}
          >
            {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#102321]/95 text-white border border-white/10 rounded-2xl p-5 mt-3 flex flex-col gap-4 lg:hidden z-50 text-left shadow-2xl backdrop-blur-md"
          >
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-sans font-bold text-neutral-100 hover:text-teal-500 dark:hover:text-teal-300 py-2 border-b border-white/10 last:border-0 block"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:matheus.martendal@gmail.com"
              className="flex items-center gap-2 text-xs font-mono text-white pt-2 break-all"
            >
              <Mail className="w-4 h-4 text-teal-500 dark:text-teal-300 shrink-0" />
              matheus.martendal@gmail.com
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
    {mounted && isScrolled
      ? createPortal(
          renderNav('fixed left-1/2 top-5 -translate-x-1/2 hidden lg:flex items-center gap-1 bg-white/75 dark:bg-[#102321]/80 backdrop-blur-xl rounded-full p-1.5 border border-white/70 dark:border-white/10 shadow-xl shadow-orange-950/10 z-[9999] transition-all duration-300'),
          document.body
        )
      : null}
    </>
  );
}
