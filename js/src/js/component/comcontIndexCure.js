var comInterCure = function(config){
    var arr = [];
    var $controngqi = $(".section").size();
    for(var i = 0; i < $controngqi; i ++){
        arr[i] = $("<div class = '" + i + " logoindex '  / >");
        config.logocontbox && $(arr[i]).css(config.logocontbox);
        config.logoimg && $(arr[i]).css(config.logoimg[i]);
        if(config.event){
            for(var prop in config.event){
              arr[i].on(prop, config.event[prop]);
            }
        }
    }
    var $Home = $(".box");
    var $Div = $("<div></div>");
    $Div.append(arr);
    config.css && $Div.css(config.css);
    $Home.append($Div);
}