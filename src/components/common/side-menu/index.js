import {addEventListener} from '/common/helpers/events';
import {addOnLoadListener} from '/common/helpers/load';

class SideMenu {
    constructor() {
        addOnLoadListener(this.init);
    }

    handleBackDropClick = () => {
        this.sideMenu.classList.remove('side-menu_active');
    }

    handleContentClick = (e) => {
        e.stopPropagation();
    }

    handleUpdateVisibility = () => {
        console.log('click');
        this.sideMenu.classList.toggle('side-menu_active');
    }

    init = () => {
        console.log('init');
        this.burger = document.querySelector('.j-burger');
        this.sideMenu = document.querySelector('.j-side-menu');
        this.sideMenuContent = document.querySelector('.j-content');
        addEventListener(this.burger, 'j-click', this.handleUpdateVisibility);
        addEventListener(this.sideMenu, 'click', this.handleBackDropClick);
        addEventListener(this.sideMenuContent, 'click', this.handleContentClick);
    }
}

new SideMenu;
