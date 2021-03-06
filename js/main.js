$(document).ready(function () {
    var languages = ['pt_br', 'en'];

    function hideSections() {
        $("#blog").hide();
        $("#work").hide();
        $("#study").hide();
        $("#skills").hide();
        $("#portfolio").hide();
        $("#contact").hide();
        $("#resume").hide();
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
                $("#avatar").removeClass("active");

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
                $("#" + $(this).find("span").attr("class").split(" ")[0].substr(4)).show();
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
            $("#avatar").addClass("active");

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
    $('.curriculum').click(function () {
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

    // Console
    console.log("[PT-BR] Este é meu site pessoal. Acesse meus projetos aqui: https://www.github.com/lucasbalbino" +
        "\n[ EN  ] This is my personal site. You can find my technical portfolio here: https://www.github.com/lucasbalbino" +
        "\n\n");

    var hash = window.location.hash;
    switch (hash) {
        case "#blog":
            $("nav ul li a span.nav-blog").trigger("hover").trigger("click");
            break;
        case "#work":
            $("nav ul li a span.nav-work").trigger("click");
            break;
        case "#study":
            $("nav ul li a span.nav-study").trigger("click");
            break;
        case "#skills":
            $("nav ul li a span.nav-skills").trigger("click");
            break;
        case "#portfolio":
            $("nav ul li a span.nav-portfolio").trigger("click");
            break;
        case "#contact":
            $("nav ul li a span.nav-contact").trigger("click");
            break;
        case "#resume":
            $("nav ul li a span.nav-resume").trigger("click");
            break;
    }
});