// Popup
document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll(".open-popup-button");
    const closeButtons = document.querySelectorAll(".close-button");
    const overlay = document.getElementById("overlay");

    openButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const popupId = this.getAttribute("data-popup-id");
            const popup = document.getElementById(popupId);

            if (popup) {
                popup.classList.add("popup-show");
                overlay.style.display = "block";
            }
        });
    });

    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
            const popupId = this.getAttribute("data-popup-id");
            const popup = document.getElementById(popupId);

            if (popup) {
                popup.classList.remove("popup-show");
                overlay.style.display = "none";
            }
        });
    });

    overlay.addEventListener("click", function (event) {
        const popups = document.querySelectorAll(".popup.popup-show");
        if (popups.length > 0 && event.target === overlay) {
            popups.forEach(function (popup) {
                popup.classList.remove("popup-show");
            });
            overlay.style.display = "none";
        }
    });
});