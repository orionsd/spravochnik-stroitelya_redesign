$(document).ready(function () {
    $(".js_scroll").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    var mass = [];
    $('.banner-advertize').each(function(index) {
        mass.push(this);
    });

    for (var i = 0; i < mass.length; i++) {

        $(".buttons__in-cart").eq(i).bind( "click", function(e)  {

            var advForm,
                advDescription,
                advPhone,
                introSelect1link,
                advNameorg,
                introSelect1;

            advForm = $(this).closest("#banner-advertize-form");
            advDescription = advForm.find(".banner-advertize__text-desciption");
            advNameorg = advForm.find(".banner-advertize__name-organization");
            advPhone = advForm.find(".banner-advertize__phone");
            introSelect1link = advForm.find('.intro-select1-link');
            introSelect1 = advForm.find('.intro-select1');

            if (advDescription.val() == 0) {
                advDescription.removeClass("normal");
                advDescription.addClass("red");
            }

            if (advPhone.val() == 0) {
                advPhone.removeClass("normal");
                advPhone.addClass("red");
            }

            if (advNameorg.val() == 0) {
                advNameorg.removeClass("normal");
                advNameorg.addClass("red");
            }

            if ($('.intro-select1')[0].selectedIndex <= 0) {
                introSelect1link.removeClass("normal");
                introSelect1link.addClass("red");
            }

            introSelect1.on('change', '', function (e) {
                introSelect1link.removeClass("red");
                introSelect1link.addClass("normal");
            });

            advDescription.keyup(function () {
                $(this).removeClass("red");
                $(this).addClass("normal");
            });

            advNameorg.keyup(function () {
                $(this).removeClass("red");
                $(this).addClass("normal");
            });

            advPhone.keyup(function () {
                $(this).removeClass("red");
                $(this).addClass("normal");
            });

            e.preventDefault();
        });
    }


    $(".buttons__in-cart").first().bind( "click", function(e)  {

        var advForm,
            advDescription,
            advPhone,
            introSelect1link,
            introSelect1;

        advForm = $(this).closest("#advertize-form");
        advDescription = advForm.find(".advertize__text-desciption");
        advPhone = advForm.find(".advertize__phone");
        introSelect1link = advForm.find('.intro-select1-link');
        introSelect1 = advForm.find('.intro-select1');

        if (advDescription.val() == 0) {
            advDescription.removeClass("normal");
            advDescription.addClass("red");
        }

        if (advPhone.val() == 0) {
            advPhone.removeClass("normal");
            advPhone.addClass("red");
        }

        if ($('.intro-select1')[0].selectedIndex <= 0) {
            introSelect1link.removeClass("normal");
            introSelect1link.addClass("red");
        }

        introSelect1.on('change', '', function (e) {
            introSelect1link.removeClass("red");
            introSelect1link.addClass("normal");
        });

        advDescription.keyup(function () {
            $(this).removeClass("red");
            $(this).addClass("normal");
        });

        advPhone.keyup(function () {
            $(this).removeClass("red");
            $(this).addClass("normal");
        });

        e.preventDefault();
    });
});












