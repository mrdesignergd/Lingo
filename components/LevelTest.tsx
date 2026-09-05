import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Lightbulb } from 'lucide-react';

export function LevelTest() {
  return (
    <section className="section level-section" aria-labelledby="level-title">
      <div className="container level-card">
        <span className="level-blob level-blob-one" aria-hidden="true" /><span className="level-blob level-blob-two" aria-hidden="true" />
        <div className="level-student"><Image src="/images/test/student.png" alt="Студент приглашает пройти тест уровня" fill sizes="(max-width: 767px) 65vw, 28vw" /></div>
        <span className="level-note" aria-hidden="true">Know<br />your level<br />Open new<br />horizons!</span>
        <div className="level-copy"><span>БЕСПЛАТНЫЙ ТЕСТ</span><h2 id="level-title">Узнайте свой уровень<br />языка за 5 минут</h2></div>
        <Link className="level-button" href="/test">Начать тест <ArrowRight /></Link>
        <div className="level-light" aria-hidden="true"><Lightbulb /><span>A Brighter<br />You!</span></div>
      </div>
    </section>
  );
}
