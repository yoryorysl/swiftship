/* =========================================================
   SWIFTSHIP
   Logistics & Delivery Website Template
   Main JavaScript
   ========================================================= */


/* =========================================================
   COMPANY SETTINGS
   Change these values when customizing the template.
   ========================================================= */

const SWIFTSHIP_CONFIG = {

  email: "hello@swiftship.com",

  whatsapp: "",

  companyName: "SwiftShip"

};


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const SWIFTSHIP_TRANSLATIONS = {

  en: {

    about_page_title: "About — SwiftShip",

    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_tracking: "Tracking",
    nav_pricing: "Pricing",
    nav_contact: "Contact",

    about_eyebrow: "ABOUT SWIFTSHIP",

    about_hero_title: "Logistics built to",
    about_hero_title_highlight: "move business forward.",

    about_hero_description:
      "SwiftShip is a premium logistics website template designed for courier companies, delivery services, freight operators, shipping businesses, and modern logistics brands.",

    about_explore_services: "Explore Services",
    about_get_started: "Get Started",

    tag_flexible: "Flexible",
    tag_global: "Global-ready",
    tag_scalable: "Scalable",

    operations_overview: "OPERATIONS OVERVIEW",
    moving_with_purpose: "Moving with purpose.",
    live: "LIVE",

    pickup: "Pickup",
    shipment_received: "Shipment received",

    in_transit: "In Transit",
    on_the_move: "On the move",

    delivered: "Delivered",
    destination: "Destination",

    support: "SUPPORT",
    visibility: "VISIBILITY",
    real_time: "Real-Time",
    ready: "READY",
    global: "Global",

    built_to_scale: "Built to Scale",
    ready_for_growth: "Ready for growth",

    customer_first: "Customer First",
    designed_for_clarity: "Designed for clarity",

    swiftship_approach: "THE SWIFTSHIP APPROACH",

    professional_logistics: "Professional logistics,",
    without_complexity: "without the complexity.",

    intro_text_one:
      "A logistics website should do more than display information. It should communicate trust, make services easy to understand, and help customers take action.",

    intro_text_two:
      "SwiftShip brings those elements together in a flexible foundation that can be adapted to different logistics businesses, delivery operations, and shipping brands.",

    built_around: "WHAT IT'S BUILT AROUND",

    stronger_foundation: "A stronger foundation",
    modern_logistics: "for modern logistics.",

    foundation_description:
      "Every part of the experience is designed around clarity, flexibility, and long-term growth.",

    reliable: "Reliable",

    reliable_description:
      "Built around clear communication, dependable service presentation, and a professional customer experience.",

    trust_clarity: "TRUST & CLARITY",

    flexible: "Flexible",

    flexible_description:
      "Customize the company identity, services, pricing, contact information, colors, imagery, and business details to fit different brands.",

    easy_customization: "EASY CUSTOMIZATION",

    scalable: "Scalable",

    scalable_description:
      "Start with a polished website and expand toward shipment tracking, customer management, and logistics platform functionality.",

    built_for_growth: "BUILT FOR GROWTH",

    modern_operations: "DESIGNED FOR MODERN OPERATIONS",

    first_click: "From first click",
    final_delivery: "to final delivery.",

    capability_description:
      "SwiftShip creates a connected digital experience where customers can discover services, request quotes, explore pricing, track shipments, and contact a logistics business from one professional platform.",

    explore_tracking: "Explore Tracking",

    discover: "Discover",
    services_pricing: "Services & pricing",

    request: "Request",
    quote_or_shipment: "Quote or shipment",

    track: "Track",
    shipment_visibility: "Shipment visibility",

    deliver: "Deliver",
    complete_journey: "Complete the journey",

    foundation: "THE FOUNDATION",

    ready_for_way: "Ready for the way",
    modern_logistics_works: "modern logistics works.",

    service_ready: "Service Ready",
    ready_to_adapt: "Ready to Adapt",
    tracking_experience: "Tracking Experience",

    keep_moving: "KEEP MOVING",

    give_business: "Give your logistics",
    stronger_presence: "business a stronger digital presence.",

    cta_description:
      "Explore the SwiftShip experience and see how a modern logistics website can bring your services together.",

    view_services: "View Services",

    footer_description:
      "Modern logistics and delivery solutions for businesses worldwide.",

    copyright:
      "© 2026 SwiftShip. All rights reserved.",

    template_label:
      "Logistics & Delivery Website Template"

  },


  fr: {

    about_page_title: "À propos — SwiftShip",

    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_tracking: "Suivi",
    nav_pricing: "Tarifs",
    nav_contact: "Contact",

    about_eyebrow: "À PROPOS DE SWIFTSHIP",

    about_hero_title: "Une logistique conçue pour",
    about_hero_title_highlight: "faire avancer votre activité.",

    about_hero_description:
      "SwiftShip est un modèle de site web logistique premium conçu pour les entreprises de messagerie, de livraison, de fret, d'expédition et les marques logistiques modernes.",

    about_explore_services: "Découvrir les services",
    about_get_started: "Commencer",

    tag_flexible: "Flexible",
    tag_global: "Prêt pour l'international",
    tag_scalable: "Évolutif",

    operations_overview: "APERÇU DES OPÉRATIONS",
    moving_with_purpose: "Avancer avec précision.",
    live: "EN DIRECT",

    pickup: "Collecte",
    shipment_received: "Expédition reçue",

    in_transit: "En transit",
    on_the_move: "En déplacement",

    delivered: "Livré",
    destination: "Destination",

    support: "ASSISTANCE",
    visibility: "VISIBILITÉ",
    real_time: "Temps réel",
    ready: "PRÊT",
    global: "Mondial",

    built_to_scale: "Conçu pour évoluer",
    ready_for_growth: "Prêt pour la croissance",

    customer_first: "Le client d'abord",
    designed_for_clarity: "Conçu pour la clarté",

    swiftship_approach: "L'APPROCHE SWIFTSHIP",

    professional_logistics: "Une logistique professionnelle,",
    without_complexity: "sans complexité.",

    intro_text_one:
      "Un site web logistique doit faire plus que présenter des informations. Il doit inspirer confiance, rendre les services faciles à comprendre et aider les clients à passer à l'action.",

    intro_text_two:
      "SwiftShip réunit ces éléments dans une base flexible qui peut être adaptée aux différentes entreprises de logistique, opérations de livraison et marques d'expédition.",

    built_around: "NOS PRINCIPES",

    stronger_foundation: "Une base plus solide",
    modern_logistics: "pour la logistique moderne.",

    foundation_description:
      "Chaque élément de l'expérience est conçu autour de la clarté, de la flexibilité et de la croissance à long terme.",

    reliable: "Fiable",

    reliable_description:
      "Conçu autour d'une communication claire, d'une présentation fiable des services et d'une expérience client professionnelle.",

    trust_clarity: "CONFIANCE & CLARTÉ",

    flexible: "Flexible",

    flexible_description:
      "Personnalisez l'identité de l'entreprise, les services, les tarifs, les coordonnées, les couleurs, les images et les informations commerciales.",

    easy_customization: "PERSONNALISATION FACILE",

    scalable: "Évolutif",

    scalable_description:
      "Commencez avec un site professionnel et développez-le vers le suivi des expéditions, la gestion des clients et les fonctionnalités d'une plateforme logistique.",

    built_for_growth: "CONÇU POUR GRANDIR",

    modern_operations: "CONÇU POUR LES OPÉRATIONS MODERNES",

    first_click: "Du premier clic",
    final_delivery: "à la livraison finale.",

    capability_description:
      "SwiftShip crée une expérience numérique connectée où les clients peuvent découvrir les services, demander un devis, consulter les tarifs, suivre leurs expéditions et contacter une entreprise logistique depuis une plateforme professionnelle.",

    explore_tracking: "Découvrir le suivi",

    discover: "Découvrir",
    services_pricing: "Services & tarifs",

    request: "Demander",
    quote_or_shipment: "Devis ou expédition",

    track: "Suivre",
    shipment_visibility: "Visibilité de l'expédition",

    deliver: "Livrer",
    complete_journey: "Terminer le parcours",

    foundation: "LA BASE",

    ready_for_way: "Prêt pour la façon dont",
    modern_logistics_works: "fonctionne la logistique moderne.",

    service_ready: "Service disponible",
    ready_to_adapt: "Prêt à s'adapter",
    tracking_experience: "Expérience de suivi",

    keep_moving: "CONTINUONS D'AVANCER",

    give_business: "Donnez à votre entreprise logistique",
    stronger_presence: "une présence numérique plus forte.",

    cta_description:
      "Découvrez l'expérience SwiftShip et voyez comment un site logistique moderne peut réunir vos services.",

    view_services: "Voir les services",

    footer_description:
      "Solutions modernes de logistique et de livraison pour les entreprises du monde entier.",

    copyright:
      "© 2026 SwiftShip. Tous droits réservés.",

    template_label:
      "Modèle de site web de logistique et de livraison"

  },


  es: {

    about_page_title: "Acerca de — SwiftShip",

    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_services: "Servicios",
    nav_tracking: "Seguimiento",
    nav_pricing: "Precios",
    nav_contact: "Contacto",

    about_eyebrow: "SOBRE SWIFTSHIP",

    about_hero_title: "Logística diseñada para",
    about_hero_title_highlight: "hacer avanzar los negocios.",

    about_hero_description:
      "SwiftShip es una plantilla premium de sitio web logístico diseñada para empresas de mensajería, servicios de entrega, operadores de carga, empresas de transporte y marcas logísticas modernas.",

    about_explore_services: "Explorar servicios",
    about_get_started: "Comenzar",

    tag_flexible: "Flexible",
    tag_global: "Preparado para el mundo",
    tag_scalable: "Escalable",

    operations_overview: "RESUMEN DE OPERACIONES",
    moving_with_purpose: "Avanzando con propósito.",
    live: "EN VIVO",

    pickup: "Recogida",
    shipment_received: "Envío recibido",

    in_transit: "En tránsito",
    on_the_move: "En movimiento",

    delivered: "Entregado",
    destination: "Destino",

    support: "SOPORTE",
    visibility: "VISIBILIDAD",
    real_time: "Tiempo real",
    ready: "LISTO",
    global: "Global",

    built_to_scale: "Diseñado para crecer",
    ready_for_growth: "Listo para crecer",

    customer_first: "El cliente primero",
    designed_for_clarity: "Diseñado para la claridad",

    swiftship_approach: "EL ENFOQUE SWIFTSHIP",

    professional_logistics: "Logística profesional,",
    without_complexity: "sin complicaciones.",

    intro_text_one:
      "Un sitio web logístico debe hacer más que mostrar información. Debe transmitir confianza, facilitar la comprensión de los servicios y ayudar a los clientes a actuar.",

    intro_text_two:
      "SwiftShip reúne estos elementos en una base flexible que puede adaptarse a diferentes empresas logísticas, operaciones de entrega y marcas de transporte.",

    built_around: "EN QUÉ SE BASA",

    stronger_foundation: "Una base más sólida",
    modern_logistics: "para la logística moderna.",

    foundation_description:
      "Cada parte de la experiencia está diseñada en torno a la claridad, la flexibilidad y el crecimiento a largo plazo.",

    reliable: "Confiable",

    reliable_description:
      "Diseñado para ofrecer comunicación clara, presentación fiable de servicios y una experiencia profesional para el cliente.",

    trust_clarity: "CONFIANZA Y CLARIDAD",

    flexible: "Flexible",

    flexible_description:
      "Personaliza la identidad de la empresa, los servicios, precios, información de contacto, colores, imágenes y detalles comerciales.",

    easy_customization: "FÁCIL PERSONALIZACIÓN",

    scalable: "Escalable",

    scalable_description:
      "Comienza con un sitio web profesional y amplíalo con seguimiento de envíos, gestión de clientes y funciones de plataforma logística.",

    built_for_growth: "DISEÑADO PARA CRECER",

    modern_operations: "DISEÑADO PARA OPERACIONES MODERNAS",

    first_click: "Desde el primer clic",
    final_delivery: "hasta la entrega final.",

    capability_description:
      "SwiftShip crea una experiencia digital conectada donde los clientes pueden descubrir servicios, solicitar presupuestos, consultar precios, rastrear envíos y contactar con una empresa logística desde una plataforma profesional.",

    explore_tracking: "Explorar seguimiento",

    discover: "Descubrir",
    services_pricing: "Servicios y precios",

    request: "Solicitar",
    quote_or_shipment: "Presupuesto o envío",

    track: "Rastrear",
    shipment_visibility: "Visibilidad del envío",

    deliver: "Entregar",
    complete_journey: "Completar el recorrido",

    foundation: "LA BASE",

    ready_for_way: "Preparado para cómo",
    modern_logistics_works: "funciona la logística moderna.",

    service_ready: "Servicio preparado",
    ready_to_adapt: "Listo para adaptarse",
    tracking_experience: "Experiencia de seguimiento",

    keep_moving: "SIGUE AVANZANDO",

    give_business: "Dale a tu empresa logística",
    stronger_presence: "una presencia digital más sólida.",

    cta_description:
      "Explora la experiencia SwiftShip y descubre cómo un sitio logístico moderno puede reunir tus servicios.",

    view_services: "Ver servicios",

    footer_description:
      "Soluciones modernas de logística y entrega para empresas de todo el mundo.",

    copyright:
      "© 2026 SwiftShip. Todos los derechos reservados.",

    template_label:
      "Plantilla de sitio web de logística y entrega"

  },


  de: {

    about_page_title: "Über uns — SwiftShip",

    nav_home: "Startseite",
    nav_about: "Über uns",
    nav_services: "Services",
    nav_tracking: "Sendungsverfolgung",
    nav_pricing: "Preise",
    nav_contact: "Kontakt",

    about_eyebrow: "ÜBER SWIFTSHIP",

    about_hero_title: "Logistik entwickelt, um",
    about_hero_title_highlight: "Unternehmen voranzubringen.",

    about_hero_description:
      "SwiftShip ist eine hochwertige Logistik-Website-Vorlage für Kurierunternehmen, Lieferdienste, Frachtanbieter, Versandunternehmen und moderne Logistikmarken.",

    about_explore_services: "Services entdecken",
    about_get_started: "Starten",

    tag_flexible: "Flexibel",
    tag_global: "Global bereit",
    tag_scalable: "Skalierbar",

    operations_overview: "BETRIEBSÜBERSICHT",
    moving_with_purpose: "Mit Ziel unterwegs.",
    live: "LIVE",

    pickup: "Abholung",
    shipment_received: "Sendung erhalten",

    in_transit: "Unterwegs",
    on_the_move: "In Bewegung",

    delivered: "Zugestellt",
    destination: "Ziel",

    support: "SUPPORT",
    visibility: "TRANSPARENZ",
    real_time: "Echtzeit",
    ready: "BEREIT",
    global: "Global",

    built_to_scale: "Skalierbar entwickelt",
    ready_for_growth: "Bereit für Wachstum",

    customer_first: "Kunden zuerst",
    designed_for_clarity: "Für Klarheit entwickelt",

    swiftship_approach: "DER SWIFTSHIP-ANSATZ",

    professional_logistics: "Professionelle Logistik,",
    without_complexity: "ohne Komplexität.",

    intro_text_one:
      "Eine Logistik-Website sollte mehr leisten als Informationen darzustellen. Sie sollte Vertrauen vermitteln, Services verständlich machen und Kunden zum Handeln bewegen.",

    intro_text_two:
      "SwiftShip verbindet diese Elemente in einer flexiblen Grundlage, die an verschiedene Logistikunternehmen, Lieferabläufe und Versandmarken angepasst werden kann.",

    built_around: "DARAUF AUFGEBAUT",

    stronger_foundation: "Eine stärkere Grundlage",
    modern_logistics: "für moderne Logistik.",

    foundation_description:
      "Jeder Teil der Erfahrung ist auf Klarheit, Flexibilität und langfristiges Wachstum ausgerichtet.",

    reliable: "Zuverlässig",

    reliable_description:
      "Entwickelt für klare Kommunikation, zuverlässige Servicepräsentation und ein professionelles Kundenerlebnis.",

    trust_clarity: "VERTRAUEN & KLARHEIT",

    flexible: "Flexibel",

    flexible_description:
      "Passe Unternehmensidentität, Services, Preise, Kontaktdaten, Farben, Bilder und Geschäftsinformationen an.",

    easy_customization: "EINFACHE ANPASSUNG",

    scalable: "Skalierbar",

    scalable_description:
      "Starte mit einer professionellen Website und erweitere sie um Sendungsverfolgung, Kundenverwaltung und Logistikplattform-Funktionen.",

    built_for_growth: "FÜR WACHSTUM ENTWICKELT",

    modern_operations: "FÜR MODERNE ABLÄUFE ENTWICKELT",

    first_click: "Vom ersten Klick",
    final_delivery: "bis zur endgültigen Lieferung.",

    capability_description:
      "SwiftShip schafft ein verbundenes digitales Erlebnis, in dem Kunden Services entdecken, Angebote anfordern, Preise ansehen, Sendungen verfolgen und ein Logistikunternehmen über eine professionelle Plattform kontaktieren können.",

    explore_tracking: "Sendungsverfolgung entdecken",

    discover: "Entdecken",
    services_pricing: "Services & Preise",

    request: "Anfragen",
    quote_or_shipment: "Angebot oder Sendung",

    track: "Verfolgen",
    shipment_visibility: "Sendungstransparenz",

    deliver: "Liefern",
    complete_journey: "Lieferweg abschließen",

    foundation: "DIE GRUNDLAGE",

    ready_for_way: "Bereit für die Art und Weise, wie",
    modern_logistics_works: "moderne Logistik funktioniert.",

    service_ready: "Service bereit",
    ready_to_adapt: "Anpassungsbereit",
    tracking_experience: "Tracking-Erlebnis",

    keep_moving: "WEITER VORAN",

    give_business: "Gib deinem Logistikunternehmen",
    stronger_presence: "eine stärkere digitale Präsenz.",

    cta_description:
      "Entdecke das SwiftShip-Erlebnis und sieh, wie eine moderne Logistik-Website deine Services zusammenführen kann.",

    view_services: "Services ansehen",

    footer_description:
      "Moderne Logistik- und Lieferlösungen für Unternehmen weltweit.",

    copyright:
      "© 2026 SwiftShip. Alle Rechte vorbehalten.",

    template_label:
      "Website-Vorlage für Logistik & Lieferung"

  },


  pt: {

    about_page_title: "Sobre — SwiftShip",

    nav_home: "Início",
    nav_about: "Sobre",
    nav_services: "Serviços",
    nav_tracking: "Rastreamento",
    nav_pricing: "Preços",
    nav_contact: "Contato",

    about_eyebrow: "SOBRE A SWIFTSHIP",

    about_hero_title: "Logística criada para",
    about_hero_title_highlight: "fazer negócios avançarem.",

    about_hero_description:
      "SwiftShip é um modelo premium de site de logística criado para empresas de courier, serviços de entrega, operadores de carga, empresas de transporte e marcas modernas de logística.",

    about_explore_services: "Explorar serviços",
    about_get_started: "Começar",

    tag_flexible: "Flexível",
    tag_global: "Pronto para o mundo",
    tag_scalable: "Escalável",

    operations_overview: "VISÃO GERAL DAS OPERAÇÕES",
    moving_with_purpose: "Movendo com propósito.",
    live: "AO VIVO",

    pickup: "Coleta",
    shipment_received: "Envio recebido",

    in_transit: "Em trânsito",
    on_the_move: "Em movimento",

    delivered: "Entregue",
    destination: "Destino",

    support: "SUPORTE",
    visibility: "VISIBILIDADE",
    real_time: "Tempo real",
    ready: "PRONTO",
    global: "Global",

    built_to_scale: "Feito para crescer",
    ready_for_growth: "Pronto para crescer",

    customer_first: "Cliente em primeiro lugar",
    designed_for_clarity: "Criado para clareza",

    swiftship_approach: "A ABORDAGEM SWIFTSHIP",

    professional_logistics: "Logística profissional,",
    without_complexity: "sem complexidade.",

    intro_text_one:
      "Um site de logística deve fazer mais do que apresentar informações. Deve transmitir confiança, facilitar a compreensão dos serviços e ajudar os clientes a agir.",

    intro_text_two:
      "A SwiftShip reúne esses elementos em uma base flexível que pode ser adaptada a diferentes empresas de logística, operações de entrega e marcas de transporte.",

    built_around: "NO QUE É BASEADO",

    stronger_foundation: "Uma base mais forte",
    modern_logistics: "para a logística moderna.",

    foundation_description:
      "Cada parte da experiência é criada com foco em clareza, flexibilidade e crescimento a longo prazo.",

    reliable: "Confiável",

    reliable_description:
      "Criado para oferecer comunicação clara, apresentação confiável dos serviços e uma experiência profissional para o cliente.",

    trust_clarity: "CONFIANÇA E CLAREZA",

    flexible: "Flexível",

    flexible_description:
      "Personalize a identidade da empresa, serviços, preços, informações de contato, cores, imagens e detalhes comerciais.",

    easy_customization: "FÁCIL PERSONALIZAÇÃO",

    scalable: "Escalável",

    scalable_description:
      "Comece com um site profissional e expanda para rastreamento de remessas, gestão de clientes e funcionalidades de plataforma logística.",

    built_for_growth: "CRIADO PARA CRESCER",

    modern_operations: "CRIADO PARA OPERAÇÕES MODERNAS",

    first_click: "Do primeiro clique",
    final_delivery: "até a entrega final.",

    capability_description:
      "A SwiftShip cria uma experiência digital conectada onde os clientes podem descobrir serviços, solicitar cotações, consultar preços, rastrear remessas e entrar em contato com uma empresa de logística através de uma plataforma profissional.",

    explore_tracking: "Explorar rastreamento",

    discover: "Descobrir",
    services_pricing: "Serviços e preços",

    request: "Solicitar",
    quote_or_shipment: "Cotação ou envio",

    track: "Rastrear",
    shipment_visibility: "Visibilidade da remessa",

    deliver: "Entregar",
    complete_journey: "Concluir a jornada",

    foundation: "A BASE",

    ready_for_way: "Pronto para a forma como",
    modern_logistics_works: "a logística moderna funciona.",

    service_ready: "Serviço pronto",
    ready_to_adapt: "Pronto para adaptar",
    tracking_experience: "Experiência de rastreamento",

    keep_moving: "CONTINUE AVANÇANDO",

    give_business: "Dê à sua empresa de logística",
    stronger_presence: "uma presença digital mais forte.",

    cta_description:
      "Explore a experiência SwiftShip e veja como um site moderno de logística pode reunir seus serviços.",

    view_services: "Ver serviços",

    footer_description:
      "Soluções modernas de logística e entrega para empresas em todo o mundo.",

    copyright:
      "© 2026 SwiftShip. Todos os direitos reservados.",

    template_label:
      "Modelo de site de logística e entrega"

  },


  it: {

    about_page_title: "Chi siamo — SwiftShip",

    nav_home: "Home",
    nav_about: "Chi siamo",
    nav_services: "Servizi",
    nav_tracking: "Tracciamento",
    nav_pricing: "Prezzi",
    nav_contact: "Contatti",

    about_eyebrow: "CHI È SWIFTSHIP",

    about_hero_title: "Logistica progettata per",
    about_hero_title_highlight: "far crescere il business.",

    about_hero_description:
      "SwiftShip è un modello premium di sito web logistico progettato per aziende di corriere, servizi di consegna, operatori di trasporto, aziende di spedizione e moderni brand logistici.",

    about_explore_services: "Scopri i servizi",
    about_get_started: "Inizia",

    tag_flexible: "Flessibile",
    tag_global: "Pronto per il mondo",
    tag_scalable: "Scalabile",

    operations_overview: "PANORAMICA OPERATIVA",
    moving_with_purpose: "Muoversi con uno scopo.",
    live: "LIVE",

    pickup: "Ritiro",
    shipment_received: "Spedizione ricevuta",

    in_transit: "In transito",
    on_the_move: "In movimento",

    delivered: "Consegnato",
    destination: "Destinazione",

    support: "SUPPORTO",
    visibility: "VISIBILITÀ",
    real_time: "In tempo reale",
    ready: "PRONTO",
    global: "Globale",

    built_to_scale: "Progettato per crescere",
    ready_for_growth: "Pronto per la crescita",

    customer_first: "Il cliente al primo posto",
    designed_for_clarity: "Progettato per la chiarezza",

    swiftship_approach: "L'APPROCCIO SWIFTSHIP",

    professional_logistics: "Logistica professionale,",
    without_complexity: "senza complessità.",

    intro_text_one:
      "Un sito logistico deve fare più che mostrare informazioni. Deve comunicare fiducia, rendere i servizi facili da comprendere e aiutare i clienti ad agire.",

    intro_text_two:
      "SwiftShip riunisce questi elementi in una base flessibile che può essere adattata a diverse aziende logistiche, operazioni di consegna e brand di spedizione.",

    built_around: "SU COSA È COSTRUITO",

    stronger_foundation: "Una base più solida",
    modern_logistics: "per la logistica moderna.",

    foundation_description:
      "Ogni parte dell'esperienza è progettata attorno a chiarezza, flessibilità e crescita a lungo termine.",

    reliable: "Affidabile",

    reliable_description:
      "Progettato per una comunicazione chiara, una presentazione affidabile dei servizi e un'esperienza cliente professionale.",

    trust_clarity: "FIDUCIA E CHIAREZZA",

    flexible: "Flessibile",

    flexible_description:
      "Personalizza identità aziendale, servizi, prezzi, informazioni di contatto, colori, immagini e dettagli commerciali.",

    easy_customization: "FACILE PERSONALIZZAZIONE",

    scalable: "Scalabile",

    scalable_description:
      "Inizia con un sito professionale e aggiungi il monitoraggio delle spedizioni, la gestione dei clienti e le funzionalità di una piattaforma logistica.",

    built_for_growth: "PROGETTATO PER CRESCERE",

    modern_operations: "PROGETTATO PER OPERAZIONI MODERNE",

    first_click: "Dal primo clic",
    final_delivery: "alla consegna finale.",

    capability_description:
      "SwiftShip crea un'esperienza digitale connessa in cui i clienti possono scoprire i servizi, richiedere preventivi, consultare i prezzi, monitorare le spedizioni e contattare un'azienda logistica da un'unica piattaforma professionale.",

    explore_tracking: "Scopri il monitoraggio",

    discover: "Scopri",
    services_pricing: "Servizi e prezzi",

    request: "Richiedi",
    quote_or_shipment: "Preventivo o spedizione",

    track: "Monitora",
    shipment_visibility: "Visibilità della spedizione",

    deliver: "Consegna",
    complete_journey: "Completa il percorso",

    foundation: "LA BASE",

    ready_for_way: "Pronto per il modo in cui",
    modern_logistics_works: "funziona la logistica moderna.",

    service_ready: "Servizio pronto",
    ready_to_adapt: "Pronto ad adattarsi",
    tracking_experience: "Esperienza di monitoraggio",

    keep_moving: "CONTINUA A MUOVERTI",

    give_business: "Dai alla tua azienda logistica",
    stronger_presence: "una presenza digitale più forte.",

    cta_description:
      "Esplora l'esperienza SwiftShip e scopri come un sito logistico moderno può riunire i tuoi servizi.",

    view_services: "Vedi servizi",

    footer_description:
      "Soluzioni moderne di logistica e consegna per aziende di tutto il mondo.",

    copyright:
      "© 2026 SwiftShip. Tutti i diritti riservati.",

    template_label:
      "Modello di sito web per logistica e consegne"

  },


  ar: {

    about_page_title: "حول — SwiftShip",

    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_tracking: "تتبع الشحنات",
    nav_pricing: "الأسعار",
    nav_contact: "اتصل بنا",

    about_eyebrow: "حول SWIFTSHIP",

    about_hero_title: "لوجستيات مصممة من أجل",
    about_hero_title_highlight: "دفع الأعمال إلى الأمام.",

    about_hero_description:
      "SwiftShip هو قالب موقع لوجستي متميز مصمم لشركات البريد السريع وخدمات التوصيل ومشغلي الشحن وشركات النقل والعلامات التجارية اللوجستية الحديثة.",

    about_explore_services: "استكشف الخدمات",
    about_get_started: "ابدأ الآن",

    tag_flexible: "مرن",
    tag_global: "جاهز للعالم",
    tag_scalable: "قابل للتوسع",

    operations_overview: "نظرة عامة على العمليات",
    moving_with_purpose: "نتحرك بهدف.",
    live: "مباشر",

    pickup: "الاستلام",
    shipment_received: "تم استلام الشحنة",

    in_transit: "قيد النقل",
    on_the_move: "في الطريق",

    delivered: "تم التسليم",
    destination: "الوجهة",

    support: "الدعم",
    visibility: "الرؤية",
    real_time: "في الوقت الفعلي",
    ready: "جاهز",
    global: "عالمي",

    built_to_scale: "مصمم للتوسع",
    ready_for_growth: "جاهز للنمو",

    customer_first: "العميل أولاً",
    designed_for_clarity: "مصمم للوضوح",

    swiftship_approach: "نهج SWIFTSHIP",

    professional_logistics: "لوجستيات احترافية،",
    without_complexity: "بدون تعقيد.",

    intro_text_one:
      "يجب أن يفعل موقع الخدمات اللوجستية أكثر من مجرد عرض المعلومات. يجب أن ينقل الثقة، ويسهّل فهم الخدمات، ويساعد العملاء على اتخاذ الإجراءات.",

    intro_text_two:
      "تجمع SwiftShip هذه العناصر في أساس مرن يمكن تكييفه مع شركات لوجستية وعمليات توصيل وعلامات شحن مختلفة.",

    built_around: "ما تم بناؤه حوله",

    stronger_foundation: "أساس أقوى",
    modern_logistics: "للوجستيات الحديثة.",

    foundation_description:
      "تم تصميم كل جزء من التجربة حول الوضوح والمرونة والنمو على المدى الطويل.",

    reliable: "موثوق",

    reliable_description:
      "مصمم للتواصل الواضح، وعرض الخدمات بشكل موثوق، وتجربة عملاء احترافية.",

    trust_clarity: "الثقة والوضوح",

    flexible: "مرن",

    flexible_description:
      "قم بتخصيص هوية الشركة والخدمات والأسعار ومعلومات الاتصال والألوان والصور وتفاصيل النشاط التجاري.",

    easy_customization: "تخصيص سهل",

    scalable: "قابل للتوسع",

    scalable_description:
      "ابدأ بموقع احترافي وقم بتوسيعه ليشمل تتبع الشحنات وإدارة العملاء ووظائف منصة لوجستية متكاملة.",

    built_for_growth: "مصمم للنمو",

    modern_operations: "مصمم للعمليات الحديثة",

    first_click: "من النقرة الأولى",
    final_delivery: "حتى التسليم النهائي.",

    capability_description:
      "تنشئ SwiftShip تجربة رقمية متكاملة يمكن للعملاء من خلالها اكتشاف الخدمات وطلب عروض الأسعار واستكشاف الأسعار وتتبع الشحنات والتواصل مع شركة لوجستية من منصة احترافية واحدة.",

    explore_tracking: "استكشف التتبع",

    discover: "اكتشف",
    services_pricing: "الخدمات والأسعار",

    request: "اطلب",
    quote_or_shipment: "عرض سعر أو شحنة",

    track: "تتبع",
    shipment_visibility: "رؤية الشحنة",

    deliver: "سلّم",
    complete_journey: "إكمال الرحلة",

    foundation: "الأساس",

    ready_for_way: "جاهز للطريقة التي",
    modern_logistics_works: "تعمل بها الخدمات اللوجستية الحديثة.",

    service_ready: "الخدمة جاهزة",
    ready_to_adapt: "جاهز للتكيف",
    tracking_experience: "تجربة تتبع",

    keep_moving: "استمر في التقدم",

    give_business: "امنح نشاطك اللوجستي",
    stronger_presence: "حضوراً رقمياً أقوى.",

    cta_description:
      "استكشف تجربة SwiftShip وشاهد كيف يمكن لموقع لوجستي حديث أن يجمع خدماتك في مكان واحد.",

    view_services: "عرض الخدمات",

    footer_description:
      "حلول لوجستية وخدمات توصيل حديثة للشركات حول العالم.",

    copyright:
      "© 2026 SwiftShip. جميع الحقوق محفوظة.",

    template_label:
      "قالب موقع لوجستي وخدمات توصيل"

  }

};


