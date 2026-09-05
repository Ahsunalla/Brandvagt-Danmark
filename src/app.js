const app = document.getElementById("app");

const translations = {
  da: {
    nav: { services: "Ydelser", whyUs: "Hvorfor os", about: "Om os", contact: "Kontakt", cta: "Få et tilbud", menuAria: "Åbn menu" },
    hero: {
      eyebrow: "PROFESSIONEL BRANDVAGT I DANMARK",
      h1a: "Når sikkerheden",
      h1b: "ikke må svigte.",
      description: "Professionel brandvagt og sikkerhed til byggepladser, arrangementer, virksomheder og ejendomme. Vi holder øje, når det virkelig betyder noget.",
      ctaPrimary: "Book en brandvagt",
      ctaSecondary: "Se vores ydelser",
      trust1: "beredskab",
      trust2: "fokus på sikkerhed",
      trust3: "landsdækkende",
      scroll: "Scroll for at udforske",
      callNow: "Ring nu",
      callAria: "Ring til Brandvagt Danmark på 81 94 50 76"
    },
    intro: {
      label: "BRANDVAGT DANMARK",
      h2a: "Vi passer på det,",
      h2b: "du ikke har råd til at miste.",
      p1: "Brand handler ikke kun om at reagere. Det handler om at være til stede, før noget går galt.",
      p2: "Hos Brandvagt Danmark leverer vi professionelle brandvagter, der skaber tryghed, overblik og sikkerhed på arbejdspladser, byggepladser og ved arrangementer.",
      link: "Lær mere om os"
    },
    services: {
      label: "VORES YDELSER",
      h2a: "Sikkerhed,",
      h2b: "når du har brug for den.",
      subP: "Fleksible løsninger til situationer, hvor brandsikkerhed og professionel overvågning er afgørende.",
      cardLink: "Læs mere",
      cards: [
        { title: "Brandvagt", desc: "Professionel overvågning ved varmt arbejde, midlertidige risici og situationer, hvor der kræves ekstra brandsikkerhed." },
        { title: "Byggepladser", desc: "Brandvagt og sikkerhed på byggepladser, renoveringer og andre arbejdsområder med øget brandrisiko." },
        { title: "Events & arrangementer", desc: "Tryghed og professionelt opsyn ved events, arrangementer, koncerter og større sammenkomster." },
        { title: "Ejendomme & virksomheder", desc: "Skræddersyede sikkerhedsløsninger til virksomheder, ejendomme og faciliteter, hvor sikkerheden skal være i orden." }
      ]
    },
    statement: {
      label: "VORES LØFTE",
      h2a: "Ro i maven.",
      h2b: "Sikkerhed på plads.",
      p: "Når vores brandvagt står på opgaven, skal du kunne fokusere på resten.",
      cta: "Tal med os"
    },
    whyUs: {
      label: "HVORFOR BRANDVAGT DANMARK",
      h2a: "Mere end en",
      h2b: "brandvagt.",
      p: "Vi mener, at god sikkerhed starter med ansvar, opmærksomhed og mennesker, du kan stole på.",
      benefits: [
        { title: "Professionelle mennesker", desc: "Vi møder op forberedte, professionelle og klar til at tage ansvar." },
        { title: "Fokus på forebyggelse", desc: "Vi arbejder ikke kun med at opdage problemer. Vi arbejder for at forhindre dem." },
        { title: "Fleksible løsninger", desc: "Hver opgave er forskellig. Derfor tilpasser vi løsningen til dig." },
        { title: "Tilgængelig når det gælder", desc: "Vi ved, at sikkerhed ikke altid passer ind i normale arbejdstider." }
      ]
    },
    about: {
      label: "OM OS",
      h2a: "Sikkerhed er ikke",
      h2b: "bare et job.",
      p1: "Brandvagt Danmark er skabt med én klar ambition: at levere en brandvagt, du kan stole på.",
      p2: "Vi kombinerer professionel tilstedeværelse med ansvarlighed og et skarpt blik for de detaljer, der gør forskellen.",
      points: ["Professionel service", "Fokus på sikkerhed", "Fleksible løsninger"],
      numberLabel: "timer",
      caseCaption: "Hos HJM Recycling, Køge",
      caseCaption2: "Hos Egedal Kommune"
    },
    career: {
      label: "KARRIERE",
      navLabel: "Karriere",
      h2a: "Vil du være",
      h2b: "vores næste brandvagt?",
      p: "Vi er altid på udkig efter ansvarsbevidste folk, der tager sikkerhed seriøst. Send din ansøgning, så vender vi hurtigt tilbage.",
      cardTitle: "Send os din ansøgning.",
      cardP: "Skriv lidt om dig selv, og hvorfor du vil være brandvagt hos os.",
      applyBtn: "Send ansøgning"
    },
    contact: {
      label: "KONTAKT",
      h2a: "Har du brug for",
      h2b: "en brandvagt?",
      p: "Fortæl os om din opgave. Vi finder den rigtige løsning sammen med dig.",
      cardTop1: "START HER",
      cardTitleA: "Din sikkerhed",
      cardTitleB: "starter her.",
      cardP: "Kontakt os i dag for en uforpligtende snak om, hvordan vi kan hjælpe.",
      callBtn: "Ring til os"
    },
    footer: {
      taglineA: "Professionel brandvagt.",
      taglineB: "Tryghed, når det betyder mest.",
      menuLabel: "MENU",
      contactLabel: "KONTAKT",
      backToTop: "Til toppen ↑"
    }
  },
  en: {
    nav: { services: "Services", whyUs: "Why us", about: "About us", contact: "Contact", cta: "Get a quote", menuAria: "Open menu" },
    hero: {
      eyebrow: "PROFESSIONAL FIRE WATCH IN DENMARK",
      h1a: "When safety",
      h1b: "cannot fail.",
      description: "Professional fire watch and security for construction sites, events, businesses and properties. We keep watch when it really matters.",
      ctaPrimary: "Book a fire watch",
      ctaSecondary: "See our services",
      trust1: "on standby",
      trust2: "focus on safety",
      trust3: "nationwide",
      scroll: "Scroll to explore",
      callNow: "Call now",
      callAria: "Call Brandvagt Danmark at 81 94 50 76"
    },
    intro: {
      label: "BRANDVAGT DANMARK",
      h2a: "We look after what",
      h2b: "you can't afford to lose.",
      p1: "Fire safety isn't just about reacting. It's about being present before anything goes wrong.",
      p2: "At Brandvagt Danmark, we provide professional fire watch guards who create safety, oversight and security at workplaces, construction sites and events.",
      link: "Learn more about us"
    },
    services: {
      label: "OUR SERVICES",
      h2a: "Security,",
      h2b: "when you need it.",
      subP: "Flexible solutions for situations where fire safety and professional monitoring are essential.",
      cardLink: "Read more",
      cards: [
        { title: "Fire Watch", desc: "Professional monitoring during hot work, temporary risks and situations requiring extra fire safety." },
        { title: "Construction Sites", desc: "Fire watch and security on construction sites, renovations and other work areas with increased fire risk." },
        { title: "Events", desc: "Safety and professional oversight at events, gatherings, concerts and larger assemblies." },
        { title: "Properties & Businesses", desc: "Tailored security solutions for businesses, properties and facilities where safety needs to be in order." }
      ]
    },
    statement: {
      label: "OUR PROMISE",
      h2a: "Peace of mind.",
      h2b: "Security in place.",
      p: "When our fire watch is on the job, you should be able to focus on everything else.",
      cta: "Talk to us"
    },
    whyUs: {
      label: "WHY BRANDVAGT DANMARK",
      h2a: "More than a",
      h2b: "fire watch.",
      p: "We believe good security starts with responsibility, attentiveness and people you can trust.",
      benefits: [
        { title: "Professional people", desc: "We show up prepared, professional and ready to take responsibility." },
        { title: "Focus on prevention", desc: "We don't just work to detect problems. We work to prevent them." },
        { title: "Flexible solutions", desc: "Every job is different. That's why we tailor the solution to you." },
        { title: "Available when it counts", desc: "We know that security doesn't always fit into normal working hours." }
      ]
    },
    about: {
      label: "ABOUT US",
      h2a: "Security isn't",
      h2b: "just a job.",
      p1: "Brandvagt Danmark was created with one clear ambition: to deliver a fire watch you can trust.",
      p2: "We combine a professional presence with accountability and a sharp eye for the details that make the difference.",
      points: ["Professional service", "Focus on safety", "Flexible solutions"],
      numberLabel: "hours",
      caseCaption: "At HJM Recycling, Køge",
      caseCaption2: "For Egedal Kommune"
    },
    career: {
      label: "CAREERS",
      navLabel: "Careers",
      h2a: "Want to be",
      h2b: "our next fire watch?",
      p: "We're always looking for responsible people who take safety seriously. Send your application and we'll get back to you quickly.",
      cardTitle: "Send us your application.",
      cardP: "Tell us a bit about yourself, and why you'd like to work with us.",
      applyBtn: "Send application"
    },
    contact: {
      label: "CONTACT",
      h2a: "Need a",
      h2b: "fire watch?",
      p: "Tell us about your job. We'll find the right solution together.",
      cardTop1: "START HERE",
      cardTitleA: "Your safety",
      cardTitleB: "starts here.",
      cardP: "Contact us today for a no-obligation chat about how we can help.",
      callBtn: "Call us"
    },
    footer: {
      taglineA: "Professional fire watch.",
      taglineB: "Safety, when it matters most.",
      menuLabel: "MENU",
      contactLabel: "CONTACT",
      backToTop: "Back to top ↑"
    }
  }
};

