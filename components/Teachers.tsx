import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const teachers = [
  { name: 'Emily Carter', language: 'Английский', image: '/images/teachers/emily.png', description: 'Сертифицированный преподаватель (TESOL). Поможет вам говорить уверенно и естественно.', note: 'Speak\nExplore\nGrow', tone: 'pink' },
  { name: 'Min-jun Kim', language: 'Корейский', image: '/images/teachers/minjun.png', description: 'Носитель языка. Расскажет о настоящей Корее и научит понимать не только слова, но и культуру.', note: '화이팅!', tone: 'blue' },
  { name: 'Giulia Rossi', language: 'Итальянский', image: '/images/teachers/giulia.png', description: 'Преподаватель из Рима. Делает обучение лёгким, увлекательным и по-настоящему итальянским!', note: 'La vita\nè bella!', tone: 'mint' },
] as const;

export function Teachers() {
  return (
    <section className="section teachers-section" id="teachers" aria-labelledby="teachers-title">
      <div className="container">
        <div className="teachers-heading"><div><span className="eyebrow">НАША КОМАНДА</span><h2 id="teachers-title"><span className="teacher-title-desktop">Преподаватели,<br />которые вдохновляют</span><span className="teacher-title-mobile">Вдохновляют<br />на большее</span></h2><span className="heading-stroke teacher-stroke" aria-hidden="true" /></div><a href="#teachers">Все преподаватели <ArrowRight /></a></div>
        <div className="teacher-grid">
          {teachers.map((teacher) => <article className="teacher-card" key={teacher.name}>
            <div className={`teacher-photo ${teacher.tone}`}><Image src={teacher.image} alt={`Преподаватель ${teacher.name}`} fill sizes="(max-width: 767px) 38vw, (max-width: 1199px) 20vw, 11vw" /></div>
            <div className="teacher-copy"><h3>{teacher.name}</h3><span className={`teacher-badge ${teacher.tone}`}>{teacher.language}</span><p>{teacher.description}</p></div>
            <span className={`teacher-note ${teacher.tone}`} aria-hidden="true">{teacher.note.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</span>
          </article>)}
        </div>
        <a className="button teachers-mobile-link" href="#teachers">
          Все преподаватели <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
