import { navigationLinks } from "@/data";
import { Button } from "@/components";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.scss";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a className="navbar__logo" href="/" aria-label="Ir al inicio">
          <img
            src="/pawcare-logo.svg"
            alt="PawCare"
            className="navbar__logo-image"
          />
        </a>

        {/* Navbar */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__nav-list">
            {navigationLinks.map((navLink) => (
              <li className="navbar__nav-item" key={navLink.id}>
                <a className="navbar__link" href={navLink.href}>
                  {navLink.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Buttons Desktop */}
        <div className="navbar__actions">
          <Button className="button--secondary">Iniciar sesión</Button>
          <Button>Crear cuenta</Button>
        </div>

        {/* Mobile navbar */}
        <button
          className="navbar__menu-button"
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="navbar__mobile-menu" id="mobile-navigation">
          <nav aria-label="Navegación móvil">
            <ul className="navbar__mobile-list">
              {navigationLinks.map((navLink) => (
                <li key={navLink.id}>
                  <a
                    className="navbar__mobile-link"
                    href={navLink.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {navLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__mobile-actions">
            <Button className="button--secondary">Iniciar sesión</Button>
            <Button>Crear cuenta</Button>
          </div>
        </div>
      )}
    </header>
  );
}
