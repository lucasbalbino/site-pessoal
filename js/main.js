$(document).ready(function () {
    var languages = ['pt_br', 'en'];

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $(this).closest('.collapse').collapse('toggle');
    });

    // Implementation of the parallax effect
    $('.parallax-bg').each(function () {
        var $obj = $(this);

        $(window).scroll(function () {
            var yPos = -($(window).scrollTop() / $obj.data('speed'));

            var bgpos = '50% calc(' + yPos + 'px + 100%)';

            $obj.css('background-position', bgpos);

        });
    });

    // Stair's animation
    $('.step').click(function () {
        $('.step-content')
            .removeClass('active')
            .eq($('.step')
                .removeClass('active')
                .index(this))
            .addClass('active uk-animation-slide-top');

        $(this).addClass('active');
    });

    // Set the current age
    $('#age').text(
        moment().diff(
            moment([1991, 7, 26]), 'years'
        )
    );

    // Send form to email with Formspree
    $('#form').submit(function (e) {
        $('.successForm').slideUp(400);
        $('.errorForm').slideUp(400);

        var name = $('#formName');
        var email = $('#formEmail');
        var message = $('#formMessage');

        if (name.val() === "" || email.val() === "" || message.val() === "") {
            $('.errorForm').slideDown(400);
            return false;
        }
        else {
            $.ajax({
                method: 'POST',
                url: 'https://estreias.com.br/api/contato',
                data: $('#form').serialize(),
                datatype: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            $('.successForm').slideDown(400);
        }
    });

    // Set the curriculum's correct link
    $('#curriculum').click(function (e) {
        var lang = $(".lang-selector").attr("data-value");
        var newLang = languages[(languages.indexOf(lang) + 1) % languages.length];
        if(newLang === "pt_br") {
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