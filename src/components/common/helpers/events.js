export const addEventListener = (element, event, callback) => {
    element.removeEventListener(event, callback);
    element.addEventListener(event, callback);
}
