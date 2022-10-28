$(function () {
    $(function () {
        lun($(".lun1"))
        lun($(".lun2"))
        lun($(".lun3"))
        lun($(".lun4"))
        lun($(".lun5"))
        function lun(origin) {
            var len = origin.length,
                i = 0;
            var timer = setInterval(function () {
                i++;
                origin.removeClass("active");
                $(origin[i]).addClass("active");
                if (i >= len) {
                    i = 0;
                    origin.removeClass("active");
                    $(origin[i]).addClass("active");
                }
            }, 4000)
        }
    })
    $(".pdboximg").addClass("active");
    var timer1 = setInterval(function () {
        $(".pdboximg").addClass("active");
    },5000)
    var timer1 = setInterval(function () {
        $(".pdboximg").removeClass("active");
    },10000)
    $(".goTop").on("click", function () {
        var len = $(window).scrollTop()
        var a = 1;
        var timer = setInterval(function () {
            len -= a;
            a += 1;
            $(window).scrollTop(len)
            if ($(window).scrollTop() == 0) {
                clearInterval(timer);
            }
        }, 1)
    })
    $(function () {
        $(window).scroll(function () {
            var top = $(this).scrollTop();
            if (top >= 400) {
                $(".goTop").css({ opacity: "1" })
            } else {
                $(".goTop").css({ opacity: "0" })
            }
        });
    })
})