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

  /* =======================================================
     ENGLISH
     ======================================================= */

  en: {

    home_page_title: "SwiftShip — Logistics & Delivery",
    about_page_title: "About — SwiftShip",

    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_tracking: "Tracking",
    nav_pricing: "Pricing",
    nav_contact: "Contact",


    /* HOME */

    home_eyebrow: "GLOBAL LOGISTICS • FAST DELIVERY",

    home_hero_title:
      "Move what matters. We deliver.",

    home_hero_description:
      "Powerful logistics solutions built to move packages, products, and businesses forward — quickly, securely, and with complete visibility.",

    home_track_shipment:
      "Track Shipment",

    home_get_quote:
      "Get a Quote",

    home_support:
      "Support",

    home_global:
      "Global",

    home_delivery:
      "Delivery",

    home_real_time:
      "Real-Time",

    home_tracking:
      "Tracking",

    home_shipment_secured:
      "Shipment secured",

    home_protected_transit:
      "Protected in transit",

    home_live_shipment:
      "LIVE SHIPMENT",

    home_swiftship_tracking:
      "SwiftShip Tracking",

    home_in_transit:
      "In Transit",

    home_origin:
      "ORIGIN",

    home_warehouse:
      "Warehouse",

    home_destination:
      "DESTINATION",

    home_final_address:
      "Final Address",

    home_delivery_progress:
      "Delivery progress",

    home_estimated_delivery:
      "Estimated delivery",

    home_on_schedule:
      "On schedule",

    home_tracking_id:
      "Tracking ID",

    home_worldwide:
      "Worldwide",

    home_delivery_network:
      "Delivery network",


    home_services_label:
      "OUR SERVICES",

    home_services_title:
      "Logistics built around your business.",

    home_services_description:
      "Flexible shipping and delivery solutions for individuals, growing businesses, and enterprise operations.",


    home_service_express_title:
      "Express Delivery",

    home_service_express_description:
      "Fast and dependable delivery solutions when time matters most.",


    home_service_worldwide_title:
      "Worldwide Shipping",

    home_service_worldwide_description:
      "Move packages across cities, countries, and international destinations.",


    home_service_business_title:
      "Business Logistics",

    home_service_business_description:
      "Reliable logistics support designed to help businesses operate efficiently.",


    home_service_tracking_title:
      "Shipment Tracking",

    home_service_tracking_description:
      "Give customers visibility from pickup through final delivery.",


    home_explore_service:
      "Explore service →",

    home_track_shipment_link:
      "Track shipment →",


    home_cta_label:
      "READY TO SHIP?",

    home_cta_title:
      "Let's move your next shipment forward.",

    home_request_quote:
      "Request a Quote",


    home_footer_description:
      "Modern logistics and delivery solutions for businesses worldwide.",

    home_copyright:
      "© 2026 SwiftShip. All rights reserved.",

    home_template_label:
      "Logistics & Delivery Website Template",


    /* ABOUT */

    about_eyebrow: "ABOUT SWIFTSHIP",

    about_hero_title:
      "Logistics built to",

    about_hero_title_highlight:
      "move business forward.",

    about_hero_description:
      "SwiftShip is a premium logistics website template designed for courier companies, delivery services, freight operators, shipping businesses, and modern logistics brands.",

    about_explore_services:
      "Explore Services",

    about_get_started:
      "Get Started",

    tag_flexible:
      "Flexible",

    tag_global:
      "Global-ready",

    tag_scalable:
      "Scalable",

    operations_overview:
      "OPERATIONS OVERVIEW",

    moving_with_purpose:
      "Moving with purpose.",

    live:
      "LIVE",

    pickup:
      "Pickup",

    shipment_received:
      "Shipment received",

    in_transit:
      "In Transit",

    on_the_move:
      "On the move",

    delivered:
      "Delivered",

    destination:
      "Destination",

    support:
      "SUPPORT",

    visibility:
      "VISIBILITY",

    real_time:
      "Real-Time",

    ready:
      "READY",

    global:
      "Global",

    built_to_scale:
      "Built to Scale",

    ready_for_growth:
      "Ready for growth",

    customer_first:
      "Customer First",

    designed_for_clarity:
      "Designed for clarity",

    swiftship_approach:
      "THE SWIFTSHIP APPROACH",

    professional_logistics:
      "Professional logistics,",

    without_complexity:
      "without the complexity.",

    intro_text_one:
      "A logistics website should do more than display information. It should communicate trust, make services easy to understand, and help customers take action.",

    intro_text_two:
      "SwiftShip brings those elements together in a flexible foundation that can be adapted to different logistics businesses, delivery operations, and shipping brands.",

    built_around:
      "WHAT IT'S BUILT AROUND",

    stronger_foundation:
      "A stronger foundation",

    modern_logistics:
      "for modern logistics.",

    foundation_description:
      "Every part of the experience is designed around clarity, flexibility, and long-term growth.",

    reliable:
      "Reliable",

    reliable_description:
      "Built around clear communication, dependable service presentation, and a professional customer experience.",

    trust_clarity:
      "TRUST & CLARITY",

    flexible:
      "Flexible",

    flexible_description:
      "Customize the company identity, services, pricing, contact information, colors, imagery, and business details to fit different brands.",

    easy_customization:
      "EASY CUSTOMIZATION",

    scalable:
      "Scalable",

    scalable_description:
      "Start with a polished website and expand toward shipment tracking, customer management, and logistics platform functionality.",

    built_for_growth:
      "BUILT FOR GROWTH",

    modern_operations:
      "DESIGNED FOR MODERN OPERATIONS",

    first_click:
      "From first click",

    final_delivery:
      "to final delivery.",

    capability_description:
      "SwiftShip creates a connected digital experience where customers can discover services, request quotes, explore pricing, track shipments, and contact a logistics business from one professional platform.",

    explore_tracking:
      "Explore Tracking",

    discover:
      "Discover",

    services_pricing:
      "Services & pricing",

    request:
      "Request",

    quote_or_shipment:
      "Quote or shipment",

    track:
      "Track",

    shipment_visibility:
      "Shipment visibility",

    deliver:
      "Deliver",

    complete_journey:
      "Complete the journey",

    foundation:
      "THE FOUNDATION",

    ready_for_way:
      "Ready for the way",

    modern_logistics_works:
      "modern logistics works.",

    service_ready:
      "Service Ready",

    ready_to_adapt:
      "Ready to Adapt",

    tracking_experience:
      "Tracking Experience",

    keep_moving:
      "KEEP MOVING",

    give_business:
      "Give your logistics",

    stronger_presence:
      "business a stronger digital presence.",

    cta_description:
      "Explore the SwiftShip experience and see how a modern logistics website can bring your services together.",

    view_services:
      "View Services",

    footer_description:
      "Modern logistics and delivery solutions for businesses worldwide.",

    copyright:
      "© 2026 SwiftShip. All rights reserved.",

    template_label:
      "Logistics & Delivery Website Template"

  },


  /* =======================================================
     FRENCH
     ======================================================= */

  fr: {

    home_page_title: "SwiftShip — Logistique & Livraison",
    about_page_title: "À propos — SwiftShip",

    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_tracking: "Suivi",
    nav_pricing: "Tarifs",
    nav_contact: "Contact",

    home_eyebrow:
      "LOGISTIQUE MONDIALE • LIVRAISON RAPIDE",

    home_hero_title:
      "Transportez ce qui compte. Nous livrons.",

    home_hero_description:
      "Des solutions logistiques puissantes conçues pour faire avancer les colis, les produits et les entreprises — rapidement, en toute sécurité et avec une visibilité complète.",

    home_track_shipment:
      "Suivre un envoi",

    home_get_quote:
      "Obtenir un devis",

    home_support:
      "Assistance",

    home_global:
      "Mondial",

    home_delivery:
      "Livraison",

    home_real_time:
      "Temps réel",

    home_tracking:
      "Suivi",

    home_shipment_secured:
      "Envoi sécurisé",

    home_protected_transit:
      "Protégé pendant le transport",

    home_live_shipment:
      "ENVOI EN DIRECT",

    home_swiftship_tracking:
      "Suivi SwiftShip",

    home_in_transit:
      "En transit",

    home_origin:
      "ORIGINE",

    home_warehouse:
      "Entrepôt",

    home_destination:
      "DESTINATION",

    home_final_address:
      "Adresse finale",

    home_delivery_progress:
      "Progression de la livraison",

    home_estimated_delivery:
      "Livraison estimée",

    home_on_schedule:
      "Dans les délais",

    home_tracking_id:
      "ID de suivi",

    home_worldwide:
      "Mondial",

    home_delivery_network:
      "Réseau de livraison",

    home_services_label:
      "NOS SERVICES",

    home_services_title:
      "Une logistique conçue autour de votre activité.",

    home_services_description:
      "Des solutions flexibles d'expédition et de livraison pour les particuliers, les entreprises en croissance et les grandes organisations.",

    home_service_express_title:
      "Livraison express",

    home_service_express_description:
      "Des solutions de livraison rapides et fiables lorsque le temps est essentiel.",

    home_service_worldwide_title:
      "Expédition internationale",

    home_service_worldwide_description:
      "Transportez vos colis entre les villes, les pays et les destinations internationales.",

    home_service_business_title:
      "Logistique d'entreprise",

    home_service_business_description:
      "Un soutien logistique fiable conçu pour aider les entreprises à fonctionner efficacement.",

    home_service_tracking_title:
      "Suivi des expéditions",

    home_service_tracking_description:
      "Offrez à vos clients une visibilité complète, de la collecte à la livraison finale.",

    home_explore_service:
      "Découvrir le service →",

    home_track_shipment_link:
      "Suivre l'envoi →",

    home_cta_label:
      "PRÊT À EXPÉDIER ?",

    home_cta_title:
      "Faisons avancer votre prochaine expédition.",

    home_request_quote:
      "Demander un devis",

    home_footer_description:
      "Des solutions modernes de logistique et de livraison pour les entreprises du monde entier.",

    home_copyright:
      "© 2026 SwiftShip. Tous droits réservés.",

    home_template_label:
      "Modèle de site web de logistique et de livraison",

    about_eyebrow: "À PROPOS DE SWIFTSHIP",

    about_hero_title:
      "Une logistique conçue pour",

    about_hero_title_highlight:
      "faire avancer votre activité.",

    about_hero_description:
      "SwiftShip est un modèle de site web logistique premium conçu pour les entreprises de messagerie, de livraison, de fret, d'expédition et les marques logistiques modernes.",

    about_explore_services:
      "Découvrir les services",

    about_get_started:
      "Commencer",

    tag_flexible:
      "Flexible",

    tag_global:
      "Prêt pour l'international",

    tag_scalable:
      "Évolutif",

    operations_overview:
      "APERÇU DES OPÉRATIONS",

    moving_with_purpose:
      "Avancer avec précision.",

    live:
      "EN DIRECT",

    pickup:
      "Collecte",

    shipment_received:
      "Expédition reçue",

    in_transit:
      "En transit",

    on_the_move:
      "En déplacement",

    delivered:
      "Livré",

    destination:
      "Destination",

    support:
      "ASSISTANCE",

    visibility:
      "VISIBILITÉ",

    real_time:
      "Temps réel",

    ready:
      "PRÊT",

    global:
      "Mondial",

    built_to_scale:
      "Conçu pour évoluer",

    ready_for_growth:
      "Prêt pour la croissance",

    customer_first:
      "Le client d'abord",

    designed_for_clarity:
      "Conçu pour la clarté",

    swiftship_approach:
      "L'APPROCHE SWIFTSHIP",

    professional_logistics:
      "Une logistique professionnelle,",

    without_complexity:
      "sans complexité.",

    intro_text_one:
      "Un site web logistique doit faire plus que présenter des informations. Il doit inspirer confiance, rendre les services faciles à comprendre et aider les clients à passer à l'action.",

    intro_text_two:
      "SwiftShip réunit ces éléments dans une base flexible qui peut être adaptée aux différentes entreprises de logistique, opérations de livraison et marques d'expédition.",

    built_around:
      "NOS PRINCIPES",

    stronger_foundation:
      "Une base plus solide",

    modern_logistics:
      "pour la logistique moderne.",

    foundation_description:
      "Chaque élément de l'expérience est conçu autour de la clarté, de la flexibilité et de la croissance à long terme.",

    reliable:
      "Fiable",

    reliable_description:
      "Conçu autour d'une communication claire, d'une présentation fiable des services et d'une expérience client professionnelle.",

    trust_clarity:
      "CONFIANCE & CLARTÉ",

    flexible:
      "Flexible",

    flexible_description:
      "Personnalisez l'identité de l'entreprise, les services, les tarifs, les coordonnées, les couleurs, les images et les informations commerciales.",

    easy_customization:
      "PERSONNALISATION FACILE",

    scalable:
      "Évolutif",

    scalable_description:
      "Commencez avec un site professionnel et développez-le vers le suivi des expéditions, la gestion des clients et les fonctionnalités d'une plateforme logistique.",

    built_for_growth:
      "CONÇU POUR GRANDIR",

    modern_operations:
      "CONÇU POUR LES OPÉRATIONS MODERNES",

    first_click:
      "Du premier clic",

    final_delivery:
      "à la livraison finale.",

    capability_description:
      "SwiftShip crée une expérience numérique connectée où les clients peuvent découvrir les services, demander un devis, consulter les tarifs, suivre leurs expéditions et contacter une entreprise logistique depuis une plateforme professionnelle.",

    explore_tracking:
      "Découvrir le suivi",

    discover:
      "Découvrir",

    services_pricing:
      "Services & tarifs",

    request:
      "Demander",

    quote_or_shipment:
      "Devis ou expédition",

    track:
      "Suivre",

    shipment_visibility:
      "Visibilité de l'expédition",

    deliver:
      "Livrer",

    complete_journey:
      "Terminer le parcours",

    foundation:
      "LA BASE",

    ready_for_way:
      "Prêt pour la façon dont",

    modern_logistics_works:
      "fonctionne la logistique moderne.",

    service_ready:
      "Service disponible",

    ready_to_adapt:
      "Prêt à s'adapter",

    tracking_experience:
      "Expérience de suivi",

    keep_moving:
      "CONTINUONS D'AVANCER",

    give_business:
      "Donnez à votre entreprise logistique",

    stronger_presence:
      "une présence numérique plus forte.",

    cta_description:
      "Découvrez l'expérience SwiftShip et voyez comment un site logistique moderne peut réunir vos services.",

    view_services:
      "Voir les services",

    footer_description:
      "Solutions modernes de logistique et de livraison pour les entreprises du monde entier.",

    copyright:
      "© 2026 SwiftShip. Tous droits réservés.",

    template_label:
      "Modèle de site web de logistique et de livraison"

  },


  /* =======================================================
     SPANISH
     ======================================================= */

  es: {

    home_page_title: "SwiftShip — Logística y Entrega",
    about_page_title: "Acerca de — SwiftShip",

    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_services: "Servicios",
    nav_tracking: "Seguimiento",
    nav_pricing: "Precios",
    nav_contact: "Contacto",

    home_eyebrow:
      "LOGÍSTICA GLOBAL • ENTREGA RÁPIDA",

    home_hero_title:
      "Mueve lo que importa. Nosotros entregamos.",

    home_hero_description:
      "Potentes soluciones logísticas diseñadas para mover paquetes, productos y empresas hacia adelante — rápidamente, de forma segura y con visibilidad completa.",

    home_track_shipment:
      "Rastrear envío",

    home_get_quote:
      "Obtener presupuesto",

    home_support:
      "Soporte",

    home_global:
      "Global",

    home_delivery:
      "Entrega",

    home_real_time:
      "Tiempo real",

    home_tracking:
      "Seguimiento",

    home_shipment_secured:
      "Envío asegurado",

    home_protected_transit:
      "Protegido durante el tránsito",

    home_live_shipment:
      "ENVÍO EN VIVO",

    home_swiftship_tracking:
      "Seguimiento SwiftShip",

    home_in_transit:
      "En tránsito",

    home_origin:
      "ORIGEN",

    home_warehouse:
      "Almacén",

    home_destination:
      "DESTINO",

    home_final_address:
      "Dirección final",

    home_delivery_progress:
      "Progreso de entrega",

    home_estimated_delivery:
      "Entrega estimada",

    home_on_schedule:
      "Según lo previsto",

    home_tracking_id:
      "ID de seguimiento",

    home_worldwide:
      "Mundial",

    home_delivery_network:
      "Red de entrega",

    home_services_label:
      "NUESTROS SERVICIOS",

    home_services_title:
      "Logística diseñada para tu negocio.",

    home_services_description:
      "Soluciones flexibles de envío y entrega para particulares, empresas en crecimiento y grandes organizaciones.",

    home_service_express_title:
      "Entrega exprés",

    home_service_express_description:
      "Soluciones de entrega rápidas y confiables cuando el tiempo es lo más importante.",

    home_service_worldwide_title:
      "Envíos internacionales",

    home_service_worldwide_description:
      "Mueve paquetes entre ciudades, países y destinos internacionales.",

    home_service_business_title:
      "Logística empresarial",

    home_service_business_description:
      "Soporte logístico confiable diseñado para ayudar a las empresas a operar eficientemente.",

    home_service_tracking_title:
      "Seguimiento de envíos",

    home_service_tracking_description:
      "Ofrece a tus clientes visibilidad desde la recogida hasta la entrega final.",

    home_explore_service:
      "Explorar servicio →",

    home_track_shipment_link:
      "Rastrear envío →",

    home_cta_label:
      "¿LISTO PARA ENVIAR?",

    home_cta_title:
      "Hagamos avanzar tu próximo envío.",

    home_request_quote:
      "Solicitar presupuesto",

    home_footer_description:
      "Soluciones modernas de logística y entrega para empresas de todo el mundo.",

    home_copyright:
      "© 2026 SwiftShip. Todos los derechos reservados.",

    home_template_label:
      "Plantilla de sitio web de logística y entrega",

    about_eyebrow: "SOBRE SWIFTSHIP",

    about_hero_title:
      "Logística diseñada para",

    about_hero_title_highlight:
      "hacer avanzar los negocios.",

    about_hero_description:
      "SwiftShip es una plantilla premium de sitio web logístico diseñada para empresas de mensajería, servicios de entrega, operadores de carga, empresas de transporte y marcas logísticas modernas.",

    about_explore_services:
      "Explorar servicios",

    about_get_started:
      "Comenzar",

    tag_flexible:
      "Flexible",

    tag_global:
      "Preparado para el mundo",

    tag_scalable:
      "Escalable",

    operations_overview:
      "RESUMEN DE OPERACIONES",

    moving_with_purpose:
      "Avanzando con propósito.",

    live:
      "EN VIVO",

    pickup:
      "Recogida",

    shipment_received:
      "Envío recibido",

    in_transit:
      "En tránsito",

    on_the_move:
      "En movimiento",

    delivered:
      "Entregado",

    destination:
      "Destino",

    support:
      "SOPORTE",

    visibility:
      "VISIBILIDAD",

    real_time:
      "Tiempo real",

    ready:
      "LISTO",

    global:
      "Global",

    built_to_scale:
      "Diseñado para crecer",

    ready_for_growth:
      "Listo para crecer",

    customer_first:
      "El cliente primero",

    designed_for_clarity:
      "Diseñado para la claridad",

    swiftship_approach:
      "EL ENFOQUE SWIFTSHIP",

    professional_logistics:
      "Logística profesional,",

    without_complexity:
      "sin complicaciones.",

    intro_text_one:
      "Un sitio web logístico debe hacer más que mostrar información. Debe transmitir confianza, facilitar la comprensión de los servicios y ayudar a los clientes a actuar.",

    intro_text_two:
      "SwiftShip reúne estos elementos en una base flexible que puede adaptarse a diferentes empresas logísticas, operaciones de entrega y marcas de transporte.",

    built_around:
      "EN QUÉ SE BASA",

    stronger_foundation:
      "Una base más sólida",

    modern_logistics:
      "para la logística moderna.",

    foundation_description:
      "Cada parte de la experiencia está diseñada en torno a la claridad, la flexibilidad y el crecimiento a largo plazo.",

    reliable:
      "Confiable",

    reliable_description:
      "Diseñado para ofrecer comunicación clara, presentación fiable de servicios y una experiencia profesional para el cliente.",

    trust_clarity:
      "CONFIANZA Y CLARIDAD",

    flexible:
      "Flexible",

    flexible_description:
      "Personaliza la identidad de la empresa, los servicios, precios, información de contacto, colores, imágenes y detalles comerciales.",

    easy_customization:
      "FÁCIL PERSONALIZACIÓN",

    scalable:
      "Escalable",

    scalable_description:
      "Comienza con un sitio web profesional y amplíalo con seguimiento de envíos, gestión de clientes y funciones de plataforma logística.",

    built_for_growth:
      "DISEÑADO PARA CRECER",

    modern_operations:
      "DISEÑADO PARA OPERACIONES MODERNAS",

    first_click:
      "Desde el primer clic",

    final_delivery:
      "hasta la entrega final.",

    capability_description:
      "SwiftShip crea una experiencia digital conectada donde los clientes pueden descubrir servicios, solicitar presupuestos, consultar precios, rastrear envíos y contactar con una empresa logística desde una plataforma profesional.",

    explore_tracking:
      "Explorar seguimiento",

    discover:
      "Descubrir",

    services_pricing:
      "Servicios y precios",

    request:
      "Solicitar",

    quote_or_shipment:
      "Presupuesto o envío",

    track:
      "Rastrear",

    shipment_visibility:
      "Visibilidad del envío",

    deliver:
      "Entregar",

    complete_journey:
      "Completar el recorrido",

    foundation:
      "LA BASE",

    ready_for_way:
      "Preparado para cómo",

    modern_logistics_works:
      "funciona la logística moderna.",

    service_ready:
      "Servicio preparado",

    ready_to_adapt:
      "Listo para adaptarse",

    tracking_experience:
      "Experiencia de seguimiento",

    keep_moving:
      "SIGUE AVANZANDO",

    give_business:
      "Dale a tu empresa logística",

    stronger_presence:
      "una presencia digital más sólida.",

    cta_description:
      "Explora la experiencia SwiftShip y descubre cómo un sitio logístico moderno puede reunir tus servicios.",

    view_services:
      "Ver servicios",

    footer_description:
      "Soluciones modernas de logística y entrega para empresas de todo el mundo.",

    copyright:
      "© 2026 SwiftShip. Todos los derechos reservados.",

    template_label:
      "Plantilla de sitio web de logística y entrega"

  },


  /* =======================================================
     GERMAN
     ======================================================= */

  de: {

    home_page_title:
      "SwiftShip — Logistik & Lieferung",

    about_page_title:
      "Über uns — SwiftShip",

    nav_home:
      "Startseite",

    nav_about:
      "Über uns",

    nav_services:
      "Services",

    nav_tracking:
      "Sendungsverfolgung",

    nav_pricing:
      "Preise",

    nav_contact:
      "Kontakt",

    home_eyebrow:
      "GLOBALE LOGISTIK • SCHNELLE LIEFERUNG",

    home_hero_title:
      "Bewegen Sie, was wichtig ist. Wir liefern.",

    home_hero_description:
      "Leistungsstarke Logistiklösungen für den schnellen, sicheren und transparenten Transport von Paketen, Produkten und Geschäftssendungen.",

    home_track_shipment:
      "Sendung verfolgen",

    home_get_quote:
      "Angebot erhalten",

    home_support:
      "Support",

    home_global:
      "Global",

    home_delivery:
      "Lieferung",

    home_real_time:
      "Echtzeit",

    home_tracking:
      "Tracking",

    home_shipment_secured:
      "Sendung gesichert",

    home_protected_transit:
      "Während des Transports geschützt",

    home_live_shipment:
      "AKTUELLE SENDUNG",

    home_swiftship_tracking:
      "SwiftShip Tracking",

    home_in_transit:
      "Unterwegs",

    home_origin:
      "START",

    home_warehouse:
      "Lager",

    home_destination:
      "ZIEL",

    home_final_address:
      "Endadresse",

    home_delivery_progress:
      "Lieferfortschritt",

    home_estimated_delivery:
      "Voraussichtliche Lieferung",

    home_on_schedule:
      "Planmäßig",

    home_tracking_id:
      "Tracking-ID",

    home_worldwide:
      "Weltweit",

    home_delivery_network:
      "Liefernetzwerk",

    home_services_label:
      "UNSERE SERVICES",

    home_services_title:
      "Logistik rund um Ihr Unternehmen.",

    home_services_description:
      "Flexible Versand- und Lieferlösungen für Privatkunden, wachsende Unternehmen und große Organisationen.",

    home_service_express_title:
      "Expresslieferung",

    home_service_express_description:
      "Schnelle und zuverlässige Lieferlösungen, wenn Zeit besonders wichtig ist.",

    home_service_worldwide_title:
      "Weltweiter Versand",

    home_service_worldwide_description:
      "Transportieren Sie Pakete zwischen Städten, Ländern und internationalen Zielorten.",

    home_service_business_title:
      "Geschäftslogistik",

    home_service_business_description:
      "Zuverlässige Logistikunterstützung für einen effizienten Geschäftsbetrieb.",

    home_service_tracking_title:
      "Sendungsverfolgung",

    home_service_tracking_description:
      "Geben Sie Kunden vollständige Transparenz von der Abholung bis zur Lieferung.",

    home_explore_service:
      "Service entdecken →",

    home_track_shipment_link:
      "Sendung verfolgen →",

    home_cta_label:
      "BEREIT ZUM VERSAND?",

    home_cta_title:
      "Bringen wir Ihre nächste Sendung voran.",

    home_request_quote:
      "Angebot anfordern",

    home_footer_description:
      "Moderne Logistik- und Lieferlösungen für Unternehmen weltweit.",

    home_copyright:
      "© 2026 SwiftShip. Alle Rechte vorbehalten.",

    home_template_label:
      "Website-Vorlage für Logistik & Lieferung",

    about_eyebrow:
      "ÜBER SWIFTSHIP",

    about_hero_title:
      "Logistik entwickelt, um",

    about_hero_title_highlight:
      "Unternehmen voranzubringen.",

    about_hero_description:
      "SwiftShip ist eine hochwertige Logistik-Website-Vorlage für Kurierunternehmen, Lieferdienste, Frachtanbieter, Versandunternehmen und moderne Logistikmarken.",

    about_explore_services:
      "Services entdecken",

    about_get_started:
      "Starten",

    tag_flexible:
      "Flexibel",

    tag_global:
      "Global bereit",

    tag_scalable:
      "Skalierbar",

    operations_overview:
      "BETRIEBSÜBERSICHT",

    moving_with_purpose:
      "Mit Ziel unterwegs.",

    live:
      "LIVE",

    pickup:
      "Abholung",

    shipment_received:
      "Sendung erhalten",

    in_transit:
      "Unterwegs",

    on_the_move:
      "In Bewegung",

    delivered:
      "Zugestellt",

    destination:
      "Ziel",

    support:
      "SUPPORT",

    visibility:
      "TRANSPARENZ",

    real_time:
      "Echtzeit",

    ready:
      "BEREIT",

    global:
      "Global",

    built_to_scale:
      "Skalierbar entwickelt",

    ready_for_growth:
      "Bereit für Wachstum",

    customer_first:
      "Kunden zuerst",

    designed_for_clarity:
      "Für Klarheit entwickelt",

    swiftship_approach:
      "DER SWIFTSHIP-ANSATZ",

    professional_logistics:
      "Professionelle Logistik,",

    without_complexity:
      "ohne Komplexität.",

    intro_text_one:
      "Eine Logistik-Website sollte mehr leisten als Informationen darzustellen. Sie sollte Vertrauen vermitteln, Services verständlich machen und Kunden zum Handeln bewegen.",

    intro_text_two:
      "SwiftShip verbindet diese Elemente in einer flexiblen Grundlage, die an verschiedene Logistikunternehmen, Lieferabläufe und Versandmarken angepasst werden kann.",

    built_around:
      "DARAUF AUFGEBAUT",

    stronger_foundation:
      "Eine stärkere Grundlage",

    modern_logistics:
      "für moderne Logistik.",

    foundation_description:
      "Jeder Teil der Erfahrung ist auf Klarheit, Flexibilität und langfristiges Wachstum ausgerichtet.",

    reliable:
      "Zuverlässig",

    reliable_description:
      "Entwickelt für klare Kommunikation, zuverlässige Servicepräsentation und ein professionelles Kundenerlebnis.",

    trust_clarity:
      "VERTRAUEN & KLARHEIT",

    flexible:
      "Flexibel",

    flexible_description:
      "Passe Unternehmensidentität, Services, Preise, Kontaktdaten, Farben, Bilder und Geschäftsinformationen an.",

    easy_customization:
      "EINFACHE ANPASSUNG",

    scalable:
      "Skalierbar",

    scalable_description:
      "Starte mit einer professionellen Website und erweitere sie um Sendungsverfolgung, Kundenverwaltung und Logistikplattform-Funktionen.",

    built_for_growth:
      "FÜR WACHSTUM ENTWICKELT",

    modern_operations:
      "FÜR MODERNE ABLÄUFE ENTWICKELT",

    first_click:
      "Vom ersten Klick",

    final_delivery:
      "bis zur endgültigen Lieferung.",

    capability_description:
      "SwiftShip schafft ein verbundenes digitales Erlebnis, in dem Kunden Services entdecken, Angebote anfordern, Preise ansehen, Sendungen verfolgen und ein Logistikunternehmen über eine professionelle Plattform kontaktieren können.",

    explore_tracking:
      "Sendungsverfolgung entdecken",

    discover:
      "Entdecken",

    services_pricing:
      "Services & Preise",

    request:
      "Anfragen",

    quote_or_shipment:
      "Angebot oder Sendung",

    track:
      "Verfolgen",

    shipment_visibility:
      "Sendungstransparenz",

    deliver:
      "Liefern",

    complete_journey:
      "Lieferweg abschließen",

    foundation:
      "DIE GRUNDLAGE",

    ready_for_way:
      "Bereit für die Art und Weise, wie",

    modern_logistics_works:
      "moderne Logistik funktioniert.",

    service_ready:
      "Service bereit",

    ready_to_adapt:
      "Anpassungsbereit",

    tracking_experience:
      "Tracking-Erlebnis",

    keep_moving:
      "WEITER VORAN",

    give_business:
      "Gib deinem Logistikunternehmen",

    stronger_presence:
      "eine stärkere digitale Präsenz.",

    cta_description:
      "Entdecke das SwiftShip-Erlebnis und sieh, wie eine moderne Logistik-Website deine Services zusammenführen kann.",

    view_services:
      "Services ansehen",

    footer_description:
      "Moderne Logistik- und Lieferlösungen für Unternehmen weltweit.",

    copyright:
      "© 2026 SwiftShip. Alle Rechte vorbehalten.",

    template_label:
      "Website-Vorlage für Logistik & Lieferung"

  },


  /* =======================================================
     PORTUGUESE
     ======================================================= */

  pt: {

    home_page_title:
      "SwiftShip — Logística e Entrega",

    about_page_title:
      "Sobre — SwiftShip",

    nav_home:
      "Início",

    nav_about:
      "Sobre",

    nav_services:
      "Serviços",

    nav_tracking:
      "Rastreamento",

    nav_pricing:
      "Preços",

    nav_contact:
      "Contato",

    home_eyebrow:
      "LOGÍSTICA GLOBAL • ENTREGA RÁPIDA",

    home_hero_title:
      "Mova o que importa. Nós entregamos.",

    home_hero_description:
      "Soluções logísticas poderosas para movimentar pacotes, produtos e negócios com rapidez, segurança e total visibilidade.",

    home_track_shipment:
      "Rastrear envio",

    home_get_quote:
      "Obter orçamento",

    home_support:
      "Suporte",

    home_global:
      "Global",

    home_delivery:
      "Entrega",

    home_real_time:
      "Tempo real",

    home_tracking:
      "Rastreamento",

    home_shipment_secured:
      "Envio protegido",

    home_protected_transit:
      "Protegido durante o transporte",

    home_live_shipment:
      "ENVIO ATUAL",

    home_swiftship_tracking:
      "Rastreamento SwiftShip",

    home_in_transit:
      "Em trânsito",

    home_origin:
      "ORIGEM",

    home_warehouse:
      "Armazém",

    home_destination:
      "DESTINO",

    home_final_address:
      "Endereço final",

    home_delivery_progress:
      "Progresso da entrega",

    home_estimated_delivery:
      "Entrega estimada",

    home_on_schedule:
      "Dentro do prazo",

    home_tracking_id:
      "ID de rastreamento",

    home_worldwide:
      "Mundial",

    home_delivery_network:
      "Rede de entrega",

    home_services_label:
      "NOSSOS SERVIÇOS",

    home_services_title:
      "Logística criada para o seu negócio.",

    home_services_description:
      "Soluções flexíveis de envio e entrega para pessoas, empresas em crescimento e grandes operações.",

    home_service_express_title:
      "Entrega expressa",

    home_service_express_description:
      "Soluções de entrega rápidas e confiáveis quando o tempo é essencial.",

    home_service_worldwide_title:
      "Envio internacional",

    home_service_worldwide_description:
      "Movimente pacotes entre cidades, países e destinos internacionais.",

    home_service_business_title:
      "Logística empresarial",

    home_service_business_description:
      "Suporte logístico confiável para ajudar empresas a operar com eficiência.",

    home_service_tracking_title:
      "Rastreamento de envios",

    home_service_tracking_description:
      "Ofereça aos clientes visibilidade desde a coleta até a entrega final.",

    home_explore_service:
      "Explorar serviço →",

    home_track_shipment_link:
      "Rastrear envio →",

    home_cta_label:
      "PRONTO PARA ENVIAR?",

    home_cta_title:
      "Vamos levar seu próximo envio adiante.",

    home_request_quote:
      "Solicitar orçamento",

    home_footer_description:
      "Soluções modernas de logística e entrega para empresas em todo o mundo.",

    home_copyright:
      "© 2026 SwiftShip. Todos os direitos reservados.",

    home_template_label:
      "Modelo de site de logística e entrega",

    about_eyebrow:
      "SOBRE A SWIFTSHIP",

    about_hero_title:
      "Logística criada para",

    about_hero_title_highlight:
      "fazer negócios avançarem.",

    about_hero_description:
      "SwiftShip é um modelo premium de site de logística criado para empresas de courier, serviços de entrega, operadores de carga, empresas de transporte e marcas modernas de logística.",

    about_explore_services:
      "Explorar serviços",

    about_get_started:
      "Começar",

    tag_flexible:
      "Flexível",

    tag_global:
      "Pronto para o mundo",

    tag_scalable:
      "Escalável",

    operations_overview:
      "VISÃO GERAL DAS OPERAÇÕES",

    moving_with_purpose:
      "Movendo com propósito.",

    live:
      "AO VIVO",

    pickup:
      "Coleta",

    shipment_received:
      "Envio recebido",

    in_transit:
      "Em trânsito",

    on_the_move:
      "Em movimento",

    delivered:
      "Entregue",

    destination:
      "Destino",

    support:
      "SUPORTE",

    visibility:
      "VISIBILIDADE",

    real_time:
      "Tempo real",

    ready:
      "PRONTO",

    global:
      "Global",

    built_to_scale:
      "Feito para crescer",

    ready_for_growth:
      "Pronto para crescer",

    customer_first:
      "Cliente em primeiro lugar",

    designed_for_clarity:
      "Criado para clareza",

    swiftship_approach:
      "A ABORDAGEM SWIFTSHIP",

    professional_logistics:
      "Logística profissional,",

    without_complexity:
      "sem complexidade.",

    intro_text_one:
      "Um site de logística deve fazer mais do que apresentar informações. Deve transmitir confiança, facilitar a compreensão dos serviços e ajudar os clientes a agir.",

    intro_text_two:
      "A SwiftShip reúne esses elementos em uma base flexível que pode ser adaptada a diferentes empresas de logística, operações de entrega e marcas de transporte.",

    built_around:
      "NO QUE É BASEADO",

    stronger_foundation:
      "Uma base mais forte",

    modern_logistics:
      "para a logística moderna.",

    foundation_description:
      "Cada parte da experiência é criada com foco em clareza, flexibilidade e crescimento a longo prazo.",

    reliable:
      "Confiável",

    reliable_description:
      "Criado para oferecer comunicação clara, apresentação confiável dos serviços e uma experiência profissional para o cliente.",

    trust_clarity:
      "CONFIANÇA E CLAREZA",

    flexible:
      "Flexível",

    flexible_description:
      "Personalize a identidade da empresa, serviços, preços, informações de contato, cores, imagens e detalhes comerciais.",

    easy_customization:
      "FÁCIL PERSONALIZAÇÃO",

    scalable:
      "Escalável",

    scalable_description:
      "Comece com um site profissional e expanda para rastreamento de remessas, gestão de clientes e funcionalidades de plataforma logística.",

    built_for_growth:
      "CRIADO PARA CRESCER",

    modern_operations:
      "CRIADO PARA OPERAÇÕES MODERNAS",

    first_click:
      "Do primeiro clique",

    final_delivery:
      "até a entrega final.",

    capability_description:
      "A SwiftShip cria uma experiência digital conectada onde os clientes podem descobrir serviços, solicitar cotações, consultar preços, rastrear remessas e entrar em contato com uma empresa de logística através de uma plataforma profissional.",

    explore_tracking:
      "Explorar rastreamento",

    discover:
      "Descobrir",

    services_pricing:
      "Serviços e preços",

    request:
      "Solicitar",

    quote_or_shipment:
      "Cotação ou envio",

    track:
      "Rastrear",

    shipment_visibility:
      "Visibilidade da remessa",

    deliver:
      "Entregar",

    complete_journey:
      "Concluir a jornada",

    foundation:
      "A BASE",

    ready_for_way:
      "Pronto para a forma como",

    modern_logistics_works:
      "a logística moderna funciona.",

    service_ready:
      "Serviço pronto",

    ready_to_adapt:
      "Pronto para adaptar",

    tracking_experience:
      "Experiência de rastreamento",

    keep_moving:
      "CONTINUE AVANÇANDO",

    give_business:
      "Dê à sua empresa de logística",

    stronger_presence:
      "uma presença digital mais forte.",

    cta_description:
      "Explore a experiência SwiftShip e veja como um site moderno de logística pode reunir seus serviços.",

    view_services:
      "Ver serviços",

    footer_description:
      "Soluções modernas de logística e entrega para empresas em todo o mundo.",

    copyright:
      "© 2026 SwiftShip. Todos os direitos reservados.",

    template_label:
      "Modelo de site de logística e entrega"

  },


  /* =======================================================
     ITALIAN
     ======================================================= */

  it: {

    home_page_title:
      "SwiftShip — Logistica e Consegne",

    about_page_title:
      "Chi siamo — SwiftShip",

    nav_home:
      "Home",

    nav_about:
      "Chi siamo",

    nav_services:
      "Servizi",

    nav_tracking:
      "Tracciamento",

    nav_pricing:
      "Prezzi",

    nav_contact:
      "Contatti",

    home_eyebrow:
      "LOGISTICA GLOBALE • CONSEGNA RAPIDA",

    home_hero_title:
      "Muoviamo ciò che conta. Noi consegniamo.",

    home_hero_description:
      "Soluzioni logistiche avanzate progettate per movimentare pacchi, prodotti e attività in modo rapido, sicuro e completamente trasparente.",

    home_track_shipment:
      "Traccia spedizione",

    home_get_quote:
      "Richiedi un preventivo",

    home_support:
      "Supporto",

    home_global:
      "Globale",

    home_delivery:
      "Consegna",

    home_real_time:
      "Tempo reale",

    home_tracking:
      "Tracciamento",

    home_shipment_secured:
      "Spedizione protetta",

    home_protected_transit:
      "Protetta durante il trasporto",

    home_live_shipment:
      "SPEDIZIONE ATTIVA",

    home_swiftship_tracking:
      "Tracciamento SwiftShip",

    home_in_transit:
      "In transito",

    home_origin:
      "ORIGINE",

    home_warehouse:
      "Magazzino",

    home_destination:
      "DESTINAZIONE",

    home_final_address:
      "Indirizzo finale",

    home_delivery_progress:
      "Avanzamento della consegna",

    home_estimated_delivery:
      "Consegna stimata",

    home_on_schedule:
      "Come previsto",

    home_tracking_id:
      "ID di tracciamento",

    home_worldwide:
      "In tutto il mondo",

    home_delivery_network:
      "Rete di consegna",

    home_services_label:
      "I NOSTRI SERVIZI",

    home_services_title:
      "Logistica costruita intorno alla tua attività.",

    home_services_description:
      "Soluzioni flessibili di spedizione e consegna per privati, aziende in crescita e grandi organizzazioni.",

    home_service_express_title:
      "Consegna express",

    home_service_express_description:
      "Soluzioni di consegna rapide e affidabili quando il tempo è fondamentale.",

    home_service_worldwide_title:
      "Spedizioni internazionali",

    home_service_worldwide_description:
      "Sposta pacchi tra città, paesi e destinazioni internazionali.",

    home_service_business_title:
      "Logistica aziendale",

    home_service_business_description:
      "Supporto logistico affidabile progettato per aiutare le aziende a operare in modo efficiente.",

    home_service_tracking_title:
      "Tracciamento delle spedizioni",

    home_service_tracking_description:
      "Offri ai clienti visibilità dalla raccolta fino alla consegna finale.",

    home_explore_service:
      "Scopri il servizio →",

    home_track_shipment_link:
      "Traccia spedizione →",

    home_cta_label:
      "PRONTO A SPEDIRE?",

    home_cta_title:
      "Portiamo avanti la tua prossima spedizione.",

    home_request_quote:
      "Richiedi un preventivo",

    home_footer_description:
      "Soluzioni moderne di logistica e consegna per aziende in tutto il mondo.",

    home_copyright:
      "© 2026 SwiftShip. Tutti i diritti riservati.",

    home_template_label:
      "Modello di sito web per logistica e consegne",

    about_eyebrow:
      "CHI È SWIFTSHIP",

    about_hero_title:
      "Logistica progettata per",

    about_hero_title_highlight:
      "far crescere il business.",

    about_hero_description:
      "SwiftShip è un modello premium di sito web logistico progettato per aziende di corriere, servizi di consegna, operatori di trasporto, aziende di spedizione e moderni brand logistici.",

    about_explore_services:
      "Scopri i servizi",

    about_get_started:
      "Inizia",

    tag_flexible:
      "Flessibile",

    tag_global:
      "Pronto per il mondo",

    tag_scalable:
      "Scalabile",

    operations_overview:
      "PANORAMICA OPERATIVA",

    moving_with_purpose:
      "Muoversi con uno scopo.",

    live:
      "LIVE",

    pickup:
      "Ritiro",

    shipment_received:
      "Spedizione ricevuta",

    in_transit:
      "In transito",

    on_the_move:
      "In movimento",

    delivered:
      "Consegnato",

    destination:
      "Destinazione",

    support:
      "SUPPORTO",

    visibility:
      "VISIBILITÀ",

    real_time:
      "In tempo reale",

    ready:
      "PRONTO",

    global:
      "Globale",

    built_to_scale:
      "Progettato per crescere",

    ready_for_growth:
      "Pronto per la crescita",

    customer_first:
      "Il cliente al primo posto",

    designed_for_clarity:
      "Progettato per la chiarezza",

    swiftship_approach:
      "L'APPROCCIO SWIFTSHIP",

    professional_logistics:
      "Logistica professionale,",

    without_complexity:
      "senza complessità.",

    intro_text_one:
      "Un sito logistico deve fare più che mostrare informazioni. Deve comunicare fiducia, rendere i servizi facili da comprendere e aiutare i clienti ad agire.",

    intro_text_two:
      "SwiftShip riunisce questi elementi in una base flessibile che può essere adattata a diverse aziende logistiche, operazioni di consegna e brand di spedizione.",

    built_around:
      "SU COSA È COSTRUITO",

    stronger_foundation:
      "Una base più solida",

    modern_logistics:
      "per la logistica moderna.",

    foundation_description:
      "Ogni parte dell'esperienza è progettata attorno a chiarezza, flessibilità e crescita a lungo termine.",

    reliable:
      "Affidabile",

    reliable_description:
      "Progettato per una comunicazione chiara, una presentazione affidabile dei servizi e un'esperienza cliente professionale.",

    trust_clarity:
      "FIDUCIA E CHIAREZZA",

    flexible:
      "Flessibile",

    flexible_description:
      "Personalizza identità aziendale, servizi, prezzi, informazioni di contatto, colori, immagini e dettagli commerciali.",

    easy_customization:
      "FACILE PERSONALIZZAZIONE",

    scalable:
      "Scalabile",

    scalable_description:
      "Inizia con un sito professionale e aggiungi il monitoraggio delle spedizioni, la gestione dei clienti e le funzionalità di una piattaforma logistica.",

    built_for_growth:
      "PROGETTATO PER CRESCERE",

    modern_operations:
      "PROGETTATO PER OPERAZIONI MODERNE",

    first_click:
      "Dal primo clic",

    final_delivery:
      "alla consegna finale.",

    capability_description:
      "SwiftShip crea un'esperienza digitale connessa in cui i clienti possono scoprire i servizi, richiedere preventivi, consultare i prezzi, monitorare le spedizioni e contattare un'azienda logistica da un'unica piattaforma professionale.",

    explore_tracking:
      "Scopri il monitoraggio",

    discover:
      "Scopri",

    services_pricing:
      "Servizi e prezzi",

    request:
      "Richiedi",

    quote_or_shipment:
      "Preventivo o spedizione",

    track:
      "Monitora",

    shipment_visibility:
      "Visibilità della spedizione",

    deliver:
      "Consegna",

    complete_journey:
      "Completa il percorso",

    foundation:
      "LA BASE",

    ready_for_way:
      "Pronto per il modo in cui",

    modern_logistics_works:
      "funziona la logistica moderna.",

    service_ready:
      "Servizio pronto",

    ready_to_adapt:
      "Pronto ad adattarsi",

    tracking_experience:
      "Esperienza di monitoraggio",

    keep_moving:
      "CONTINUA A MUOVERTI",

    give_business:
      "Dai alla tua azienda logistica",

    stronger_presence:
      "una presenza digitale più forte.",

    cta_description:
      "Esplora l'esperienza SwiftShip e scopri come un sito logistico moderno può riunire i tuoi servizi.",

    view_services:
      "Vedi servizi",

    footer_description:
      "Soluzioni moderne di logistica e consegna per aziende di tutto il mondo.",

    copyright:
      "© 2026 SwiftShip. Tutti i diritti riservati.",

    template_label:
      "Modello di sito web per logistica e consegne"

  },


  /* =======================================================
     ARABIC
     ======================================================= */

  ar: {

    home_page_title:
      "SwiftShip — الخدمات اللوجستية والتوصيل",

    about_page_title:
      "من نحن — SwiftShip",

    nav_home:
      "الرئيسية",

    nav_about:
      "من نحن",

    nav_services:
      "الخدمات",

    nav_tracking:
      "تتبع الشحنات",

    nav_pricing:
      "الأسعار",

    nav_contact:
      "اتصل بنا",

    home_eyebrow:
      "الخدمات اللوجستية العالمية • التوصيل السريع",

    home_hero_title:
      "انقل ما يهمك. نحن نوصل.",

    home_hero_description:
      "حلول لوجستية متقدمة مصممة لنقل الطرود والمنتجات والأعمال بسرعة وأمان وشفافية كاملة.",

    home_track_shipment:
      "تتبع الشحنة",

    home_get_quote:
      "احصل على عرض سعر",

    home_support:
      "الدعم",

    home_global:
      "عالمي",

    home_delivery:
      "التوصيل",

    home_real_time:
      "الوقت الفعلي",

    home_tracking:
      "التتبع",

    home_shipment_secured:
      "الشحنة مؤمنة",

    home_protected_transit:
      "محمية أثناء النقل",

    home_live_shipment:
      "شحنة حالية",

    home_swiftship_tracking:
      "تتبع SwiftShip",

    home_in_transit:
      "قيد النقل",

    home_origin:
      "نقطة الانطلاق",

    home_warehouse:
      "المستودع",

    home_destination:
      "الوجهة",

    home_final_address:
      "العنوان النهائي",

    home_delivery_progress:
      "تقدم التوصيل",

    home_estimated_delivery:
      "التوصيل المتوقع",

    home_on_schedule:
      "وفق الجدول",

    home_tracking_id:
      "رقم التتبع",

    home_worldwide:
      "حول العالم",

    home_delivery_network:
      "شبكة التوصيل",

    home_services_label:
      "خدماتنا",

    home_services_title:
      "خدمات لوجستية مصممة حول عملك.",

    home_services_description:
      "حلول مرنة للشحن والتوصيل للأفراد والشركات النامية والمؤسسات الكبيرة.",

    home_service_express_title:
      "التوصيل السريع",

    home_service_express_description:
      "حلول توصيل سريعة وموثوقة عندما يكون الوقت مهماً.",

    home_service_worldwide_title:
      "الشحن العالمي",

    home_service_worldwide_description:
      "انقل الطرود بين المدن والدول والوجهات الدولية.",

    home_service_business_title:
      "لوجستيات الأعمال",

    home_service_business_description:
      "دعم لوجستي موثوق مصمم لمساعدة الشركات على العمل بكفاءة.",

    home_service_tracking_title:
      "تتبع الشحنات",

    home_service_tracking_description:
      "امنح العملاء رؤية واضحة منذ الاستلام وحتى التسليم النهائي.",

    home_explore_service:
      "استكشف الخدمة ←",

    home_track_shipment_link:
      "تتبع الشحنة ←",

    home_cta_label:
      "هل أنت مستعد للشحن؟",

    home_cta_title:
      "لنبدأ بتحريك شحنتك القادمة إلى الأمام.",

    home_request_quote:
      "طلب عرض سعر",

    home_footer_description:
      "حلول لوجستية وخدمات توصيل حديثة للشركات حول العالم.",

    home_copyright:
      "© 2026 SwiftShip. جميع الحقوق محفوظة.",

    home_template_label:
      "قالب موقع للخدمات اللوجستية والتوصيل",

    about_eyebrow:
      "حول SWIFTSHIP",

    about_hero_title:
      "لوجستيات مصممة من أجل",

    about_hero_title_highlight:
      "دفع الأعمال إلى الأمام.",

    about_hero_description:
      "SwiftShip هو قالب موقع لوجستي متميز مصمم لشركات البريد السريع وخدمات التوصيل ومشغلي الشحن وشركات النقل والعلامات التجارية اللوجستية الحديثة.",

    about_explore_services:
      "استكشف الخدمات",

    about_get_started:
      "ابدأ الآن",

    tag_flexible:
      "مرن",

    tag_global:
      "جاهز للعالم",

    tag_scalable:
      "قابل للتوسع",

    operations_overview:
      "نظرة عامة على العمليات",

    moving_with_purpose:
      "نتحرك بهدف.",

    live:
      "مباشر",

    pickup:
      "الاستلام",

    shipment_received:
      "تم استلام الشحنة",

    in_transit:
      "قيد النقل",

    on_the_move:
      "في الطريق",

    delivered:
      "تم التسليم",

    destination:
      "الوجهة",

    support:
      "الدعم",

    visibility:
      "الرؤية",

    real_time:
      "في الوقت الفعلي",

    ready:
      "جاهز",

    global:
      "عالمي",

    built_to_scale:
      "مصمم للتوسع",

    ready_for_growth:
      "جاهز للنمو",

    customer_first:
      "العميل أولاً",

    designed_for_clarity:
      "مصمم للوضوح",

    swiftship_approach:
      "نهج SWIFTSHIP",

    professional_logistics:
      "لوجستيات احترافية،",

    without_complexity:
      "بدون تعقيد.",

    intro_text_one:
      "يجب أن يفعل موقع الخدمات اللوجستية أكثر من مجرد عرض المعلومات. يجب أن ينقل الثقة، ويسهّل فهم الخدمات، ويساعد العملاء على اتخاذ الإجراءات.",

    intro_text_two:
      "تجمع SwiftShip هذه العناصر في أساس مرن يمكن تكييفه مع شركات لوجستية وعمليات توصيل وعلامات شحن مختلفة.",

    built_around:
      "ما تم بناؤه حوله",

    stronger_foundation:
      "أساس أقوى",

    modern_logistics:
      "للوجستيات الحديثة.",

    foundation_description:
      "تم تصميم كل جزء من التجربة حول الوضوح والمرونة والنمو على المدى الطويل.",

    reliable:
      "موثوق",

    reliable_description:
      "مصمم للتواصل الواضح، وعرض الخدمات بشكل موثوق، وتجربة عملاء احترافية.",

    trust_clarity:
      "الثقة والوضوح",

    flexible:
      "مرن",

    flexible_description:
      "قم بتخصيص هوية الشركة والخدمات والأسعار ومعلومات الاتصال والألوان والصور وتفاصيل النشاط التجاري.",

    easy_customization:
      "تخصيص سهل",

    scalable:
      "قابل للتوسع",

    scalable_description:
      "ابدأ بموقع احترافي وقم بتوسيعه ليشمل تتبع الشحنات وإدارة العملاء ووظائف منصة لوجستية متكاملة.",

    built_for_growth:
      "مصمم للنمو",

    modern_operations:
      "مصمم للعمليات الحديثة",

    first_click:
      "من النقرة الأولى",

    final_delivery:
      "حتى التسليم النهائي.",

    capability_description:
      "تنشئ SwiftShip تجربة رقمية متكاملة يمكن للعملاء من خلالها اكتشاف الخدمات وطلب عروض الأسعار واستكشاف الأسعار وتتبع الشحنات والتواصل مع شركة لوجستية من منصة احترافية واحدة.",

    explore_tracking:
      "استكشف التتبع",

    discover:
      "اكتشف",

    services_pricing:
      "الخدمات والأسعار",

    request:
      "اطلب",

    quote_or_shipment:
      "عرض سعر أو شحنة",

    track:
      "تتبع",

    shipment_visibility:
      "رؤية الشحنة",

    deliver:
      "سلّم",

    complete_journey:
      "إكمال الرحلة",

    foundation:
      "الأساس",

    ready_for_way:
      "جاهز للطريقة التي",

    modern_logistics_works:
      "تعمل بها الخدمات اللوجستية الحديثة.",

    service_ready:
      "الخدمة جاهزة",

    ready_to_adapt:
      "جاهز للتكيف",

    tracking_experience:
      "تجربة تتبع",

    keep_moving:
      "استمر في التقدم",

    give_business:
      "امنح نشاطك اللوجستي",

    stronger_presence:
      "حضوراً رقمياً أقوى.",

    cta_description:
      "استكشف تجربة SwiftShip وشاهد كيف يمكن لموقع لوجستي حديث أن يجمع خدماتك في مكان واحد.",

    view_services:
      "عرض الخدمات",

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


  /* Set page language */

  document.documentElement.lang = language;


  /* Arabic right-to-left support */

  document.documentElement.dir =
    language === "ar"
      ? "rtl"
      : "ltr";


  /* Translate all marked elements */

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.getAttribute("data-i18n");


      if (
        translations[key] !== undefined
      ) {

        element.textContent =
          translations[key];

      }

    });


  /* =======================================================
     PAGE TITLE
     Each HTML page has:
     <html data-page-title="home_page_title">
     ======================================================= */

  const titleKey =
    document.documentElement.dataset.pageTitle;


  if (
    titleKey &&
    translations[titleKey]
  ) {

    document.title =
      translations[titleKey];

  }


  /* Update language selector */

  const languageSelect =
    document.getElementById("languageSelect");


  if (languageSelect) {

    languageSelect.value =
      language;

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
    localStorage.getItem("swiftshipLanguage") ||
    "en";


  applyLanguage(savedLanguage);


  const languageSelect =
    document.getElementById("languageSelect");


  if (languageSelect) {

    languageSelect.addEventListener(
      "change",
      (event) => {

        applyLanguage(
          event.target.value
        );

      }
    );

  }

}


