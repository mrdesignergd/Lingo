import { Laptop, MessageCircleMore, UsersRound } from 'lucide-react';

const advantages = [
  { icon: MessageCircleMore, title: 'Больше разговорной практики', text: 'Говорите с первого урока и преодолевайте языковой барьер.', tone: 'cyan' },
  { icon: UsersRound, title: 'Небольшие группы', text: 'До 6 студентов в группе для максимального внимания к каждому.', tone: 'violet' },
  { icon: Laptop, title: 'Удобный формат', text: 'Занимайтесь онлайн из любой точки мира или в уютном классе.', tone: 'blue' },
] as const;

export function LearningProcess() {
  return (
    <section className="section advantages-section" id="about" aria-labelledby="advantages-title">
      <span className="side-note side-note-right" aria-hidden="true">Practice<br />People<br />Progress<br />♡</span>
      <div className="container advantages-layout">
        <div className="advantages-heading"><span className="eyebrow">ПОЧЕМУ LINGO?</span><h2 id="advantages-title" className="advantages-desktop-title">С нами<br />эффективно<br />и комфортно</h2><h2 className="advantages-mobile-title">Почему LINGO?</h2><span className="heading-stroke wide" aria-hidden="true" /></div>
        <div className="advantages-grid">
          {advantages.map(({ icon: Icon, title, text, tone }) => <article className="advantage-card" key={title}><Icon className={`advantage-icon ${tone}`} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
