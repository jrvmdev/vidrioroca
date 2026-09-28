const WHATSAPP_NUMBER = '5490000000000'; // REEMPLAZAR antes de publicar: número internacional sin + ni espacios
const isPlaceholder = WHATSAPP_NUMBER === '5490000000000';
const whatsappUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const menu = document.querySelector('.menu'); const nav = document.querySelector('#nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open', !open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }));
document.querySelector('#year').textContent = new Date().getFullYear();
const anniversarySeal = document.querySelector('.fifty img');
if (anniversarySeal && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => { anniversarySeal.animate([{transform:'rotate(0deg)'},{transform:'rotate(-2deg)',offset:.35},{transform:'rotate(0deg)'}], {duration:650, easing:'ease-out'}); }, 2000);
}
document.querySelector('#whatsapp').addEventListener('click', e => { if (isPlaceholder) { e.preventDefault(); alert('WhatsApp de desarrollo: reemplazá WHATSAPP_NUMBER en app.js por el número comercial antes de publicar.'); } else { e.currentTarget.href = whatsappUrl('Hola, quisiera hacer una consulta a Vidrio Roca.'); } });
document.querySelector('#quote-form').addEventListener('submit', e => { e.preventDefault(); const form = e.currentTarget, error = form.querySelector('.form-error'); if (!form.checkValidity()) { error.textContent = 'Por favor, completá los campos requeridos.'; form.reportValidity(); return; } if (isPlaceholder) { error.textContent = 'El número de WhatsApp todavía está pendiente de configuración. Guardamos tus datos solo en este formulario local; contactanos por correo provisorio.'; return; } const d = new FormData(form); const message = `Hola, soy ${d.get('nombre')}.\n\nQuisiera solicitar un presupuesto.\n• Contacto: ${d.get('telefono')}\n• Trabajo: ${d.get('trabajo')}\n• Ubicación: ${d.get('ubicacion')}\n• Proyecto: ${d.get('proyecto')}\n\n(Envié este mensaje desde el sitio web.)`; window.open(whatsappUrl(message), '_blank', 'noopener'); error.textContent = 'Se abrió WhatsApp: revisá el mensaje y presioná Enviar para que llegue al equipo.'; });
