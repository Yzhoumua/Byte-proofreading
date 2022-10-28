$(function () {
    //首页视频初始化启动
    $("video")[0].play()
    //立即投递部分
    $(".ljtoudi").on("click", function () {
        $(".toudirukou").css({ display: "block" })
        $(".meng").css({ display: "block" })
    })
    $(".xxx").on("click", function () {
        $(".toudirukou").css({ display: "none" })
        $(".meng").css({ display: "none" })
    })

    //回到顶部功能
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

    //下滑功能
    $(".xiangxia").on("click", function () {
        var index = 1014;
        var len = $(window).scrollTop()
        var a = 1;
        var timer = setInterval(function () {
            a++;
            len += a;
            console.log(len)
            $(window).scrollTop(len)
            if ($(window).scrollTop() >= index) {
                clearInterval(timer);
            }
        }, 1)
    })


    //回到顶部隐藏
    $(function () {
        $(window).scroll(function () {
            var top = $(this).scrollTop();
            if (top >= 800) {
                $(".goTop").css({ opacity: "1" })
            } else {
                $(".goTop").css({ opacity: "0" })
            }
        });
    })
   

    //轮播图功能
    $(function () {
        var len = $(".storylunbox a").length - 1;
        var key = false;
        var index = 0;
        function Time() {
            var timer = setInterval(function () {
                if (index <= len && key == false && index >= 0) {
                    index++;
                    $(".storylunbox").css({ marginLeft: - + index * 507 + "px" })
                    if (index >= len) {
                        key = true;
                    }
                }
                if (key == true && index >= 0) {
                    if (index == 0) {
                        key = false;
                    }else{
                        index--;
                        $(".storylunbox").css({ marginLeft: - + index * 507 + "px" });
                    }
                }
            }, 5000)
            $(".storylunlf").on("click", function () {
               
                if (index == 0) {
                    index = len - 1;
                    $(".storylunbox").css({ marginLeft: - + index * 507 + "px" }); 
                } else {
                    index--;
                    $(".storylunbox").css({ marginLeft: - + index * 507 + "px" });
                    console.log(index)

                }
            })
            $(".storylunrg").on("click", function () {
               
                index++;
                $(".storylunbox").css({ marginLeft: - + index * 507 + "px" });
                if (index >= len) {
                    index = 0;
                    $(".storylunbox").css({ marginLeft: - + index * 507 + "px" });

                }
            })
        }
Time()
    })
})


