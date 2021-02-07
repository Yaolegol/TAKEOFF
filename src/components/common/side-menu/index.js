import {addEventListener} from 'helpers/events';
import {addOnLoadListener} from 'helpers/load';
import './index.less';

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
        this.sideMenu.classList.toggle('side-menu_active');
    }

    init = () => {
        this.burger = document.querySelector('.j-burger');
        this.sideMenu = document.querySelector('.j-side-menu');
        this.sideMenuContent = document.querySelector('.j-content');
        addEventListener(this.burger, 'j-click', this.handleUpdateVisibility);
        addEventListener(this.sideMenu, 'click', this.handleBackDropClick);
        addEventListener(this.sideMenuContent, 'click', this.handleContentClick);
    }
}

new SideMenu;
