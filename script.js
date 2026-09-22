// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// FAQ: one open answer at a time per column
document.querySelectorAll('.faq-col').forEach(col => {
  const items = col.querySelectorAll('details');
  items.forEach(d => d.addEventListener('toggle', () => {
    if (d.open) items.forEach(o => { if (o !== d) o.open = false; });
  }));
});

// Contact form: submit to Formspree without leaving the page
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    if (form.action.includes('YOUR_FORM_ID')) return; // not set up yet: fall back to normal submit
    e.preventDefault();
    let status = form.querySelector('.form-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'form-status';
      status.setAttribute('role', 'status');
      form.appendChild(status);
    }
    status.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (res.ok) { form.reset(); status.textContent = 'Thanks! We’ll be in touch soon.'; }
      else { status.textContent = 'Something went wrong. Please try again or DM us on Instagram.'; }
    } catch {
      status.textContent = 'Something went wrong. Please try again or DM us on Instagram.';
    }
  });
}
