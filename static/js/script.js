      document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll(".clickable-image");
        const modal = new bootstrap.Modal(
          document.getElementById("imageModal")
        );
        const modalImage = document.getElementById("modalImage");
        images.forEach((image) => {
          image.addEventListener("click", function () {
            modalImage.src = this.src;
            modal.show();
          });
        });
      });