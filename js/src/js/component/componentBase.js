var ComponentFactory = function (config) {
   var $Div = $('<div class="component base"</div>');
   config.className && $Div.addClass(config.className);
   config.width && $Div.css("width", config.width);
   config.height && $Div.css("height", config.height);
   config.text && $Div.text(config.text);
   config.center && $Div.css({ position: "absolute", left: "50%", marginLeft: -config.width / 2 });
   config.css && $Div.css(config.css)
   // if (config.event) {
   //    for (var prop in config.event) {
   //       $Div.on(prop, config.event[prop]);
   //    }
   // } //事件处理
   $Div.on("cpLeave", function () {
      var self = this;
      setTimeout(function () {
         config.animateOut && $(self).animate(config.animateOut),"swing"
      }, config.delay);
   });
   $Div.on("cpLoad", function () {
      var self = this;
      setTimeout(function () {
         config.animateIn && $(self).animate(config.animateIn),"swing"
      }, config.delay);
   });
   return $Div;
}

