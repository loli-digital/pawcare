import "./LandingPage.scss";
import {
  hero,
  benefitsSection,
  benefits,
  functionalitiesSection,
  functionalities,
  howItWorksSection,
  howItWorks,
  cta,
  faqsSection,
  faqs,
} from "@/data";

function LandingPage() {
  return (
    <main className="landing">
      <section className="hero">
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__description">{hero.description}</p>
      </section>

      {/* Benefits */}
      <section className="benefits">
        <h2 className="benefits__title">{benefitsSection.title}</h2>
        <p className="benefits__description">{benefitsSection.description}</p>
        <div className="benefits__grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="benefits__card" key={benefit.id}>
                <Icon size={24} aria-hidden="true" />
                <div className="benfefits__card-wrapper">
                  <h3 className="benefits__card-title">{benefit.title}</h3>
                  <p className="benefits__card-description">
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Functionalities */}
      <section className="functionalities">
        <h2 className="functionalities__title">{functionalitiesSection.title}</h2>
        <p className="functionalities__description">{functionalitiesSection.description}</p>
        <div className="functionalities__grid">
          {functionalities.map((functionalitie) => {
            const Icon = functionalitie.icon;

            return (
              <article
                className="functionalities__card"
                key={functionalitie.id}
              >
                <Icon size={24} aria-hidden="true" />
                <div className="funcionalities__card-wrapper">
                  <h3 className="functionalities__card-title">
                    {functionalitie.title}
                  </h3>
                  <p className="functionalities__card-description">
                    {functionalitie.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="dashboard-preview">
        <h2 className="dashboard-preview__title">
          Toda su información de un vistazo
        </h2>
        <p className="dashboard-preview__description">
          Consulta fácilmente el estado de salud de tu mascota, sus próximas
          vacunas, tratamientos y citas veterinarias desde un único panel.
        </p>
        {/* Captura real de la app */}
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <h2 className="how-it-works__title">{howItWorksSection.title}</h2>
        <p>{howItWorksSection.description}</p>
        <div className="how-it-works__steps">
          {howItWorks.map((how) => {
            const Icon = how.icon;
            return (
              <article className="how-it-works__step" key={how.id}>
                <Icon size={24} aria-hidden="true" />
                <div className="how-it-works__step-wrapper">
                  <h3 className="how-it-works__step-title">{how.title}</h3>
                  <p className="how-it-works__step-description">
                    {how.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2 className="cta__title">{cta.title}</h2>
        <p className="cta__description">{cta.description}</p>
      </section>

      {/* FAQ's */}
      <section className="faqs">
        <h2 className="faqs__title">{faqsSection.title}</h2>
        <p>{faqsSection.description}</p>
        <div className="faqs__list">
          {faqs.map((faq) => (
            <article className="faqs__item" key={faq.id}>
              <h3 className="faqs__question">{faq.question}</h3>
              <p className="faqs__answer">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