const serviceIcons = [
  `<span class="flame flame-back"><i></i></span>
   <span class="flame flame-mid"><i></i></span>
   <span class="flame flame-core"><i></i></span>`,
  `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
     <rect x="4" y="34" width="22" height="7" rx="3.5" fill="currentColor"/>
     <path d="M9 34 L9 23.5 C9 21.5 10.5 20 12.5 20 L18.5 20 C20.5 20 22 21.5 22 23.5 L22 34 Z" fill="currentColor"/>
     <g class="dig-arm">
       <path d="M16.5 21 L31 12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
       <path d="M31 12 L40 22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
       <path d="M40 22 Q45.5 24 41 30.5 Q36.5 28.5 36.5 24 Z" fill="currentColor"/>
     </g>
   </svg>`,
  `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
     <g class="spotlight-beam">
       <path d="M24 15 L6 41 L42 41 Z" fill="currentColor" opacity="0.14"/>
     </g>
     <rect x="17" y="6" width="14" height="10" rx="2.5" stroke="currentColor" stroke-width="2.2"/>
     <circle cx="24" cy="16" r="2.4" fill="currentColor"/>
   </svg>`,
  `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
     <rect x="29" y="1.5" width="6" height="5" rx="1" stroke="currentColor" stroke-width="1.6"/>
     <rect x="10" y="6" width="28" height="38" rx="1.5" stroke="currentColor" stroke-width="2.2"/>
     <rect class="win" style="animation-delay:0s" x="13.5" y="13" width="5" height="5" fill="currentColor"/>
     <rect class="win" style="animation-delay:.5s" x="21.5" y="13" width="5" height="5" fill="currentColor"/>
     <rect class="win" style="animation-delay:1s" x="29.5" y="13" width="5" height="5" fill="currentColor"/>
     <rect class="win" style="animation-delay:1.5s" x="13.5" y="21.5" width="5" height="5" fill="currentColor"/>
     <rect class="win" style="animation-delay:.2s" x="21.5" y="21.5" width="5" height="5" fill="currentColor"/>
     <rect class="win" style="animation-delay:1.2s" x="29.5" y="21.5" width="5" height="5" fill="currentColor"/>
     <rect class="win" style="animation-delay:.8s" x="13.5" y="30" width="5" height="5" fill="currentColor"/>
     <rect class="win" style="animation-delay:1.4s" x="29.5" y="30" width="5" height="5" fill="currentColor"/>
     <rect x="20.5" y="30" width="7" height="14" rx="1" fill="currentColor"/>
   </svg>`
];

