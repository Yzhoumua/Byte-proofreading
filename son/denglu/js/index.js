$(function () {
    $(".dlcontbox div").on("click", function () {
        $(".dlcontbox div").removeClass("active");
        $(this).addClass("active")
    })
    $(".phonema").on("mouseover", function () {
        $(".diqu").addClass("border")
    }).on("mouseout", function () {
        $(".diqu").removeClass("border")
    })
    $(".wjpas span").on("click",function(){
        $(".dlcontbox div").addClass("display")
        $(".xianshi").removeClass("active");
        $(".chongzhi").addClass("active");
        $(".cz svg").on("click",function(){
            $(".dlcontbox div").removeClass("display");
            $($(".xianshi")[0]).addClass("active");
            $(".chongzhi").removeClass("active");
        })
    })
    $(".noneemail a").on("click",function(){
        $(".dlcontbox div").addClass("display")
        $(".xianshi").removeClass("active");
        $(".chuangjian").addClass("active");
        $(".cj svg").on("click",function(){
            $(".dlcontbox div").removeClass("display");
            $($(".xianshi")[0]).addClass("active");
            $(".chuangjian").removeClass("active");
        })
    })
    $(function () {
        var key;
        $(".inputpas svg").on("click", function () {
            if (!key) {
                $(".inputpas svg").removeClass("active");
                $(this).prev().addClass("active");
                $(".inputpas input").attr("type", "text")
                key = true
            } else {
                $(".inputpas svg").removeClass("active");
                $(this).next().addClass("active")
                $(".inputpas input").attr("type", "password")
                key = false
            }
        })
    })
    $(function(){
        var key;
        $(".inputemma svg").on("click", function () {
            if (!key) {
                $(".inputemma svg").removeClass("active");
                $(this).prev().addClass("active");
                $(".inputemma input").attr("type", "text")
                key = true
            } else {
                $(".inputemma svg").removeClass("active");
                $(this).next().addClass("active")
                $(".inputemma input").attr("type", "password")
                key = false
            }
        })
    })
    $(function () {
        var index,
            len = $(".dlcontbox div").length;
        for (var i = 0; i < len; i++) {
            $(function (i) {
                $(".dlcontbox div")[i].onclick = function () {
                    if (i == 0) {
                        $(".xianshi").removeClass("active");
                        $($(".xianshi")[1]).addClass("active");
                    } else {
                        $(".xianshi").removeClass("active");
                        $($(".xianshi")[0]).addClass("active")
                    }
                }
            }(i))
        }
    })
    $(function () {
        var key = true;
        $(".diqu").on("click", function () {
            if (key) {
                $(this).find("svg").css({ transform: "rotate(180deg)" });
                $(this).find("ul").addClass("active")
                $(this).find("ul").css({ height: "320px" })
                var len = $(this).find("ul").find("li").length;
                for (var i = 0; i < len; i++) {
                    $(function (i) {
                        $(".diqu").find("ul").find("li")[i].onclick = function () {
                            $(".diqu span").text("+" + this.value)
                        }
                    }(i))
                }
                key = false;
            } else {
                $(this).find("svg").css({ transform: "rotate(360deg)" })
                $(this).find("ul").css({ height: "0px" })
                key = true;
            }
        })
    })

})