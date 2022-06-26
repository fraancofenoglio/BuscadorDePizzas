import { cardContainer, title } from "./variables.js";
import { cleanHTML } from "./cleanHTMLFunction.js";
import { showAll } from "./showAllFunction.js";

export function showError(error){

    cleanHTML();

    title.textContent = error;
    cardContainer.appendChild(title);
    title.classList.add("error");

    setTimeout(() => {
        title.classList.remove("error");
        cleanHTML();
        showAll();
    }, 4000);

}
