/* ==========================================
   ARCHIVO: config.js
   Variables globales para personalizar la app
========================================== */
const NOMBRE_NEGOCIO = "CHAYONET"; // <--- Solo cambias esto y listo el pollo
const API_BASE_URL_CLIENTE = "https://apis-yley.onrender.com";

// ==========================================
// ENLACES DE GOOGLE APPS SCRIPT (Microservicios)
// ==========================================

// 1. MAESTRO (Autenticación y Auditoría principal)
const GS_MAESTRO = "https://script.google.com/macros/s/AKfycbwRoYj7ylZ32kD7BEaSkJxsgBYM7UZ_64TYMFgmuztjWZNKfLYktujOLwFf1Wengq40/exec";

// 2. OBREROS (Array de workers para lectura de correos)
const GS_OBREROS = [
    "https://script.google.com/macros/s/AKfycbxqnN0VLkZ4jCpK-n1z9fB5g3c00MYpN-gZfS3-AbSEU8n4s1quQ1mmqniVk608Wue8kw/exec",
    "https://script.google.com/macros/s/AKfycbwQBsj-vzRV8n3WvHZWN6XUwDOkQAIocX4Ekw55DkXf564eQ0-OmH9QjF-lC34VAEDp/exec",
    "https://script.google.com/macros/s/AKfycbzNrizm-uA6OC7LCfAdbbaErpmd9ZEFyRQoOfIuzzDhk9g9kkMydIZ5pRHm5N0xXTrbIQ/exec",
    "https://script.google.com/macros/s/AKfycby1miQvZyaD_okOoW7J5P9roOTb5WGl8O24yw6JprW7H2UvmVAcZmc6_fQfcfQld9S-/exec",
    "https://script.google.com/macros/s/AKfycbxJD_pa-gnDBnHPl-7PVVqjWsK0p8ETg4qtyG4s1zEYj8okFtlbQ26hdGm0VdX9VTUFHA/exec"
];

// 3. RECARGAS (Módulo de billetera y saldos)
const GS_RECARGA = "https://script.google.com/macros/s/AKfycbysRqpQ2aG4HZ8o69e7MO32E7oYdWfO_EQ_gnSmO4lWIakfJR4m4U1OFywJcC1MLiN1/exec";

// 4. CÓDIGO / COMPRAS (Script para manejo de pines o compras de la tienda)
const GS_CODIGO = "https://script.google.com/macros/s/AKfycbybqRTJ1V0ppx4274KGorb7B3DSu9KF37UvegewhbMRanjD09hVADnCap_m9BAyYbO3/exec";
