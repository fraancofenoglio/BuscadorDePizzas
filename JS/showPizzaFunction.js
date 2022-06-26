import { cleanHTML } from "./cleanHTMLFunction.js";
import {card, cardContainer, title, paragraph, price, img } from "./variables.js";

export function showPizza (found){

    cleanHTML();

    title.textContent = (found.name).toUpperCase();
    card.appendChild(title);

    img.src = found.img;
    card.appendChild(img);

    paragraph.textContent = `${(found.ingredients).join(", ")}.`;
    card.appendChild(paragraph);

    price.textContent = `$${found.price}`;
    card.appendChild(price);
    
    card.classList.add("cards")

    cardContainer.appendChild(card);
}