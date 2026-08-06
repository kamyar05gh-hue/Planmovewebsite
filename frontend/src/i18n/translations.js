/**
 * All user-facing UI strings for PLANMOVE/PLANMOVE KI, per language.
 *
 * Structure notes:
 * - Strings that contain highlighted <span>s in JSX are split into
 *   "segment arrays": plain strings are rendered as-is, objects shaped
 *   { hl: "..." } are rendered inside the blue highlight span,
 *   { b: "..." } are rendered inside a black bold span.
 * - Quote characters („…", «…») are part of the translated strings.
 * - Brand names "PLANMOVE KI" and "PLANMOVE" stay untranslated.
 */

import { fa } from "./translations.fa";
import { tr } from "./translations.tr";
import { pt } from "./translations.pt";

const waUrl = (text) =>
  "https://wa.me/41794880011?text=" + encodeURIComponent(text);

export const translations = {
  de: {
    whatsapp: {
      url: waUrl(
        "Hallo PLANMOVE! Ich möchte mehr über PLANMOVE KI, den Assistenten für mein Umzugs-/Reinigungsunternehmen, erfahren."
      ),
    },
    whatsappButton: {
      label: "Fragen? Schreiben Sie uns auf WhatsApp",
    },
    languageSwitcher: {
      ariaLabel: (lang) => `Sprache wechseln — aktuell ${lang}`,
    },
    hero: {
      tagline: "Für Umzug & Reinigung Unternehmer gemacht",
      flagAria: "Schweiz",
      headlines: ["Mehr Kunden.", "Mehr Zeit.", "Mehr Geld."],
      headlineHighlight: "Weniger Stress.",
      subtitle:
        "Der erste KI-Mitarbeiter fürs Büro – speziell für Umzugs- und Reinigungsunternehmen.",
      videoCaptionA: "Nur ",
      videoCaptionHl1: "60 Sekunden",
      videoCaptionB: " und du verstehst sofort, wie ",
      videoCaptionHl2: "PlanMove funktioniert.",
      benefits: [
        "PLANMOVE KI erstellt Offerten, Rechnungen & Antworten – einfach per Sprache oder WhatsApp.",
        "Sprechen Sie einfach in Ihrer Muttersprache – PLANMOVE KI schreibt perfektes Deutsch oder die Sprache Ihres Kunden.",
      ],
      starsAria: "4.9 von 5 Sternen",
      reviews: "120+ Bewertungen",
      visualAlt:
        "PLANMOVE KI Assistent antwortet auf Kundenanfragen am Schreibtisch eines Unternehmers",
    },
    trustBar: {
      items: [
        "PLANMOVE KI erstellt Offerten, Rechnungen & Antworten",
        "Keine Kunden verlieren",
        "Mehr Aufträge",
        "Einfach in Ihrer Muttersprache sprechen",
        "Mehr Freizeit",
        "Mehr Umsatz",
      ],
    },
    problems: {
      headingA: "Kennst du diese ",
      headingHighlight: "7 Probleme",
      headingB: " aus deinem Alltag?",
      cards: [
        {
          tag: "Reaktionszeit",
          title: [
            "Jede ",
            { b: "unbeantwortete" },
            " Anfrage kostet Sie ",
            { b: "Kunden" },
            " – und viel Geld.",
          ],
          body: [
            { b: "Kunden warten nicht." },
            " Wenn Sie zu spät antworten, gehen sie zur ",
            { b: "Konkurrenz" },
            ". PLANMOVE KI antwortet ",
            { hl: "innerhalb weniger Sekunden" },
            " – ",
            { b: "24/7" },
            ".",
          ],
          alt: "Verpasster Anruf am Smartphone",
        },
        {
          tag: "Muttersprache",
          title: [
            { b: "Deutsch" },
            " ist nicht Ihre Muttersprache? Kein Problem.",
          ],
          body: [
            { b: "Sprechen Sie einfach in Ihrer Sprache." },
            " PLANMOVE KI schreibt ",
            { hl: "professionelle E-Mails, Offerten und Nachrichten" },
            " auf ",
            { b: "perfektem Deutsch" },
            ", Französisch oder nach Wunsch.",
          ],
          alt: "Multilinguale Kommunikation",
        },
        {
          tag: "Feierabend",
          title: [
            "Nach einem langen Arbeitstag wartet die ",
            { b: "Büroarbeit" },
            ".",
          ],
          body: [
            "Offerten, E-Mails, WhatsApp, Rechnungen, Einsatzplanung… Viele Unternehmer ",
            { b: "bleiben bis spät wach" },
            ", nur um ",
            { b: "keine Anfrage zu verpassen" },
            ". PLANMOVE KI ",
            { hl: "erledigt alles" },
            ".",
          ],
          alt: "Erschöpfter Unternehmer nach Feierabend",
        },
        {
          tag: "Follow-up",
          title: [
            "Sie verschicken Offerten und vergessen ",
            { b: "nachzufassen" },
            ".",
          ],
          body: [
            "Viele Unternehmer ",
            { b: "verlieren den Überblick" },
            " — und damit auch ",
            { b: "Kunden und Geld" },
            ". PLANMOVE KI ",
            { hl: "erinnert automatisch nach" },
            " – per Nachricht oder Anruf.",
          ],
          alt: "Vergessene Follow-ups",
        },
        {
          tag: "Anrufe",
          title: [
            "Das ",
            { b: "Telefon klingelt" },
            ", während Sie arbeiten.",
          ],
          body: [
            "Sie können nicht rangehen? Kein Problem. PLANMOVE KI ",
            { hl: "nimmt Anrufe entgegen" },
            ", ",
            { b: "sammelt alle Infos" },
            " und vereinbart auf Wunsch ",
            { b: "Termine" },
            ".",
          ],
          alt: "Anruf während der Arbeit",
        },
        {
          tag: "Kanäle",
          title: ["So viele Nachrichten. So ", { b: "wenig Zeit" }, "."],
          body: [
            "WhatsApp, E-Mail, Telefon — ",
            { b: "alles kommt zur gleichen Zeit" },
            ". PLANMOVE KI ",
            { hl: "beantwortet, organisiert und bringt alles an einen Ort zusammen" },
            ".",
          ],
          alt: "Alle Kanäle auf einem Bildschirm",
        },
      ],
      climax: {
        imageAlt: "PLANMOVE KI erledigt die Reinigung",
        titleA: "Vergessen Sie ",
        titleHighlight: "Papierkram",
        titleB: " und komplizierte Programme.",
        sub: [
          "Keine Notizen, keine Excel-Listen, keine langen Abende am Computer.",
          { b: "Sagen Sie einfach:" },
        ],
        voiceCommands: [
          "„PLANMOVE KI, erstelle eine Offerte für Herr Müller.“",
          "„Schick Frau Meier die Offerte per E-Mail.“",
          "„Schreibe dem Kunden auf WhatsApp, dass wir morgen um 08:00 Uhr kommen.“",
          "„Erstelle die Rechnung und sende sie an den Kunden.“",
        ],
        momoRestA: "PLANMOVE KI",
        momoRestB: " erledigt den Rest.",
        services: [
          "PLANMOVE KI erstellt Offerten, Rechnungen & Antworten",
          "Nachrichten",
          "Termine",
          "Anrufe",
          "Übersetzungen",
          "und vieles mehr…",
        ],
        magic: "Die PLANMOVE-KI-Magie",
      },
    },
    testimonials: {
      headingLine1: "Umzug & Reinigung Unternehmen",
      headingLine2a: "mit ",
      headingLine2Highlight: "PLANMOVE.",
      items: [
        {
          name: "Markus H.",
          role: "Umzugsunternehmer",
          quote:
            "Früher zwei Stunden Papierkram nach Feierabend. Heute spreche ich 40 Sekunden ins Handy und bin fertig. Ich habe meinen Feierabend zurück.",
        },
        {
          name: "Elena B.",
          role: "Reinigungsunternehmerin",
          quote:
            "Ich bin in Portugal aufgewachsen. PLANMOVE KI versteht meine Muttersprache und schreibt sauberes Deutsch. Meine Kunden merken den Unterschied.",
        },
        {
          name: "Thomas K.",
          role: "Transportunternehmer",
          quote:
            "Der Auto Follow-up hat mir letzten Monat drei Aufträge gerettet, die ich sonst vergessen hätte. PLANMOVE KI zahlt sich mehrfach aus.",
        },
        {
          name: "Sara M.",
          role: "Reinigungsunternehmerin",
          quote:
            "PLANMOVE KI beantwortet Anfragen nachts und am Wochenende. Das gibt mir echte Ruhe.",
        },
        {
          name: "David R.",
          role: "Umzugsunternehmer",
          quote:
            "Seit wir PLANMOVE KI nutzen, schreiben wir professionelle Offerten in Minutensache. Das spart Zeit und wirkt viel seriöser gegenüber Kunden.",
        },
        {
          name: "Team Primemove",
          role: "Primemove",
          quote:
            "PLANMOVE KI hat unseren Büroalltag komplett verändert. Mehr Zeit, weniger Stress und zufriedene Kunden.",
        },
      ],
    },
    beforeAfter: {
      headingBefore: "Ohne PLANMOVE KI",
      headingAfter: "Mit PLANMOVE KI",
      items: [
        { before: "Deutsch war ein Problem.", after: "Einfach sprechen – PLANMOVE KI schreibt perfektes Deutsch." },
        { before: "Offerten haben viel Zeit gekostet.", after: "Offerten in wenigen Sekunden." },
        { before: "Kunden nach Offerten vergessen.", after: "Automatische Erinnerung an Kunden." },
        { before: "Rechnungen manuell erstellen.", after: "Rechnungen automatisch erstellen." },
        { before: "E-Mails & Briefe waren mühsam.", after: "PLANMOVE KI erklärt und beantwortet alles." },
        { before: "Bis spät abends Büroarbeit.", after: "Mehr Freizeit, weniger Büro." },
        { before: "Anfragen verpasst.", after: "Antworten – auch ausserhalb der Arbeitszeit." },
        { before: "Alles war unübersichtlich.", after: "Alles an einem Ort." },
        { before: "Viele Fehler & Missverständnisse.", after: "Klare, professionelle Kommunikation." },
        { before: "Mehr Personal nötig.", after: "Weniger Aufwand, weniger Kosten." },
      ],
    },
    faq: {
      heading: "Häufig gestellte Fragen",
      items: [
        {
          q: "Was ist PLANMOVE KI?",
          a: "PLANMOVE KI ist Ihr persönlicher KI-Assistent für Ihr Umzugs- oder Reinigungsunternehmen. Er beantwortet Anfragen, erstellt Offerten und Rechnungen, übersetzt Texte und erinnert Kunden automatisch — ganz einfach per Sprache oder WhatsApp.",
        },
        {
          q: "Brauche ich Deutschkenntnisse?",
          a: "Nein. Sprechen Sie einfach in Ihrer Muttersprache. PLANMOVE KI versteht Sie und erstellt professionelle Antworten auf perfektem Deutsch oder in der Sprache Ihres Kunden.",
        },
        {
          q: "Wie schnell ist PLANMOVE KI?",
          a: "PLANMOVE KI antwortet in Sekundenschnelle. Eine Offerte, eine E-Mail oder eine Kundenanfrage — alles wird sofort bearbeitet, auch ausserhalb der Bürozeiten.",
        },
        {
          q: "Funktioniert PLANMOVE KI auch am Handy?",
          a: "Ja. Sie nutzen PLANMOVE KI bequem auf Ihrem Smartphone per WhatsApp oder Sprachnachricht — egal ob im Büro, unterwegs oder auf dem Bau.",
        },
        {
          q: "Welche Sprachen spricht PLANMOVE KI?",
          a: "PLANMOVE KI spricht mit Ihnen in Ihrer Muttersprache — ganz egal, welche das ist. Und schreibt professionelle Antworten auf Deutsch, Französisch, Italienisch oder in der Sprache Ihres Kunden.",
        },
      ],
    },
    team: {
      kicker: "Unser Team",
      heading: "Die Menschen hinter PLANMOVE",
      sub: "Ein kleines Team mit einem grossen Ziel: weniger Büro, mehr Zeit und mehr Kunden für Schweizer Umzugs- und Reinigungsunternehmen.",
      roles: {
        Elias: "CEO & Founder",
        Livia: "Administratorin",
        Alex: "AI Expert",
        Mohie: "AI & Software Engineer",
      },
    },
    finalCta: {
      chipMoving: "Umzug",
      chipCleaning: "Reinigung",
      headline1: "Weniger Büro.",
      headline2: "Mehr Zeit. Mehr Kunden.",
      headline3: "Mehr Umsatz.",
      paragraph:
        "Erfahren Sie, wie PLANMOVE KI Ihren Arbeitsalltag einfacher macht und sicherstellt, dass Ihnen keine Anfragen und Aufträge mehr entgehen.",
      subItems: ["Keine Verpflichtung", "Schnelle Antwort", "Persönliche Beratung"],
    },
    footer: {
      kicker: "Ihr nächster Schritt",
      headlineA: "Bereit für ",
      headlineB: "mehr ",
      headlineHighlight: "Umsatz?",
      paragraph:
        "Ein kurzes Gespräch auf WhatsApp — persönlich, kostenlos und ohne Verpflichtung. Erfahren Sie in fünf Minuten, wie PLANMOVE KI Ihr KMU verändert.",
      brandDescription:
        "PLANMOVE KI erledigt Offerten, Rechnungen und Kundenkommunikation für Schweizer Umzugs- und Reinigungsunternehmen. 24/7 erreichbar. In jeder Sprache.",
      contactHeading: "Kontakt",
      phone: "+41794880011",
      phoneAria: "PLANMOVE anrufen",
      bottomNote: "",
    },
    phoneMockup: {
      newRequest: "Neue Anfrage",
      headline1: "Sprich einfach.",
      headline2: "PLANMOVE KI tippt.",
      recording: "Aufnahme läuft",
      transcript:
        "„Offerte für Familie Meier, Umzug 3-Zimmer, Zürich nach Winterthur, Freitag um acht…",
      createdIn: "erstellt in 4.8s",
      quoteNumber: "Offerte #2049",
      now: "JETZT",
      sendWhatsApp: "Per WhatsApp senden",
      micAria: "Aufnahme",
    },
    cardVisuals: {
      reaktion: {
        notifications: [
          "Anfrage — Familie Meier · Zürich",
          "WhatsApp — Herr Kaufmann",
          "Voicemail — Umzugsanfrage",
        ],
        chip: "12 verpasste Anfragen · heute Nacht",
      },
      sprache: {
        translated: "Übersetzt · Deutsch",
        reply: "Guten Tag, gerne senden wir Ihnen eine Offerte.",
      },
      feierabend: {
        chipTop: "23:47 · Immer noch am Schreibtisch",
        tableHead: "Offerten · 47 offen",
        overdue: "Überfällig",
        chipBottom: "Feierabend ist heute wieder ausgefallen",
      },
      followUp: {
        autoReminder: "Auto-Erinnerung",
        momoFollowsUp: "PLANMOVE KI fasst nach.",
        reminders: [
          { name: "Herr Müller", detail: "Offerte · vor 3 Tagen" },
          { name: "Frau Meier", detail: "Umzug 3.5 Zi · vor 5 Tagen" },
          { name: "Top Umzug AG", detail: "B2B Rahmen · vor 7 Tagen" },
        ],
      },
      anrufe: {
        incoming: "Eingehender Anruf",
        unknown: "Unbekannt",
        handled: "wird von PLANMOVE KI entgegengenommen…",
      },
    },
  },

  fr: {
    whatsapp: {
      url: waUrl(
        "Bonjour PLANMOVE ! J'aimerais en savoir plus sur PLANMOVE KI, l'assistant pour mon entreprise de déménagement/nettoyage."
      ),
    },
    whatsappButton: {
      label: "Des questions ? Écrivez-nous sur WhatsApp",
    },
    languageSwitcher: {
      ariaLabel: (lang) => `Changer de langue — actuellement ${lang}`,
    },
    hero: {
      tagline: "Conçu pour les entrepreneurs du déménagement & du nettoyage",
      flagAria: "Suisse",
      headlines: ["Plus de clients.", "Plus de temps.", "Plus d'argent."],
      headlineHighlight: "Moins de stress.",
      subtitle:
        "Le premier employé IA pour le bureau – conçu spécialement pour les entreprises de déménagement et de nettoyage.",
      videoCaptionA: "Seulement ",
      videoCaptionHl1: "60 secondes",
      videoCaptionB: " et vous comprenez immédiatement comment ",
      videoCaptionHl2: "PlanMove fonctionne.",
      benefits: [
        "PLANMOVE KI crée des devis, factures et réponses — simplement par la voix ou WhatsApp.",
        "Parlez simplement dans votre langue maternelle — PLANMOVE KI écrit en allemand parfait ou dans la langue de votre client.",
      ],
      starsAria: "4,9 sur 5 étoiles",
      reviews: "120+ avis",
      visualAlt:
        "L'assistant PLANMOVE KI répond aux demandes des clients au bureau d'un entrepreneur",
    },
    trustBar: {
      items: [
        "PLANMOVE KI crée devis, factures & réponses",
        "Ne perdez plus de clients",
        "Plus de mandats",
        "Parlez simplement dans votre langue",
        "Plus de temps libre",
        "Plus de chiffre d'affaires",
      ],
    },
    problems: {
      headingA: "Connaissez-vous ces ",
      headingHighlight: "7 problèmes",
      headingB: " du quotidien ?",
      cards: [
        {
          tag: "Réactivité",
          title: [
            "Chaque demande ",
            { b: "sans réponse" },
            " vous coûte des ",
            { b: "clients" },
            " — et beaucoup d'argent.",
          ],
          body: [
            { b: "Les clients n'attendent pas." },
            " Si vous répondez trop tard, ils vont chez la ",
            { b: "concurrence" },
            ". PLANMOVE KI répond ",
            { hl: "en quelques secondes" },
            " — ",
            { b: "24h/24 et 7j/7" },
            ".",
          ],
          alt: "Appel manqué sur un smartphone",
        },
        {
          tag: "Langue maternelle",
          title: [
            "L'",
            { b: "allemand" },
            " n'est pas votre langue maternelle ? Aucun problème.",
          ],
          body: [
            { b: "Parlez simplement dans votre langue." },
            " PLANMOVE KI rédige des ",
            { hl: "e-mails, devis et messages professionnels" },
            " en ",
            { b: "allemand parfait" },
            ", en français ou comme vous le souhaitez.",
          ],
          alt: "Communication multilingue",
        },
        {
          tag: "Fin de journée",
          title: [
            "Après une longue journée de travail, la ",
            { b: "paperasse" },
            " vous attend.",
          ],
          body: [
            "Devis, e-mails, WhatsApp, factures, planification… Beaucoup d'entrepreneurs ",
            { b: "restent éveillés jusqu'à tard" },
            ", juste pour ",
            { b: "ne manquer aucune demande" },
            ". PLANMOVE KI ",
            { hl: "s'occupe de tout" },
            ".",
          ],
          alt: "Entrepreneur épuisé après le travail",
        },
        {
          tag: "Relance",
          title: [
            "Vous envoyez des devis et oubliez de ",
            { b: "relancer" },
            ".",
          ],
          body: [
            "Beaucoup d'entrepreneurs ",
            { b: "perdent le fil" },
            " — et avec lui des ",
            { b: "clients et de l'argent" },
            ". PLANMOVE KI ",
            { hl: "relance automatiquement" },
            " — par message ou par appel.",
          ],
          alt: "Relances oubliées",
        },
        {
          tag: "Appels",
          title: [
            "Le ",
            { b: "téléphone sonne" },
            " pendant que vous travaillez.",
          ],
          body: [
            "Vous ne pouvez pas décrocher ? Aucun problème. PLANMOVE KI ",
            { hl: "prend les appels" },
            ", ",
            { b: "collecte toutes les informations" },
            " et fixe des ",
            { b: "rendez-vous" },
            " si vous le souhaitez.",
          ],
          alt: "Appel pendant le travail",
        },
        {
          tag: "Canaux",
          title: ["Tant de messages. Si ", { b: "peu de temps" }, "."],
          body: [
            "WhatsApp, e-mail, téléphone — ",
            { b: "tout arrive en même temps" },
            ". PLANMOVE KI ",
            { hl: "répond, organise et rassemble tout au même endroit" },
            ".",
          ],
          alt: "Tous les canaux sur un seul écran",
        },
      ],
      climax: {
        imageAlt: "PLANMOVE KI s'occupe du nettoyage",
        titleA: "Oubliez la ",
        titleHighlight: "paperasse",
        titleB: " et les programmes compliqués.",
        sub: [
          "Pas de notes, pas de listes Excel, pas de longues soirées devant l'ordinateur.",
          { b: "Dites simplement :" },
        ],
        voiceCommands: [
          "« PLANMOVE KI, prépare un devis pour Monsieur Müller. »",
          "« Envoie le devis à Madame Meier par e-mail. »",
          "« Écris au client sur WhatsApp que nous arrivons demain à 08h00. »",
          "« Crée la facture et envoie-la au client. »",
        ],
        momoRestA: "PLANMOVE KI",
        momoRestB: " s'occupe du reste.",
        services: [
          "PLANMOVE KI crée devis, factures & réponses",
          "Messages",
          "Rendez-vous",
          "Appels",
          "Traductions",
          "et bien plus…",
        ],
        magic: "La magie PLANMOVE KI",
      },
    },
    testimonials: {
      headingLine1: "Déménagement & nettoyage",
      headingLine2a: "avec ",
      headingLine2Highlight: "PLANMOVE.",
      items: [
        {
          name: "Marc H.",
          role: "Entrepreneur de déménagement",
          quote:
            "Avant, deux heures de paperasse après le travail. Aujourd'hui, je parle 40 secondes dans mon téléphone — terminé. J'ai retrouvé mes soirées.",
        },
        {
          name: "Elena B.",
          role: "Entrepreneure de nettoyage",
          quote:
            "J'ai grandi au Portugal. PLANMOVE KI comprend ma langue maternelle et rédige un allemand impeccable. Mes clients voient la différence.",
        },
        {
          name: "Thomas K.",
          role: "Entrepreneur de transport",
          quote:
            "La relance automatique m'a sauvé trois mandats le mois dernier, que j'aurais sinon oubliés. PLANMOVE KI est largement rentabilisé.",
        },
        {
          name: "Sara M.",
          role: "Entrepreneure de nettoyage",
          quote:
            "PLANMOVE KI répond aux demandes la nuit et le week-end — cela me donne une vraie tranquillité d'esprit.",
        },
        {
          name: "David R.",
          role: "Entrepreneur de déménagement",
          quote:
            "Depuis que nous utilisons PLANMOVE KI, nous rédigeons des devis professionnels en quelques minutes. Cela fait gagner du temps et paraît bien plus sérieux aux clients.",
        },
        {
          name: "Équipe Primemove",
          role: "Primemove",
          quote:
            "PLANMOVE KI a complètement changé notre quotidien au bureau. Plus de temps, moins de stress, des clients satisfaits.",
        },
      ],
    },
    beforeAfter: {
      headingBefore: "Sans PLANMOVE",
      headingAfter: "Avec PLANMOVE",
      items: [
        { before: "L'allemand était un problème.", after: "Parlez simplement — PLANMOVE KI écrit un allemand parfait." },
        { before: "Les devis prenaient beaucoup de temps.", after: "Des devis en quelques secondes." },
        { before: "Les clients oubliaient les devis.", after: "Rappel automatique des clients." },
        { before: "Créer les factures manuellement.", after: "Créer les factures automatiquement." },
        { before: "E-mails et lettres étaient pénibles.", after: "PLANMOVE KI explique et répond à tout." },
        { before: "Travail de bureau jusqu'à tard.", after: "Plus de temps libre, moins de bureau." },
        { before: "Demandes manquées.", after: "Réponses — même en dehors des heures de travail." },
        { before: "Tout était désorganisé.", after: "Tout au même endroit." },
        { before: "Beaucoup d'erreurs et de malentendus.", after: "Communication claire et professionnelle." },
        { before: "Besoin de plus de personnel.", after: "Moins d'effort, moins de coûts." },
      ],
    },
    faq: {
      heading: "Questions fréquentes",
      items: [
        {
          q: "Qu'est-ce que PLANMOVE KI ?",
          a: "PLANMOVE KI est votre assistant IA personnel pour votre entreprise de déménagement ou de nettoyage. Il répond aux demandes, crée des devis et factures, traduit des textes et rappelle automatiquement aux clients — simplement par la voix ou WhatsApp.",
        },
        {
          q: "Dois-je parler allemand ?",
          a: "Non. Parlez simplement dans votre langue maternelle. PLANMOVE KI vous comprend et rédige des réponses professionnelles en allemand parfait ou dans la langue de votre client.",
        },
        {
          q: "Quelle est la rapidité de PLANMOVE KI ?",
          a: "PLANMOVE KI répond en quelques secondes. Un devis, un e-mail ou une demande client — tout est traité immédiatement, même en dehors des heures de bureau.",
        },
        {
          q: "PLANMOVE KI fonctionne-t-il aussi sur mobile ?",
          a: "Oui. Vous utilisez PLANMOVE KI confortablement sur votre smartphone via WhatsApp ou un message vocal — au bureau, en déplacement ou sur le chantier.",
        },
        {
          q: "Quelles langues parle PLANMOVE KI ?",
          a: "PLANMOVE KI vous parle dans votre langue maternelle — peu importe laquelle. Et rédige des réponses professionnelles en allemand, français, italien ou dans la langue de votre client.",
        },
      ],
    },
    team: {
      kicker: "Notre équipe",
      heading: "L'équipe derrière PLANMOVE",
      sub: "Une petite équipe avec un grand objectif : moins de bureau, plus de temps et plus de clients pour les entreprises suisses de déménagement et de nettoyage.",
    },
    finalCta: {
      chipMoving: "Déménagement",
      chipCleaning: "Nettoyage",
      headline1: "Moins de bureau.",
      headline2: "Plus de temps. Plus de clients.",
      headline3: "Plus de chiffre d'affaires.",
      paragraph:
        "Découvrez comment PLANMOVE KI simplifie votre quotidien et veille à ce que vous ne manquiez plus aucune demande ni aucun mandat.",
      subItems: ["Sans engagement", "Réponse rapide", "Conseil personnalisé"],
    },
    footer: {
      kicker: "Votre prochaine étape",
      headlineA: "Prêt pour ",
      headlineB: "plus de ",
      headlineHighlight: "chiffre d'affaires ?",
      paragraph:
        "Une courte conversation sur WhatsApp — personnelle, gratuite et sans engagement. Découvrez en cinq minutes comment PLANMOVE KI transforme votre PME.",
      brandDescription:
        "PLANMOVE KI est l'assistant IA pour les entreprises suisses de déménagement et de nettoyage. PLANMOVE est le logiciel. Disponible 24h/24 et 7j/7. Dans toutes les langues.",
      contactHeading: "Contact",
      phone: "+41794880011",
      phoneAria: "Appeler PLANMOVE",
      bottomNote: "",
    },
    phoneMockup: {
      newRequest: "Nouvelle demande",
      headline1: "Parlez simplement.",
      headline2: "PLANMOVE KI tape.",
      recording: "Enregistrement en cours",
      transcript:
        "« Devis pour la famille Meier, déménagement 3 pièces, de Zurich à Winterthour, vendredi à huit heures…",
      createdIn: "créé en 4,8 s",
      quoteNumber: "Devis #2049",
      now: "MAINTENANT",
      sendWhatsApp: "Envoyer via WhatsApp",
      micAria: "Enregistrement",
    },
    cardVisuals: {
      reaktion: {
        notifications: [
          "Demande — Famille Meier · Zurich",
          "WhatsApp — Monsieur Kaufmann",
          "Messagerie — Demande de déménagement",
        ],
        chip: "12 demandes manquées · cette nuit",
      },
      sprache: {
        translated: "Traduit · Allemand",
        reply: "Bonjour, nous vous envoyons volontiers un devis.",
      },
      feierabend: {
        chipTop: "23:47 · Encore au bureau",
        tableHead: "Devis · 47 en attente",
        overdue: "En retard",
        chipBottom: "La fin de journée est encore tombée à l'eau",
      },
      followUp: {
        autoReminder: "Rappel automatique",
        momoFollowsUp: "PLANMOVE KI relance.",
        reminders: [
          { name: "Monsieur Müller", detail: "Devis · il y a 3 jours" },
          { name: "Madame Meier", detail: "Déménagement 3,5 p. · il y a 5 jours" },
          { name: "Top Umzug AG", detail: "Cadre B2B · il y a 7 jours" },
        ],
      },
      anrufe: {
        incoming: "Appel entrant",
        unknown: "Inconnu",
        handled: "pris en charge par PLANMOVE KI…",
      },
    },
  },

  it: {
    whatsapp: {
      url: waUrl(
        "Ciao PLANMOVE! Vorrei saperne di più su PLANMOVE KI, l'assistente per la mia azienda di traslochi/pulizie."
      ),
    },
    whatsappButton: {
      label: "Domande? Scrivici su WhatsApp",
    },
    languageSwitcher: {
      ariaLabel: (lang) => `Cambia lingua — attualmente ${lang}`,
    },
    hero: {
      tagline: "Pensato per gli imprenditori di traslochi & pulizie",
      flagAria: "Svizzera",
      headlines: ["Più clienti.", "Più tempo.", "Più soldi."],
      headlineHighlight: "Meno stress.",
      subtitle:
        "Il primo dipendente IA per l'ufficio – pensato appositamente per aziende di traslochi e pulizie.",
      videoCaptionA: "Solo ",
      videoCaptionHl1: "60 secondi",
      videoCaptionB: " e capisci subito come ",
      videoCaptionHl2: "funziona PlanMove.",
      benefits: [
        "PLANMOVE KI crea preventivi, fatture e risposte — semplicemente con la voce o WhatsApp.",
        "Parli semplicemente nella Sua lingua madre — PLANMOVE KI scrive in tedesco perfetto o nella lingua del Suo cliente.",
      ],
      starsAria: "4,9 su 5 stelle",
      reviews: "120+ recensioni",
      visualAlt:
        "L'assistente PLANMOVE KI risponde alle richieste dei clienti alla scrivania di un imprenditore",
    },
    trustBar: {
      items: [
        "PLANMOVE KI crea preventivi, fatture e risposte",
        "Non perdere più clienti",
        "Più incarichi",
        "Parla semplicemente nella Tua lingua",
        "Più tempo libero",
        "Più fatturato",
      ],
    },
    problems: {
      headingA: "Conosce questi ",
      headingHighlight: "7 problemi",
      headingB: " del Suo lavoro quotidiano?",
      cards: [
        {
          tag: "Tempi di risposta",
          title: [
            "Ogni richiesta ",
            { b: "senza risposta" },
            " Le costa ",
            { b: "clienti" },
            " — e molto denaro.",
          ],
          body: [
            { b: "I clienti non aspettano." },
            " Se risponde troppo tardi, passano alla ",
            { b: "concorrenza" },
            ". PLANMOVE KI risponde ",
            { hl: "in pochi secondi" },
            " — ",
            { b: "24 ore su 24, 7 giorni su 7" },
            ".",
          ],
          alt: "Chiamata persa sullo smartphone",
        },
        {
          tag: "Lingua madre",
          title: [
            "Il ",
            { b: "tedesco" },
            " non è la Sua lingua madre? Nessun problema.",
          ],
          body: [
            { b: "Parli semplicemente nella Sua lingua." },
            " PLANMOVE KI scrive ",
            { hl: "e-mail, preventivi e messaggi professionali" },
            " in ",
            { b: "tedesco perfetto" },
            ", in francese o come desidera.",
          ],
          alt: "Comunicazione multilingue",
        },
        {
          tag: "Fine giornata",
          title: [
            "Dopo una lunga giornata di lavoro, il ",
            { b: "lavoro d'ufficio" },
            " La aspetta.",
          ],
          body: [
            "Preventivi, e-mail, WhatsApp, fatture, pianificazione degli interventi… Molti imprenditori ",
            { b: "restano svegli fino a tardi" },
            ", solo per ",
            { b: "non perdere nessuna richiesta" },
            ". PLANMOVE KI ",
            { hl: "fa tutto" },
            ".",
          ],
          alt: "Imprenditore esausto dopo il lavoro",
        },
        {
          tag: "Follow-up",
          title: [
            "Invia preventivi e dimentica di ",
            { b: "ricontattare i clienti" },
            ".",
          ],
          body: [
            "Molti imprenditori ",
            { b: "perdono la visione d'insieme" },
            " — e con essa ",
            { b: "clienti e denaro" },
            ". PLANMOVE KI ",
            { hl: "ricorda automaticamente" },
            " — tramite messaggio o chiamata.",
          ],
          alt: "Follow-up dimenticati",
        },
        {
          tag: "Chiamate",
          title: [
            "Il ",
            { b: "telefono squilla" },
            " mentre lavora.",
          ],
          body: [
            "Non può rispondere? Nessun problema. PLANMOVE KI ",
            { hl: "risponde alle chiamate" },
            ", ",
            { b: "raccoglie tutte le informazioni" },
            " e, se lo desidera, fissa gli ",
            { b: "appuntamenti" },
            ".",
          ],
          alt: "Chiamata durante il lavoro",
        },
        {
          tag: "Canali",
          title: ["Così tanti messaggi. Così ", { b: "poco tempo" }, "."],
          body: [
            "WhatsApp, e-mail, telefono — ",
            { b: "tutto arriva contemporaneamente" },
            ". PLANMOVE KI ",
            { hl: "risponde, organizza e riunisce tutto in un unico posto" },
            ".",
          ],
          alt: "Tutti i canali su un unico schermo",
        },
      ],
      climax: {
        imageAlt: "PLANMOVE KI si occupa della pulizia",
        titleA: "Dimentichi la ",
        titleHighlight: "burocrazia",
        titleB: " e i programmi complicati.",
        sub: [
          "Niente appunti, niente elenchi Excel, niente lunghe serate al computer.",
          { b: "Dica semplicemente:" },
        ],
        voiceCommands: [
          "«PLANMOVE KI, crea un preventivo per il signor Müller.»",
          "«Invia il preventivo alla signora Meier via e-mail.»",
          "«Scrivi al cliente su WhatsApp che domani arriviamo alle 08:00.»",
          "«Crea la fattura e inviala al cliente.»",
        ],
        momoRestA: "PLANMOVE KI",
        momoRestB: " fa il resto.",
        services: [
          "PLANMOVE KI crea preventivi, fatture e risposte",
          "Messaggi",
          "Appuntamenti",
          "Chiamate",
          "Traduzioni",
          "e molto altro…",
        ],
        magic: "La magia di PLANMOVE KI",
      },
    },
    testimonials: {
      headingLine1: "Traslochi & pulizie",
      headingLine2a: "con ",
      headingLine2Highlight: "PLANMOVE.",
      items: [
        {
          name: "Marco H.",
          role: "Imprenditore di traslochi",
          quote:
            "Prima, due ore di scartoffie dopo il lavoro. Oggi parlo per 40 secondi al telefono — fatto. Ho riavuto le mie serate.",
        },
        {
          name: "Elena B.",
          role: "Imprenditrice di pulizie",
          quote:
            "Sono cresciuta in Portogallo. PLANMOVE KI capisce la mia lingua madre e scrive un tedesco impeccabile. I miei clienti notano la differenza.",
        },
        {
          name: "Tommaso K.",
          role: "Imprenditore di trasporti",
          quote:
            "Il follow-up automatico mi ha salvato tre incarichi il mese scorso, che altrimenti avrei dimenticato. PLANMOVE KI si ripaga più volte.",
        },
        {
          name: "Sara M.",
          role: "Imprenditrice di pulizie",
          quote:
            "PLANMOVE KI risponde alle richieste di notte e nel weekend — questo mi dà una vera tranquillità.",
        },
        {
          name: "Davide R.",
          role: "Imprenditore di traslochi",
          quote:
            "Da quando usiamo PLANMOVE KI, scriviamo preventivi professionali in pochi minuti. Risparmiamo tempo e sembriamo molto più seri ai clienti.",
        },
        {
          name: "Team Primemove",
          role: "Primemove",
          quote:
            "PLANMOVE KI ha cambiato completamente la nostra routine in ufficio. Più tempo, meno stress, clienti soddisfatti.",
        },
      ],
    },
    beforeAfter: {
      headingBefore: "Senza PLANMOVE",
      headingAfter: "Con PLANMOVE",
      items: [
        { before: "Il tedesco era un problema.", after: "Parla semplicemente — PLANMOVE KI scrive un tedesco perfetto." },
        { before: "I preventivi richiedevano molto tempo.", after: "Preventivi in pochi secondi." },
        { before: "I clienti dimenticavano i preventivi.", after: "Promemoria automatico ai clienti." },
        { before: "Creare fatture manualmente.", after: "Creare fatture automaticamente." },
        { before: "E-mail e lettere erano faticose.", after: "PLANMOVE KI spiega e risponde a tutto." },
        { before: "Lavoro d'ufficio fino a tardi.", after: "Più tempo libero, meno ufficio." },
        { before: "Richieste perse.", after: "Risposte — anche al di fuori dell'orario di lavoro." },
        { before: "Tutto era disordinato.", after: "Tutto in un unico posto." },
        { before: "Tanti errori e malintesi.", after: "Comunicazione chiara e professionale." },
        { before: "Bisogno di più personale.", after: "Meno sforzo, meno costi." },
      ],
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        {
          q: "Cos'è PLANMOVE KI?",
          a: "PLANMOVE KI è il Suo assistente IA personale per la Sua azienda di traslochi o pulizie. Risponde alle richieste, crea preventivi e fatture, traduce testi e ricorda automaticamente ai clienti — semplicemente con la voce o WhatsApp.",
        },
        {
          q: "Devo conoscere il tedesco?",
          a: "No. Parli semplicemente nella Sua lingua madre. PLANMOVE KI La capisce e redige risposte professionali in tedesco perfetto o nella lingua del Suo cliente.",
        },
        {
          q: "Quanto è veloce PLANMOVE KI?",
          a: "PLANMOVE KI risponde in pochi secondi. Un preventivo, un'e-mail o una richiesta cliente — tutto viene elaborato immediatamente, anche al di fuori dell'orario d'ufficio.",
        },
        {
          q: "PLANMOVE KI funziona anche sul cellulare?",
          a: "Sì. Utilizza PLANMOVE KI comodamente sul Suo smartphone tramite WhatsApp o un messaggio vocale — in ufficio, in viaggio o in cantiere.",
        },
        {
          q: "Quali lingue parla PLANMOVE KI?",
          a: "PLANMOVE KI parla con Lei nella Sua lingua madre — qualunque essa sia. E scrive risposte professionali in tedesco, francese, italiano o nella lingua del Suo cliente.",
        },
      ],
    },
    team: {
      kicker: "Il nostro team",
      heading: "Le persone dietro PLANMOVE",
      sub: "Un piccolo team con un grande obiettivo: meno ufficio, più tempo e più clienti per le aziende svizzere di traslochi e pulizie.",
    },
    finalCta: {
      chipMoving: "Traslochi",
      chipCleaning: "Pulizie",
      headline1: "Meno ufficio.",
      headline2: "Più tempo. Più clienti.",
      headline3: "Più fatturato.",
      paragraph:
        "Scopra come PLANMOVE KI semplifica la Sua giornata lavorativa e fa in modo che non Le sfugga più nessuna richiesta né incarico.",
      subItems: ["Nessun impegno", "Risposta rapida", "Consulenza personale"],
    },
    footer: {
      kicker: "Il Suo prossimo passo",
      headlineA: "Pronto per ",
      headlineB: "più ",
      headlineHighlight: "fatturato?",
      paragraph:
        "Una breve conversazione su WhatsApp — personale, gratuita e senza impegno. Scopra in cinque minuti come PLANMOVE KI trasforma la Sua PMI.",
      brandDescription:
        "PLANMOVE KI è l'assistente IA per le aziende svizzere di traslochi e pulizie. PLANMOVE è il software. Disponibile 24 ore su 24, 7 giorni su 7. In ogni lingua.",
      contactHeading: "Contatto",
      phone: "+41794880011",
      phoneAria: "Chiama PLANMOVE",
      bottomNote: "",
    },
    phoneMockup: {
      newRequest: "Nuova richiesta",
      headline1: "Parli pure.",
      headline2: "PLANMOVE KI scrive.",
      recording: "Registrazione in corso",
      transcript:
        "«Preventivo per la famiglia Meier, trasloco 3 stanze, da Zurigo a Winterthur, venerdì alle otto…",
      createdIn: "creato in 4,8 s",
      quoteNumber: "Preventivo #2049",
      now: "ORA",
      sendWhatsApp: "Invia via WhatsApp",
      micAria: "Registrazione",
    },
    cardVisuals: {
      reaktion: {
        notifications: [
          "Richiesta — Famiglia Meier · Zurigo",
          "WhatsApp — Signor Kaufmann",
          "Segreteria — Richiesta di trasloco",
        ],
        chip: "12 richieste perse · questa notte",
      },
      sprache: {
        translated: "Tradotto · Tedesco",
        reply: "Buongiorno, Le inviamo volentieri un preventivo.",
      },
      feierabend: {
        chipTop: "23:47 · Ancora alla scrivania",
        tableHead: "Preventivi · 47 in sospeso",
        overdue: "In ritardo",
        chipBottom: "Anche oggi niente fine giornata",
      },
      followUp: {
        autoReminder: "Promemoria automatico",
        momoFollowsUp: "PLANMOVE KI ricontatta.",
        reminders: [
          { name: "Signor Müller", detail: "Preventivo · 3 giorni fa" },
          { name: "Signora Meier", detail: "Trasloco 3,5 loc. · 5 giorni fa" },
          { name: "Top Umzug AG", detail: "Quadro B2B · 7 giorni fa" },
        ],
      },
      anrufe: {
        incoming: "Chiamata in arrivo",
        unknown: "Sconosciuto",
        handled: "presa in carico da PLANMOVE KI…",
      },
    },
  },

  es: {
    whatsapp: {
      url: waUrl(
        "Hola PLANMOVE. Me gustaría saber más sobre PLANMOVE KI, el asistente para mi empresa de mudanzas/limpieza."
      ),
    },
    whatsappButton: {
      label: "¿Preguntas? Escríbenos por WhatsApp",
    },
    languageSwitcher: {
      ariaLabel: (lang) => `Cambiar idioma — actualmente ${lang}`,
    },
    hero: {
      tagline: "Hecho para empresarios de mudanzas y limpieza",
      flagAria: "Suiza",
      headlines: ["Más clientes.", "Más tiempo.", "Más dinero."],
      headlineHighlight: "Menos estrés.",
      subtitle:
        "El primer empleado de IA para la oficina – hecho especialmente para empresas de mudanzas y limpieza.",
      videoCaptionA: "Solo ",
      videoCaptionHl1: "60 segundos",
      videoCaptionB: " y entiendes al instante cómo ",
      videoCaptionHl2: "funciona PlanMove.",
      benefits: [
        "PLANMOVE KI crea presupuestos, facturas y respuestas — simplemente con la voz o WhatsApp.",
        "Hable simplemente en su idioma materno — PLANMOVE KI escribe en alemán perfecto o en el idioma de su cliente.",
      ],
      starsAria: "4,9 de 5 estrellas",
      reviews: "120+ opiniones",
      visualAlt:
        "El asistente PLANMOVE KI responde consultas de clientes en el escritorio de un empresario",
    },
    trustBar: {
      items: [
        "PLANMOVE KI crea presupuestos, facturas y respuestas",
        "No perder clientes",
        "Más encargos",
        "Hable simplemente en su idioma",
        "Más tiempo libre",
        "Más facturación",
      ],
    },
    problems: {
      headingA: "¿Conoce estos ",
      headingHighlight: "7 problemas",
      headingB: " del día a día?",
      cards: [
        {
          tag: "Tiempo de respuesta",
          title: [
            "Cada consulta ",
            { b: "sin respuesta" },
            " le cuesta ",
            { b: "clientes" },
            " — y mucho dinero.",
          ],
          body: [
            { b: "Los clientes no esperan." },
            " Si responde tarde, se van a la ",
            { b: "competencia" },
            ". PLANMOVE KI responde ",
            { hl: "en pocos segundos" },
            " — ",
            { b: "24/7" },
            ".",
          ],
          alt: "Llamada perdida en el móvil",
        },
        {
          tag: "Idioma materno",
          title: [
            "¿El ",
            { b: "alemán" },
            " no es su idioma materno? No hay problema.",
          ],
          body: [
            { b: "Hable simplemente en su idioma." },
            " PLANMOVE KI escribe ",
            { hl: "correos, presupuestos y mensajes profesionales" },
            " en ",
            { b: "alemán perfecto" },
            ", francés o como desee.",
          ],
          alt: "Comunicación multilingüe",
        },
        {
          tag: "Fin de jornada",
          title: [
            "Después de un largo día de trabajo le espera el ",
            { b: "papeleo" },
            ".",
          ],
          body: [
            "Presupuestos, correos, WhatsApp, facturas, planificación… Muchos empresarios ",
            { b: "se quedan despiertos hasta tarde" },
            " solo para ",
            { b: "no perder ninguna consulta" },
            ". PLANMOVE KI ",
            { hl: "lo hace todo" },
            ".",
          ],
          alt: "Empresario agotado después del trabajo",
        },
        {
          tag: "Seguimiento",
          title: [
            "Envía presupuestos y olvida ",
            { b: "hacer seguimiento" },
            ".",
          ],
          body: [
            "Muchos empresarios ",
            { b: "pierden el control" },
            " — y con él ",
            { b: "clientes y dinero" },
            ". PLANMOVE KI ",
            { hl: "recuerda automáticamente" },
            " — por mensaje o llamada.",
          ],
          alt: "Seguimientos olvidados",
        },
        {
          tag: "Llamadas",
          title: [
            "El ",
            { b: "teléfono suena" },
            " mientras trabaja.",
          ],
          body: [
            "¿No puede atender? No hay problema. PLANMOVE KI ",
            { hl: "atiende las llamadas" },
            ", ",
            { b: "recopila toda la información" },
            " y concerta ",
            { b: "citas" },
            " si lo desea.",
          ],
          alt: "Llamada durante el trabajo",
        },
        {
          tag: "Canales",
          title: ["Tantos mensajes. Tan ", { b: "poco tiempo" }, "."],
          body: [
            "WhatsApp, correo, teléfono — ",
            { b: "todo llega a la vez" },
            ". PLANMOVE KI ",
            { hl: "responde, organiza y reúne todo en un solo lugar" },
            ".",
          ],
          alt: "Todos los canales en una pantalla",
        },
      ],
      climax: {
        imageAlt: "PLANMOVE KI se encarga de la limpieza",
        titleA: "Olvídese del ",
        titleHighlight: "papeleo",
        titleB: " y los programas complicados.",
        sub: [
          "No más notas, ni listas de Excel, ni largas noches frente al ordenador.",
          { b: "Diga simplemente:" },
        ],
        voiceCommands: [
          "«PLANMOVE KI, prepara un presupuesto para el señor Müller.»",
          "«Envía el presupuesto a la señora Meier por correo.»",
          "«Escribe al cliente por WhatsApp que mañana llegamos a las 08:00.»",
          "«Crea la factura y envíasela al cliente.»",
        ],
        momoRestA: "PLANMOVE KI",
        momoRestB: " hace el resto.",
        services: [
          "PLANMOVE KI crea presupuestos, facturas y respuestas",
          "Mensajes",
          "Citas",
          "Llamadas",
          "Traducciones",
          "y mucho más…",
        ],
        magic: "La magia de PLANMOVE KI",
      },
    },
    testimonials: {
      headingLine1: "Mudanzas y limpieza",
      headingLine2a: "con ",
      headingLine2Highlight: "PLANMOVE.",
      items: [
        {
          name: "Marco H.",
          role: "Empresario de mudanzas",
          quote:
            "Antes, dos horas de papeleo después del trabajo. Hoy hablo 40 segundos al móvil — listo. He recuperado mis tardes.",
        },
        {
          name: "Elena B.",
          role: "Empresaria de limpieza",
          quote:
            "Crecí en Portugal. PLANMOVE KI entiende mi idioma materno y escribe alemán impecable. Mis clientes notan la diferencia.",
        },
        {
          name: "Tomás K.",
          role: "Empresario de transportes",
          quote:
            "El seguimiento automático me salvó tres encargos el mes pasado, que de otro modo habría olvidado. PLANMOVE KI se paga solo.",
        },
        {
          name: "Sara M.",
          role: "Empresaria de limpieza",
          quote:
            "PLANMOVE KI responde consultas por la noche y los fines de semana — eso me da verdadera tranquilidad.",
        },
        {
          name: "David R.",
          role: "Empresario de mudanzas",
          quote:
            "Desde que usamos PLANMOVE KI, escribimos presupuestos profesionales en minutos. Ahorramos tiempo y parecemos mucho más serios ante los clientes.",
        },
        {
          name: "Equipo Primemove",
          role: "Primemove",
          quote:
            "PLANMOVE KI ha cambiado completamente nuestra rutina de oficina. Más tiempo, menos estrés, clientes satisfechos.",
        },
      ],
    },
    beforeAfter: {
      headingBefore: "Sin PLANMOVE",
      headingAfter: "Con PLANMOVE",
      items: [
        { before: "El alemán era un problema.", after: "Hable simplemente — PLANMOVE KI escribe alemán perfecto." },
        { before: "Los presupuestos tardaban mucho.", after: "Presupuestos en pocos segundos." },
        { before: "Se olvidaban los presupuestos de los clientes.", after: "Recordatorio automático a los clientes." },
        { before: "Crear facturas manualmente.", after: "Crear facturas automáticamente." },
        { before: "Correos y cartas eran tediosos.", after: "PLANMOVE KI explica y responde todo." },
        { before: "Trabajo de oficina hasta tarde.", after: "Más tiempo libre, menos oficina." },
        { before: "Consultas perdidas.", after: "Respuestas — incluso fuera del horario laboral." },
        { before: "Todo era confuso.", after: "Todo en un solo lugar." },
        { before: "Muchos errores y malentendidos.", after: "Comunicación clara y profesional." },
        { before: "Se necesitaba más personal.", after: "Menos esfuerzo, menos costes." },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Qué es PLANMOVE KI?",
          a: "PLANMOVE KI es su asistente de IA personal para su empresa de mudanzas o limpieza. Responde consultas, crea presupuestos y facturas, traduce textos y recuerda automáticamente a los clientes — simplemente con la voz o WhatsApp.",
        },
        {
          q: "¿Necesito saber alemán?",
          a: "No. Hable simplemente en su idioma materno. PLANMOVE KI le entiende y redacta respuestas profesionales en alemán perfecto o en el idioma de su cliente.",
        },
        {
          q: "¿Qué tan rápido es PLANMOVE KI?",
          a: "PLANMOVE KI responde en segundos. Un presupuesto, un correo o una consulta de cliente — todo se procesa inmediatamente, incluso fuera del horario de oficina.",
        },
        {
          q: "¿PLANMOVE KI también funciona en el móvil?",
          a: "Sí. Use PLANMOVE KI cómodamente en su smartphone a través de WhatsApp o un mensaje de voz — en la oficina, de camino o en la obra.",
        },
        {
          q: "¿Qué idiomas habla PLANMOVE KI?",
          a: "PLANMOVE KI habla con usted en su idioma materno — sea cual sea. Y escribe respuestas profesionales en alemán, francés, italiano o en el idioma de su cliente.",
        },
      ],
    },
    team: {
      kicker: "Nuestro equipo",
      heading: "Las personas detrás de PLANMOVE",
      sub: "Un equipo pequeño con un gran objetivo: menos oficina, más tiempo y más clientes para las empresas suizas de mudanzas y limpieza.",
    },
    finalCta: {
      chipMoving: "Mudanzas",
      chipCleaning: "Limpieza",
      headline1: "Menos oficina.",
      headline2: "Más tiempo. Más clientes.",
      headline3: "Más facturación.",
      paragraph:
        "Descubra cómo PLANMOVE KI simplifica su día a día y se asegura de que no se le escape ninguna consulta ni encargo.",
      subItems: ["Sin compromiso", "Respuesta rápida", "Asesoramiento personal"],
    },
    footer: {
      kicker: "Su próximo paso",
      headlineA: "¿Listo para ",
      headlineB: "más ",
      headlineHighlight: "facturación?",
      paragraph:
        "Una breve conversación por WhatsApp — personal, gratuita y sin compromiso. Descubra en cinco minutos cómo PLANMOVE KI transforma su PYME.",
      brandDescription:
        "PLANMOVE KI es el asistente de IA para empresas suizas de mudanzas y limpieza. PLANMOVE es el software. Disponible 24/7. En todos los idiomas.",
      contactHeading: "Contacto",
      phone: "+41794880011",
      phoneAria: "Llamar a PLANMOVE",
      bottomNote: "",
    },
    phoneMockup: {
      newRequest: "Nueva consulta",
      headline1: "Hable simple.",
      headline2: "PLANMOVE KI escribe.",
      recording: "Grabación en curso",
      transcript:
        "«Presupuesto para la familia Meier, mudanza de 3 habitaciones, de Zúrich a Winterthur, viernes a las ocho…",
      createdIn: "creado en 4.8s",
      quoteNumber: "Presupuesto #2049",
      now: "AHORA",
      sendWhatsApp: "Enviar por WhatsApp",
      micAria: "Grabación",
    },
    cardVisuals: {
      reaktion: {
        notifications: [
          "Consulta — Familia Meier · Zúrich",
          "WhatsApp — Señor Kaufmann",
          "Mensaje de voz — Consulta de mudanza",
        ],
        chip: "12 consultas perdidas · esta noche",
      },
      sprache: {
        translated: "Traducido · Alemán",
        reply: "Buenos días, con gusto le enviamos un presupuesto.",
      },
      feierabend: {
        chipTop: "23:47 · Todavía en la oficina",
        tableHead: "Presupuestos · 47 abiertos",
        overdue: "Atrasado",
        chipBottom: "Hoy tampoco hay fin de jornada",
      },
      followUp: {
        autoReminder: "Recordatorio automático",
        momoFollowsUp: "PLANMOVE KI hace seguimiento.",
        reminders: [
          { name: "Señor Müller", detail: "Presupuesto · hace 3 días" },
          { name: "Señora Meier", detail: "Mudanza 3.5 hab · hace 5 días" },
          { name: "Top Umzug AG", detail: "Marco B2B · hace 7 días" },
        ],
      },
      anrufe: {
        incoming: "Llamada entrante",
        unknown: "Desconocido",
        handled: "atendido por PLANMOVE KI…",
      },
    },
  },

  sq: {
    whatsapp: {
      url: waUrl(
        "Përshëndetje PLANMOVE. Do të doja të dija më shumë për PLANMOVE KI, asistentin për kompaninë time të zhvendosjeve/pastrimit."
      ),
    },
    whatsappButton: {
      label: "Pyetje? Na shkruani në WhatsApp",
    },
    languageSwitcher: {
      ariaLabel: (lang) => `Ndrysho gjuhën — aktualisht ${lang}`,
    },
    hero: {
      tagline: "Krijuar për sipërmarrës zhvendosjesh & pastrimi",
      flagAria: "Zvicër",
      headlines: ["Më shumë klientë.", "Më shumë kohë.", "Më shumë para."],
      headlineHighlight: "Më pak stres.",
      subtitle:
        "Punonjësi i parë me inteligjencë artificiale për zyrën – krijuar posaçërisht për kompanitë e zhvendosjeve dhe pastrimit.",
      videoCaptionA: "Vetëm ",
      videoCaptionHl1: "60 sekonda",
      videoCaptionB: " dhe e kupton menjëherë si ",
      videoCaptionHl2: "funksionon PlanMove.",
      benefits: [
        "PLANMOVE KI krijon oferta, fatura dhe përgjigje — thjesht me zë ose WhatsApp.",
        "Folni thjesht në gjuhën tuaj amtare — PLANMOVE KI shkruan gjermanisht të përsosur ose gjuhën e klientit tuaj.",
      ],
      starsAria: "4.9 nga 5 yje",
      reviews: "120+ vlerësime",
      visualAlt:
        "Asistenti PLANMOVE KI i përgjigjet pyetjeve të klientëve në tavolinën e një sipërmarrësi",
    },
    trustBar: {
      items: [
        "PLANMOVE KI krijon oferta, fatura dhe përgjigje",
        "Mos humb klientë",
        "Më shumë punë",
        "Fol thjesht në gjuhën tënde",
        "Më shumë kohë të lirë",
        "Më shumë fitim",
      ],
    },
    problems: {
      headingA: "A i njihni këto ",
      headingHighlight: "7 probleme",
      headingB: " nga jeta juaj e përditshme?",
      cards: [
        {
          tag: "Koha e përgjigjes",
          title: [
            "Çdo kërkesë ",
            { b: "e pa përgjigjur" },
            " ju kushton ",
            { b: "klientë" },
            " — dhe shumë para.",
          ],
          body: [
            { b: "Klientët nuk presin." },
            " Nëse përgjigjeni vonë, shkojnë te ",
            { b: "konkurrenca" },
            ". PLANMOVE KI përgjigjet ",
            { hl: "brenda pak sekondash" },
            " — ",
            { b: "24/7" },
            ".",
          ],
          alt: "Telefonatë e humbur në celular",
        },
        {
          tag: "Gjuha amtare",
          title: [
            "",
            { b: "Gjermanishtja" },
            " nuk është gjuha juaj amtare? Nuk ka problem.",
          ],
          body: [
            { b: "Folni thjesht në gjuhën tuaj." },
            " PLANMOVE KI shkruan ",
            { hl: "email, oferta dhe mesazhe profesionale" },
            " në ",
            { b: "gjermanisht të përsosur" },
            ", frëngjisht ose siç dëshironi.",
          ],
          alt: "Komunikim shumëgjuhësh",
        },
        {
          tag: "Fundi i ditës",
          title: [
            "Pas një dite të gjatë pune ju pret ",
            { b: "puna e zyrës" },
            ".",
          ],
          body: [
            "Oferta, email, WhatsApp, fatura, planifikim… Shumë sipërmarrës ",
            { b: "qëndrojnë zgjuar deri vonë" },
            ", vetëm për të ",
            { b: "mos humbur asnjë kërkesë" },
            ". PLANMOVE KI ",
            { hl: "bën gjithçka" },
            ".",
          ],
          alt: "Sipërmarrës i lodhur pas punës",
        },
        {
          tag: "Ndjekja",
          title: [
            "Dërgoni oferta dhe harroni të ",
            { b: "ndjekni" },
            ".",
          ],
          body: [
            "Shumë sipërmarrës ",
            { b: "humbasin kontrollin" },
            " — dhe me të ",
            { b: "klientë dhe para" },
            ". PLANMOVE KI ",
            { hl: "kujton automatikisht" },
            " — me mesazh ose telefonatë.",
          ],
          alt: "Ndjekje të harruara",
        },
        {
          tag: "Telefonata",
          title: [
            "",
            { b: "Telefoni po bie" },
            " ndërsa punoni.",
          ],
          body: [
            "Nuk mund të përgjigjeni? Nuk ka problem. PLANMOVE KI ",
            { hl: "merret me telefonatat" },
            ", ",
            { b: "mbledh të gjitha informacionet" },
            " dhe cakton ",
            { b: "takime" },
            " nëse dëshironi.",
          ],
          alt: "Telefonatë gjatë punës",
        },
        {
          tag: "Kanalet",
          title: ["Kaq shumë mesazhe. Kaq ", { b: "pak kohë" }, "."],
          body: [
            "WhatsApp, email, telefon — ",
            { b: "gjithçka vjen njëkohësisht" },
            ". PLANMOVE KI ",
            { hl: "përgjigjet, organizon dhe i bashkon gjithçka në një vend" },
            ".",
          ],
          alt: "Të gjitha kanalet në një ekran",
        },
      ],
      climax: {
        imageAlt: "PLANMOVE KI merret me pastrimin",
        titleA: "Harroni ",
        titleHighlight: "burokracinë",
        titleB: " dhe programet e ndërlikuara.",
        sub: [
          "As shënime, as lista Excel, as netë të gjata para kompjuterit.",
          { b: "Thjesht thuaj:" },
        ],
        voiceCommands: [
          "«PLANMOVE KI, krijo një ofertë për zotin Müller.»",
          "«Dërgo ofertën zonjës Meier me email.»",
          "«Shkruaju klientit në WhatsApp që nesër vijnë në orën 08:00.»",
          "«Krijo faturën dhe dërgoja klientit.»",
        ],
        momoRestA: "PLANMOVE KI",
        momoRestB: " kryen pjesën tjetër.",
        services: [
          "PLANMOVE KI krijon oferta, fatura dhe përgjigje",
          "Mesazhe",
          "Takime",
          "Telefonata",
          "Përkthime",
          "dhe shumë më tepër…",
        ],
        magic: "Magjia e PLANMOVE KI",
      },
    },
    testimonials: {
      headingLine1: "Zhvendosje & pastrim",
      headingLine2a: "me ",
      headingLine2Highlight: "PLANMOVE.",
      items: [
        {
          name: "Mark H.",
          role: "Pronar kompanie zhvendosjesh",
          quote:
            "Më parë, dy orë punë zyre pas punës. Sot flas 40 sekonda në telefon — gati. E kam rimarrë mbrëmjen time.",
        },
        {
          name: "Elena B.",
          role: "Pronare kompanie pastrimi",
          quote:
            "U rrita në Portugali. PLANMOVE KI kupton gjuhën time amtare dhe shkruan gjermanisht të përsosur. Klientët e mi e shohin diferencën.",
        },
        {
          name: "Tomas K.",
          role: "Pronar kompanie transporti",
          quote:
            "Ndjekja automatike më shpëtoi tre punë muajin e kaluar, që përndryshe do t'i kisha harruar. PLANMOVE KI paguhet vetë.",
        },
        {
          name: "Sara M.",
          role: "Pronare kompanie pastrimi",
          quote:
            "PLANMOVE KI i përgjigjet pyetjeve natën dhe në fundjavë — kjo më jep qetësi të vërtetë.",
        },
        {
          name: "David R.",
          role: "Pronar kompanie zhvendosjesh",
          quote:
            "Që kur përdorim PLANMOVE KI, shkruajmë oferta profesionale në pak minuta. Kursejmë kohë dhe dukemi shumë më seriozë ndaj klientëve.",
        },
        {
          name: "Ekipi Primemove",
          role: "Primemove",
          quote:
            "PLANMOVE KI e ka ndryshuar krejtësisht rutinën tonë në zyrë. Më shumë kohë, më pak stres, klientë të kënaqur.",
        },
      ],
    },
    beforeAfter: {
      headingBefore: "Pa PLANMOVE",
      headingAfter: "Me PLANMOVE",
      items: [
        { before: "Gjermanishtja ishte problem.", after: "Fol thjesht — PLANMOVE KI shkruan gjermanisht të përsosur." },
        { before: "Ofertat kushtonin shumë kohë.", after: "Oferta në pak sekonda." },
        { before: "Harroheshin ofertat e klientëve.", after: "Kujtesë automatike për klientët." },
        { before: "Faturat krijoheshin dorazi.", after: "Faturat krijohen automatikisht." },
        { before: "Emailat & letrat ishin të vështira.", after: "PLANMOVE KI i shpjegon dhe i përgjigjet gjithçkaje." },
        { before: "Punë zyre deri vonë.", after: "Më shumë kohë të lirë, më pak zyrë." },
        { before: "Kërkesa të humbura.", after: "Përgjigje — edhe jashtë orarit të punës." },
        { before: "Gjithçka ishte e paorganizuar.", after: "Gjithçka në një vend." },
        { before: "Shumë gabime & keqkuptime.", after: "Komunikim i qartë dhe profesional." },
        { before: "Duhej më shumë personel.", after: "Më pak përpjekje, më pak kosto." },
      ],
    },
    faq: {
      heading: "Pyetje të shpeshta",
      items: [
        {
          q: "Çfarë është PLANMOVE KI?",
          a: "PLANMOVE KI është asistenti juaj personal i IA për kompaninë tuaj të zhvendosjeve ose pastrimit. I përgjigjet pyetjeve, krijon oferta dhe fatura, përkthen tekste dhe i kujton automatikisht klientëve — thjesht me zë ose WhatsApp.",
        },
        {
          q: "A kam nevojë të di gjermanisht?",
          a: "Jo. Folni thjesht në gjuhën tuaj amtare. PLANMOVE KI ju kupton dhe redakton përgjigje profesionale në gjermanisht të përsosur ose në gjuhën e klientit tuaj.",
        },
        {
          q: "Sa i shpejtë është PLANMOVE KI?",
          a: "PLANMOVE KI përgjigjet brenda sekondash. Një ofertë, një email ose një pyetje klienti — gjithçka përpunohet menjëherë, edhe jashtë orarit të punës.",
        },
        {
          q: "A funksionon PLANMOVE KI edhe në celular?",
          a: "Po. Përdorni PLANMOVE KI lehtësisht në smartphone-in tuaj përmes WhatsApp ose një mesazhi zanor — në zyrë, në rrugë ose në ndërtim.",
        },
        {
          q: "Çfarë gjuhësh flet PLANMOVE KI?",
          a: "PLANMOVE KI flet me ju në gjuhën tuaj amtare — çfarëdo qoftë ajo. Dhe shkruan përgjigje profesionale në gjermanisht, frëngjisht, italisht ose në gjuhën e klientit tuaj.",
        },
      ],
    },
    team: {
      kicker: "Ekipi ynë",
      heading: "Njerëzit pas PLANMOVE",
      sub: "Një ekip i vogël me një qëllim të madh: më pak zyrë, më shumë kohë dhe më shumë klientë për kompanitë zvicerane të zhvendosjeve dhe pastrimit.",
    },
    finalCta: {
      chipMoving: "Zhvendosje",
      chipCleaning: "Pastrim",
      headline1: "Më pak zyrë.",
      headline2: "Më shumë kohë. Më shumë klientë.",
      headline3: "Më shumë fitim.",
      paragraph:
        "Mësoni se si PLANMOVE KI e thjeshton ditën tuaj të punës dhe siguron që të mos humbisni më asnjë kërkesë ose punë.",
      subItems: ["Pa angazhim", "Përgjigje e shpejtë", "Këshillim personal"],
    },
    footer: {
      kicker: "Hapi juaj tjetër",
      headlineA: "Gati për ",
      headlineB: "më shumë ",
      headlineHighlight: "fitim?",
      paragraph:
        "Një bisedë e shkurtër në WhatsApp — personale, falas dhe pa angazhim. Mësoni në pesë minuta se si PLANMOVE KI transformon biznesin tuaj.",
      brandDescription:
        "PLANMOVE KI është asistenti i IA-së për kompanitë zvicerane të zhvendosjeve dhe pastrimit. PLANMOVE është softueri. I arritshëm 24/7. Në çdo gjuhë.",
      contactHeading: "Kontakt",
      phone: "+41794880011",
      phoneAria: "Telefono PLANMOVE",
      bottomNote: "",
    },
    phoneMockup: {
      newRequest: "Kërkesë e re",
      headline1: "Fol thjesht.",
      headline2: "PLANMOVE KI shkruan.",
      recording: "Po regjistrohet",
      transcript:
        "«Ofertë për familjen Meier, zhvendosje 3-dhomëshe, nga Cyrihu në Winterthur, e premte në tetë…",
      createdIn: "krijuar në 4.8s",
      quoteNumber: "Oferta #2049",
      now: "TANI",
      sendWhatsApp: "Dërgo përmes WhatsApp",
      micAria: "Regjistrim",
    },
    cardVisuals: {
      reaktion: {
        notifications: [
          "Kërkesë — Familja Meier · Cyrih",
          "WhatsApp — Zoti Kaufmann",
          "Postë zanore — Kërkesë zhvendosjeje",
        ],
        chip: "12 kërkesa të humbura · këtë natë",
      },
      sprache: {
        translated: "Përkthyer · Gjermanisht",
        reply: "Mirëdita, me kënaqësi ju dërgojmë një ofertë.",
      },
      feierabend: {
        chipTop: "23:47 · Ende në zyrë",
        tableHead: "Oferta · 47 të hapura",
        overdue: "I vonuar",
        chipBottom: "Fundi i ditës dështoi sërish",
      },
      followUp: {
        autoReminder: "Kujtesë automatike",
        momoFollowsUp: "PLANMOVE KI ndjek.",
        reminders: [
          { name: "Zoti Müller", detail: "Ofertë · para 3 ditësh" },
          { name: "Zonja Meier", detail: "Zhvendosje 3.5 dh · para 5 ditësh" },
          { name: "Top Umzug AG", detail: "Kornizë B2B · para 7 ditësh" },
        ],
      },
      anrufe: {
        incoming: "Telefonatë hyrëse",
        unknown: "I panjohur",
        handled: "merret nga PLANMOVE KI…",
      },
    },
  },

  ku: {
    whatsapp: {
      url: waUrl(
        "Slav PLANMOVE. Ez dixwazim li ser PLANMOVE KI, asîstana ji bo şirketa min a koçberkirinê/paqijkirinê, bêtir bizanim."
      ),
    },
    whatsappButton: {
      label: "Pirs? Li WhatsAppê binivîsin me",
    },
    languageSwitcher: {
      ariaLabel: (lang) => `Ziman biguherîne — niha ${lang}`,
    },
    hero: {
      tagline: "Ji bo karsazên koçberkirinê & paqijkirinê hatiye çêkirin",
      flagAria: "Swîsre",
      headlines: ["Bêhtir xerîdar.", "Bêhtir dem.", "Bêhtir pere."],
      headlineHighlight: "Kêmtir stres.",
      subtitle:
        "Yekem karmendê AI yê ofîsê – taybet ji bo şirketên koçberkirin û paqijkirinê hatiye çêkirin.",
      videoCaptionA: "Tenê ",
      videoCaptionHl1: "60 saniye",
      videoCaptionB: " û tu tavilê fêm dikî ka ",
      videoCaptionHl2: "PlanMove çawa dixebite.",
      benefits: [
        "PLANMOVE KI pêşniyar, fatûre û bersivan çêdike — tenê bi deng an WhatsApp.",
        "Hingê bi zimanê xwe yê dayikê biaxive — PLANMOVE KI bi Almaniya bêkêmasî an bi zimanê xerîdarê we dinivîse.",
      ],
      starsAria: "4.9 ji 5 stêrkan",
      reviews: "120+ nirxandin",
      visualAlt:
        "Asîstana PLANMOVE KI li ser maseya karsazekî bersiva pirsên xerîdaran dide",
    },
    trustBar: {
      items: [
        "PLANMOVE KI pêşniyar, fatûre û bersivan çêdike",
        "Xerîdar winda neke",
        "Bêhtir kar",
        "Hingê bi zimanê xwe biaxive",
        "Bêhtir dema azad",
        "Bêhtir dahat",
      ],
    },
    problems: {
      headingA: "Ma tu van ",
      headingHighlight: "7 pirsgirêkan",
      headingB: " ji jiyana xwe ya rojane nas dikî?",
      cards: [
        {
          tag: "Dema bersivê",
          title: [
            "Her ",
            { b: "pirsên bê bersiv" },
            " ji we re ",
            { b: "xerîdar" },
            " û pereyên zêde diçin.",
          ],
          body: [
            { b: "Xerîdar li bendê nabin." },
            " Heke hûn dereng bersiv bidin, diçin ser ",
            { b: "reqabetê" },
            ". PLANMOVE KI di ",
            { hl: "çend saniyeyan de" },
            " bersiv dide — ",
            { b: "24/7" },
            ".",
          ],
          alt: "Telefona ji dest ketî li ser mobîlê",
        },
        {
          tag: "Zimanê dayikê",
          title: [
            "",
            { b: "Almanî" },
            " zimanê we yê dayikê nîne? Pirsgirêk nîne.",
          ],
          body: [
            { b: "Hingê bi zimanê xwe biaxive." },
            " PLANMOVE KI ",
            { hl: "e-name, pêşniyar û peyamanên profesyonel" },
            " bi ",
            { b: "Almaniya bêkêmasî" },
            ", Fransizî an jî weke ku hûn dixwazin dinivîse.",
          ],
          alt: "Îletîşiya pirzimanî",
        },
        {
          tag: "Dawiya rojê",
          title: [
            "Piştî rojekê dirêj a kar, ",
            { b: "karê ofîsê" },
            " li we li bendê ye.",
          ],
          body: [
            "Pêşniyar, e-name, WhatsApp, fatûre, plankirin… Gelek karsaz ",
            { b: "heya dereng şevê hişk in" },
            ", tenê ji bona ku ",
            { b: "tu pirs winda nebe" },
            ". PLANMOVE KI ",
            { hl: "her tiştî dike" },
            ".",
          ],
          alt: "Karsazê qels piştî kar",
        },
        {
          tag: "Şopandina paşîn",
          title: [
            "Hûn pêşniyar şandin û ji bîr dikin ku ",
            { b: "şopandinê" },
            " bikin.",
          ],
          body: [
            "Gelek karsaz ",
            { b: "kontrolê ji dest didin" },
            " — û bi wê re ",
            { b: "xerîdar û pere" },
            ". PLANMOVE KI ",
            { hl: "bixwe hişyar dike" },
            " — bi peyam an jî telefonê.",
          ],
          alt: "Şopandinên ji bîr kirin",
        },
        {
          tag: "Telefon",
          title: [
            "",
            { b: "Telefon" },
            " di dema kar de li te diçe.",
          ],
          body: [
            "Nikarî bersiv bidî? Pirsgirêk nîne. PLANMOVE KI ",
            { hl: "telefonan digire" },
            ", ",
            { b: "hemû agahiyan kom dike" },
            " û heke bixwaze ",
            { b: "serdanan" },
            " rêk dixe.",
          ],
          alt: "Telefon di dema kar de",
        },
        {
          tag: "Kanal",
          title: ["Gelek peyam. Zêde ", { b: "dem" }, "."],
          body: [
            "WhatsApp, e-name, telefon — ",
            { b: "hemû tişt di heman demê de tên" },
            ". PLANMOVE KI ",
            { hl: "bersiv dide, rêk dixe û hemû tiştî li cihekê kom dike" },
            ".",
          ],
          alt: "Hemû kanal li ser ekranekê",
        },
      ],
      climax: {
        imageAlt: "PLANMOVE KI paqijkirinê dike",
        titleA: "",
        titleHighlight: "Burokrasî",
        titleB: " û bernameyên tevlihev ji bîr bike.",
        sub: [
          "Ne not, ne lîsteyên Excel, ne şevên dirêj li ber komputerê.",
          { b: "Tenê bibêje:" },
        ],
        voiceCommands: [
          "«PLANMOVE KI, ji bo birêz Müller pêşniyarekê çêke.»",
          "«Pêşniyarê bi e-nameyê ji bo xanim Meier bişîne.»",
          "«Ji xerîdar re li WhatsAppê binivîse ku sibê saet 08:00 de tên.»",
          "«Fatûreyê çêke û ji xerîdar re bişîne.»",
        ],
        momoRestA: "PLANMOVE KI",
        momoRestB: " yê mayî dike.",
        services: [
          "PLANMOVE KI pêşniyar, fatûre û bersivan çêdike",
          "Peyam",
          "Serdan",
          "Telefon",
          "Wergerran",
          "û bêhtir…",
        ],
        magic: "Sêrûbiniya PLANMOVE KI",
      },
    },
    testimonials: {
      headingLine1: "Koçberkirin & paqijkirin",
      headingLine2a: "bi ",
      headingLine2Highlight: "PLANMOVE.",
      items: [
        {
          name: "Mark H.",
          role: "Xwedî şirketa koçberkirinê",
          quote:
            "Berî, du saetan piştî kar karê ofîsê. Îro 40 saniye li têlefonê diaxivim — qediya. Ez êvariya xwe dubare kir.",
        },
        {
          name: "Elena B.",
          role: "Xwedî şirketa paqijkirinê",
          quote:
            "Min li Portekizê mezin bûye. PLANMOVE KI zimanê min ê dayikê fêm dike û bi bêkêmasî Almanî dinivîse. Xerîdarên min ferqê dibînin.",
        },
        {
          name: "Tomas K.",
          role: "Xwedî şirketa wergirtinê",
          quote:
            "Şopandina bixwe meha borî sê kar ji min xilas kir, ku ez ê ji bîr bikira. PLANMOVE KI bi xwe xercê xwe dide.",
        },
        {
          name: "Sara M.",
          role: "Xwedî şirketa paqijkirinê",
          quote:
            "PLANMOVE KI şev û dawiya hefteyê bersiva pirsan dide — ev ji rastî aramiyekê dide min.",
        },
        {
          name: "David R.",
          role: "Xwedî şirketa koçberkirinê",
          quote:
            "Ji dema ku PLANMOVE KI bikar tînin, em pêşniyarên profesyonel di çend deqîqeyan de dinivîsin. Em demê xilas dikin û li ber xerîdaran bêhtir cidî xuya dibin.",
        },
        {
          name: "Tîma Primemove",
          role: "Primemove",
          quote:
            "PLANMOVE KI rûtîna me ya ofîsê bi temamî guherand. Bêhtir dem, kêmtir stres, xerîdarên kêfxweş.",
        },
      ],
    },
    beforeAfter: {
      headingBefore: "Bê PLANMOVE",
      headingAfter: "Bi PLANMOVE",
      items: [
        { before: "Almanî pirsgirêk bû.", after: "Hingê biaxive — PLANMOVE KI bi bêkêmasî Almanî dinivîse." },
        { before: "Pêşniyar demek zêde digirt.", after: "Pêşniyar di çend saniyeyan de." },
        { before: "Xerîdar ji bona pêşniyaran ji bîr dikirin.", after: "Hişyarkirina bixwe ya xerîdan." },
        { before: "Fatûre bi destan çêdikirin.", after: "Fatûre bi bixwe çêdibin." },
        { before: "E-name û name zehmet bûn.", after: "PLANMOVE KI her tiştî rave dike û bersiv dide." },
        { before: "Heta êvarî karê ofîsê.", after: "Bêhtir dema azad, kêmtir ofîs." },
        { before: "Pirsên ji dest ketî.", after: "Bersiv — heta derveyî dema kar jî." },
        { before: "Her tişt beliq bû.", after: "Her tişt li cihekê ye." },
        { before: "Gelek çewtî & şaşfêmî.", after: "Îletîşiya zelal û profesyonel." },
        { before: "Bêhtir karmend hewce bû.", after: "Kêmtir hewldan, kêmtir lêçûn." },
      ],
    },
    faq: {
      heading: "Pirsên frequent",
      items: [
        {
          q: "PLANMOVE KI çi ye?",
          a: "PLANMOVE KI asîstana AI-ya şexsî ya we ye ji bo şirketa we ya koçberkirinê an paqijkirinê. Bersiva pirsan dide, pêşniyar û fatûre çêdike, nivîsan wergerîne û bixwe xerîdar hişyar dike — tenê bi deng an WhatsApp.",
        },
        {
          q: "Ma ez hewceyê zanîna Almanî me?",
          a: "Na. Hingê bi zimanê xwe yê dayikê biaxive. PLANMOVE KI we fêm dike û bersivên profesyonel bi Almaniya bêkêmasî an bi zimanê xerîdarê we çêdike.",
        },
        {
          q: "PLANMOVE KI çiqas lez e?",
          a: "PLANMOVE KI di saniyeyan de bersiv dide. Pêşniyarek, e-name an pirsê xerîdarek — hemû tişt dûrrekt tê pêvajoy kirin, heta derveyî dema kar jî.",
        },
        {
          q: "Ma PLANMOVE KI li ser mobîlê jî dixebite?",
          a: "Erê. Hûn PLANMOVE KI bi hêsanî li ser smartphone-a xwe bi WhatsApp an peyamek dengî bikar tînin — di ofîsê de, rê de an li cihê kar.",
        },
        {
          q: "PLANMOVE KI bi çi zimanan diaxive?",
          a: "PLANMOVE KI bi we bi zimanê we yê dayikê diaxive — bila kijan be. Û bersivên profesyonel bi Almanî, Fransizî, Îtalî an bi zimanê xerîdarê we dinivîse.",
        },
      ],
    },
    team: {
      kicker: "Tîma me",
      heading: "Ekîba li pişt PLANMOVE",
      sub: "Tîmeke biçûk bi armanceke mezin: kêmtir ofîs, bêhtir dem û bêhtir xerîdar ji bo şirketên Swîsre yên koçberkirinê û paqijkirinê.",
    },
    finalCta: {
      chipMoving: "Koçberkirin",
      chipCleaning: "Paqijkirin",
      headline1: "Kêmtir ofîs.",
      headline2: "Bêhtir dem. Bêhtir xerîdar.",
      headline3: "Bêhtir dahat.",
      paragraph:
        "Bibînin ka PLANMOVE KI çawa roja we ya kar hêsan dike û bawer dike ku tu pirs an kar ji we nayê windakirin.",
      subItems: ["Bê berpirsiyarî", "Bersiva lez", "Şêwirmendiya şexsî"],
    },
    footer: {
      kicker: "Gavê we yê din",
      headlineA: "Amade ji bona ",
      headlineB: "bêhtir ",
      headlineHighlight: "dahat?",
      paragraph:
        "Gotûbajek kurt li WhatsAppê — şexsî, bêpere û bê berpirsiyarî. Di pênc deqîqeyan de bibînin ka PLANMOVE KI çawa karsaziya we diguherîne.",
      brandDescription:
        "PLANMOVE KI asîstana AI-ya ji bo şirketên Swîsreyî yên koçberkirinê û paqijkirinê ye. PLANMOVE nivîsbar e. 24/7 berdest. Bi her zimanî.",
      contactHeading: "Têkilî",
      phone: "+41794880011",
      phoneAria: "PLANMOVE bi telefonê gazî bike",
      bottomNote: "",
    },
    phoneMockup: {
      newRequest: "Pirsa nû",
      headline1: "Hingê biaxive.",
      headline2: "PLANMOVE KI dinivîse.",
      recording: "Tomarkirin diçe",
      transcript:
        "«Pêşniyar ji bo malbata Meier, koçberkirina 3-odayan, ji Zürichê ber bi Winterthurê, în roja înê saet 8…",
      createdIn: "di 4.8s de çêbû",
      quoteNumber: "Pêşniyar #2049",
      now: "NIHA",
      sendWhatsApp: "Bi WhatsAppê bişîne",
      micAria: "Tomarkirin",
    },
    cardVisuals: {
      reaktion: {
        notifications: [
          "Pirs — Malbata Meier · Zürich",
          "WhatsApp — Birêz Kaufmann",
          "Deng — Pirsya koçberkirinê",
        ],
        chip: "12 pirsên ji dest ketî · vê şevê",
      },
      sprache: {
        translated: "Wergirtî · Almanî",
        reply: "Rojbaş, em bi kêfxweşî pêşniyarekê ji we re dişînin.",
      },
      feierabend: {
        chipTop: "23:47 · Hîn jî li ofîsê",
        tableHead: "Pêşniyar · 47 vekirî",
        overdue: "Dereng",
        chipBottom: "Dawiya rojê îro jî têk çû",
      },
      followUp: {
        autoReminder: "Hişyarkirina bixwe",
        momoFollowsUp: "PLANMOVE KI şopandina dike.",
        reminders: [
          { name: "Birêz Müller", detail: "Pêşniyar · berî 3 rojan" },
          { name: "Xanim Meier", detail: "Koçberkirina 3.5 od. · berî 5 rojan" },
          { name: "Top Umzug AG", detail: "Çarçoveya B2B · berî 7 rojan" },
        ],
      },
      anrufe: {
        incoming: "Telefona tê",
        unknown: "Nenas",
        handled: "ji aliyê PLANMOVE KI ve tê girtin…",
      },
    },
  },
  fa,
  tr,
  pt,
};

export default translations;
