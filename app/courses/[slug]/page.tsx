import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const courseNames: Record<string, string> = { english: 'English', korean: 'Korean', turkish: 'Turkish', italian: 'Italian', chinese: 'Chinese' };

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courseNames[slug] ?? 'Language';
  return <main className="placeholder-page"><Link href="/#courses"><ArrowLeft />Ко всем курсам</Link><div><span>LINGO.</span><h1>{course}</h1><p>Курс уровня A1 — C1. Подробная программа скоро появится.</p><Link className="button" href="/#courses">Выбрать другой курс <ArrowRight /></Link></div></main>;
}
