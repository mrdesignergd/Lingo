import { Mail, Phone } from 'lucide-react';
import { Logo } from './Header';

export function Footer() {
  return (
    <footer id="contacts">
      <div className="container footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Языки. Люди. Больше возможностей.</p>
        </div>
        <nav className="footer-nav" aria-label="Навигация в подвале">
          <a href="#about">О нас</a>
          <a href="#courses">Языки</a>
          <a href="#teachers">Преподаватели</a>
          <a href="#teachers">Блог</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="footer-contacts">
          <a href="tel:+77777777777">
            <Phone />
            +7 777 777 77 77
          </a>
          <a href="mailto:hello@lingo.school">
            <Mail />
            hello@lingo.school
          </a>
        </div>
        <div className="footer-socials">
          <a href="#contacts" aria-label="LINGO в Telegram">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 5l16 7-16 7 3-7-3-7z" />
              <path d="M7 12h13" />
            </svg>
          </a>
          <a href="#contacts" aria-label="LINGO в Instagram">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 LINGO. Все права защищены.</p>
        <p>Делаем мир ближе&nbsp; ♡</p>
      </div>
    </footer>
  );
}
