'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  createContext,
  type ReactNode,
  type SyntheticEvent,
  useContext,
  useState,
} from 'react';

type LeadFormContextValue = {
  openLeadForm: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function useLeadForm() {
  const value = useContext(LeadFormContext);

  if (!value) {
    throw new Error('useLeadForm must be used within LeadFormProvider');
  }

  return value;
}

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  );
  const [error, setError] = useState('');

  function openLeadForm() {
    setError('');
    setStatus('idle');
    setOpen(true);
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);

    if (!nextOpen) {
      setError('');
      setStatus('idle');
    }
  }

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === 'submitting') return;

    setError('');
    setStatus('submitting');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });
      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(payload?.error || 'Не удалось отправить заявку.');
      }

      setName('');
      setPhone('');
      setStatus('success');
    } catch (submitError) {
      setStatus('idle');
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Не удалось отправить заявку. Попробуйте ещё раз.',
      );
    }
  }

  return (
    <LeadFormContext.Provider value={{ openLeadForm }}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="lead-dialog">
          {status === 'success' ? (
            <output className="lead-success">
              <CheckCircle2 aria-hidden="true" />
              <DialogTitle>
                <span className="lead-success-title-desktop">Заявка отправлена</span>
                <span className="lead-success-title-mobile">Спасибо!</span>
              </DialogTitle>
              <DialogDescription>
                <span className="lead-success-description-desktop">
                  Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее
                  время.
                </span>
                <span className="lead-success-description-mobile">
                  Ваша заявка отправлена.<br />Мы свяжемся с вами в ближайшее время.
                </span>
              </DialogDescription>
              <button
                className="button lead-success-close"
                type="button"
                onClick={() => handleOpenChange(false)}
              >
                Закрыть
              </button>
            </output>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Записаться на урок</DialogTitle>
                <DialogDescription>
                  <span className="lead-description-desktop">
                    Оставьте контакты — мы поможем подобрать подходящий курс.
                  </span>
                  <span className="lead-description-mobile">
                    Оставьте свои данные, и мы свяжемся с вами в ближайшее время.
                  </span>
                </DialogDescription>
              </DialogHeader>
              <form className="lead-form" onSubmit={handleSubmit}>
                <div className="lead-field">
                  <Label htmlFor="lead-name">Имя</Label>
                  <Input
                    id="lead-name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    maxLength={80}
                    required
                  />
                </div>
                <div className="lead-field">
                  <Label htmlFor="lead-phone">Телефон</Label>
                  <Input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={40}
                    required
                  />
                </div>
                {error && (
                  <p className="lead-error" role="alert">
                    {error}
                  </p>
                )}
                <button
                  className="button lead-submit"
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Отправляем…' : 'Отправить заявку'}
                  {status !== 'submitting' && <ArrowRight aria-hidden="true" />}
                </button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </LeadFormContext.Provider>
  );
}