/* =========================================================
   MAIN
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* =====================================================
       LANGUAGE SYSTEM
       ===================================================== */

    initializeLanguage();


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle =
      document.querySelector(
        ".menu-toggle"
      );


    const mainNav =
      document.querySelector(
        ".main-nav"
      );


    if (
      menuToggle &&
      mainNav
    ) {

      menuToggle.addEventListener(
        "click",
        () => {

          const isOpen =
            mainNav.classList.toggle(
              "open"
            );


          menuToggle.setAttribute(
            "aria-expanded",
            isOpen
              ? "true"
              : "false"
          );


          menuToggle.setAttribute(
            "aria-label",
            isOpen
              ? "Close navigation"
              : "Open navigation"
          );

        }
      );


      mainNav
        .querySelectorAll("a")
        .forEach((link) => {

          link.addEventListener(
            "click",
            () => {

              mainNav.classList.remove(
                "open"
              );


              menuToggle.setAttribute(
                "aria-expanded",
                "false"
              );


              menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
              );

            }
          );

        });

    }


    /* =====================================================
       REQUEST A QUOTE
       ===================================================== */

    const quoteForm =
      document.getElementById(
        "quoteForm"
      );


    const formMessage =
      document.getElementById(
        "formMessage"
      );


    if (
      quoteForm &&
      formMessage
    ) {

      quoteForm.addEventListener(
        "submit",
        (event) => {

          event.preventDefault();


          const formData =
            new FormData(
              quoteForm
            );


          const name =
            String(
              formData.get(
                "sender_name"
              ) || ""
            ).trim();


          const email =
            String(
              formData.get(
                "email"
              ) || ""
            ).trim();


          const service =
            String(
              formData.get(
                "service"
              ) || ""
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

              `Service: ${
                service
              }\n` +

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

  }
);
