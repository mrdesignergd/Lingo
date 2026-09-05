import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TestPage() {
  return <main className="placeholder-page"><Link href="/"><ArrowLeft />На главную</Link><div><span>LINGO.</span><h1>Тест уровня</h1><p>Страница находится в разработке.</p></div></main>;
}
