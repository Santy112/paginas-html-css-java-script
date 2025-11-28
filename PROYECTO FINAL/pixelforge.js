// Animación tipo máquina de escribir en la frase de inicio
// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Define la frase que se va a escribir letra por letra
  const frase = "Transforma tu creatividad en realidad";
  // Selecciona el elemento <h2> dentro de la clase .frase-impacto
  const texto = document.querySelector(".frase-impacto h2");
  // Verifica que el elemento exista
  if (texto) {
    let i = 0; // Inicializa un contador para recorrer cada letra
    function escribir() {
      // Comprueba si todavía quedan letras por escribir
      if (i < frase.length) {
        texto.textContent += frase[i]; // Agrega la letra actual al contenido
        i++; // Avanza al siguiente carácter
        setTimeout(escribir, 80); // Espera 80ms antes de escribir la siguiente letra
      }
    }
    escribir(); // Inicia la animación de escritura
  }
});

// -----------------------------
// Validación y confirmación en formularios
// -----------------------------

// Selecciona todos los formularios de la página
const forms = document.querySelectorAll("form");

// Recorre cada formulario encontrado
forms.forEach(form => {
  // Escucha el evento de envío (submit)
  form.addEventListener("submit", e => {
    e.preventDefault(); // Evita que el formulario se envíe realmente
    alert("¡Gracias! Tu información fue enviada correctamente."); // Muestra mensaje emergente
    form.reset(); // Limpia todos los campos del formulario
  });
});

// -----------------------------
// Botón de modo oscuro/claro
// -----------------------------

// Busca el botón con id toggle-theme
const btn = document.getElementById("toggle-theme");

// Verifica que el botón exista
if (btn) {
  // Escucha el clic en el botón
  btn.addEventListener("click", () => {
    // Alterna la clase dark-mode en el body
    document.body.classList.toggle("dark-mode");
  });
}

// -----------------------------
// Animación de proyectos al hacer scroll
// -----------------------------

// Selecciona todos los elementos con clase .proyecto
const proyectos = document.querySelectorAll(".proyecto");

// Les agrega la clase animado (que en CSS los deja ocultos y desplazados)
proyectos.forEach(p => p.classList.add("animado"));

// Escucha el evento de scroll en la ventana
window.addEventListener("scroll", () => {
  // Recorre cada proyecto
  proyectos.forEach(proyecto => {
    // Obtiene la posición del proyecto respecto a la ventana
    const pos = proyecto.getBoundingClientRect().top;
    // Comprueba si el proyecto está entrando en pantalla
    if (pos < window.innerHeight - 100) {
      proyecto.classList.add("visible"); // Activa la animación CSS
    }
  });
});
