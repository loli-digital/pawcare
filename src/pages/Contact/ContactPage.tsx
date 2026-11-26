const ContactPage = () => {
  return (
    <main className="contact">
      <div className="container">
        <header className="contact__header">
          <h1 className="contact__title">Contacto</h1>

          <p className="contact__description">
            ¿Tienes alguna duda, sugerencia o has encontrado un problema?
            Estaremos encantados de ayudarte.
          </p>
        </header>

        <section className="contact__section">
          <h2>¿En qué podemos ayudarte?</h2>

          <p>
            Puedes ponerte en contacto con nosotros para resolver dudas,
            reportar errores, proponer nuevas funcionalidades o enviarnos tus
            comentarios sobre la aplicación.
          </p>
        </section>

        <section className="contact__section">
          <h2>Correo electrónico</h2>

          <p>
            Para cualquier consulta puedes escribir a:
          </p>

          <a
            className="contact__email"
            href="mailto:loli.guerrero.dev@gmail.com"
          >
            loli.guerrero.dev@gmail.com
          </a>
        </section>

        <section className="contact__section">
          <h2>Reportar un problema</h2>

          <p>
            Si has encontrado un error o un comportamiento inesperado, intenta
            incluir toda la información posible para ayudarnos a reproducir y
            solucionar el problema.
          </p>
        </section>

        <section className="contact__section">
          <h2>Sugerencias y mejoras</h2>

          <p>
            PawCare está en constante evolución. Cualquier idea o sugerencia
            para mejorar la experiencia de los propietarios y el cuidado de las
            mascotas será bienvenida.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;