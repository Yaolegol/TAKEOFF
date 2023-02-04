export const initModule = (cssClass, jsClass) => {
    const list = document.querySelectorAll(`.${cssClass}`);

    list.forEach((element) => {
        element.classList.add(`${cssClass}__init`);

        new jsClass(element);
    });
}
