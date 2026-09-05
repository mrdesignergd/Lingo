import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const languages = [
  { slug: 'english', name: 'Английский', description: 'Для учёбы, работы\nи путешествий', image: '/images/languages/english.png', color: 'lavender' },
  { slug: 'korean', name: 'Корейский', description: 'K-pop, дорамы\nи новые возможности', image: '/images/languages/korean.png', color: 'pink' },
  { slug: 'turkish', name: 'Турецкий', description: 'Язык гостеприимства\nи яркой культуры', image: '/images/languages/turkish.png', color: 'blue' },
  { slug: 'italian', name: 'Итальянский', description: 'Искусство, стиль\nи новые впечатления', image: '/images/languages/italian.png', color: 'yellow' },
  { slug: 'chinese', name: 'Китайский', description: 'Огромные перспективы для\nвашего будущего', image: '/images/languages/chinese.png', color: 'mint' },
] as const;

export function Languages() {
  return (
    <section className="section languages-section" id="courses" aria-labelledby="languages-title">
      <div className="container">
        <div className="program-heading">
          <div><span className="eyebrow">НАШИ ПРОГРАММЫ</span><h2 id="languages-title">Выберите язык</h2><span className="heading-stroke" aria-hidden="true" /></div>
          <div className="program-intro"><p>Современные программы, живое общение<br />и культура каждой страны.</p><div className="slider-buttons" aria-hidden="true"><span><ArrowLeft /></span><span className="active"><ArrowRight /></span></div></div>
        </div>
        <div className="language-grid">
          {languages.map((language) => (
            <Link className={`language-card ${language.color}`} href={`/courses/${language.slug}`} key={language.slug}>
              <div className="language-photo"><Image src={language.image} alt={`${language.name}: городской пейзаж`} fill sizes="(max-width: 767px) 78vw, (max-width: 1199px) 30vw, 17vw" /></div>
              <h3>{language.name}</h3>
              <p>{language.description.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</p>
              <div className="language-card-bottom"><span>A1 — C1</span><i aria-hidden="true"><ArrowRight /></i></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
