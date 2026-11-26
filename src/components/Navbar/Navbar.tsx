import { navigationLinks } from "@/data";

export function Navbar() {
  return (
    <header>
      {/* Logo */}
      <a href=""></a>
      {/* Navbar */}
      <nav>
        <ul>
          {navigationLinks.map((navLink) => (
            <li>
              <a href={navLink.href}>{navLink.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Buttons Desktop */}
      <div>
        <button>Iniciar sesión</button>
        <button>Crear cuenta</button>
      </div>

      {/* Mobile navbar */}
      <button></button>
    </header>
  );
}
