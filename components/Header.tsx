'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
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
            Записаться на урок <ArrowRight />
          </button>
        </nav>
      )}
    </header>
  );
}
