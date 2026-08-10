async function cargarFraseDiaria() {
  try {
    // 1. Obtener el archivo JSON
    const respuesta = await fetch('./assets/bd/bd.json');
    
    // Validar que la petición fue exitosa
    if (!respuesta.ok) {
      throw new Error(`Error de red: ${respuesta.status}`);
    }

    // 2. Convertir la respuesta a un objeto JavaScript
    const datos = await respuesta.json();

    // Si bd.json es un arreglo con varias frases, elige una aleatoria. 
    // Si es un solo objeto, usa los datos directamente.
    const fraseActual = Array.isArray(datos) 
      ? datos[Math.floor(Math.random() * datos.length)] 
      : datos;

    // 3. Insertar el texto en los elementos HTML correspondientes
    document.getElementById('category').textContent = fraseActual.categoria;
    document.getElementById('phrase').textContent = `"${fraseActual.texto}"`;

  } catch (error) {
    console.error('Hubo un problema al cargar la frase:', error);
    
    // Opcional: Mostrar una frase por defecto si falla la conexión
    document.getElementById('category').textContent = "Motivación";
    document.getElementById('phrase').textContent = "Siempre hay un motivo para seguir adelante.";
  }
}

// 4. Ejecutar la función automáticamente cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarFraseDiaria);