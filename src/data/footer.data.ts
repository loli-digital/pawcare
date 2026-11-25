// Footer Brand
export type FooterBrand = {
  description: string;
};

export const footerBrand: FooterBrand = {
  description:
    "Gestiona la salud, el peso, los tratamientos y las citas veterinarias de tus mascotas desde un único lugar.",
};

// Links
export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinks = {
  navigation: FooterLink[];
  account: FooterLink[];
  legal: FooterLink[];
};

export const footerLinks: FooterLinks = {
  navigation: [
    {
      href: "#benefits",
      label: "Características",
    },
    {
      href: "#functionalities",
      label: "Funciones",
    },
    {
      href: "#how-it-works",
      label: "Cómo funciona",
    },
    {
      href: "#faqs",
      label: "Preguntas frecuentes",
    },
  ],
  account: [
    {
      href: "/login",
      label: "Iniciar sesión",
    },
    {
      href: "/register",
      label: "Crear cuenta",
    },
  ],
  legal: [
    {
      href: "/privacy",
      label: "Política de privacidad",
    },
    {
      href: "/terms",
      label: "Términos y condiciones",
    },
    {
      href: "/contact",
      label: "Contacto",
    },
  ],
};
