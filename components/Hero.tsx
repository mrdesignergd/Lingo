import Image from 'next/image';
import { ArrowRight, Crown, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <span className="edge-blob edge-blob-blue" aria-hidden="true" />
      <span className="edge-blob edge-blob-purple" aria-hidden="true" />
      <span className="edge-blob edge-blob-yellow" aria-hidden="true" />
      <span className="hero-rays hero-rays-left" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="hero-rays hero-rays-right" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker">Больше, чем просто языковая школа</span>
          <h1 id="hero-title">
            Языки
            <br />
            <span className="hero-open-word">
              открывают
              <svg
                className="mobile-yellow-stroke"
                viewBox="0 0 250 18"
                aria-hidden="true"
              >
                <path d="M4 11C61 3 157 5 245 10C167 13 78 17 7 13" />
              </svg>
            </span>
            <span className="desktop-title-space"> </span>
            <br className="mobile-title-break" />
            мир
          </h1>
          <svg
            className="yellow-stroke desktop-yellow-stroke"
            viewBox="0 0 250 18"
            aria-hidden="true"
          >
            <path d="M4 11C61 3 157 5 245 10C167 13 78 17 7 13" />
          </svg>
          <p>
            Учите английский, корейский, турецкий,
            <br className="desktop-break" /> итальянский и китайский с
            вдохновением.
            <br className="desktop-break" /> Новые люди. Новые культуры. Новые
            вы!
          </p>
          <a className="button hero-button" href="#courses">
            Начать учиться <ArrowRight />
          </a>
        </div>
        <div
          className="hero-scene"
          aria-label="Два студента языковой школы LINGO"
        >
          <span className="scene-blob scene-blue" aria-hidden="true" />
          <span className="scene-blob scene-yellow" aria-hidden="true" />
          <span className="scene-blob scene-purple" aria-hidden="true" />
          <svg className="flight-path" viewBox="0 0 900 360" aria-hidden="true">
            <path d="M8 92C44 25 150 45 153 115C156 189 66 178 69 126C72 79 197 88 270 134C354 186 417 189 483 151C557 109 629 92 706 125C778 156 799 248 890 237" />
          </svg>
          <svg className="hero-globe" viewBox="0 0 180 180" aria-hidden="true">
            <circle cx="90" cy="90" r="86" fill="#58baff" />
            <path
              d="M41 42l28-16 15 15-9 17-22 4-4 21-17-10zm74-3 24 13 10 23-18 8-12-10-20 5-7-17zm-30 52 28-6 18 17-8 18-22 4-5 30-25-16-15-24 12-12z"
              fill="#92e3bd"
            />
            <path
              d="M17 91h146M90 5c-25 24-38 52-38 85s13 61 38 85M90 5c25 24 38 52 38 85s-13 61-38 85"
              fill="none"
              stroke="#d8f8ea"
              strokeWidth="3"
              opacity=".58"
            />
          </svg>
          <Image
            src="/images/hero/students.png"
            alt="Улыбающиеся студенты: девушка с книгами и парень с ноутбуком"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 80vw"
            style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
          />
          <span className="book-message" aria-hidden="true">
            Good Students
            <br />
            Brighter Futures ♡
          </span>
          <span className="speech speech-english">English</span>
          <span className="speech speech-korean">한국어</span>
          <span className="speech speech-turkish">Türkçe</span>
          <span className="speech speech-italian">Italiano</span>
          <span className="speech speech-chinese">中文</span>
          <span className="doodle doodle-steps">
            Small
            <br />
            Steps
            <br />
            Big World <b>♥</b>
          </span>
          <span className="doodle doodle-brighter">
            Different
            <br />
            Languages
            <br />A Brighter
            <br />
            You!
          </span>
          <span className="hero-crown">
            <Crown />
          </span>
          <Sparkles className="hero-sparkle" />
        </div>
      </div>
      <svg
        className="hero-wave"
        viewBox="0 0 1440 112"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 30C174 75 340 78 514 61C716 41 884 23 1084 37C1258 49 1365 76 1440 99V112H0Z" />
      </svg>
    </section>
  );
}
