var pageEngine = {
    init: function (selector, colorsArray) {
        this.$W = $(selector);
        this.colorsArray = colorsArray;
        this.sildeFlag = false;
        return this;
    },

    addSection: function (className) {
        this.sildeFlag = false;
        this.$Pgae = $("<div class = ' section' />").addClass(className);
        this.$Pgae.appendTo(this.$W)
        return this;
    },
    addSilde: function (className) {
        this.sildeFlag = true;
        this.$silde = $("<div class = 'silde' />").addClass(className);
        this.$silde.appendTo(this.$Pgae)
        return this;
    },
    addComponent: function (config) {
        var self = this;
        var oCp = null;
        var a = 0;
        switch (config.type) {
            case "base": {
                oCp = ComponentFactory(config,self);
                break;
            }
            case "rongqi" :{
                oCp = Comdarongqi(config, self);
                break;
            }
            case "contJs" :{
                oCp = ComcontJs(config, self);
                break;
            }
            case "contJstext" :{
                oCp = comcontJstext(config, self);
                break;
            }
            case "indexCure" :{
                oCp = comInterCure(config, self);
            }
        }
        this.sildeFlag ? this.$silde.append(oCp) : this.$Pgae.append(oCp);
        return this;
    },
    bindEvent: function () {
        this.$W.find(".section").on({
            _leave: function () {
                $(this).find(".component").trigger("cpLeave")
            },
            _load: function () {
                $(this).find(".component").trigger("cpLoad")
            }
        })
    },
    load: function () {
        var self = this;
        this.bindEvent();
        this.$W.myFullpage({
            colorsArray: this.colorsArray,
            onLeave: function (index) {
                self.$W.find(".section").eq(index).trigger("_leave");
            },
            afterLoad: function (index) {
                self.$W.find(".section").eq(index).trigger("_load");
            }
        });
       
    this.$W.find(".section").eq(0).trigger("_load");
    this.$W.find(".logoindex").eq(0).css({ transform: "scale(1.4)"});
    }
}