const iconClasses = ["icon-flame", "icon-digger", "icon-spotlight", "icon-building"];

function render(lang) {
  const t = translations[lang];

  return `
  <div class="site">

    <!-- NAVIGATION -->
    <header class="navbar">
      <div class="nav-inner">
        <a href="#top" class="brand" aria-label="Brandvagt Danmark ApS">
          <span class="brand-chip">
            <span class="brand-logo">
              <img src="/assets/brandvagt-shield.png" alt="" class="brand-shield" />
              <span class="brand-wordmark">
                <strong>BRANDVAGT</strong>
                <span class="brand-country">DANMARK</span>
                <span class="brand-suffix">ApS</span>
              </span>
            </span>
          </span>
        </a>

        <nav class="desktop-nav">
          <a href="#services">${t.nav.services}</a>
          <a href="#why-us">${t.nav.whyUs}</a>
          <a href="#about">${t.nav.about}</a>
          <a href="#career">${t.career.navLabel}</a>
          <a href="#contact">${t.nav.contact}</a>
        </nav>

        <div class="lang-switch" role="group" aria-label="Sprog / Language">
          <button type="button" class="lang-btn${lang === "da" ? " active" : ""}" data-lang="da">DA</button>
          <button type="button" class="lang-btn${lang === "en" ? " active" : ""}" data-lang="en">EN</button>
        </div>

        <a href="#contact" class="nav-button">
          ${t.nav.cta}
          <span>↗</span>
        </a>

        <button class="menu-button" id="menuButton" aria-label="${t.nav.menuAria}">
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="mobile-menu" id="mobileMenu">
        <a href="#services">${t.nav.services}</a>
        <a href="#why-us">${t.nav.whyUs}</a>
        <a href="#about">${t.nav.about}</a>
        <a href="#career">${t.career.navLabel}</a>
        <a href="#contact">${t.nav.contact}</a>
        <a href="#contact" class="mobile-cta">${t.nav.cta} →</a>

        <div class="lang-switch lang-switch-mobile" role="group" aria-label="Sprog / Language">
          <button type="button" class="lang-btn${lang === "da" ? " active" : ""}" data-lang="da">Dansk</button>
          <button type="button" class="lang-btn${lang === "en" ? " active" : ""}" data-lang="en">English</button>
        </div>
      </div>
    </header>

    <a href="tel:+4581945076" class="call-fab" aria-label="${t.hero.callAria}">
      <span class="call-fab-ping"></span>
      <span class="call-fab-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" fill="currentColor"/>
        </svg>
      </span>
      <span class="call-fab-text">
        <span class="call-fab-label">${t.hero.callNow}</span>
        <span class="call-fab-number">81 94 50 76</span>
      </span>
    </a>


    <!-- HERO -->
    <main id="top">

      <section class="hero">
        <div class="hero-background" aria-hidden="true">
          <span class="radar-sweep"></span>
          <span class="radar-pulse"></span>
          <span class="radar-pulse"></span>
          <span class="radar-pulse"></span>
          <span class="radar-dot"></span>

          <span class="fire-contact">
            <svg class="fire-aim-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.6"/>
              <line x1="12" y1="1" x2="12" y2="5.5" stroke="currentColor" stroke-width="1.6"/>
              <line x1="12" y1="18.5" x2="12" y2="23" stroke="currentColor" stroke-width="1.6"/>
              <line x1="1" y1="12" x2="5.5" y2="12" stroke="currentColor" stroke-width="1.6"/>
              <line x1="18.5" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="1.6"/>
              <circle class="aim-center-dot" cx="12" cy="12" r="1.6" fill="currentColor"/>
            </svg>
            <span class="fire-corner tl"></span>
            <span class="fire-corner tr"></span>
            <span class="fire-corner bl"></span>
            <span class="fire-corner br"></span>
          </span>
        </div>

        <div class="hero-content">

          <div class="eyebrow">
            <span class="status-dot"></span>
            ${t.hero.eyebrow}
          </div>

          <h1>
            ${t.hero.h1a}
            <span>${t.hero.h1b}</span>
          </h1>

          <p class="hero-description">
            ${t.hero.description}
          </p>

          <div class="hero-actions">
            <a href="#contact" class="button button-primary">
              ${t.hero.ctaPrimary}
              <span>→</span>
            </a>

            <a href="#services" class="button button-secondary">
              ${t.hero.ctaSecondary}
            </a>
          </div>

          <div class="hero-trust">
            <div class="trust-item">
              <strong>24/7</strong>
              <span>${t.hero.trust1}</span>
            </div>

            <div class="trust-line"></div>

            <div class="trust-item">
              <strong>100%</strong>
              <span>${t.hero.trust2}</span>
            </div>

            <div class="trust-line"></div>

            <div class="trust-item">
              <strong>DK</strong>
              <span>${t.hero.trust3}</span>
            </div>
          </div>

        </div>

        <div class="hero-scroll">
          <span>${t.hero.scroll}</span>
          <div class="scroll-line"></div>
        </div>
      </section>


      <!-- INTRO -->
      <section class="intro section">
        <div class="container intro-grid">

          <div class="case-visual">
            <img src="/assets/case-hjm-recycling.jpg" alt="Brandvagt på vagt hos HJM Recycling i Køge" class="case-photo is-active" data-caption="${t.about.caseCaption}" />
            <img src="/assets/case-egedal-kommune.jpg" alt="Brandvagt i aktion for Egedal Kommune" class="case-photo" data-caption="${t.about.caseCaption2}" />

            <div class="case-caption">${t.about.caseCaption}</div>

            <div class="case-dots" aria-hidden="true">
              <span class="case-dot is-active"></span>
              <span class="case-dot"></span>
            </div>

            <div class="case-box">
              <span class="large-number">24</span>
              <span class="number-label">${t.about.numberLabel}</span>
            </div>
          </div>

          <div class="intro-content">
            <div class="section-label">
              <span>01</span>
              <span class="label-line"></span>
              <span>${t.intro.label}</span>
            </div>

            <h2>
              ${t.intro.h2a}
              <em>${t.intro.h2b}</em>
            </h2>

            <p>${t.intro.p1}</p>

            <p>${t.intro.p2}</p>

            <a href="#about" class="text-link">
              ${t.intro.link} <span>→</span>
            </a>
          </div>

        </div>
      </section>


      <!-- SERVICES -->
      <section class="services section" id="services">
        <div class="container">

          <div class="section-header">
            <div>
              <div class="section-label">
                <span>02</span>
                <span class="label-line"></span>
                <span>${t.services.label}</span>
              </div>

              <h2>
                ${t.services.h2a}
                <span>${t.services.h2b}</span>
              </h2>
            </div>

            <p>${t.services.subP}</p>
          </div>


          <div class="service-grid">
            ${t.services.cards.map((card, i) => `
            <article class="service-card${i === 0 ? " featured" : ""}">
              <div class="card-number">0${i + 1}</div>

              <div class="service-icon ${iconClasses[i]}" aria-hidden="true">
                ${serviceIcons[i]}
              </div>

              <h3>${card.title}</h3>

              <p>${card.desc}</p>

              <a href="#contact">
                ${t.services.cardLink} <span>↗</span>
              </a>
            </article>
            `).join("")}
          </div>
        </div>
      </section>


      <!-- DARK STATEMENT -->
      <section class="statement">
        <div class="statement-glow"></div>

        <div class="container statement-content">

          <div class="section-label light">
            <span>03</span>
            <span class="label-line"></span>
            <span>${t.statement.label}</span>
          </div>

          <h2>
            ${t.statement.h2a}
            <br>
            <span>${t.statement.h2b}</span>
          </h2>

          <p>${t.statement.p}</p>

          <a href="#contact" class="button button-light">
            ${t.statement.cta}
            <span>→</span>
          </a>

        </div>
      </section>


      <!-- WHY US -->
      <section class="why-us section" id="why-us">
        <div class="container">

          <div class="section-label">
            <span>04</span>
            <span class="label-line"></span>
            <span>${t.whyUs.label}</span>
          </div>

          <div class="why-grid">

            <div class="why-title">
              <h2>
                ${t.whyUs.h2a}
                <span>${t.whyUs.h2b}</span>
              </h2>

              <p>${t.whyUs.p}</p>
            </div>


            <div class="benefits">
              ${t.whyUs.benefits.map((b, i) => `
              <div class="benefit">
                <div class="benefit-icon">0${i + 1}</div>
                <div>
                  <h3>${b.title}</h3>
                  <p>${b.desc}</p>
                </div>
              </div>
              `).join("")}
            </div>

          </div>
        </div>
      </section>


      <!-- ABOUT -->
      <section class="about section" id="about">
        <div class="container">

          <div class="about-content">

            <div class="section-label">
              <span>05</span>
              <span class="label-line"></span>
              <span>${t.about.label}</span>
            </div>

            <h2>
              ${t.about.h2a}
              <span>${t.about.h2b}</span>
            </h2>

            <p>${t.about.p1}</p>

            <p>${t.about.p2}</p>

            <div class="about-points">
              ${t.about.points.map((point) => `
              <div>
                <span>✓</span>
                ${point}
              </div>
              `).join("")}
            </div>

          </div>

        </div>
      </section>


      <!-- CAREER -->
      <section class="career section" id="career">
        <div class="container career-inner">

          <div class="career-copy">
            <div class="section-label">
              <span>06</span>
              <span class="label-line"></span>
              <span>${t.career.label}</span>
            </div>

            <h2>
              ${t.career.h2a}
              <span>${t.career.h2b}</span>
            </h2>

            <p>${t.career.p}</p>
          </div>

          <div class="career-card">
            <h3>${t.career.cardTitle}</h3>
            <p>${t.career.cardP}</p>

            <a href="mailto:job@brandvagtdanmark.dk?subject=Ansøgning" class="career-button">
              ${t.career.applyBtn}
              <span>→</span>
            </a>

            <a href="mailto:job@brandvagtdanmark.dk" class="email-link">
              job@brandvagtdanmark.dk
            </a>
          </div>

        </div>
      </section>


      <!-- CTA -->
      <section class="contact" id="contact">

        <div class="container contact-inner">

          <div class="contact-copy">
            <div class="section-label light">
              <span>07</span>
              <span class="label-line"></span>
              <span>${t.contact.label}</span>
            </div>

            <h2>
              ${t.contact.h2a}
              <span>${t.contact.h2b}</span>
            </h2>

            <p>${t.contact.p}</p>
          </div>


          <div class="contact-card">

            <div class="contact-card-top">
              <span>${t.contact.cardTop1}</span>
              <span>01 / 01</span>
            </div>

            <h3>
              ${t.contact.cardTitleA}
              ${t.contact.cardTitleB}
            </h3>

            <p>${t.contact.cardP}</p>

            <a href="tel:+4581945076" class="contact-button">
              ${t.contact.callBtn}
              <span>→</span>
            </a>

            <a href="mailto:kontakt@brandvagtdanmark.dk" class="email-link">
              kontakt@brandvagtdanmark.dk
            </a>

          </div>

        </div>

      </section>

    </main>


    <!-- FOOTER -->
    <footer class="footer">

      <div class="container">

        <div class="footer-top">

          <div class="footer-brand">

            <div class="brand" aria-label="Brandvagt Danmark ApS">
              <span class="brand-chip">
                <span class="brand-logo">
                  <img src="/assets/brandvagt-shield.png" alt="" class="brand-shield" />
                  <span class="brand-wordmark">
                    <strong>BRANDVAGT</strong>
                    <span class="brand-country">DANMARK</span>
                    <span class="brand-suffix">ApS</span>
                  </span>
                </span>
              </span>
            </div>

            <p>
              ${t.footer.taglineA}
              <br>
              ${t.footer.taglineB}
            </p>

          </div>


          <div class="footer-links">

            <div>
              <span>${t.footer.menuLabel}</span>
              <a href="#services">${t.nav.services}</a>
              <a href="#why-us">${t.nav.whyUs}</a>
              <a href="#about">${t.nav.about}</a>
              <a href="#career">${t.career.navLabel}</a>
              <a href="#contact">${t.nav.contact}</a>
            </div>

            <div>
              <span>${t.footer.contactLabel}</span>
              <a href="tel:+4581945076">+45 81 94 50 76</a>
              <a href="mailto:kontakt@brandvagtdanmark.dk">
                kontakt@brandvagtdanmark.dk
              </a>
            </div>

          </div>

        </div>


        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Brandvagt Danmark</span>

          <a href="#top">
            ${t.footer.backToTop}
          </a>
        </div>

      </div>

    </footer>

  </div>
  `;
}

