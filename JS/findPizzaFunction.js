import { LSPizzas, input, form } from "./variables.js";
import {showPizza} from "./showPizzaFunction.js";
import { showError } from "./showErrorFunction.js";
import { cleanHTML } from "./cleanHTMLFunction.js";

export function findPizza() {
    cleanHTML();
    const valueInput = input.value;

    if (valueInput != ""){

        const findPZ = LSPizzas.find((pz) => pz.name == (valueInput).toLowerCase());
        const findPZid = LSPizzas.find((pz) => pz.id == valueInput);

        if (findPZ) {   
            showPizza(findPZ);
        }
        else if (findPZid){  
            showPizza(findPZid);
        } else {
            showError("No se encontró la pizza ingresada.");
        }

    } else {
        showError("Ingrese el nombre de una pizza o un número para buscar.")
    }

    form.reset() 
}