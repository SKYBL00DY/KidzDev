// Открытие и закрытие попапов
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const popupId = this.dataset.popup; // Получаем ID попапа
      const popup = document.getElementById(popupId);
      popup.classList.add("active"); // Показываем попап
    });
  });
  document.querySelectorAll(".popup-overlay").forEach((popup) => {
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.classList.remove("active"); // Скрываем попап при клике вне его области
      }
    });
  });
});
