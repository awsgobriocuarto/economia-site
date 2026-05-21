// =============================================
// ÍNDICE ESTÁTICO — Secciones, trámites y páginas internas
// =============================================
export const STATIC_INDEX = [
  // Secciones internas
  { type: 'seccion', title: 'Inicio', description: 'Página principal de Economía', url: '/', icon: 'fa-home' },
  { type: 'seccion', title: 'Institucional', description: 'Autoridades y estructura de la Secretaría de Economía', url: '/institucional', icon: 'fa-university' },
  { type: 'seccion', title: 'Pagos y Deudas', description: 'Consultá y pagá tus deudas municipales', url: '/pagos-y-deudas', icon: 'fa-credit-card' },
  { type: 'seccion', title: 'Trámites y Servicios', description: 'Catálogo completo de trámites digitales', url: '/tramites-y-servicios', icon: 'fa-tasks' },
  { type: 'seccion', title: 'Transparencia', description: 'Información pública y rendición de cuentas', url: '/transparencia', icon: 'fa-eye' },
  { type: 'seccion', title: 'Legislación', description: 'Ordenanzas, decretos y normativas municipales', url: '/legislacion', icon: 'fa-gavel' },
  { type: 'seccion', title: 'Noticias', description: 'Últimas novedades de la Secretaría', url: '/noticias', icon: 'fa-newspaper' },
  { type: 'seccion', title: 'Estadísticas', description: 'Datos y estadísticas de gestión municipal', url: '/estadisticas', icon: 'fa-chart-bar' },
  { type: 'seccion', title: 'ODS - Desarrollo Sostenible', description: 'Objetivos de Desarrollo Sostenible - Agenda 2030', url: '/ods', icon: 'fa-leaf' },

  // Trámites frecuentes (externos)
  { type: 'tramite', title: 'Licencia de Conducir', description: 'Renovación y obtención de licencia de conducir', url: 'https://tramites.riocuarto.gov.ar/tramite/6/licencia-de-conducir', external: true, icon: 'fa-id-card' },
  { type: 'tramite', title: 'Impresión de Cedulones', description: 'Imprimí tu cedulón de pago de tasas municipales', url: 'https://economia.riocuarto.gov.ar/', external: true, icon: 'fa-print' },
  { type: 'tramite', title: 'Libre Deuda Municipal', description: 'Certificado de libre deuda de multas y tránsito', url: 'https://tramites.riocuarto.gov.ar/tramite/49/libre-deuda-de-multas-personales-y-de-transito', external: true, icon: 'fa-file-invoice' },
  { type: 'tramite', title: 'Turnos Online', description: 'Solicitá turno para atención presencial', url: 'https://turnos.riocuarto.gov.ar/', external: true, icon: 'fa-calendar-check' },
  { type: 'tramite', title: 'Habilitación Comercial', description: 'Habilitación de comercio clase I, II y III', url: 'https://tramites.riocuarto.gov.ar/tramite/10/habilitacion-comercial-clase-i-ii-y-iii', external: true, icon: 'fa-store' },
  { type: 'tramite', title: 'Consulta de Expedientes', description: 'Consultá el estado de tu expediente municipal', url: 'https://tramites.riocuarto.gov.ar/tramite/11/consulta-de-expedientes', external: true, icon: 'fa-search' },
  { type: 'tramite', title: 'Baja de Automotores', description: 'Baja de vehículos del padrón municipal', url: 'https://tramites.riocuarto.gov.ar/tramite/2/baja-de-automotores', external: true, icon: 'fa-car' },
  { type: 'tramite', title: 'Plan de Pagos', description: 'Regularizá tu deuda municipal en cuotas', url: 'https://economia.riocuarto.gov.ar/', external: true, icon: 'fa-hand-holding-usd' },
  { type: 'tramite', title: 'Catastro y Obras Privadas', description: 'Aprobación de planos de obra privada', url: 'https://tramites.riocuarto.gov.ar/tramite/1/aprobacion-de-planos-de-obra-privada', external: true, icon: 'fa-building' },
  { type: 'tramite', title: 'Domicilio Tributario Electrónico', description: 'Adherite al CIDI para recibir notificaciones oficiales', url: 'http://cidi.riocuarto.gov.ar/', external: true, icon: 'fa-envelope-open-text' },
  { type: 'tramite', title: 'Compras Web', description: 'Plataforma de compras y licitaciones públicas', url: 'https://comprasweb.economiariocuarto.gob.ar/', external: true, icon: 'fa-gavel' },
  { type: 'tramite', title: 'Atención WhatsApp', description: 'Consultá al equipo por WhatsApp', url: 'https://wa.me/+5493584121879', external: true, icon: 'fa-whatsapp' },
  { type: 'tramite', title: 'Constancia de Inscripción', description: 'Obtención de constancia de inscripción tributaria municipal', url: 'https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.hcising', external: true, icon: 'fa-industry' },

  // Contacto
  { type: 'contacto', title: 'Teléfono 0800 444 5454', description: 'Línea gratuita de atención al vecino', url: 'tel:08004445454', external: true, icon: 'fa-phone-alt' },
  { type: 'contacto', title: 'Dirección: Constitución 988', description: 'Oficinas de la Secretaría de Economía, Río Cuarto', url: 'https://goo.gl/maps/tu-link-aqui', external: true, icon: 'fa-map-marker-alt' },
];

export function searchItems(query, items) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);

  return items
    .map((item) => {
      const hay = `${item.title} ${item.description || ''}`.toLowerCase();
      const exactMatch = hay.includes(q);
      const wordMatches = words.filter((w) => hay.includes(w)).length;
      const score = (exactMatch ? 10 : 0) + wordMatches * 2 + (hay.startsWith(q) ? 5 : 0);
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}
