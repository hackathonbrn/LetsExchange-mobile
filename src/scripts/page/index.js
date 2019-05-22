import {BasePage} from "../base-page";
import {App} from "../app/app.js";



class Index extends BasePage {
    init() {
        const app = new App();
    }
}

const page = new Index();