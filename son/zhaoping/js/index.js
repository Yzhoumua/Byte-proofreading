$(function () {
    var len = $(".Table span").length;
    for (var i = 0; i < len; i++) {
        $(function (i) {
            $($(".Table span")[i]).on("click", function () {
                $(".Table span").removeClass("active");
                $(this).addClass("active")
                $(".tablecont").removeClass("active")
                $($(".tablecont")[i]).addClass("active")
            })
        }(i))
    }
    function jihuo(origin,i){
        var len = origin.length;
        $((origin)[i]).find("a").addClass("active")
        for(var i = 0; i < len; i ++){
            (function(i){
                $((origin)[i]).on("click",function(){
                    origin.find("a").removeClass("active");
                    $(this).find("a").addClass("active")
            })
            }(i))
        }
    }
    jihuo($(".dyjjpobox p"));
    jihuo($(".xjglpobox p"));

    function jihuo2(origin,i){
        origin.find("a").removeClass("active");
        $((origin)[i]).find("a").addClass("active")
    }
    juli($(".dyjjpobox"));
    function juli(origin){
       $(window).scroll(function(){
        var top = $(this).scrollTop();
        console.log(top)
        if(top <= 900){
            var i = 0;
            jihuo2($(".dyjjpobox p"),i);
            origin.addClass("active");
            origin.removeClass("fixed");
        }else if(top <= 1413){
            var i = 1;
            origin.removeClass("active");
            origin.addClass("fixed");
           
            jihuo2($(".dyjjpobox p"),i)
        }else if(top <= 2100){
            var i = 2;
            origin.removeClass("active");
            origin.addClass("fixed");
    
            jihuo2($(".dyjjpobox p"),i)
        }else if(top <= 2800){
            var i = 3;
            origin.removeClass("active");
            origin.addClass("fixed");
            jihuo2($(".dyjjpobox p"),i)
        }
       })
    }
})