/*
 * Configuración de contacto de Fragonia.
 *
 * WHATSAPP: número comercial en formato internacional, sólo dígitos:
 *   código de país (54) + 9 + código de área sin 0 + número sin 15.
 *   Ejemplo de formato: '5492291000000' (no es un número real).
 *
 * Mientras quede vacío, los botones abren WhatsApp para que la persona
 * elija el contacto. Al completarlo, todos los botones de la web
 * escriben directamente a Fragonia con el mensaje correspondiente.
 */
window.FRAGONIA_CONFIG = {
  whatsapp: '',

  mensajes: {
    pedido: '¡Hola Fragonia! Quería hacer una consulta / un pedido.',
    masa: '¡Hola Fragonia! Quería consultar por los panes de masa madre disponibles.',
    integrales: '¡Hola Fragonia! Quería consultar por los panificados integrales disponibles.',
    pasteleria: '¡Hola Fragonia! Quería consultar por la pastelería disponible.',
    temporada: '¡Hola Fragonia! ¿Qué especialidades de temporada tienen esta semana?'
  }
};
