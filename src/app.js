const app = document.getElementById("app");

const translations = {
  da: {
    nav: { home: "Forside", services: "Ydelser", whyUs: "Hvorfor os", about: "Om os", contact: "Kontakt", cta: "Få et tilbud", menuAria: "Åbn menu" },
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
      link: "Lær mere om os",
      watchLabel: "Altid på vagt"
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
      badgeLabel: "Pålidelig 24/7",
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
      caseCaption: "Hos HJM Recycling",
      caseCaption2: "Hos Egedal Kommune",
      caseCaption3: "Hos Arla",
      badgeLabel: "Bygget på tillid"
    },
    career: {
      label: "KARRIERE",
      navLabel: "Karriere",
      h2a: "Vil du være",
      h2b: "vores næste brandvagt?",
      p: "Vi er altid på udkig efter ansvarsbevidste folk, der tager sikkerhed seriøst. Send din ansøgning, så vender vi hurtigt tilbage.",
      cardTitle: "Send os din ansøgning.",
      cardP: "Skriv lidt om dig selv, og hvorfor du vil være brandvagt hos os.",
      applyBtn: "Send ansøgning",
      badgeLabel: "Bliv en del af holdet"
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
      callBtn: "Ring til os",
      badgeLabel: "Vi svarer hurtigt"
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
    nav: { home: "Home", services: "Services", whyUs: "Why us", about: "About us", contact: "Contact", cta: "Get a quote", menuAria: "Open menu" },
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
      link: "Learn more about us",
      watchLabel: "Always on watch"
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
      badgeLabel: "Reliable 24/7",
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
      caseCaption: "At HJM Recycling",
      caseCaption2: "For Egedal Kommune",
      caseCaption3: "At Arla",
      badgeLabel: "Built on trust"
    },
    career: {
      label: "CAREERS",
      navLabel: "Careers",
      h2a: "Want to be",
      h2b: "our next fire watch?",
      p: "We're always looking for responsible people who take safety seriously. Send your application and we'll get back to you quickly.",
      cardTitle: "Send us your application.",
      cardP: "Tell us a bit about yourself, and why you'd like to work with us.",
      applyBtn: "Send application",
      badgeLabel: "Join the team"
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
      callBtn: "Call us",
      badgeLabel: "We respond fast"
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

const PAGE_SLUGS = {
  services: "ydelser",
  "why-us": "hvorfor-os",
  about: "om-os",
  career: "karriere",
  contact: "kontakt"
};

function pagePath(key) {
  return key === "home" ? "/" : `/${PAGE_SLUGS[key]}`;
}

function getPageKey() {
  const path = window.location.pathname.replace(/\.html$/, "");
  const slug = path.split("/").filter(Boolean).pop() || "";
  const bySlug = Object.entries(PAGE_SLUGS).find(([, s]) => s === slug);
  return bySlug ? bySlug[0] : "home";
}

function renderNavbar(lang, t) {
  return `
    <header class="navbar">
      <div class="nav-inner">
        <a href="${pagePath("home")}" class="brand" aria-label="Brandvagt Danmark ApS">
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
          <a href="${pagePath("home")}">${t.nav.home}</a>
          <a href="${pagePath("services")}">${t.nav.services}</a>
          <a href="${pagePath("why-us")}">${t.nav.whyUs}</a>
          <a href="${pagePath("about")}">${t.nav.about}</a>
          <a href="${pagePath("career")}">${t.career.navLabel}</a>
          <a href="${pagePath("contact")}">${t.nav.contact}</a>
        </nav>

        <div class="lang-switch" role="group" aria-label="Sprog / Language">
          <button type="button" class="lang-btn${lang === "da" ? " active" : ""}" data-lang="da">DA</button>
          <button type="button" class="lang-btn${lang === "en" ? " active" : ""}" data-lang="en">EN</button>
        </div>

        <a href="${pagePath("contact")}" class="nav-button">
          ${t.nav.cta}
          <span>↗</span>
        </a>

        <button class="menu-button" id="menuButton" aria-label="${t.nav.menuAria}">
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="mobile-menu" id="mobileMenu">
        <a href="${pagePath("home")}">${t.nav.home}</a>
        <a href="${pagePath("services")}">${t.nav.services}</a>
        <a href="${pagePath("why-us")}">${t.nav.whyUs}</a>
        <a href="${pagePath("about")}">${t.nav.about}</a>
        <a href="${pagePath("career")}">${t.career.navLabel}</a>
        <a href="${pagePath("contact")}">${t.nav.contact}</a>
        <a href="${pagePath("contact")}" class="mobile-cta">${t.nav.cta} →</a>

        <div class="lang-switch lang-switch-mobile" role="group" aria-label="Sprog / Language">
          <button type="button" class="lang-btn${lang === "da" ? " active" : ""}" data-lang="da">Dansk</button>
          <button type="button" class="lang-btn${lang === "en" ? " active" : ""}" data-lang="en">English</button>
        </div>
      </div>
    </header>
  `;
}

function renderCallFab(t) {
  return `
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
  `;
}

function renderHomeMain(t) {
  return `
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
            <a href="${pagePath("contact")}" class="button button-primary">
              ${t.hero.ctaPrimary}
              <span>→</span>
            </a>

            <a href="${pagePath("services")}" class="button button-secondary">
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

          <div class="intro-visual">
            <svg viewBox="0 0 520 540" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <radialGradient id="shieldGlow" cx="50%" cy="40%" r="55%">
                  <stop offset="0%" stop-color="#d20a2e" stop-opacity="0.4"/>
                  <stop offset="100%" stop-color="#d20a2e" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="shieldFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#ff6b7a"/>
                  <stop offset="55%" stop-color="#d20a2e"/>
                  <stop offset="100%" stop-color="#ad0624"/>
                </linearGradient>
              </defs>

              <rect width="520" height="540" fill="#151515"/>

              <circle cx="260" cy="215" r="220" fill="url(#shieldGlow)"/>
              <circle class="intro-ring" cx="260" cy="215" r="155" fill="none" stroke="#ffffff" stroke-opacity="0.09" stroke-width="1"/>
              <circle class="intro-ring" cx="260" cy="215" r="108" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1"/>
              <circle class="intro-heartbeat" cx="260" cy="215" r="110" fill="url(#shieldGlow)"/>

              <path d="M260 85 L342 114 V208 C342 270 306 313 260 332 C214 313 178 270 178 208 V114 Z" fill="url(#shieldFill)"/>
              <rect x="248" y="136" width="24" height="132" fill="#fff"/>
              <rect x="204" y="180" width="112" height="24" fill="#fff"/>

              <g fill="#0b0b0b">
                <rect x="0" y="438" width="58" height="102"/>
                <rect x="62" y="405" width="48" height="135"/>
                <rect x="116" y="458" width="44" height="82"/>
                <rect x="166" y="392" width="54" height="148"/>
                <rect x="226" y="428" width="58" height="112"/>
                <rect x="290" y="402" width="48" height="138"/>
                <rect x="344" y="448" width="44" height="92"/>
                <rect x="394" y="418" width="58" height="122"/>
                <rect x="458" y="458" width="54" height="82"/>
              </g>

              <g class="intro-windows" fill="var(--red)">
                <rect x="12" y="458" width="6" height="8"/>
                <rect x="32" y="478" width="6" height="8"/>
                <rect x="78" y="428" width="6" height="8"/>
                <rect x="98" y="460" width="6" height="8"/>
                <rect x="184" y="418" width="6" height="8"/>
                <rect x="184" y="446" width="6" height="8"/>
                <rect x="244" y="458" width="6" height="8"/>
                <rect x="308" y="428" width="6" height="8"/>
                <rect x="308" y="456" width="6" height="8"/>
                <rect x="412" y="448" width="6" height="8"/>
              </g>
            </svg>

            <div class="intro-visual-badge">
              <span class="intro-visual-dot"></span>
              ${t.intro.watchLabel}
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

            <a href="${pagePath("about")}" class="text-link">
              ${t.intro.link} <span>→</span>
            </a>
          </div>

        </div>
      </section>


      <!-- DARK STATEMENT -->
      <section class="statement">
        <div class="statement-glow"></div>

        <div class="container statement-content">

          <div class="section-label light">
            <span>—</span>
            <span class="label-line"></span>
            <span>${t.statement.label}</span>
          </div>

          <h2>
            ${t.statement.h2a}
            <br>
            <span>${t.statement.h2b}</span>
          </h2>

          <p>${t.statement.p}</p>

          <a href="${pagePath("contact")}" class="button button-light">
            ${t.statement.cta}
            <span>→</span>
          </a>

        </div>
      </section>
  `;
}

function renderServicesMain(t) {
  return `
      <!-- SERVICES -->
      <section class="services section" id="services">
        <div class="container">

          <div class="section-header">
            <div>
              <div class="section-label">
                <span>01</span>
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

              <a href="${pagePath("contact")}">
                ${t.services.cardLink} <span>↗</span>
              </a>
            </article>
            `).join("")}
          </div>
        </div>
      </section>
  `;
}

function shieldEmblem(sceneSvg) {
  return `
      <svg viewBox="0 0 520 540" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="shieldGlow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#d20a2e" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#d20a2e" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="shieldFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ff6b7a"/>
            <stop offset="55%" stop-color="#d20a2e"/>
            <stop offset="100%" stop-color="#ad0624"/>
          </linearGradient>
        </defs>

        <rect width="520" height="540" fill="#151515"/>

        <circle cx="260" cy="215" r="220" fill="url(#shieldGlow)"/>
        <circle class="gfx-ring" cx="260" cy="215" r="155" fill="none" stroke="#ffffff" stroke-opacity="0.09" stroke-width="1"/>
        <circle class="gfx-ring" cx="260" cy="215" r="108" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1"/>

        <path d="M260 85 L342 114 V208 C342 270 306 313 260 332 C214 313 178 270 178 208 V114 Z" fill="url(#shieldFill)"/>
        <rect x="248" y="136" width="24" height="132" fill="#fff"/>
        <rect x="204" y="180" width="112" height="24" fill="#fff"/>

        ${sceneSvg}
      </svg>
  `;
}

function gfxBadge(className, text) {
  return `
      <div class="${className}">
        <span class="gfx-badge-dot"></span>
        ${text}
      </div>
  `;
}

function iconCard(sceneSvg) {
  return `
      <svg viewBox="0 0 520 540" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="cardGlow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stop-color="#d20a2e" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#d20a2e" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="accentFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ff6b7a"/>
            <stop offset="55%" stop-color="#d20a2e"/>
            <stop offset="100%" stop-color="#ad0624"/>
          </linearGradient>
        </defs>

        <rect width="520" height="540" fill="#151515"/>
        <circle cx="260" cy="270" r="230" fill="url(#cardGlow)"/>

        ${sceneSvg}
      </svg>
  `;
}

const whyUsScene = `
        <circle cx="260" cy="270" r="175" fill="none" stroke="#ffffff" stroke-opacity="0.16" stroke-width="3"/>
        <circle cx="260" cy="270" r="150" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>

        <line x1="260.0" y1="112.0" x2="260.0" y2="95.0" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="339.0" y1="133.2" x2="347.5" y2="118.4" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="396.8" y1="191.0" x2="411.6" y2="182.5" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="418.0" y1="270.0" x2="435.0" y2="270.0" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="396.8" y1="349.0" x2="411.6" y2="357.5" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="339.0" y1="406.8" x2="347.5" y2="421.6" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="260.0" y1="428.0" x2="260.0" y2="445.0" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="181.0" y1="406.8" x2="172.5" y2="421.6" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="123.2" y1="349.0" x2="108.4" y2="357.5" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="102.0" y1="270.0" x2="85.0" y2="270.0" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="123.2" y1="191.0" x2="108.4" y2="182.5" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>
        <line x1="181.0" y1="133.2" x2="172.5" y2="118.4" stroke="#ffffff" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round"/>

        <line x1="260" y1="270" x2="215" y2="325" stroke="#ffffff" stroke-width="9" stroke-linecap="round"/>
        <g class="clock-minute">
          <line x1="260" y1="270" x2="260" y2="128" stroke="url(#accentFill)" stroke-width="11" stroke-linecap="round"/>
        </g>
        <circle cx="260" cy="270" r="11" fill="var(--red)"/>
`;

const aboutScene = `
        <circle cx="260" cy="240" r="140" fill="url(#accentFill)"/>
        <circle cx="260" cy="240" r="116" fill="none" stroke="#ffffff" stroke-opacity="0.35" stroke-width="3"/>

        <path d="M235 340 L265 340 L265 462 L250 440 L235 462 Z" fill="#ad0624"/>
        <path d="M255 340 L285 340 L285 462 L270 440 L255 462 Z" fill="var(--red)"/>

        <path d="M205 240 L242 278 L318 190" fill="none" stroke="#ffffff" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>

        <clipPath id="sealClip">
          <circle cx="260" cy="240" r="140"/>
        </clipPath>
        <g clip-path="url(#sealClip)">
          <rect class="seal-shine" x="-40" y="60" width="70" height="360" fill="#ffffff" fill-opacity="0.3" transform="rotate(22 260 240)"/>
        </g>
`;

const careerScene = `
        <path d="M240 130 L296 220 L184 220 Z" fill="url(#accentFill)"/>
        <rect x="204" y="220" width="112" height="190" rx="18" fill="var(--cream)"/>
        <circle cx="260" cy="278" r="26" fill="#151515"/>
        <circle cx="260" cy="278" r="26" fill="none" stroke="#ffffff" stroke-opacity="0.5" stroke-width="3"/>
        <path d="M204 350 L160 410 L204 410 Z" fill="var(--red)"/>
        <path d="M316 350 L360 410 L316 410 Z" fill="var(--red)"/>

        <path class="rocket-flame" d="M232 410 L260 480 L288 410 Z" fill="url(#accentFill)"/>

        <circle class="rocket-spark" cx="245" cy="460" r="5" fill="var(--red)" style="animation-delay:0s"/>
        <circle class="rocket-spark" cx="275" cy="465" r="4" fill="#ffffff" fill-opacity="0.6" style="animation-delay:0.5s"/>
        <circle class="rocket-spark" cx="260" cy="470" r="5" fill="var(--red)" style="animation-delay:1s"/>
        <circle class="rocket-spark" cx="230" cy="475" r="3" fill="#ffffff" fill-opacity="0.6" style="animation-delay:1.5s"/>
`;

const contactScene = `
        <path class="contact-arc" d="M210 250 A 50 50 0 0 1 310 250" fill="none" stroke="#ffffff" stroke-width="3" style="animation-delay:0s"/>
        <path class="contact-arc" d="M175 250 A 85 85 0 0 1 345 250" fill="none" stroke="#ffffff" stroke-width="3" style="animation-delay:0.4s"/>
        <path class="contact-arc" d="M140 250 A 120 120 0 0 1 380 250" fill="none" stroke="#ffffff" stroke-width="3" style="animation-delay:0.8s"/>

        <rect x="190" y="250" width="140" height="260" rx="26" fill="#1c1c1c" stroke="#ffffff" stroke-opacity="0.12" stroke-width="2"/>
        <rect x="210" y="278" width="100" height="170" rx="10" fill="url(#accentFill)"/>
        <rect x="245" y="465" width="30" height="6" rx="3" fill="#ffffff" fill-opacity="0.4"/>
        <g transform="rotate(-30 260 363)">
          <rect x="242" y="303" width="36" height="120" rx="18" fill="#ffffff"/>
          <circle cx="260" cy="308" r="22" fill="#ffffff"/>
          <circle cx="260" cy="418" r="22" fill="#ffffff"/>
        </g>
`;

function renderWhyUsMain(t) {
  return `
      <!-- WHY US -->
      <section class="why-us section" id="why-us">
        <div class="container">

          <div class="section-label">
            <span>02</span>
            <span class="label-line"></span>
            <span>${t.whyUs.label}</span>
          </div>

          <div class="why-grid">

            <div class="why-visual gfx-visual">
              ${iconCard(whyUsScene)}
              ${gfxBadge("gfx-badge", t.whyUs.badgeLabel)}
            </div>

            <div class="why-body">

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
        </div>
      </section>
  `;
}

function renderAboutMain(t) {
  return `
      <!-- ABOUT -->
      <section class="about section" id="about">
        <div class="container">

          <div class="about-grid">

            <div class="about-visual gfx-visual">
              ${iconCard(aboutScene)}
              ${gfxBadge("gfx-badge", t.about.badgeLabel)}
            </div>

            <div class="about-content">

              <div class="section-label">
                <span>03</span>
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

        </div>
      </section>
  `;
}

function renderCareerMain(t) {
  return `
      <!-- CAREER -->
      <section class="career section" id="career">
        <div class="container career-inner">

          <div class="career-visual gfx-visual">
            ${iconCard(careerScene)}
            ${gfxBadge("gfx-badge", t.career.badgeLabel)}
          </div>

          <div class="career-body">

            <div class="career-copy">
              <div class="section-label">
                <span>04</span>
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

        </div>
      </section>
  `;
}

function renderContactMain(t) {
  return `
      <!-- CTA -->
      <section class="contact" id="contact">

        <div class="container contact-inner">

          <div class="contact-visual gfx-visual">
            ${iconCard(contactScene)}
            ${gfxBadge("gfx-badge", t.contact.badgeLabel)}
          </div>

          <div class="contact-body">

            <div class="contact-copy">
              <div class="section-label light">
                <span>05</span>
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

        </div>

      </section>
  `;
}

const PAGE_MAIN_RENDERERS = {
  home: renderHomeMain,
  services: renderServicesMain,
  "why-us": renderWhyUsMain,
  about: renderAboutMain,
  career: renderCareerMain,
  contact: renderContactMain
};

function renderFooter(lang, t) {
  return `
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
              <a href="${pagePath("services")}">${t.nav.services}</a>
              <a href="${pagePath("why-us")}">${t.nav.whyUs}</a>
              <a href="${pagePath("about")}">${t.nav.about}</a>
              <a href="${pagePath("career")}">${t.career.navLabel}</a>
              <a href="${pagePath("contact")}">${t.nav.contact}</a>
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
  `;
}

function render(lang) {
  const t = translations[lang];
  const page = getPageKey();
  const renderMain = PAGE_MAIN_RENDERERS[page] || PAGE_MAIN_RENDERERS.home;

  return `
  <div class="site">

    ${renderNavbar(lang, t)}

    ${renderCallFab(t)}

    <main id="top">
      ${renderMain(t)}
    </main>

    ${renderFooter(lang, t)}

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


  /* SMOOTH SCROLL (in-page anchors only, e.g. #top) */

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


  /* RADAR DETECTION SPOT (home page only, desktop only, moves on its own) */

  syncRadarPosition();
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