function mount(lang) {
  document.documentElement.lang = lang;
  app.innerHTML = render(lang);


  /* LANGUAGE SWITCH */

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = btn.getAttribute("data-lang");
      if (chosen === lang) return;
      localStorage.setItem("bv-lang", chosen);
      mount(chosen);
    });
  });


  /* MOBILE MENU */

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.classList.remove("active");
      mobileMenu.classList.remove("open");
    });
  });


  /* SMOOTH SCROLL */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {

      const target = document.querySelector(
        this.getAttribute("href")
      );

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    });
  });


  /* NAVBAR EFFECT */

  const navbar = document.querySelector(".navbar");

  navbar.classList.toggle("scrolled", window.scrollY > 40);

  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  });


  /* RADAR DETECTION SPOT (desktop only, moves on its own) */

  syncRadarPosition();


  /* CASE-PHOTO CAROUSEL */

  setupCaseCarousel();
}


let caseCarouselTimer = null;

function setupCaseCarousel() {
  const photos = Array.from(document.querySelectorAll(".case-photo"));
  const captionEl = document.querySelector(".case-caption");
  const dots = Array.from(document.querySelectorAll(".case-dot"));
  if (photos.length < 2) return;

  if (caseCarouselTimer) {
    clearInterval(caseCarouselTimer);
  }

  let index = 0;
  const DURATION = 5200;

  function activate(nextIndex) {
    photos[index].classList.remove("is-active");
    if (dots[index]) dots[index].classList.remove("is-active");

    const next = photos[nextIndex];
    next.style.transition = "none";
    next.style.transform = "scale(1)";
    void next.offsetWidth;
    next.style.transition = "";
    next.classList.add("is-active");
    if (dots[nextIndex]) dots[nextIndex].classList.add("is-active");

    if (captionEl) {
      captionEl.style.opacity = "0";
      setTimeout(() => {
        captionEl.textContent = next.dataset.caption || "";
        captionEl.style.opacity = "1";
      }, 250);
    }

    index = nextIndex;
  }

  function start() {
    if (caseCarouselTimer) clearInterval(caseCarouselTimer);
    caseCarouselTimer = setInterval(() => {
      activate((index + 1) % photos.length);
    }, DURATION);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      activate(i);
      start();
    });
  });

  start();
}


