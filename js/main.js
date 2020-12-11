$(function () {
    $("#searchbar .header__icons-link--search").on("click", function (e) {
        e.preventDefault();
        $(".serch__input").toggleClass("header__icons-search--visible");
    });
})

var mySwiper = new Swiper('.read__container', {
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: '.read-button-next',
        prevEl: '.read-button-prev',
    },
})

var mySwiper2 = new Swiper('.recentl__container', {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 1000,
    navigation: {
        nextEl: '.recentl-button-next',
        prevEl: '.recentl-button-prev',
    },
})

var mySwiper3 = new Swiper('.popular__container', {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 1000,
    initialSlide: 4,
    navigation: {
        nextEl: '.recentl-button-next',
        prevEl: '.recentl-button-prev',
    },
})