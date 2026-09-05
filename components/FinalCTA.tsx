'use client';

import { ArrowRight, Send, Sparkles } from 'lucide-react';
import { useLeadForm } from './LeadFormProvider';

export function FinalCTA() {
  const { openLeadForm } = useLeadForm();

  return (
    <section className="final-cta" aria-labelledby="final-title">
      <div className="container final-inner">
        <div className="final-doodle final-doodle-left" aria-hidden="true">
          <Send />
          <span>
            New Language
            <br />
            New Adventures
          </span>
        </div>
        <div className="final-copy">
          <span className="eyebrow">ГОТОВЫ НАЧАТЬ?</span>
          <h2 id="final-title">Какой язык вы хотите учить?</h2>
          <span className="heading-stroke final-stroke" aria-hidden="true" />
          <p>
            Оставьте заявку, и мы поможем подобрать идеальную программу
            <br />
            именно для вас.
          </p>
        </div>
        <button
          className="button final-button"
          type="button"
          onClick={openLeadForm}
        >
          Записаться на пробный урок <ArrowRight />
        </button>
        <div className="final-doodle final-doodle-right" aria-hidden="true">
          <Sparkles />
          <span>
            SAME PEOPLE
            <br />
            SAME PLANET
            <br />
            MORE FRIENDS ♥
          </span>
        </div>
      </div>
    </section>
  );
}