const RADAR_CYCLE_MS = 5500;
const RADAR_VISIBLE_START_MS = RADAR_CYCLE_MS * 0.1;

const RADAR_POSITIONS = [
  { top: 38, left: 32, delay: -1.411, angle: 303.69 },
  { top: 60, left: 35, delay: -2.439, angle: 236.31 },
  { top: 30, left: 45, delay: -0.765, angle: 345.96 }
];

let currentRadarPos = null;
let radarIntervalStarted = false;

function isDesktopRadar() {
  return window.innerWidth > 900;
}

function getSweepAngleDeg() {
  const sweep = document.querySelector(".radar-sweep");
  if (!sweep) return null;
  const anims = sweep.getAnimations();
  if (!anims.length) return null;
  const progress = (anims[0].currentTime % RADAR_CYCLE_MS) / RADAR_CYCLE_MS;
  return progress * 360;
}

function syncRadarPosition() {
  const fireContact = document.querySelector(".fire-contact");
  if (!fireContact) return;

  if (!isDesktopRadar()) {
    fireContact.style.top = "";
    fireContact.style.left = "";
    fireContact.style.animation = "";
    fireContact.style.animationDelay = "";
    fireContact.querySelectorAll(".fire-corner").forEach((corner) => {
      corner.style.animation = "";
      corner.style.animationDelay = "";
    });
    fireContact.dataset.radarPositioned = "";
    currentRadarPos = null;
    return;
  }

  if (fireContact.dataset.radarPositioned === "true") return;

  const pos = RADAR_POSITIONS[Math.floor(Math.random() * RADAR_POSITIONS.length)];
  currentRadarPos = pos;

  fireContact.style.top = `${pos.top}%`;
  fireContact.style.left = `${pos.left}%`;
  fireContact.style.animationDelay = `${pos.delay}s`;
  fireContact.querySelectorAll(".fire-corner").forEach((corner) => {
    corner.style.animationDelay = `${pos.delay}s`;
  });
  fireContact.dataset.radarPositioned = "true";

  if (!radarIntervalStarted) {
    radarIntervalStarted = true;
    scheduleNextRadarSwitch(RADAR_CYCLE_MS);
  }
}

