export const productSlider = () => {
    new Swiper(".reviews__slider", {
        slidesPerView: 1,
        /* centeredSlides: true, */
        spaceBetween: 20,
        speed: 600,
        freeMode: false,
        loop: true,
        grabCursor: true,
        watchOverflow: true,
        mousewheel: {
            forceToAxis: true,
        },
        navigation: {
            prevEl: ".reviews__slider-button--prev",
            nextEl: ".reviews__slider-button--next",
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        autoplay: {
            // Пауза между прокруткой
            delay: 4000,
        },
        breakpoints: {
/*             576: {
                slidesPerView: 1,
            }, */
            992: {
                slidesPerView: 3,
                freeMode: true,
            },
        },
    });
};
