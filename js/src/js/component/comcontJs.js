var ComcontJs = function (config,people){
    var $Bj = $(".contBj");
    var $Div = $("<div class = 'component contJs' />");
    config.className && $Div.addClass(config.className);
    config.height && $Div.css("height",config.height);
    config.width && $Div.css("width",config.width);
    config.position && $Div.css("position" ,config.position);
    config.css && $Div.css(config.css);
    $Div.on("cpLeave", function () {
        var self = this;
        setTimeout(function () {
           config.animateOut && $(self).animate(config.animateOut)
        }, config.delay);
     });
     $Div.on("cpLoad", function () {
        var self = this;
        setTimeout(function () {
           config.animateIn && $(self).animate(config.animateIn)
        }, config.delay);
     });
     $Bj.each(function(index,ele){
      $(ele).append($Div)
     })
}