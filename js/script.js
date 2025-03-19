//burger
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});
//tabs
function openTab(tabName) {
  let i, tabcontent, tabbuttons;

  tabcontent = document.getElementsByClassName("tabs-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tabbuttons = document.getElementsByClassName("tabs-button");

  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";

  /*Добавляем класс active для текующей кнопки, чтобы выделить*/
  event.currentTarget.className += " active";
}
//-------------------------------------------------------------------
// Получаем элемент слайдера и все слайды
const bigslider = document.querySelector(".big-slider");
const bigslides = document.querySelectorAll(".big-slide");

// Получаем кнопки "назад" и "вперед" для управления слайдером
const bigprevButton = document.querySelector(".big-prev");
const bignextButton = document.querySelector(".big-next");

// Переменная для хранения текущего индекса слайда
let bigcurrentIndex = 0;

// Функция для обновления позиции слайдера
function bigupdateSlider() {
  // Сдвигаем слайдер на ширину текущего слайда
  bigslider.style.transform = `translateX(${-bigcurrentIndex * 100}%)`;
}

// Проверяем, есть ли кнопки и достаточно ли слайдов для работы слайдера
if (bigslides.length > 1) {
  if (bigprevButton && bignextButton) {
    // Добавляем обработчик события для кнопки "назад"
    bigprevButton.addEventListener("click", () => {
      // Если текущий слайд первый, переходим к последнему, иначе к предыдущему
      bigcurrentIndex =
        bigcurrentIndex === 0 ? bigslides.length - 1 : bigcurrentIndex - 1;
      bigupdateSlider(); // Обновляем слайдер
    });

    // Добавляем обработчик события для кнопки "вперед"
    bignextButton.addEventListener("click", () => {
      // Переходим к следующему слайду, если дошли до конца, возвращаемся к первому
      bigcurrentIndex = (bigcurrentIndex + 1) % bigslides.length;
      bigupdateSlider(); // Обновляем слайдер
    });
  }
}
//------------------------------------------------------------------------------
document
  .getElementById("Registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = documnet.getElementById("password").value;
  });
const passwordField = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", function () {
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);

  this.textContent = type === "password" ? "👁️" : "🙈";
});

//---------------------------------------------------------------
document
  .getElementById("enter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username1 = document.getElementById("username1").value;
    const email1 = document.getElementById("email1").value;
    const password1 = documnet.getElementById("password1").value;
  });
const passwordField1 = document.getElementById("password1");
const togglePasswordButton1 = document.getElementById("togglePassword1");

togglePasswordButton1.addEventListener("click", function () {
  const type1 =
    passwordField1.getAttribute("type") === "password" ? "text" : "password";
  passwordField1.setAttribute("type", type1);

  this.textContent = type1 === "password" ? "👁️" : "🙈";
});
// Фильтрация по категориям
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const slides = document.querySelectorAll(".task-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.dataset.category;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      let visibleSlides = 0;

      slides.forEach((slide) => {
        const slideCategory = slide.dataset.category;

        if (category === "all" || slideCategory === category) {
          slide.style.display = "block";
          visibleSlides++;
        } else {
          slide.style.display = "none";
        }
      });
    });
  });
});

// Функция для открытия/закрытия меню
function openMenu(id) {
  const elem = document.querySelectorAll(`#${id}`);

  if (elem.length === 0) {
    return; // Если элемент не найден, выходим из функции
  }
  const firstelem = elem[0];
  const state = firstelem.style.display; // Получаем текущее состояние элемента

  if (state === "none" || state === "") {
    firstelem.style.display = "block"; // Показываем элемент, если он скрыт
  } else {
    firstelem.style.display = "none"; // Скрываем элемент, если он видим
  }
}

// Добавляем обработчики событий для вопросов и ответов (аккордеон)
document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling; // Получаем следующий элемент (ответ)
    if (answer.style.display === "block") {
      answer.style.display = "none"; // Скрываем ответ, если он открыт
      question.classList.remove("active"); // Убираем класс активности
    } else {
      answer.style.display = "block"; // Показываем ответ
      question.classList.add("active"); // Добавляем класс активности
    }
  });
});
