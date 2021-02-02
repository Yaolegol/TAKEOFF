import {addEventListener} from 'helpers/events';

export const handleLoad = () => {
    document.addEventListener("DOMContentLoaded", function (event) {
        console.log('DOM ready!')
        document.body.dispatchEvent(new CustomEvent('DOM-ready'));
    });
}

export const addOnLoadListener = (listener) => {
    const body = document.querySelector('body');
    addEventListener(body, 'DOM-ready', listener);
}
