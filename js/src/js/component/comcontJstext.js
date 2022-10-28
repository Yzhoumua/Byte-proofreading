var comcontJstext = function(config){
   var $Boxdiv = $("<div class='component boxDiv' / >");
   var $Div = $("<div class='component logo' / >");
   var $textBt = $("<div class='component textBt' / >");
   var $logoText = $("<div class='component logotext' / >");
   var $P1 = $("<p />");
   var $P2 = $("<p />");
   var $P3 = $("<p />");
   var $A = $("<a href = '" + config.p3text.href +  " ' />");
 config.logo && $Div.css(config.logo);
 config.textBt && $textBt.css(config.textBt);
 config.textBt && $textBt.text(config.textBt.text);
 config.logotext && $logoText.css(config.logotext);
 config.p1text && $P1.text(config.p1text.text);
 config.p2text && $P2.text(config.p2text.text);
 config.p3text && $A.text(config.p3text.text);
 config.p && $P1.add($P2).add($P3).css(config.p);
    $textBt.on("cpLeave", function () {
        var self = this;
        setTimeout(function () {
           config.textBt.animateOut && $(self).animate( config.textBt.animateOut)
        }, config.textBt.delay);
     });
     $textBt.on("cpLoad", function () {
        var self = this;
        setTimeout(function () {
            config.textBt.animateIn && $(self).animate( config.textBt.animateIn)
        }, config.textBt.delay);
     });
     $logoText.on("cpLeave", function () {
        var self = this;
        setTimeout(function () {
           config.logotext.animateOut && $(self).animate(config.logotext.animateOut)
        }, config.logotext.delay);
     });
     $logoText.on("cpLoad", function () {
        var self = this;
        setTimeout(function () {
            config.logotext.animateIn && $(self).animate( config.logotext.animateIn)
        }, config.logotext.delay);
     });

    $P3.append($A);
    $logoText.append($P1);
    $logoText.append($P2);
    $logoText.append($P3);
    $Boxdiv.append($Div)
    $Boxdiv.append($textBt)
    $Boxdiv.append($logoText)
    $(".contJs").each(function(index,ele){
      $(ele).append($Boxdiv)
    })
}