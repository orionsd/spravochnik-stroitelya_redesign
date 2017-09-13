$(document).ready(function () {
    $(".js_scroll").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $(".buttons__in-cart").first().click(function(e) {
        var aForm = $(this).closest("#advertize-form");
        var aDescription = aForm.find(".advertize__text-desciption");
        var aPhone = aForm.find(".advertize__phone");
        var introSelect1link = aForm.find('.intro-select1-link');
        var introSelect1 = aForm.find('.intro-select1');

        introSelect1.on('change', '', function (e) {
            introSelect1link.removeClass("red");
        });

        aDescription.keyup(function () {
            $(this).removeClass("red");
        });

        aPhone.keyup(function () {
            $(this).removeClass("red");
        });

        if (aDescription.val() == 0) {
            aDescription.addClass("red");
        }

        if (aPhone.val() == 0) {
            aPhone.addClass("red");
        }

        if($('.intro-select1')[0].selectedIndex <= 0) {
            introSelect1link.addClass("red");
        }
        e.preventDefault();
    });

});












