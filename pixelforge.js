// -----------------------------
// 1. Animación tipo máquina de escribir
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
    const frase = "Transforma tu creatividad en realidad";
    const texto = document.querySelector(".frase-impacto h2");

    if (texto) {
        let i = 0;
        function escribir() {
            if (i < frase.length) {
                texto.textContent += frase[i];
                i++;
                setTimeout(escribir, 80);
            }
        }
        escribir();
    }
});

// -----------------------------
// 2. Validación formularios
// -----------------------------
const forms = document.querySelectorAll("form");
forms.forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("¡Gracias! Tu información fue enviada correctamente.");
        form.reset();
    });
});

// -----------------------------
// 3. Botón de modo oscuro/claro
// -----------------------------
const btn = document.getElementById("toggle-theme");
if (btn) {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// -----------------------------
// 4. Animación de proyectos al hacer scroll
// -----------------------------
const proyectos = document.querySelectorAll(".proyecto");
proyectos.forEach(p => p.classList.add("animado"));

window.addEventListener("scroll", () => {
    proyectos.forEach(proyecto => {
        const pos = proyecto.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            proyecto.classList.add("visible");
        }
    });
});

// -----------------------------
// 5. CARRITO DE COMPRAS (Lógica Unificada)
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {

    // Variables principales
    const carrito = [];
    const listaCarritoUI = document.getElementById('lista-carrito');
    const totalUI = document.getElementById('total-presupuesto');
    const botones = document.querySelectorAll('.btn-add');

    // Validación: Si no estamos en la página de proyectos, salimos para no dar error
    if (!listaCarritoUI) return;

    // Evento para los botones de "Añadir"
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Usamos parseInt para asegurar que el precio sea número
            const nombre = e.target.getAttribute('data-nombre');
            const precio = parseInt(e.target.getAttribute('data-precio'));

            if (nombre && !isNaN(precio)) {
                agregarAlCarrito(nombre, precio);
            } else {
                console.error("Error en los datos del botón");
            }
        });
    });

    // Función para agregar ítems
    function agregarAlCarrito(nombre, precio) {
        carrito.push({ nombre, precio });
        actualizarInterfaz();
    }

    // Función para eliminar ítems (Ahora sí está dentro del alcance correcto)
    window.eliminarDelCarrito = function (indice) {
        carrito.splice(indice, 1); // Borra 1 elemento en la posición 'indice'
        actualizarInterfaz();      // Vuelve a pintar la lista
    };

    // Función para dibujar el carrito en pantalla
    function actualizarInterfaz() {
        listaCarritoUI.innerHTML = ''; // Limpiamos la lista
        let total = 0;

        carrito.forEach((item, index) => {
            const li = document.createElement('li');

            // Formato de moneda (con puntos)
            const precioFormateado = item.precio.toLocaleString('es-AR');
            li.textContent = `${item.nombre} - $${precioFormateado} `;

            // Crear botón de eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = '❌';
            btnEliminar.classList.add('btn-eliminar');

            // Al hacer clic, llamamos a la función de eliminar pasando el índice
            btnEliminar.onclick = () => {
                eliminarDelCarrito(index);
            };

            li.appendChild(btnEliminar);
            listaCarritoUI.appendChild(li);
            total += item.precio;
        });

        // Actualizamos el total
        totalUI.textContent = total.toLocaleString('es-AR');
    }
});