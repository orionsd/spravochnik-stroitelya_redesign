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
            introSelect1link.addClass("normal");
        });

        aDescription.keyup(function() {
            $(this).removeClass("red");
            $(this).addClass("normal");
        });

        aPhone.keyup(function() {
            $(this).removeClass("red");
            $(this).addClass("normal");
        });

        if (aDescription.val() == 0) {
            aDescription.removeClass("normal");
            aDescription.addClass("red");
        }

        if (aPhone.val() == 0) {
            aPhone.removeClass("normal");
            aPhone.addClass("red");
        }

        if($('.intro-select1')[0].selectedIndex <= 0) {
            introSelect1link.removeClass("normal");
            introSelect1link.addClass("red");
        }
        e.preventDefault();
    });

});












