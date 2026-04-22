const heroSwiper = new Swiper(".hero__swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".hero__pagination-mobile",
  },

  breakpoints: {
    768: {
      pagination: {
        el: ".hero__pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return current + "/" + total;
        },
      },
      navigation: {
        prevEl: ".hero__nav-prev",
        nextEl: ".hero__nav-next",
      },
    },
  },
});

const catalogSwiper = new Swiper(".catalog__swiper", {
  slidesPerView: "auto",
  spaceBetween: 32,
  loop: true,
  breakpoints: {
    768: {
      pagination: {
        el: ".catalog__pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return current + "/" + total;
        },
      },
      navigation: {
        prevEl: ".catalog__nav-prev",
        nextEl: ".catalog__nav-next",
      },
    },
  },
});

const quizSwiper = new Swiper(".quiz__swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

const quizNextBtns = document.querySelectorAll(".quiz .js-quiz-next");

quizNextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    quizSwiper.slideNext();
  });
});

const quizPaginations = document.querySelectorAll(".quiz-step__pagination");

quizPaginations.forEach((pag, index) => {
  for (let i = 0; i < quizSwiper.slides.length; i++) {
    let item = document.createElement("span");
    item.textContent = `${i + 1}`;
    if (index >= i) item.classList.add("active");
    pag.append(item);
  }
});
