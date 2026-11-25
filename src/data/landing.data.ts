import type { LucideIcon } from "lucide-react";
import {
  FolderCheck,
  CalendarCheck,
  HeartHandshake,
  PawPrint,
  ClipboardPlus,
  Syringe,
  Pill,
  CalendarDays,
  MonitorActivity,
  Files,
  BellRing,
  UserRoundPlus,
  HeartPulse,
} from "lucide-react";

export const hero = {
  title: "La salud de tu mascota, siempre bajo control",
  description:
    "PawCare centraliza historiales clínicos, curvas de peso biométricas, calendarios de vacunación, tratamientos farmacológicos y recordatorios inteligentes con la precisión de un software clínico y la sencillez que mereces",
  actions: {
    primary: {
      text: "Crear cuenta",
      path: "/register",
    },
    secondary: {
      text: "Iniciar sesión",
      path: "/login",
    },
  },
};

/* Benefits */
export type BenefitsSection = {
  title: string;
  description: string;
};

export const benefitsSection: BenefitsSection = {
  title: "Todo el cuidado de tu mascota, más sencillo",
  description:
    "Sabemos que mantener al día toda la información de salud de tu mascota puede resultar complicado. PawCare te ayuda a tenerlo todo organizado para que puedas centrarte en lo que realmente importa: su bienestar.",
};

export type Benefits = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const benefits: Benefits[] = [
  {
    id: 1,
    icon: FolderCheck,
    title: "Toda su información en un mismo lugar",
    description:
      "Olvídate de buscar entre documentos, notas y fotografías para encontrar información importante.",
  },
  {
    id: 2,
    icon: CalendarCheck,
    title: "Más tranquilidad en su cuidado",
    description:
      "Ten presentes las fechas importantes y evita pasar por alto sus cuidados programados.",
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: "Conoce mejor su evolución",
    description:
      "Consulta su información de salud y lleva un seguimiento de su bienestar a lo largo del tiempo.",
  },
];

/* Functionalities */
export type FunctionalitiesSection = {
  title: string;
  description: string;
};

export const functionalitiesSection: FunctionalitiesSection = {
  title: "Todo lo que necesitas para cuidar de su salud",
  description:
    "Descubre las herramientas que te ayudarán a mantener organizada toda la información de tu mascota.",
};

export type Functionalities = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};
export const functionalities = [
  {
    id: 1,
    icon: PawPrint,
    title: "Perfiles de mascotas",
    description: "Crea y personaliza un perfil para cada una de tus mascotas.",
  },
  {
    id: 2,
    icon: ClipboardPlus,
    title: "Historial médico",
    description: "Registra y consulta sus antecedentes y visitas veterinarias.",
  },
  {
    id: 3,
    icon: Syringe,
    title: "Vacunas y desparasitaciones",
    description: "Registra las vacunas y los tratamientos antiparasitarios.",
  },
  {
    id: 4,
    icon: Pill,
    title: "Medicamentos y tratamientos",
    description: "Guarda información sobre medicación y tratamientos.",
  },
  {
    id: 5,
    icon: CalendarDays,
    title: "Citas veterinarias",
    description: "Organiza y consulta las próximas visitas al veterinario.",
  },
  {
    id: 6,
    icon: MonitorActivity,
    title: "Seguimiento de salud",
    description: "Registra el peso y consulta su evolución.",
  },
  {
    id: 7,
    icon: Files,
    title: "Documentos médicos",
    description: "Almacena informes, recetas y otros documentos.",
  },
  {
    id: 8,
    icon: BellRing,
    title: "Recordatorios",
    description: "Recibe avisos sobre fechas y cuidados importantes.",
  },
];

/* How It Works */
export type HowItWorksSection = {
  title: string;
  description: string;
};

export const howItWorksSection: HowItWorksSection = {
  title: "Cómo funciona",
  description: "Empieza en minutos y mantén toda la información importante de tus mascotas organizada y siempre accesible.",
};

export type HowItWorks = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const howItWorks: HowItWorks[] = [
  {
    id: 1,
    icon: UserRoundPlus,
    title: "Crea tu cuenta",
    description: "Regístrate y empieza a utilizar PawCare.",
  },
  {
    id: 2,
    icon: PawPrint,
    title: "Añade a tu mascota",
    description: "Crea su perfil con toda su información básica.",
  },
  {
    id: 3,
    icon: HeartPulse,
    title: "Organiza sus cuidados",
    description:
      "Registra su historial médico, controla sus vacunas y mantén actualizada su información.",
  },
];

/* CTA */
export type CTA = {
  title: string;
  description: string;
};

export const cta: CTA = {
  title: "Su bienestar empieza con un buen cuidado",
  description:
    "Ten toda la información de salud de tu mascota organizada y siempre a mano",
};

/* FAQ's */
export type FaqsSection = {
  title: string;
  description: string;
};

export const faqsSection: FaqsSection = {
  title: "Preguntas frecuentes",
  description: "Encuentra respuestas a las preguntas más comunes sobre el funcionamiento y las principales características de PawCare.",
};

export type Faqs = {
  id: number;
  question: string;
  answer: string;
};

export const faqs: Faqs[] = [
  {
    id: 1,
    question: "¿Qué es PawCare?",
    answer:
      "PawCare es una plataforma diseñada para ayudarte a gestionar toda la información relacionada con la salud y el bienestar de tus mascotas desde un único lugar.",
  },
  {
    id: 2,
    question: "¿Puedo gestionar varias mascotas?",
    answer:
      "Sí. Puedes crear un perfil independiente para cada mascota y consultar toda su información de forma organizada.",
  },
  {
    id: 3,
    question: "¿Qué tipo de información puedo almacenar?",
    answer:
      "Puedes registrar información básica, historial médico, vacunas, tratamientos, peso, citas veterinarias, recordatorios y otros datos importantes para el cuidado de tus mascotas.",
  },
  {
    id: 4,
    question: "¿Puedo hacer seguimiento del peso?",
    answer:
      "Sí. PawCare permite registrar el peso de tu mascota y consultar su evolución mediante gráficos e histórico de registros.",
  },
  {
    id: 5,
    question: "¿Recibiré recordatorios de citas y tratamientos?",
    answer:
      "Sí. Puedes crear recordatorios para vacunas, revisiones veterinarias, medicación y cualquier otro cuidado importante.",
  },
  {
    id: 6,
    question: "¿Mis datos están seguros?",
    answer:
      "Tus datos se almacenan de forma segura y únicamente tú podrás acceder a la información asociada a tu cuenta.",
  },
  {
    id: 7,
    question: "¿Puedo acceder desde cualquier dispositivo?",
    answer:
      "Sí. Puedes acceder a tu cuenta desde cualquier dispositivo con conexión a Internet y consultar la información de tus mascotas cuando la necesites.",
  },
  {
    id: 8,
    question: "¿PawCare sustituye a mi veterinario/a?",
    answer:
      "No. PawCare es una herramienta de organización y seguimiento. Las decisiones relacionadas con la salud de tu mascota deben ser tomadas siempre por profesionales veterinarios.",
  },
];
