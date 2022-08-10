
    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });

    var screenWidth = $(window).width();

    $('input[type=submit]').click(function() {
        var req = $('.required-form-field');
        $('.form-field').removeClass('invalid-form-field');
        $.each(req, function(e){
            var curr_val = $(this).val();
                if(! curr_val)
                    {
                        $(this).addClass('invalid-form-field');
                        $('html, body').animate({            // added for scrolling purposes
                        scrollTop: $(this).offset().top -100
                    }, -200);
                        return false;
                }
        });
    });

   $('#hubspot-form').submit(function() {
      $('html,body').animate({
        scrollTop: $("#snd-msg-form").offset().top - $(window).height()/2
        }, 1000);
        setTimeout(function() {
        $('.form-field').delay(2000).val('');
        },1000)
       
    });
    var aPlayed = false;
    for (var b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
        var c = b.item(a);
        c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="letter">$2</span>');
    }

    function animationsRender() {
        if ($(window).width() > 991) {

            var a = anime.timeline({ loop: !1, autoplay: !1 });
            a.add({
                targets: ".fadeup0 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 30 * a,
                begin() {
                    $(".fadeup0").css("opacity", "1");
                },
            });

            a.play();
        }
    }

    animationsRender();
        $(window).resize(function() {
            var wwidth = $(window).width();
            if(screenWidth!==wwidth){
                 screenWidth = $(window).width();
                 animationsRender();
            }
        });