import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Languages } from '@/components/Languages';
import { LearningProcess } from '@/components/LearningProcess';
import { LeadFormProvider } from '@/components/LeadFormProvider';
import { LevelTest } from '@/components/LevelTest';
import { Teachers } from '@/components/Teachers';

export default function Home() {
  return (
    <LeadFormProvider>
      <Header />
      <main>
        <Hero />
        <Languages />
        <LearningProcess />
        <Teachers />
        <LevelTest />
        <FinalCTA />
      </main>
      <Footer />
    </LeadFormProvider>
  );
}
