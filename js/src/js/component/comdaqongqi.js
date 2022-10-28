var Comdarongqi = function(config,people){
    var $Div = $("<div class = 'contBj' />");
    config.className && $Div.addClass(config.className);
    config.width && $Div.css("width", config.width);
    config.height && $Div.css("height", config.height);
    config.css && $Div.css(config.css);
    return $Div;
}