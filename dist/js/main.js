
const toggle = document.querySelector('.Nexora-header__toggle');
const nav = document.querySelector('.Nexora-header__nav');
const header = document.querySelector('.Nexora-header');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
    nav.classList.toggle('Nexora-header__nav--open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  nav.querySelectorAll('.Nexora-header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú de navegación');
      nav.classList.remove('Nexora-header__nav--open');
      document.body.style.overflow = '';
    });
  });
}

window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('Nexora-header--scrolled', window.scrollY > 20);
});


// ── FAQ accordion ───────────────────────────────────────────
const faqToggles = document.querySelectorAll('.Nexora-faq__toggle');

faqToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const answerId = btn.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);

    faqToggles.forEach(other => {
      if (other !== btn) {
        other.setAttribute('aria-expanded', 'false');
        const otherAnswer = document.getElementById(other.getAttribute('aria-controls'));
        if (otherAnswer) otherAnswer.hidden = true;
      }
    });

    btn.setAttribute('aria-expanded', String(!isOpen));
    if (answer) answer.hidden = isOpen;
  });

  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});


// ── LeadForm validación ─────────────────────────────────────
const form = document.querySelector('.Nexora-leadform__form');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'lead-name',    errorId: 'lead-name-error',    msg: 'Por favor ingresa tu nombre completo.' },
      { id: 'lead-email',   errorId: 'lead-email-error',   msg: 'Por favor ingresa un email válido.' },
      { id: 'lead-capital', errorId: 'lead-capital-error', msg: 'El capital mínimo es $10,000 USD.' },
    ];

    fields.forEach(({ id, errorId, msg }) => {
      const input = document.getElementById(id);
      const error = document.getElementById(errorId);
      if (!input || !error) return;
      if (!input.validity.valid) {
        error.textContent = msg;
        input.setAttribute('aria-invalid', 'true');
        valid = false;
      } else {
        error.textContent = '';
        input.removeAttribute('aria-invalid');
      }
    });

    if (valid) {
      const btn = form.querySelector('.Nexora-leadform__btn');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Enviando...';
        setTimeout(() => { btn.textContent = '¡Consulta enviada!'; }, 1500);
      }
    }
  });
}
