$(document).ready(function () {

    $("nav ul li a")
    // Change image on nav on hover
        .hover(
            function () {
                if (!$(this).hasClass("active") && $(this).find("img").attr("src").indexOf("hover") === -1) {
                    $(this).find("img").attr("src", "img/hover-" + $(this).find("img").attr("src").substr(4));
                }
            },
            function () {
                if (!$(this).hasClass("active") && $(this).find("img").attr("src").indexOf("hover") !== -1) {
                    $(this).find("img").attr("src", "img/" + $(this).find("img").attr("src").substr(10));
                }
            }
        )
        // Change image on click
        .click(
            function () {
                $("#avatar").find("img").css({"width": "200px"});
                $("#name").slideUp();
                $("#summary").slideUp();
                $("#header").find("nav").css("top", "50px");
                $(".last-left").css("margin-right", "130px");
                $(".first-right").css("margin-left", "130px");

                if (!$(this).hasClass("active")) {
                    var active = $("nav ul li a.active");
                    if (active.html()) {
                        if (active.find("img").attr("src").indexOf("hover") !== -1) {
                            active.find("img").attr("src", "img/" + active.find("img").attr("src").substr(10));
                        }
                        active.removeClass("active");
                    }
                    $(this).addClass("active");
                }

                $("#blog").hide();
                $("#work").hide();
                $("#" + $(this).find("span").attr("class").substr(4)).show();
            });

    $("#avatar").find("img")
    // Change avatar image on hover
        .hover(
            function () {
                $(this).attr("src", "img/real-" + $(this).attr("src").substr(4));
            },
            function () {
                $(this).attr("src", "img/" + $(this).attr("src").substr(9));
            }
        )
        // Back to homepage when clicked
        .click(
            function () {
                $("#avatar").find("img").css({"width": "100%"});
                $("#name").slideDown();
                $("#summary").slideDown();
                $("#header").find("nav").css("top", "150px");
                $(".last-left").css("margin-right", "190px");
                $(".first-right").css("margin-left", "190px");

                var active = $("nav ul li a.active");
                if (active.html()) {
                    if (active.find("img").attr("src").indexOf("hover") !== -1) {
                        active.find("img").attr("src", "img/" + active.find("img").attr("src").substr(10));
                    }
                    active.removeClass("active");
                }

                $("#blog").hide();
                $("#work").hide();
            }
        );
});