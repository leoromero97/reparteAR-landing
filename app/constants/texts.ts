import { collaborators } from "./collaborators";

export const actionsTexts = {
  requestTrip: 'Pedir envío',
  makeInquiry: 'Realizar consulta',
  goToMainPage: 'Ir a la página principal'
};

export const navbarTexts = {
  services: 'Servicios',
  testimonials: 'Testimonios',
  us: 'Nosotros',
  questions: 'Preguntas',
};

export const heroTexts = {
  title: '¡Reparteamos tus pedidos!',
  description: 'Te ofrecemos un servicio de moto mensajería enfocado en el compromiso y la confianza 🏍️',
};

export const servicesTexts = {
  titleServices: 'Servicios de moto mensajería',
  services: {
    flexShippingMarket: 'Mercado Envíos Flex',
    deliveriesInTwentyFourHours: 'Entregas en 24 horas',
    onlineSalesDeliveries: 'Entregas de ventas online',
    scheduledShipments: 'Envíos programados',
    doorToDoorDeliveries: 'Entregas puerta a puerta',
    withdrawalsFromOnlinePurchases: 'Retiros de compras online',
    documentTransfers: 'Traslados de documentación',
    collectionProcedures: 'Gestiones de cobranzas',
    proceduresManagement: 'Gestiones de trámites',
    parcelOffices: 'Despachos de encomiendas',
  },
  howWeWork: {
    title: '¿Cómo trabajamos?',
    categories: {
      firstShipment: {
        title: 'Primer envío',
        step1: {
          number: '1',
          text: 'Nos escribís por WhatsApp'
        },
        step2: {
          number: '2',
          text: 'Brindas las direcciones'
        },
        step3: {
          number: '3',
          text: 'Cotizamos tu envío',
        },
        step4: {
          number: '4',
          text: 'Pedimos info necesaria',
        },
        step5: {
          number: '5',
          text: 'Un repartidor realiza el viaje',
        },
        step6: {
          number: '6',
          text: 'Abonas el servicio',
        },
      },
      customer: {
        title: 'Cliente',
        step1: {
          number: '1',
          text: 'Nos escribís por WhatsApp'
        },
        step2: {
          number: '2',
          text: 'Brindas info necesaria'
        },
        step3: {
          number: '3',
          text: 'Las motos realizan el viaje',
        },
        step4: {
          number: '4',
          text: 'Abonas el servicio',
        },
      },
      moreThanFiveProducts: {
        title: 'Más de 5 productos por día',
        step1: {
          number: '1',
          text: 'Creamos grupo en WhatsApp'
        },
        step2: {
          number: '2',
          text: 'Definimos horarios para retirar productos'
        },
        step3: {
          number: '3',
          text: 'Pasan los viajes en el grupo de WhatsApp',
        },
        step4: {
          number: '4',
          text: 'Las motos retiran en los horarios definidos',
        },
        step5: {
          number: '5',
          text: 'Se entregan los productos dentro de las 24 horas',
        },
        step6: {
          number: '6',
          text: 'Se abona el servicio por quincena',
        },
      },
    }
  },
  neddedInformation: {
    title: 'Información necesaria para un viaje exitoso',
    destinationAddres: 'Dirección de destino',
    destinationNeighborhood: 'Barrio de destino',
    destinationRing: 'Timbre destinatario',
    destinationPhone: 'Teléfono destinatario',
    destinationNameOrSurname: 'Nombre/apellido destinatario',
    deliveryTimeSlot: 'Franja horaria de entrega',
    quantityOfPackages: 'Cantidad de paquetes',
    packagesSize: 'Tamaño del paquete',
    measureAndWeight: 'Medida y peso aproximado',
    observations: 'Observaciones'
  }
};

export const commonsTexts = {
  allRightsReserved: 'Todos los derechos reservados',
  dark: 'Oscuro',
  didYouLikeThisLandingPage: '¿Te gustó esta landing page?',
  developmentBy: 'Diseñado y desarrollado por Leonardo Esteban Gerbacio Romero',
  doYouHaveAnyDoubtWriteUs: '¿Tenés algunda duda? ¡Escribinos!',
  frequentQuestions: 'Preguntas frecuentes',
  light: 'Claro',
  followUs: 'Seguinos',
  testimonials: 'Testimonios',
  theyTrustUs: 'Confian en nosotros',
  theme: 'Tema',
  techMessage: 'Estamos en el proceso de creación de nuestra propia plataforma para automatizar procesos internos',
  us: 'Nosotros',
  usMessage: `Actualmente somos un equipo de ${collaborators.length} personas, con el sueño de seguir creciendo como emprendimiento y brindar trabajo a más personas`,
};

export const notFoundTexts = {
  title: 'Ups! error 404',
  description: 'No podemos encontrar la página que buscas, te recomendamos volver a la página principal',
}

export const texts = {
  actions: actionsTexts,
  commons: commonsTexts,
  hero: heroTexts,
  navbar: navbarTexts,
  notFound: notFoundTexts,
  services: servicesTexts,
};
