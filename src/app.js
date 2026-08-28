const app = document.getElementById("app");

app.innerHTML = `
  <div class="site">

    <!-- NAVIGATION -->
    <header class="navbar">
      <div class="nav-inner">
        <a href="#top" class="brand">
          <img src="/public/brandvagt-logo.png" alt="Brandvagt Danmark" class="brand-logo" />
        </a>

        <nav class="desktop-nav">
          <a href="#services">Ydelser</a>
          <a href="#why-us">Hvorfor os</a>
          <a href="#about">Om os</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <a href="#contact" class="nav-button">
          Få et tilbud
          <span>↗</span>
        </a>

        <button class="menu-button" id="menuButton" aria-label="Åbn menu">
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="mobile-menu" id="mobileMenu">
        <a href="#services">Ydelser</a>
        <a href="#why-us">Hvorfor os</a>
        <a href="#about">Om os</a>
        <a href="#contact">Kontakt</a>
        <a href="#contact" class="mobile-cta">Få et tilbud →</a>
      </div>
    </header>


    <!-- HERO -->
    <main id="top">

      <section class="hero">
        <div class="hero-background"></div>

        <div class="hero-content">

          <div class="eyebrow">
            <span class="status-dot"></span>
            PROFESSIONEL BRANDVAGT I DANMARK
          </div>

          <h1>
            Når sikkerheden
            <span>ikke må svigte.</span>
          </h1>

          <p class="hero-description">
            Professionel brandvagt og sikkerhed til byggepladser,
            arrangementer, virksomheder og ejendomme.
            Vi holder øje, når det virkelig betyder noget.
          </p>

          <div class="hero-actions">
            <a href="#contact" class="button button-primary">
              Book en brandvagt
              <span>→</span>
            </a>

            <a href="#services" class="button button-secondary">
              Se vores ydelser
            </a>
          </div>

          <div class="hero-trust">
            <div class="trust-item">
              <strong>24/7</strong>
              <span>beredskab</span>
            </div>

            <div class="trust-line"></div>

            <div class="trust-item">
              <strong>100%</strong>
              <span>fokus på sikkerhed</span>
            </div>

            <div class="trust-line"></div>

            <div class="trust-item">
              <strong>DK</strong>
              <span>landsdækkende</span>
            </div>
          </div>

        </div>

        <div class="hero-scroll">
          <span>Scroll for at udforske</span>
          <div class="scroll-line"></div>
        </div>
      </section>


      <!-- INTRO -->
      <section class="intro section">
        <div class="container intro-grid">

          <div class="section-label">
            <span>01</span>
            <span class="label-line"></span>
            <span>BRANDVAGT DANMARK</span>
          </div>

          <div class="intro-content">
            <h2>
              Vi passer på det,
              <em>du ikke har råd til at miste.</em>
            </h2>

            <p>
              Brand handler ikke kun om at reagere.
              Det handler om at være til stede, før noget går galt.
            </p>

            <p>
              Hos Brandvagt Danmark leverer vi professionelle
              brandvagter, der skaber tryghed, overblik og sikkerhed
              på arbejdspladser, byggepladser og ved arrangementer.
            </p>

            <a href="#about" class="text-link">
              Lær mere om os <span>→</span>
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
                <span>VORES YDELSER</span>
              </div>

              <h2>
                Sikkerhed,
                <span>når du har brug for den.</span>
              </h2>
            </div>

            <p>
              Fleksible løsninger til situationer,
              hvor brandsikkerhed og professionel overvågning
              er afgørende.
            </p>
          </div>


          <div class="service-grid">

            <article class="service-card featured">
              <div class="card-number">01</div>

              <div class="service-icon">
                🔥
              </div>

              <h3>Brandvagt</h3>

              <p>
                Professionel overvågning ved varmt arbejde,
                midlertidige risici og situationer,
                hvor der kræves ekstra brandsikkerhed.
              </p>

              <a href="#contact">
                Læs mere <span>↗</span>
              </a>
            </article>


            <article class="service-card">
              <div class="card-number">02</div>

              <div class="service-icon">
                🏗
              </div>

              <h3>Byggepladser</h3>

              <p>
                Brandvagt og sikkerhed på byggepladser,
                renoveringer og andre arbejdsområder
                med øget brandrisiko.
              </p>

              <a href="#contact">
                Læs mere <span>↗</span>
              </a>
            </article>


            <article class="service-card">
              <div class="card-number">03</div>

              <div class="service-icon">
                🎪
              </div>

              <h3>Events & arrangementer</h3>

              <p>
                Tryghed og professionelt opsyn ved
                events, arrangementer, koncerter og
                større sammenkomster.
              </p>

              <a href="#contact">
                Læs mere <span>↗</span>
              </a>
            </article>


            <article class="service-card">
              <div class="card-number">04</div>

              <div class="service-icon">
                🏢
              </div>

              <h3>Ejendomme & virksomheder</h3>

              <p>
                Skræddersyede sikkerhedsløsninger til
                virksomheder, ejendomme og faciliteter,
                hvor sikkerheden skal være i orden.
              </p>

              <a href="#contact">
                Læs mere <span>↗</span>
              </a>
            </article>

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
            <span>VORES LØFTE</span>
          </div>

          <h2>
            Ro i maven.
            <br>
            <span>Sikkerhed på plads.</span>
          </h2>

          <p>
            Når vores brandvagt står på opgaven,
            skal du kunne fokusere på resten.
          </p>

          <a href="#contact" class="button button-light">
            Tal med os
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
            <span>HVORFOR BRANDVAGT DANMARK</span>
          </div>

          <div class="why-grid">

            <div class="why-title">
              <h2>
                Mere end en
                <span>brandvagt.</span>
              </h2>

              <p>
                Vi mener, at god sikkerhed starter med
                ansvar, opmærksomhed og mennesker,
                du kan stole på.
              </p>
            </div>


            <div class="benefits">

              <div class="benefit">
                <div class="benefit-icon">01</div>
                <div>
                  <h3>Professionelle mennesker</h3>
                  <p>
                    Vi møder op forberedte, professionelle
                    og klar til at tage ansvar.
                  </p>
                </div>
              </div>

              <div class="benefit">
                <div class="benefit-icon">02</div>
                <div>
                  <h3>Fokus på forebyggelse</h3>
                  <p>
                    Vi arbejder ikke kun med at opdage
                    problemer. Vi arbejder for at forhindre dem.
                  </p>
                </div>
              </div>

              <div class="benefit">
                <div class="benefit-icon">03</div>
                <div>
                  <h3>Fleksible løsninger</h3>
                  <p>
                    Hver opgave er forskellig.
                    Derfor tilpasser vi løsningen til dig.
                  </p>
                </div>
              </div>

              <div class="benefit">
                <div class="benefit-icon">04</div>
                <div>
                  <h3>Tilgængelig når det gælder</h3>
                  <p>
                    Vi ved, at sikkerhed ikke altid
                    passer ind i normale arbejdstider.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      <!-- ABOUT -->
      <section class="about section" id="about">
        <div class="container about-grid">

          <div class="about-visual">
            <div class="about-box">
              <span class="large-number">24</span>
              <span class="number-label">timer</span>
            </div>

            <div class="about-circle">
              <span>BRANDVAGT</span>
              <span>DANMARK</span>
            </div>
          </div>


          <div class="about-content">

            <div class="section-label">
              <span>05</span>
              <span class="label-line"></span>
              <span>OM OS</span>
            </div>

            <h2>
              Sikkerhed er ikke
              <span>bare et job.</span>
            </h2>

            <p>
              Brandvagt Danmark er skabt med én klar ambition:
              at levere en brandvagt, du kan stole på.
            </p>

            <p>
              Vi kombinerer professionel tilstedeværelse
              med ansvarlighed og et skarpt blik for de
              detaljer, der gør forskellen.
            </p>

            <div class="about-points">
              <div>
                <span>✓</span>
                Professionel service
              </div>

              <div>
                <span>✓</span>
                Fokus på sikkerhed
              </div>

              <div>
                <span>✓</span>
                Fleksible løsninger
              </div>
            </div>

          </div>

        </div>
      </section>


      <!-- CTA -->
      <section class="contact" id="contact">

        <div class="container contact-inner">

          <div class="contact-copy">
            <div class="section-label light">
              <span>06</span>
              <span class="label-line"></span>
              <span>KONTAKT</span>
            </div>

            <h2>
              Har du brug for
              <span>en brandvagt?</span>
            </h2>

            <p>
              Fortæl os om din opgave.
              Vi finder den rigtige løsning sammen med dig.
            </p>
          </div>


          <div class="contact-card">

            <div class="contact-card-top">
              <span>START HER</span>
              <span>01 / 01</span>
            </div>

            <h3>
              Få et uforpligtende
              tilbud.
            </h3>

            <p>
              Kontakt os i dag og hør,
              hvordan vi kan hjælpe.
            </p>

            <a href="tel:+4512345678" class="contact-button">
              Ring til os
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

            <div class="brand">
              <div class="footer-logo">
                <img src="/public/brandvagt-logo.png" alt="Brandvagt Danmark" class="brand-logo" />
              </div>
            </div>

            <p>
              Professionel brandvagt.
              <br>
              Tryghed, når det betyder mest.
            </p>

          </div>


          <div class="footer-links">

            <div>
              <span>MENU</span>
              <a href="#services">Ydelser</a>
              <a href="#why-us">Hvorfor os</a>
              <a href="#about">Om os</a>
              <a href="#contact">Kontakt</a>
            </div>

            <div>
              <span>KONTAKT</span>
              <a href="tel:+4512345678">+45 12 34 56 78</a>
              <a href="mailto:kontakt@brandvagtdanmark.dk">
                kontakt@brandvagtdanmark.dk
              </a>
            </div>

          </div>

        </div>


        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Brandvagt Danmark</span>

          <span>
            Professionel brandvagt i Danmark
          </span>

          <a href="#top">
            Til toppen ↑
          </a>
        </div>

      </div>

    </footer>

  </div>
`;


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

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});