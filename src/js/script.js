document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const waForm = document.getElementById("waForm");
  if (waForm) {
    waForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // Redirigir al enlace corto de WhatsApp
      window.open("https://wa.link/2j1mu9", "_blank", "noopener");
    });
  }
});
