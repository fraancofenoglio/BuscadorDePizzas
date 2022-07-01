import { cleanHTML } from "./cleanHTMLFunction.js";
import { LSPizzas, cardContainer } from "./variables.js";

export function showAll() {
    cleanHTML()
    LSPizzas.map((Pizzita) => {

        const card = document.createElement('div');
        const title = document.createElement('h2');
        const img = document.createElement('img');
        const paragraph = document.createElement('p');
        const price = document.createElement('h3');

        title.textContent += (Pizzita.name).toUpperCase();
        card.appendChild(title);

        img.src += Pizzita.img;
        card.appendChild(img);

        paragraph.textContent += `${(Pizzita.ingredients).join(", ")}.`;
        card.appendChild(paragraph);

        price.textContent += `$${Pizzita.price}`;
        card.appendChild(price);

        card.classList.add("cards")
        cardContainer.appendChild(card);
    })
}