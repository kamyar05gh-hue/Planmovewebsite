export const BRAND = "PLANMOVE";

export const WHATSAPP_URL =
  "https://wa.me/41794880011?text=" +
  encodeURIComponent(
    "Hallo PLANMOVE! Ich möchte mehr über PLANMOVE KI, den Assistenten für mein Umzugs-/Reinigungsunternehmen, erfahren."
  );

/**
 * Realistic editorial photography for the hero and each Problem card.
 * Aesthetic matches the reference UI mockup: cinematic, warm/muted color palette,
 * subtle blue (#0EA5E9) accent tinting applied via overlay in the component.
 */
export const IMG = {
  hero: {
    src: "/images/hero-momo.jpg",
    alt: "PLANMOVE KI Assistent am Schreibtisch eines Unternehmers",
  },
  problems: [
    {
      key: "unanswered",
      src: "/images/card-01.jpg",
      alt: "Umzugshelfer tragen Kartons in eine neue Wohnung",
    },
    {
      key: "language",
      src: "/images/card-02.jpg",
      alt: "Umzugskarton mit Schlüssel",
    },
    {
      key: "exhausted",
      src: "/images/card-03.jpg",
      alt: "Professioneller Reinigungswagen mit Equipment",
    },
    {
      key: "followup",
      src: "/images/card-04.jpg",
      alt: "Industrielle Hochdruckreinigung",
    },
    {
      key: "phonering",
      src: "/images/card-05.jpg",
      alt: "Reinigungskraft bei der Hochdruckreinigung",
    },
    {
      key: "channels",
      src: "/images/card-06.jpg",
      alt: "Gebäudereiniger beim Bodenwischen",
    },
  ],
};
