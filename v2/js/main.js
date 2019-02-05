$(document).ready(function () {

    function hideSections() {
        $("#blog").hide();
        $("#work").hide();
        $("#study").hide();
        $("#skills").hide();
        $("#portfolio").hide();
        $("#contact").hide();
        $("#resume").hide();
    }

    function avatarAnimation(direction) {
        if (direction === "up") {
            $("#profile").css({"width": "200px"});
            $("#name").css({"font-size": "16px", "margin": "-5px 0", "color": "#666"});
            $(".lang-selector").css({"right": "65px", "width": "25px"});
            $(".lang-selector-label").css({"top": "31px", "right": "95px"});
            $("#summary").slideUp();
            $("#header").find("nav").css("top", "50px");
            $(".last-left").css("margin-right", "130px");
            $(".first-right").css("margin-left", "130px");
        } else if (direction === "down") {
            $("#profile").css({"width": "100%"});
            $("#name").css({"font-size": "32px", "margin": "30px 0", "color": "#111"});
            $(".lang-selector").css({"right": "35px", "width": "32px"});
            $(".lang-selector-label").css({"top": "33px", "right": "73px"});
            $("#summary").slideDown();
            $("#header").find("nav").css("top", "150px");
            $(".last-left").css("margin-right", "190px");
            $(".first-right").css("margin-left", "190px");
        }
    }

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
                avatarAnimation("up");

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

                hideSections();
                $("#" + $(this).find("span").attr("class").substr(4)).show();
            });

    // Change avatar image on hover
    $("#avatar")
        .hover(
            function () {
                $(this).find("#profile").attr("src", "img/real-" + $(this).find("#profile").attr("src").substr(4));
            },
            function () {
                $(this).find("#profile").attr("src", "img/" + $(this).find("#profile").attr("src").substr(9));
            }
        )
        .find("a").click(
        function () {
            avatarAnimation("down");

            var active = $("nav ul li a.active");
            if (active.html()) {
                if (active.find("img").attr("src").indexOf("hover") !== -1) {
                    active.find("img").attr("src", "img/" + active.find("img").attr("src").substr(10));
                }
                active.removeClass("active");
            }

            hideSections();
        }
    );

    // Set the curriculum's correct link
    $('#curriculum').click(function (e) {
        var lang = $(".lang-selector").attr("data-value");
        var newLang = languages[(languages.indexOf(lang) + 1) % languages.length];
        if (newLang === "pt_br") {
            $(this).attr({
                target: 'blank',
                href: 'https://bit.ly/LucasBalbinoCurriculo'
            });
        } else {
            $(this).attr({
                target: 'blank',
                href: 'https://bit.ly/LucasBalbinoResume'
            });
        }
    });
});