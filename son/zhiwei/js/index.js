$(function () {
    $(function () {
        $(".morny").on("click", function () {
            var key = this.key
            if (!key) {
                this.key = true;
                var nexta = $(this).next();
                $(nexta[0]).find("div").filter(".yanfason").css({ display: "block" })
            }else{
                this.key = false;
                var nexta = $(this).next();
                $(nexta[0]).find("div").filter(".yanfason").css({ display: "none" })
            }
        })
    })
    $(function () {
        $(window).scroll(function () {
            var top = $(this).scrollTop();
            if (top >= 600) {
                $(".ssbox").css({ display: "block" })
            } else {
                $(".ssbox").css({ display: "none" })
            }
        });
    })
})