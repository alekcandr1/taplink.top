 // FAQ
 document.addEventListener("DOMContentLoaded", function() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {
      faqQuestions.forEach(function(q) {
        if (q !== question) {
          q.classList.remove("active");
          q.querySelector(".faq-answer").style.maxHeight = "0";
        }
      });

      question.classList.toggle("active");
      const answer = question.querySelector(".faq-answer");
      if (question.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0";
      }
    });
  });
});



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

