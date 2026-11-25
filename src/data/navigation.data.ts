export type NavigationLink = {
  id: number;
  href: string;
  label: string;
};

export const navigationLinks: NavigationLink[] = [
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
];
