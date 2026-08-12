// 1. Objeto central de datos con el contenido de cada elemento
const datosModales = {
  terminos: {
    titulo: "Términos de servicio",
    descripcion: `1. Uso del sitio
                -El acceso al Sitio es libre y gratuito. No se requiere creación de cuenta ni registro de ningún tipo.
                -El Sitio está destinado exclusivamente para uso personal y lícito.
                
                2. Formulario de opinión
                Responder al formulario de retroalimentación es 100% opcional.

                Se prohíbe el uso del formulario para enviar spam, enlaces maliciosos, contenido ofensivo o ilegítimo.

                3. Propiedad intelectual
                Todo el contenido, diseño, marca y código fuente de fraseo son propiedad exclusiva del Sitio y están protegidos por las leyes de propiedad intelectual.

                4. Limitación de responsabilidad
                El Sitio se proporciona "tal cual" y según disponibilidad. No nos hacemos responsables por interrupciones temporales del servicio o fallas técnicas ajenas a nuestro control.`
  },
  aviso: {
    titulo: "Aviso de privacidad",
    descripcion: `1. Datos recopilados
                No requerimos registro de usuarios ni contraseñas. Únicamente recopilamos:
                -Nombre y correo electrónico: Exclusivamente si decide proporcionarlos de forma voluntaria al completar nuestro formulario de opinión.

                2. Uso de la información
                El llenado del formulario es totalmente opcional. La información proporcionada se utiliza únicamente para leer sus comentarios, sugerencias o retroalimentación sobre el Sitio. No utilizamos sus datos para fines comerciales ni de perfilamiento.

                3. Compartición de datos
                No vendemos, alquilamos ni compartimos su nombre o correo electrónico con ningún tercero.",
                    etiqueta: "20 frases disponibles`
  }
};

//Recuperación de los elementos HTML
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal');

// 2. Función principal para construir e inyectar elementos HTML
function construirYMostrarModal(tipo) {
  const data = datosModales[tipo];
  if (!data) return;

  // Limpiar el contenido anterior del modal
  modalContent.innerHTML = '';


  // Crear elemento <h3> para el título
  const tituloEl = document.createElement('h3');
  tituloEl.className = 'text-xl font-bold text-gray-800 mt-2 mb-1';
  tituloEl.textContent = data.titulo;

  // Crear elemento <p> para la descripción
  const descEl = document.createElement('p');
  descEl.className = 'text-gray-600 text-sm mb-3';
  descEl.textContent = data.descripcion;

  // Anidar/Insertar los elementos en el contenedor del modal

  modalContent.appendChild(tituloEl);
  modalContent.appendChild(descEl);


  // Mostrar el modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// 3. Eventos en los botones para invocar la función con su identificador
document.getElementById('btn-terminos').addEventListener('click', () => {
  construirYMostrarModal('terminos');
});

document.getElementById('btn-aviso').addEventListener('click', () => {
  construirYMostrarModal('aviso');
});

// 4. Lógica para cerrar el modal
function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});