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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})