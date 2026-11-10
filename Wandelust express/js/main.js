document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. LÓGICA DE LA VENTANA EMERGENTE (MODAL)
    // ==========================================
    const modal = document.getElementById("destinos-modal");
    const closeBtn = document.querySelector(".close-btn");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const modalDesc = document.getElementById("modal-description");
    const modalCotizarBtn = document.getElementById("modal-cotizar-btn");
    const selectDestino = document.getElementById("destino-interes");

    // Capturar todos los botones de "Más Información"
    const infoButtons = document.querySelectorAll(".btn-modal");

    // Función para abrir el modal con la información de cada destino
    infoButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            // Obtener los datos almacenados en los atributos data-*
            const title = button.getAttribute("data-title");
            const price = button.getAttribute("data-price");
            const img = button.getAttribute("data-img");
            const desc = button.getAttribute("data-desc");

            // Rellenar el modal
            if (modalTitle) modalTitle.textContent = title || "Destino Turístico";
            if (modalPrice) modalPrice.textContent = price || "";
            if (modalImg) modalImg.src = img || "";
            if (modalDesc) modalDesc.textContent = desc || "";

            // Activar visualmente el modal
            if (modal) modal.classList.add("active");
        });
    });

    // Cerrar el modal con el botón de la 'X'
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            if (modal) modal.classList.remove("active");
        });
    }

    // Cerrar haciendo clic fuera del cuadro del modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

    // Al hacer clic en "Cotizar Este Destino" dentro del modal
    if (modalCotizarBtn) {
        modalCotizarBtn.addEventListener("click", () => {
            if (modal) modal.classList.remove("active");

            // Seleccionar automáticamente el destino en el <select> si coincide
            if (selectDestino && modalTitle) {
                const currentTitle = modalTitle.textContent.toLowerCase();
                for (let option of selectDestino.options) {
                    if (currentTitle.includes(option.text.toLowerCase()) || option.text.toLowerCase().includes(currentTitle)) {
                        selectDestino.value = option.value;
                        break;
                    }
                }
            }
        });
    }

    // ==========================================
    // 2. LÓGICA DEL MENÚ HAMBURGUESA
    // ==========================================
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    const navLinks = document.querySelectorAll(".main-nav a");

    if (menuToggle && mainNav) {
        // Alternar clases al hacer clic en el botón hamburguesa
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            mainNav.classList.toggle("active");
        });

        // Cerrar el menú automáticamente al hacer clic en cualquier enlace
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                mainNav.classList.remove("active");
            });
        });
    }
});