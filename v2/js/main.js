$(document).ready(function () {

    // Change image on hover
    $("nav ul li a").hover(
        function () {
            $(this).find("img").attr("src", "img/hover-" + $(this).find("img").attr("src").substr(4));
        },
        function () {
            $(this).find("img").attr("src", "img/" + $(this).find("img").attr("src").substr(10));
        }
    );
});