/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */

function applyLanguage(language) {

  const translations =
    SWIFTSHIP_TRANSLATIONS[language] ||
    SWIFTSHIP_TRANSLATIONS.en;


  document.documentElement.lang = language;


  /* Arabic right-to-left support */

  if (language === "ar") {

    document.documentElement.dir = "rtl";

  } else {

    document.documentElement.dir = "ltr";

  }


  /* Translate elements */

  document.querySelectorAll("[data-i18n]").forEach((element) => {

    const key = element.getAttribute("data-i18n");

    if (
      translations[key] !== undefined
    ) {

      element.textContent = translations[key];

    }

  });


  /* Update page title */

  const titleKey = "about_page_title";

  if (translations[titleKey]) {

    document.title = translations[titleKey];

  }


  /* Update selector */

  const languageSelect =
    document.getElementById("languageSelect");

  if (languageSelect) {

    languageSelect.value = language;

  }


  /* Remember selected language */

  localStorage.setItem(
    "swiftshipLanguage",
    language
  );

}


/* =========================================================
   LOAD SAVED LANGUAGE
   ========================================================= */

function initializeLanguage() {

  const savedLanguage =
    localStorage.getItem("swiftshipLanguage") || "en";

  applyLanguage(savedLanguage);


  const languageSelect =
    document.getElementById("languageSelect");

  if (languageSelect) {

    languageSelect.addEventListener(
      "change",
      (event) => {

        applyLanguage(event.target.value);

      }
    );

  }

}


