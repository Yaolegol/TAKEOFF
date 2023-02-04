export const bindEvent = (element, event, callback) => {
    element.removeEventListener(event, callback);
    element.addEventListener(event, callback);
}
