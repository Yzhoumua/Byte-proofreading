// 实例方法
$.fn.extend({
    myFullpage: function (config) {
        var colorArray = config.colorsArray;
        var $W = $(this);
        var $Section = $W.find(".section");
        var $logo = $(".logoindex");
        var frist = 0;
        // 初始化值a
        
        $Section.css({ width: "100px" })
        var chuShiHhua = {
            width: "100%",
            height: "100%"
        }
        var clientWidth = window.innerWidth;
        var clientHeight = window.innerHeight;
        var curindex = 0;
        var key = true;
        var curindexLeft = 0;
        $("html")
            .css({
                margin: "0px",
                overflow: "hidden",
                position: "relative"
            })
            .add("body")
            .add($W)
            .add($Section)
            .css(chuShiHhua)
        $W
            .css({
                position: "absolute",
                left: "0px",
                top: "0px"
            })
            .find($Section).each(function (index, ele) {
                $(ele)

                    .css({ backgroundColor: colorArray[index], position: "relative" })
                    .find(".silde")
                    .css({ width: clientWidth, height: clientHeight, float: "left", position: "relative" })
                    .wrapAll("<div class ='WapperSilde'></div>")
            })

        $Section.find(".WapperSilde")
            .css({ position: "absolute", left: "0px", top: "0px" })
            .each(function (index, ele) {
                $(ele)
                    .css({
                        width: $(ele)
                            .find(".silde")
                            .size() * innerWidth, height: innerHeight
                    })
            })
  
        //运动
        //初始化active值
        $Section.eq(0)
            .addClass("active")
            .end()
            .find(".WapperSilde")
            .each(function (index, ele) {
                $(ele).
                    find(".silde")
                    .eq(0)
                    .addClass("inneractive")
            })

        //检测点击事件
        $logo.on("click", function () {
           var a = $(this).attr("class");
           var str = a.split(" ")
            var newtop = -clientHeight * str[0];
            var dicrction = "";
            var last = $(this).index(); 
            $(this).off("mouseleave")
            if(last > frist){
                dicrction = "bottom";
                config.onLeave(frist,dicrction);
            }else if(last < frist){
                dicrction = "top";
                config.onLeave(frist,dicrction);    
            }else{
                newtop = newtop;
            }
            $W.animate({ top: newtop }, 500, "swing", function () {
                key = true;
                $Section.eq(last).addClass("active");  
                $Section.eq(frist).removeClass("active")
                curindex = last;
                $($logo[last]).css({transform:"scale(1.4)"})
                $($logo[frist]).css({transform:"scale(1)"})
                frist = last;
                config.afterLoad(frist, dicrction)
            })
        })
        //判断active事件
        // $(this).css({ transform:" scale(1)"})
        //判断鼠标滚动

        $(document).on("mousewheel DOMMouseScroll", debounce(function (event) {
            var newtop = $W.offset().top;
            var dicrction = "";
            var dicrction = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) || (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));
            if (dicrction == 1 && curindex != 0) {
                dicrction = "top";
                $($logo[curindex]).css({transform:"scale(1)"})
                config.onLeave(curindex, dicrction)
                curindex--;
                newtop += clientHeight;
            } else if (dicrction == -1 && curindex != $Section.size() - 1) {
                dicrction = "bottom";
                $($logo[curindex]).css({transform:"scale(1)"})
                config.onLeave(curindex, dicrction)
                curindex++;
                newtop -= clientHeight;
            }
            $W.animate({ top: newtop }, 500, "swing", function () {
                key = true;
                $Section.eq(curindex).addClass("active");
                if (dicrction == "top") {
                    $Section.eq(curindex + 1).removeClass("active");
                } else {
                    $Section.eq(curindex - 1).removeClass("active")
                }
                $($logo[curindex]).css({transform:"scale(1.4)"})
                config.afterLoad(curindex, dicrction)
            })
        }, 500));
        $(document).on("keydown", function (e) {
            //判断垂直方向
            if (e.which == 38 || e.which == 40) {
                if (key) {
                    key = false;
                    var newtop = $W.offset().top;
                    var dicrction = "";

                    if (e.which == 38 && curindex != 0) {
                        dicrction = "top";
                        $($logo[curindex]).css({transform:"scale(1)"})
                        config.onLeave(curindex, dicrction)
                        curindex--;
                        newtop += clientHeight;

                    } else if (e.which == 40 && curindex != $Section.size() - 1) {
                        dicrction = "bottom";
                        $($logo[curindex]).css({transform:"scale(1)"})
                        config.onLeave(curindex, dicrction)
                        curindex++;
                        newtop -= clientHeight;
                    }
                    $W.animate({ top: newtop }, 500, "swing", function () {
                        key = true;
                        $Section.eq(curindex).addClass("active");
                        if (dicrction == "top") {
                            $Section.eq(curindex + 1).removeClass("active");
                        } else {
                            $Section.eq(curindex - 1).removeClass("active")
                        }
                        $($logo[curindex]).css({transform:"scale(1.4)"})
                        config.afterLoad(curindex, dicrction)
                    })
                }
            }

            if ($($Section[curindex]).find(".WapperSilde").hasClass("WapperSilde")) {
                if (e.which == 37 || e.which == 39) {
                    if (key) {
                        key = false;
                        var $S = $(".active").find(".WapperSilde");
                        var curShowDom = $S.find(".inneractive");
                        var newleft = $S.offset().left;
                        var dicrction = null;
                        if (e.which == 37 && curShowDom.index() != 0) {
                            newleft += clientWidth;
                            dicrction = "left";
                            config.onLeave(curindexLeft, dicrction);
                            curindexLeft--;
                        } else if (e.which == 39 && curShowDom.index() != $S.find('.silde').size() - 1) {
                            newleft -= clientWidth;
                            dicrction = "right";
                            config.onLeave(curindexLeft, dicrction);
                            curindexLeft++;
                        }
                        $S.animate({ left: newleft }, 500, "swing", function () {
                            key = true;
                            dicrction != null ? curShowDom.removeClass('inneractive') : " ";
                            if (dicrction == "left") {
                                curShowDom.prev().addClass("inneractive")
                            } else if (dicrction == "right") {
                                curShowDom.next().addClass("inneractive")
                            }
                            config.afterLoad(curShowDom.index(), dicrction)
                        })
                    }
                }
            }

        })
    }
})