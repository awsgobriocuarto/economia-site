// pages/api/unsubscribe-webhook.js

export default async function handler(req, res) {
  // Asegúrate de que solo se acepten solicitudes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, reason } = req.body;

  // Validación básica de los datos recibidos
  if (!email || !reason) {
    return res.status(400).json({ message: 'Email and reason are required.' });
  }

  console.log(`Solicitud de desuscripción recibida para: ${email}`);
  console.log(`Motivo: ${reason}`);

  try {
    // --- INTEGRACIÓN CON TU WEBHOOK DE MAKE.COM ---
    // Esta URL es única para cada webhook que configures en Make.com.
    const makeComWebhookUrl = process.env.MAKE_COM_UNSUBSCRIBE_WEBHOOK_URL; // Recomendado usar una variable de entorno

    if (!makeComWebhookUrl) {
      console.error('MAKE_COM_UNSUBSCRIBE_WEBHOOK_URL no está configurada en las variables de entorno.');
      return res.status(500).json({ message: 'Configuración del webhook incompleta.' });
    }

    const webhookResponse = await fetch(makeComWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Si Make.com te pide algún encabezado específico (ej. para autenticación), agrégalo aquí.
        // La mayoría de los webhooks de Make.com son públicos por defecto, pero si usas autenticación, aquí iría.
      },
      body: JSON.stringify({
        email: email,
        reason: reason,
        timestamp: new Date().toISOString(),
        // Puedes añadir más datos aquí si los necesitas en Make.com
      }),
    });

    if (webhookResponse.ok) {
      // El webhook se envió correctamente a Make.com
      return res.status(200).json({ message: 'Desuscripción procesada exitosamente a través de Make.com.' });
    } else {
      // Si Make.com devuelve un error (ej. por validación interna de Make), lo manejamos aquí
      const errorData = await webhookResponse.json().catch(() => ({ message: 'No se pudo parsear el error de Make.com' }));
      console.error('Error del webhook de Make.com:', webhookResponse.status, errorData);
      return res.status(webhookResponse.status).json({
        message: 'Error al enviar la información a Make.com.',
        details: errorData,
      });
    }
  } catch (error) {
    console.error('Error al procesar la desuscripción o al conectar con Make.com:', error);
    return res.status(500).json({ message: 'Error interno del servidor al procesar la solicitud.' });
  }
}