$(function () {
    $("#searchbar .header__icons-link--search").on("click", function (e) {
        e.preventDefault();
        $(".serch__input").toggleClass("header__icons-search--visible");
    });
})