/* =========================================================
   MAIN
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     LANGUAGE SYSTEM
     ======================================================= */

  initializeLanguage();


  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const mainNav =
    document.querySelector(".main-nav");


  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        mainNav.classList.toggle("open");


      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );


      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );

    });


    mainNav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("open");


        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );


        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

      });

    });

  }


  /* =======================================================
     REQUEST A QUOTE
     ======================================================= */

  const quoteForm =
    document.getElementById("quoteForm");

  const formMessage =
    document.getElementById("formMessage");


  if (quoteForm && formMessage) {

    quoteForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        const formData =
          new FormData(quoteForm);


        const name =
          String(
            formData.get("sender_name") || ""
          ).trim();


        const email =
          String(
            formData.get("email") || ""
          ).trim();


        const service =
          String(
            formData.get("service") || ""
          ).trim();


        if (
          !name ||
          !email ||
          !service
        ) {

          formMessage.textContent =
            "Please complete all required fields.";

          return;

        }


        const subject =
          encodeURIComponent(
            `${SWIFTSHIP_CONFIG.companyName} Quote Request — ${name}`
          );


        const body =
          encodeURIComponent(

            `Name: ${name}\n` +

            `Email: ${email}\n` +

            `Phone: ${
              formData.get("phone") ||
              "Not provided"
            }\n` +

            `Service: ${service}\n` +

            `Pickup Location: ${
              formData.get("origin") ||
              "Not provided"
            }\n` +

            `Destination: ${
              formData.get("destination") ||
              "Not provided"
            }\n` +

            `Shipment Details: ${
              formData.get("shipment_details") ||
              "Not provided"
            }`

          );


        const mailtoLink =
          `mailto:${SWIFTSHIP_CONFIG.email}` +
          `?subject=${subject}` +
          `&body=${body}`;


        window.location.href =
          mailtoLink;


        formMessage.textContent =
          "Your email app is opening with the quote request.";

      }
    );

  }

});
