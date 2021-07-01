// import Swiper JS
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper/core';

// import Swiper styles
import 'swiper/swiper-bundle.css';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export const initSwiper = () => {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters

    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 200,
        modifier: 1,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const swiper2 = new Swiper('.swiper-container-2', {
    // Optional parameters

    loop: document.querySelectorAll('.custom-slides').length > 1 ? true : false,
    slidesPerView: 2,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 200,
        modifier: 1,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
