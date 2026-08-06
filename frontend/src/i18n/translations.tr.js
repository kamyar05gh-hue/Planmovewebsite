/**
 * Turkish (tr) UI strings for PLANMOVE/PLANMOVE KI.
 * Mirrors the structure of the `de` block in translations.js exactly.
 * - Segment arrays: plain strings are rendered as-is, { hl: "..." } inside
 *   the blue highlight span, { b: "..." } inside the black bold span.
 * - Brand names "PLANMOVE KI" and "PLANMOVE" stay untranslated.
 */

const waUrl = (text) =>
  "https://wa.me/41794880011?text=" + encodeURIComponent(text);

export const tr = {
  whatsapp: {
    url: waUrl(
      "Merhaba PLANMOVE! Taşıma/temizlik şirketim için asistan olan PLANMOVE KI hakkında daha fazla bilgi almak istiyorum."
    ),
  },
  whatsappButton: {
    label: "Sorularınız mı var? Bize WhatsApp üzerinden yazın",
  },
  languageSwitcher: {
    ariaLabel: (lang) => `Dili değiştir — şu an ${lang}`,
  },
  hero: {
    tagline: "Taşıma ve temizlik girişimcileri için tasarlandı",
    flagAria: "İsviçre",
    headlines: ["Daha fazla müşteri.", "Daha fazla zaman.", "Daha fazla para."],
    headlineHighlight: "Daha az stres.",
    subtitle:
      "Ofis için ilk yapay zekâ çalışanı – taşıma ve temizlik şirketleri için özel olarak tasarlandı.",
    videoCaptionA: "Sadece ",
    videoCaptionHl1: "60 saniye",
    videoCaptionB: " içinde ",
    videoCaptionHl2: "PlanMove'un nasıl çalıştığını anında anlarsınız.",
    benefits: [
      "PLANMOVE KI teklifleri, faturaları ve yanıtları oluşturur – sadece sesli komut veya WhatsApp ile.",
      "Sadece kendi ana dilinizde konuşun – PLANMOVE KI mükemmel Almanca veya müşterinizin dilinde yazar.",
    ],
    starsAria: "5 üzerinden 4,9 yıldız",
    reviews: "120+ değerlendirme",
    visualAlt:
      "PLANMOVE KI asistanı, bir girişimcinin masasında müşteri taleplerini yanıtlıyor",
  },
  trustBar: {
    items: [
      "PLANMOVE KI teklifleri, faturaları ve yanıtları oluşturur",
      "Müşteri kaybetmeyin",
      "Daha fazla iş",
      "Sadece kendi ana dilinizde konuşun",
      "Daha fazla boş zaman",
      "Daha fazla ciro",
    ],
  },
  problems: {
    headingA: "Günlük hayatınızdan bu ",
    headingHighlight: "7 sorunu",
    headingB: " tanıyor musunuz?",
    cards: [
      {
        tag: "Yanıt süresi",
        title: [
          "Yanıtsız kalan her ",
          { b: "talep" },
          " size ",
          { b: "müşteri" },
          " – ve çok para kaybettirir.",
        ],
        body: [
          { b: "Müşteriler beklemez." },
          " Geç yanıt verirseniz ",
          { b: "rakiplere" },
          " giderler. PLANMOVE KI ",
          { hl: "birkaç saniye içinde" },
          " yanıtlar – ",
          { b: "7/24" },
          ".",
        ],
        alt: "Akıllı telefonda kaçırılan arama",
      },
      {
        tag: "Ana dil",
        title: [
          { b: "Almanca" },
          " ana diliniz değil mi? Sorun değil.",
        ],
        body: [
          { b: "Sadece kendi dilinizde konuşun." },
          " PLANMOVE KI ",
          { hl: "profesyonel e-postalar, teklifler ve mesajlar" },
          " yazar – ",
          { b: "mükemmel Almanca" },
          ", Fransızca veya dilediğiniz dilde.",
        ],
        alt: "Çok dilli iletişim",
      },
      {
        tag: "Mesai sonrası",
        title: [
          "Uzun bir iş gününün ardından sizi ",
          { b: "ofis işleri" },
          " bekliyor.",
        ],
        body: [
          "Teklifler, e-postalar, WhatsApp, faturalar, görev planlaması… Birçok girişimci ",
          { b: "geç saatlere kadar uyanık kalıyor" },
          ", sırf ",
          { b: "hiçbir talebi kaçırmamak" },
          " için. PLANMOVE KI ",
          { hl: "her şeyi halleder" },
          ".",
        ],
        alt: "Mesai sonrası yorgun girişimci",
      },
      {
        tag: "Takip",
        title: [
          "Teklifleri gönderiyor ama ",
          { b: "takip etmeyi" },
          " unutuyorsunuz.",
        ],
        body: [
          "Birçok girişimci ",
          { b: "genel bakışı kaybeder" },
          " — ve bununla birlikte ",
          { b: "müşterileri ve parayı da" },
          ". PLANMOVE KI ",
          { hl: "otomatik olarak hatırlatır" },
          " – mesaj veya arama yoluyla.",
        ],
        alt: "Unutulan takipler",
      },
      {
        tag: "Aramalar",
        title: [
          "Siz çalışırken ",
          { b: "telefon çalıyor" },
          ".",
        ],
        body: [
          "Açamıyor musunuz? Sorun değil. PLANMOVE KI ",
          { hl: "aramaları karşılar" },
          ", ",
          { b: "tüm bilgileri toplar" },
          " ve istenirse ",
          { b: "randevu" },
          " oluşturur.",
        ],
        alt: "Çalışma sırasında gelen arama",
      },
      {
        tag: "Kanallar",
        title: ["Bu kadar çok mesaj. Bu kadar ", { b: "az zaman" }, "."],
        body: [
          "WhatsApp, e-posta, telefon — ",
          { b: "hepsi aynı anda geliyor" },
          ". PLANMOVE KI ",
          { hl: "yanıtlar, düzenler ve her şeyi tek bir yerde toplar" },
          ".",
        ],
        alt: "Tüm kanallar tek ekranda",
      },
    ],
    climax: {
      imageAlt: "PLANMOVE KI temizliği hallediyor",
      titleA: "",
      titleHighlight: "Evrak işlerini",
      titleB: " ve karmaşık programları unutun.",
      sub: [
        "Notlar yok, Excel listeleri yok, bilgisayar başında geçen uzun akşamlar yok.",
        { b: "Sadece söyleyin:" },
      ],
      voiceCommands: [
        "“PLANMOVE KI, Müller Bey için bir teklif oluştur.”",
        "“Meier Hanım'a teklifi e-postayla gönder.”",
        "“Müşteriye WhatsApp'tan yarın saat 08:00'de geleceğimizi yaz.”",
        "“Faturayı oluştur ve müşteriye gönder.”",
      ],
      momoRestA: "PLANMOVE KI",
      momoRestB: " gerisini halleder.",
      services: [
        "PLANMOVE KI teklifleri, faturaları ve yanıtları oluşturur",
        "Mesajlar",
        "Randevular",
        "Aramalar",
        "Çeviriler",
        "ve çok daha fazlası…",
      ],
      magic: "PLANMOVE KI büyüsü",
    },
  },
  testimonials: {
    headingLine1: "Taşıma ve temizlik şirketleri",
    headingLine2a: "",
    headingLine2Highlight: "PLANMOVE ile.",
    items: [
      {
        name: "Markus H.",
        role: "Taşıma girişimcisi",
        quote:
          "Eskiden mesai sonrası iki saat evrak işi vardı. Şimdi telefona 40 saniye konuşuyorum — bitti. Akşamlarımı geri kazandım.",
      },
      {
        name: "Elena B.",
        role: "Temizlik girişimcisi",
        quote:
          "Portekiz'de büyüdüm. PLANMOVE KI ana dilimi anlıyor ve düzgün Almanca yazıyor. Müşterilerim farkı hissediyor.",
      },
      {
        name: "Thomas K.",
        role: "Nakliye girişimcisi",
        quote:
          "Otomatik takip geçen ay, aksi halde unutacağım üç işi kurtardı. PLANMOVE KI kendini katbekat amorti ediyor.",
      },
      {
        name: "Sara M.",
        role: "Temizlik girişimcisi",
        quote:
          "PLANMOVE KI talepleri geceleri ve hafta sonları yanıtlıyor — bu bana gerçek bir huzur veriyor.",
      },
      {
        name: "David R.",
        role: "Taşıma girişimcisi",
        quote:
          "PLANMOVE KI kullanmaya başladığımızdan beri dakikalar içinde profesyonel teklifler hazırlıyoruz. Bu zaman kazandırıyor ve müşterilerin gözünde çok daha güvenilir görünüyoruz.",
      },
      {
        name: "Primemove Ekibi",
        role: "Primemove",
        quote:
          "PLANMOVE KI ofis hayatımızı tamamen değiştirdi. Daha fazla zaman, daha az stres, mutlu müşteriler.",
      },
    ],
  },
  beforeAfter: {
    headingBefore: "PLANMOVE KI olmadan",
    headingAfter: "PLANMOVE KI ile",
    items: [
      { before: "Almanca bir sorundu.", after: "Sadece konuşun – PLANMOVE KI mükemmel Almanca yazar." },
      { before: "Teklifler çok zaman alıyordu.", after: "Birkaç saniyede teklifler." },
      { before: "Teklif sonrası müşteriler unutuluyordu.", after: "Müşterilere otomatik hatırlatma." },
      { before: "Faturalar elle oluşturuluyordu.", after: "Faturalar otomatik olarak oluşturulur." },
      { before: "E-postalar ve mektuplar zahmetliydi.", after: "PLANMOVE KI her şeyi açıklar ve yanıtlar." },
      { before: "Gece geç saatlere kadar ofis işi.", after: "Daha fazla boş zaman, daha az ofis." },
      { before: "Talepler kaçırılıyordu.", after: "Mesai saatleri dışında bile yanıtlar." },
      { before: "Her şey dağınıktı.", after: "Her şey tek bir yerde." },
      { before: "Çok fazla hata ve yanlış anlaşılma.", after: "Net, profesyonel iletişim." },
      { before: "Daha fazla personele ihtiyaç vardı.", after: "Daha az çaba, daha az maliyet." },
    ],
  },
  faq: {
    heading: "Sıkça sorulan sorular",
    items: [
      {
        q: "PLANMOVE KI nedir?",
        a: "PLANMOVE KI, taşıma veya temizlik şirketiniz için kişisel yapay zekâ asistanınızdır. Talepleri yanıtlar, teklifler ve faturalar oluşturur, metinleri çevirir ve müşterilere otomatik olarak hatırlatma yapar — tümü sadece sesli komut veya WhatsApp ile.",
      },
      {
        q: "Almanca bilmem gerekiyor mu?",
        a: "Hayır. Sadece kendi ana dilinizde konuşun. PLANMOVE KI sizi anlar ve mükemmel Almanca veya müşterinizin dilinde profesyonel yanıtlar oluşturur.",
      },
      {
        q: "PLANMOVE KI ne kadar hızlı?",
        a: "PLANMOVE KI saniyeler içinde yanıt verir. Bir teklif, bir e-posta veya bir müşteri talebi — her şey, mesai saatleri dışında bile anında işlenir.",
      },
      {
        q: "PLANMOVE KI telefonda da çalışıyor mu?",
        a: "Evet. PLANMOVE KI'yı akıllı telefonunuzda WhatsApp veya sesli mesaj yoluyla rahatça kullanabilirsiniz — ofiste, yolda veya şantiyede fark etmez.",
      },
      {
        q: "PLANMOVE KI hangi dilleri konuşuyor?",
        a: "PLANMOVE KI sizinle ana dilinizde konuşur — hangi dil olursa olsun. Ve Almanca, Fransızca, İtalyanca veya müşterinizin dilinde profesyonel yanıtlar yazar.",
      },
    ],
  },
  team: {
    kicker: "Ekibimiz",
    heading: "PLANMOVE'un arkasındaki insanlar",
    sub: "Büyük bir hedefi olan küçük bir ekip: İsviçre'deki taşıma ve temizlik şirketleri için daha az ofis, daha fazla zaman ve daha fazla müşteri.",
  },
  finalCta: {
    chipMoving: "Taşıma",
    chipCleaning: "Temizlik",
    headline1: "Daha az ofis.",
    headline2: "Daha fazla zaman. Daha fazla müşteri.",
    headline3: "Daha fazla ciro.",
    paragraph:
      "PLANMOVE KI'ın iş hayatınızı nasıl kolaylaştırdığını ve hiçbir talep veya işi kaçırmamanızı nasıl sağladığını öğrenin.",
    subItems: ["Taahhüt yok", "Hızlı yanıt", "Kişisel danışmanlık"],
  },
  footer: {
    kicker: "Bir sonraki adımınız",
    headlineA: "",
    headlineB: "Daha fazla ",
    headlineHighlight: "ciroya hazır mısınız?",
    paragraph:
      "WhatsApp'ta kısa bir görüşme — kişisel, ücretsiz ve taahhütsüz. PLANMOVE KI'ın KOBİ'nizi beş dakikada nasıl değiştireceğini öğrenin.",
    brandDescription:
      "PLANMOVE KI, İsviçre'deki taşıma ve temizlik şirketleri için teklifleri, faturaları ve müşteri iletişimini halleder. 7/24 ulaşılabilir. Her dilde.",
    contactHeading: "İletişim",
    phone: "+41794880011",
    phoneAria: "PLANMOVE'u arayın",
    bottomNote: "",
  },
  phoneMockup: {
    newRequest: "Yeni talep",
    headline1: "Sadece konuş.",
    headline2: "PLANMOVE KI yazar.",
    recording: "Kayıt devam ediyor",
    transcript:
      "“Meier ailesi için teklif, 3 odalı taşıma, Zürih'ten Winterthur'a, cuma saat sekizde…",
    createdIn: "4,8 saniyede oluşturuldu",
    quoteNumber: "Teklif #2049",
    now: "ŞİMDİ",
    sendWhatsApp: "WhatsApp ile gönder",
    micAria: "Kayıt",
  },
  cardVisuals: {
    reaktion: {
      notifications: [
        "Talep — Meier ailesi · Zürih",
        "WhatsApp — Kaufmann Bey",
        "Sesli mesaj — Taşıma talebi",
      ],
      chip: "12 kaçırılan talep · bu gece",
    },
    sprache: {
      translated: "Çevrildi · Almanca",
      reply: "Merhaba, size memnuniyetle bir teklif göndeririz.",
    },
    feierabend: {
      chipTop: "23:47 · Hâlâ masanın başında",
      tableHead: "Teklifler · 47 açık",
      overdue: "Gecikmiş",
      chipBottom: "Mesai bugün de yine uzadı",
    },
    followUp: {
      autoReminder: "Otomatik hatırlatma",
      momoFollowsUp: "PLANMOVE KI takip ediyor.",
      reminders: [
        { name: "Müller Bey", detail: "Teklif · 3 gün önce" },
        { name: "Meier Hanım", detail: "3,5 odalı taşıma · 5 gün önce" },
        { name: "Top Umzug AG", detail: "B2B çerçeve · 7 gün önce" },
      ],
    },
    anrufe: {
      incoming: "Gelen arama",
      unknown: "Bilinmiyor",
      handled: "PLANMOVE KI tarafından karşılanıyor…",
    },
  },
};
