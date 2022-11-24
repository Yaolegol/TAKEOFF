export const initModule = (jClass, JsClass) => {
    const list = document.querySelectorAll(`.${jClass}`);

    list.forEach((element) => {
        element.classList.add(`${jClass}__init`);

        new JsClass(element);
    });
}
