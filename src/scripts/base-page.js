import $ from "jquery/dist/jquery";

class BasePage {
    constructor(element) {
        this.$element = $('body');
        this.init();
    }

    init() {
        //abstract
    }
}

export {BasePage};