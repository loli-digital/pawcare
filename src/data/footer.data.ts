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
  id: number;
  href: string;
  label: string;
};

export type FooterLinks = {
  navigation: FooterLink[];
  account: FooterLink[];
  legal: FooterLink[];
};

export const footerLinks: FooterLinks = {
  navigation: [
    {
      id: 1,
      href: "#benefits",
      label: "Características",
    },
    {
      id: 2,
      href: "#functionalities",
      label: "Funciones",
    },
    {
      id: 3,
      href: "#how-it-works",
      label: "Cómo funciona",
    },
    {
      id: 4,
      href: "#faqs",
      label: "Preguntas frecuentes",
    },
  ],
  account: [
    {
      id: 1,
      href: "/login",
      label: "Iniciar sesión",
    },
    {
      id: 2,
      href: "/register",
      label: "Crear cuenta",
    },
  ],
  legal: [
    {
      id: 1,
      href: "/privacy",
      label: "Política de privacidad",
    },
    {
      id: 2,
      href: "/terms",
      label: "Términos y condiciones",
    },
    {
      id: 3,
      href: "/contact",
      label: "Contacto",
    },
  ],
};
