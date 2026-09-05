const RECIPIENT_EMAIL = 'r_e_n_a_t.92@mail.ru';
const SUBJECT = 'LINGO — заявка с сайта';

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
};

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return Response.json(
      { error: 'Некорректные данные формы.' },
      { status: 400 },
    );
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';

  if (name.length < 2 || name.length > 80) {
    return Response.json({ error: 'Укажите ваше имя.' }, { status: 400 });
  }

  if (phone.length < 7 || phone.length > 40) {
    return Response.json(
      { error: 'Укажите корректный номер телефона.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.LINGO_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error('Lead email service is not configured.');
    return Response.json(
      { error: 'Отправка временно недоступна. Попробуйте немного позже.' },
      { status: 503 },
    );
  }

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [RECIPIENT_EMAIL],
      subject: SUBJECT,
      text: [`Имя: ${name}`, `Телефон: ${phone}`, `Источник: ${SUBJECT}`].join(
        '\n',
      ),
    }),
  });

  if (!emailResponse.ok) {
    console.error('Lead email delivery failed.', {
      status: emailResponse.status,
      response: await emailResponse.text(),
    });
    return Response.json(
      { error: 'Не удалось отправить заявку. Попробуйте ещё раз.' },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
