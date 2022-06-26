const Pizzas = [
    {
      id: 0,
      name: "muzzarella",
      ingredients: ["Muzzarella", "Salsa de tomate"],
      price: 580,
      img: "./assets/muzzarella.jpg"
    },
  
    {
      id: 1,
      name: "especial",
      ingredients: ["Muzzarella", "Salsa de tomate", "Jamón Cocido"],
      price: 750,
      img: "./assets/especial.jpg"
    },
  
    {
      id: 2,
      name: "cuatro quesos",
      ingredients: [
        "Muzzarella",
        "Gruyere",
        "Roquefort",
        "Parmesano",
        "Salsa de tomate"
      ],
      price: 800,
      img: "./assets/cuatro-quesos.jpg"
    },
  
    {
      id: 3,
      name: "calabresa",
      ingredients: ["Muzzarella", "Salsa de tomate", "Salame"],
      price: 780,
      img: "./assets/calabresa.jpg"
    },
  
    {
      id: 4,
      name: "cebolla",
      ingredients: ["Muzzarella", "Salsa de tomate", "Cebolla"],
      price: 700,
      img: "./assets/cebolla.jpg"
    },
  
    {
      id: 5,
      name: "lechuga",
      ingredients: ["Muzzarella", "Salsa de tomate", "Lechuga", "Mayonesa"],
      price: 730,
      img: "./assets/lechuga.jpg"
    }
];

import {button, form} from "./variables.js";
import {showAll} from "./showAllFunction.js";
import {findPizza} from "./findPizzaFunction.js"

window.addEventListener("load", ()=>{
    localStorage.setItem("Pizzas", JSON.stringify(Pizzas));
});

window.addEventListener("load", showAll);

form.addEventListener("submit", e=> e.preventDefault());

button.addEventListener("click", findPizza);
