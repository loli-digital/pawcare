import { Link } from "react-router-dom";
import { footerBrand, footerLinks } from "@/data";
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
            <p className="footer__text">{footerBrand.description}</p>
          </div>

          <nav className="footer__nav">
            <h3 className="footer__title">Navegación</h3>

            <ul className="footer__list">
              {footerLinks.navigation.map((navigationLink) => (
                <li>
                  <a href={navigationLink.href}>{navigationLink.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__account">
            <h3 className="footer__title">Cuenta</h3>

            <ul className="footer__list">
              {footerLinks.account.map((accountLink) => (
                <li>
                  <Link to={accountLink.href}>{accountLink.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__legal">
            <h3 className="footer__title">Legal</h3>
            <ul className="footer__list">
              {footerLinks.legal.map((legalLink) => (
                <li>
                  <Link to={legalLink.href}>{legalLink.label}</Link>
                </li>
              ))}
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
