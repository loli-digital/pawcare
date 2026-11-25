import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              src="/pawcare-logo.svg"
              alt="PawCare"
              className="footer__logo"
            />

            <p className="footer__text">
              Gestiona la salud, el peso, los tratamientos y las citas
              veterinarias de tus mascotas desde un único lugar.
            </p>
          </div>

          <nav className="footer__nav">
            <h3 className="footer__title">Navegación</h3>

            <ul className="footer__list">
              <li>
                <a href="#benefits">Características</a>
              </li>

              <li>
                <a href="#functionalities">Funciones</a>
              </li>

              <li>
                <a href="#how-it-works">Cómo funciona</a>
              </li>

              <li>
                <a href="#faqs">Preguntas frecuentes</a>
              </li>
            </ul>
          </nav>

          <div className="footer__account">
            <h3 className="footer__title">Cuenta</h3>

            <ul className="footer__list">
              <li>
                <a href="/login">Iniciar sesión</a>
              </li>

              <li>
                <a href="/register">Crear cuenta</a>
              </li>
            </ul>
          </div>

          <div className="footer__legal">
            <h3 className="footer__title">Legal</h3>
            <ul className="footer__list">
              <li>
                <a href="/privacy">Política de privacidad</a>
              </li>
              <li>
                <a href="/terms">Términos y condiciones</a>
              </li>
              <li>
                <a href="/contact">Contacto</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} PawCare. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
