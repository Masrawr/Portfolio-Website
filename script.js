const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateThemeButton();

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateThemeButton();
    });

    function updateThemeButton() {

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "🌖";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            themeToggle.setAttribute(
                "title",
                "Switch to light mode"
            );

        } else {

            themeToggle.textContent = "🌘";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            themeToggle.setAttribute(
                "title",
                "Switch to dark mode"
            );
        }
    }
}

const photos = document.querySelectorAll(".photo-grid img");

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");

const previousButton = document.querySelector("#lightbox-prev");
const nextButton = document.querySelector("#lightbox-next");
const closeButton = document.querySelector("#lightbox-close");

let currentPhoto = 0;

if (photos.length > 0 && lightbox) {

    photos.forEach(function (photo, index) {

        photo.addEventListener("click", function () {

            currentPhoto = index;

            showPhoto();

            lightbox.showModal();
        });

    });


    function showPhoto() {

        const photo = photos[currentPhoto];

        lightboxImage.src = photo.src;
        lightboxImage.alt = photo.alt;
    }


    function nextPhoto() {

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        showPhoto();
    }


    function previousPhoto() {

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = photos.length - 1;
        }

        showPhoto();
    }


    nextButton.addEventListener("click", nextPhoto);

    previousButton.addEventListener("click", previousPhoto);


    closeButton.addEventListener("click", function () {
        lightbox.close();
    });


    document.addEventListener("keydown", function (event) {

        if (!lightbox.open) {
            return;
        }

        if (event.key === "ArrowRight") {
            nextPhoto();
        }

        if (event.key === "ArrowLeft") {
            previousPhoto();
        }
    });


    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            lightbox.close();
        }

    });


    let touchStartX = 0;

    lightboxImage.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].screenX;
    });


    lightboxImage.addEventListener("touchend", function (event) {

        const touchEndX = event.changedTouches[0].screenX;

        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) < 50) {
            return;
        }

        if (swipeDistance < 0) {
            nextPhoto();
        } else {
            previousPhoto();
        }

    });
}