'use client';

import { ArrowRight, Menu, Send, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLeadForm } from './LeadFormProvider';

const links = [
  ['О нас', '#about'],
  ['Языки', '#courses'],
  ['Преподаватели', '#teachers'],
  ['Отзывы', '#teachers'],
  ['Блог', '#contacts'],
  ['Контакты', '#contacts'],
] as const;

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="LINGO — на главную">
      LINGO<span>.</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { openLeadForm } = useLeadForm();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Основная навигация">
          {links.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="button button-small"
            type="button"
            onClick={openLeadForm}
          >
            Записаться на урок <ArrowRight />
          </button>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Мобильная навигация">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <button
            className="button"
            type="button"
            onClick={() => {
              setOpen(false);
              openLeadForm();
            }}
          >
            Записаться на урок <ArrowRight aria-hidden="true" />
          </button>
          <div className="mobile-nav-contacts">
            <a href="tel:+77777777777" onClick={() => setOpen(false)}>
              +7 777 777 77 77
            </a>
            <a href="mailto:hello@lingo.school" onClick={() => setOpen(false)}>
              hello@lingo.school
            </a>
            <div className="mobile-nav-socials">
              <a
                href="#contacts"
                aria-label="LINGO в Telegram"
                onClick={() => setOpen(false)}
              >
                <Send aria-hidden="true" />
                Telegram
              </a>
              <a
                href="#contacts"
                aria-label="LINGO в Instagram"
                onClick={() => setOpen(false)}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