let radarSwitchTimer = null;

function scheduleNextRadarSwitch(delay) {
  if (radarSwitchTimer) clearTimeout(radarSwitchTimer);
  radarSwitchTimer = setTimeout(switchRadarPosition, delay);
}

function switchRadarPosition() {
  const fireContact = document.querySelector(".fire-contact");
  if (!fireContact || !isDesktopRadar()) {
    scheduleNextRadarSwitch(RADAR_CYCLE_MS);
    return;
  }

  const currentAngle = getSweepAngleDeg();
  if (currentAngle === null) {
    scheduleNextRadarSwitch(RADAR_CYCLE_MS);
    return;
  }

  const choices = RADAR_POSITIONS.filter((p) => p !== currentRadarPos);
  const pos = choices[Math.floor(Math.random() * choices.length)];
  currentRadarPos = pos;

  const timeToTarget = (((pos.angle - currentAngle + 360) % 360) / 360) * RADAR_CYCLE_MS;
  const delayMs = timeToTarget - RADAR_VISIBLE_START_MS;

  fireContact.style.top = `${pos.top}%`;
  fireContact.style.left = `${pos.left}%`;

  const corners = fireContact.querySelectorAll(".fire-corner");
  fireContact.style.animation = "none";
  corners.forEach((corner) => { corner.style.animation = "none"; });
  void fireContact.offsetWidth;
  fireContact.style.animation = `fire-detect-cycle ${RADAR_CYCLE_MS}ms ease-in-out infinite`;
  fireContact.style.animationDelay = `${delayMs}ms`;
  corners.forEach((corner) => {
    corner.style.animation = `fire-lock ${RADAR_CYCLE_MS}ms ease-in-out infinite`;
    corner.style.animationDelay = `${delayMs}ms`;
  });

  // Wait for this cycle's full show-then-hide loop to finish naturally
  // before switching again, instead of cutting it off on a fixed timer.
  scheduleNextRadarSwitch(delayMs + RADAR_CYCLE_MS);
}

window.addEventListener("resize", syncRadarPosition);


const savedLang = localStorage.getItem("bv-lang");
const initialLang = savedLang === "en" ? "en" : "da";

mount(initialLang);
