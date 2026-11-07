import './style.css'
import heroImage from './assets/imagen1.png'
import footerImage from './assets/imagen2.jpeg'

const icon = (name, className = '') => {
  const icons = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    calendar: '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 9h18M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    heart: '<path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.8 2.4Z"/>',
    leaf: '<path d="M20.5 3.5C12 4 6.2 7.2 5.1 12.2c-.6 2.7 1.2 5.1 3.9 5.1 5.5 0 9.5-5.8 11.5-13.8Z"/><path d="M4 21c2-4.2 5.4-7.7 10-10.5"/>',
    location: '<path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    phone: '<path d="M21 16.5v2.2a1.7 1.7 0 0 1-1.9 1.7 17 17 0 0 1-7.4-2.6 16.7 16.7 0 0 1-5.1-5.1A17 17 0 0 1 4 5.3 1.7 1.7 0 0 1 5.7 3.4H8a1.7 1.7 0 0 1 1.7 1.5c.1.9.3 1.7.6 2.5a1.7 1.7 0 0 1-.4 1.8L8.8 10.3a13.7 13.7 0 0 0 5.1 5.1l1.1-1.1a1.7 1.7 0 0 1 1.8-.4c.8.3 1.6.5 2.5.6a1.7 1.7 0 0 1 1.5 2Z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    award: '<circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-1 8 4.5-2.4 4.5 2.4-1-8"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v17H6.5A2.5 2.5 0 0 0 4 22V5.5ZM20 5.5A2.5 2.5 0 0 0 17.5 3H12v17h5.5A2.5 2.5 0 0 1 20 22V5.5Z"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
  }
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`
}

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="#inicio" aria-label="Caro Armas, inicio">
        <span class="brand-name">Caro Armas</span>
        <span class="brand-role">NUTRICIONISTA</span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">
        ${icon('menu')}
      </button>
      <nav class="main-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#servicios">Servicios</a>
        <a href="#incluye">Qué incluye</a>
        <a href="#enfoque">Enfoque</a>
        <a href="#agenda">Agenda</a>
        <a class="button button-small button-dark" href="#agenda">Reservar cita</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-decoration hero-decoration-left" aria-hidden="true">
        <div class="plate"></div>
        <div class="toast toast-one"></div>
        <div class="toast toast-two"></div>
        <span class="berry berry-one"></span><span class="berry berry-two"></span><span class="berry berry-three"></span>
      </div>
      <div class="hero-decoration hero-decoration-right" aria-hidden="true">
        <span class="branch branch-one"></span><span class="branch branch-two"></span><span class="branch branch-three"></span>
        <span class="flower flower-one"></span><span class="flower flower-two"></span><span class="flower flower-three"></span>
      </div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Nutrición clínica · Quito</p>
          <h1>Cuida tu salud sin <em>dietas extremas.</em></h1>
          <p class="hero-lead">Soy Caro Armas, nutricionista. Te acompaño a mejorar tus hábitos, construir una relación más amable con la comida y cuidar tu salud, online o a domicilio.</p>
          <div class="tag-list" aria-label="Especialidades">
            <span>Mejorar hábitos</span><span>Mejor relación con la comida</span><span>Alimentación sin extremos</span>
          </div>
          <div class="hero-actions">
            <a class="button button-dark" href="#agenda">Reservar cita ${icon('arrow')}</a>
            <a class="button button-outline" href="#servicios">Ver servicios</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="portrait-ring"></div>
          <img class="portrait" src="${heroImage}" alt="Caro Armas, nutricionista" />
          <div class="availability-card">
            <span class="availability-icon">${icon('location')}</span>
            <span><strong>Quito y online</strong><small>Lunes a viernes, 10:00 a 18:00</small></span>
          </div>
        </div>
      </div>
    </section>

    <section class="about section-light" id="sobre-mi">
      <div class="container about-grid">
        <div class="about-copy">
          <p class="section-kicker">Conoce mi forma de acompañarte</p>
          <h2>Sobre mí</h2>
          <p>Soy Caroline Armas, nutricionista enfocada en nutrición clínica y educación alimentaria, con formación en evaluación antropométrica y certificación ISAK.</p>
          <p>Creo en una nutrición equilibrada, flexible y adaptada a tu realidad. No se trata de seguir reglas estrictas ni de vivir a dieta, sino de aprender a alimentarte de una manera que puedas mantener en el tiempo.</p>
          <small class="registration">[N.º de registro SENESCYT]</small>
        </div>
        <div class="credential-list">
          <div class="credential credential-blue">${icon('award')}<strong>Certificación ISAK</strong></div>
          <div class="credential credential-lilac">${icon('heart')}<strong>Experiencia clínica</strong></div>
          <div class="credential credential-blue">${icon('book')}<strong>Nutrición clínica y educación alimentaria</strong></div>
        </div>
      </div>
    </section>

    <section class="services section-blue" id="servicios">
      <div class="container services-grid">
        <div class="services-intro">
          <p class="section-kicker">Elige lo que necesitas</p>
          <h2>Servicios</h2>
          <p>Una modalidad que se adapte a ti y a tu ritmo de vida.</p>
        </div>
        <div class="service-cards">
          <article class="service-card"><span class="service-icon">⌂</span><h3>Consulta<br>nutricional online</h3><strong>$35</strong></article>
          <article class="service-card"><span class="service-icon">${icon('calendar')}</span><h3>Seguimiento<br>online</h3><strong>$25</strong></article>
          <article class="service-card"><span class="service-icon">⌂</span><h3>Consulta<br>nutricional a domicilio</h3><strong>$45</strong></article>
          <article class="service-card"><span class="service-icon">${icon('location')}</span><h3>Seguimiento<br>a domicilio</h3><strong>$30</strong></article>
        </div>
      </div>
    </section>

    <section class="includes section-cream" id="incluye">
      <div class="container">
        <div class="center-heading"><p class="section-kicker">Un plan pensado para ti</p><h2>¿Qué incluye tu consulta?</h2></div>
        <div class="includes-grid">
          <article class="include-card include-lilac">
            <span class="card-number">01</span><h3>Consulta online</h3>
            <ul><li>Historia nutricional y evaluación de hábitos.</li><li>Identificación de objetivos.</li><li>Educación alimentaria personalizada.</li><li>Orientación de porciones y estrategias prácticas.</li><li>Material educativo digital.</li></ul>
          </article>
          <article class="include-card include-blue">
            <span class="card-number">02</span><h3>Consulta a domicilio</h3>
            <ul><li>Historia nutricional y evaluación de hábitos.</li><li>Identificación de objetivos.</li><li>Evaluación antropométrica con metodología ISAK.</li><li>Evaluación de composición corporal mediante bioimpedancia.</li><li>Recomendaciones nutricionales personalizadas.</li></ul>
          </article>
        </div>
      </div>
    </section>

    <section class="approach section-lilac" id="enfoque">
      <div class="container approach-grid">
        <div class="approach-title"><p class="section-kicker">Una relación más amable con la comida</p><h2>Mi enfoque<br>nutricional</h2></div>
        <div class="approach-item">${icon('leaf')}<p>Sin dietas extremas ni restricciones innecesarias.</p></div>
        <div class="approach-item">${icon('target')}<p>Sin enfocarnos únicamente en el peso.</p></div>
        <div class="approach-item">${icon('book')}<p>Con educación alimentaria y herramientas prácticas.</p></div>
        <div class="approach-item">${icon('check')}<p>Con objetivos realistas y personalizados.</p></div>
      </div>
    </section>

    <section class="booking section-blue" id="agenda">
      <div class="container booking-grid">
        <div class="booking-intro">
          <div class="booking-portrait"><img src="${footerImage}" alt="Caro Armas" /></div>
          <div><p class="section-kicker">Tu bienestar empieza hoy</p><h2>Empieza hoy a<br>cuidar de ti</h2><p><strong>Lunes a viernes, 10:00 a 18:00</strong><br>Atención con cita previa.</p><a class="button button-dark" href="#formulario">Reservar cita ${icon('arrow')}</a></div>
          <div class="social-links"><a href="https://instagram.com" target="_blank" rel="noreferrer">${icon('instagram')} @nut.caroarmas</a><a href="tel:+593962598292">${icon('phone')} WhatsApp: 0962598292</a></div>
        </div>
        <form class="booking-form" id="formulario">
          <p class="form-kicker">Da el primer paso</p><h2>Escríbeme y agenda tu consulta</h2>
          <div class="form-fields">
            <label>Nombre *<input name="nombre" type="text" placeholder="Tu nombre" required></label>
            <label>Servicio *<select name="servicio" required><option value="">Elige una opción</option><option>Consulta nutricional online</option><option>Seguimiento online</option><option>Consulta a domicilio</option><option>Seguimiento a domicilio</option></select></label>
            <label>Fecha preferida<input name="fecha" type="date"></label>
            <label class="full-field">Mensaje (opcional)<textarea name="mensaje" rows="3" placeholder="Cuéntame brevemente qué buscas"></textarea></label>
          </div>
          <button class="button button-dark form-submit" type="submit">Enviar por WhatsApp</button>
          <p class="form-note">Usaremos tus datos solo para agendar tu cita.</p>
          <p class="form-feedback" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  </main>

  <a class="whatsapp" href="https://wa.me/593962598292" target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">${icon('phone')}</a>
  <footer>
    <div class="container footer-content">
      <div class="footer-copy"><span class="footer-brand">Caro Armas</span><span>Nutrición clínica para una vida más amable.</span><small>© 2024 Caro Armas Nutricionista</small></div>
      <div class="footer-photo"><span>Nos vemos pronto :)</span></div>
      <a class="footer-top" href="#inicio">Volver arriba ↑</a>
    </div>
  </footer>
`

const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.main-nav')
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open')
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.innerHTML = icon(isOpen ? 'close' : 'menu')
})

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.innerHTML = icon('menu')
  })
})

document.querySelector('#formulario').addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const nombre = formData.get('nombre')
  const servicio = formData.get('servicio')
  const fecha = formData.get('fecha') || 'Por definir'
  const mensaje = formData.get('mensaje') || 'Sin mensaje adicional'
  const whatsappNumber = '593962598292'
  const text = [
    'Hola Caro, quiero agendar una consulta nutricional.',
    '',
    `Nombre: ${nombre}`,
    `Servicio: ${servicio}`,
    `Fecha preferida: ${fecha}`,
    `Mensaje: ${mensaje}`,
  ].join('\n')

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

  const feedback = document.querySelector('.form-feedback')
  feedback.textContent = 'Abriendo WhatsApp con tu solicitud preparada.'
  event.currentTarget.reset()
})
