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

  // Optimize Video Loading and Playback
  const videos = document.querySelectorAll("video");
  
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Video is in view, try to play
        const video = entry.target;
        if (video.paused) {
          video.play().catch(error => {
            // Autoplay might be blocked by browser
            console.log("Autoplay blocked:", error);
          });
        }
      } else {
        // Video is out of view, pause it to save resources
        const video = entry.target;
        if (!video.paused) {
          video.pause();
        }
      }
    });
  }, {
    threshold: 0.2 // Play when 20% of the video is visible
  });

  videos.forEach(video => {
    videoObserver.observe(video);
  });
});
