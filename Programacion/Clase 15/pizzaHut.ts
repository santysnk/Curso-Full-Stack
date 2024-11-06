import { iPizza } from "./type.d";
import { iPizzeria } from "./type.d";

const napolitana: iPizza = {
    name:"Napolitana",
    toppings: ["tomate","muzzarella","ajo","albaca"],
    size:["chica","mediana","grande"],
}

const muzzarella: iPizza = {
    name:"Muzzarella",
    toppings: ["tomate","muzzarella"],
    size:["chica","mediana","grande"],
}

const cuatroquesos: iPizza = {
    name:"Cuatro Quesos",
    toppings: ["Queso azul","muzzarella","provolone","cuartirolo"],
    size:["mediana","grande"],
}

const pizzaHut:iPizzeria = {
    name : "PizzeriaTsAs",
    direccion : "belgrano 800",
    menu : [],
    
    // crear el método addPizza que agregue una pizza que cumpla con la interfaz correspondiente, al arreglo de pizzas del objeto pizzería
    addPizza(pizza: iPizza) {
        this.menu.push(pizza);
        console.log(`${pizza.name} ha sido agregada al menú.`);
    },

    // crear un método listAll para listar por pantalla todas las pizzas.
    listAll() {
        if (!this.menu.length) {
            console.log("No hay pizzas en el menú.🍕");
        } else {
            console.log("Lista de todas las pizzas:");
            this.menu.forEach((pizza) => console.log(pizza));
        }
    },

    // crear un método findOne que reciba el nombre de una pizza y la busque. 
    // Si la encuentra, debe mostrarla por consola, si no, debe mostrar un mensaje indicando que la pizza no existe en el menú.
    findOne(pizzaName) {
        const searchResult = this.pizzas
            .find((pizza) => pizza.name === pizzaName);
        
        console.log(searchResult?
            searchResult : "No se encontró esa pizza");    
    },

    // crear un método printPizza que reciba una pizza e imprima sus atributos .
    printPizza(pizza: iPizza) {
        console.log(`
        Nombre: ${pizza.name}
        Toppings: ${pizza.toppings.join(", ")}
        Tamaños: ${pizza.size.join(", ")}
        --------------------
        `);
    }
}

console.log(pizzaHut.menu);
pizzaHut.addPizza(napolitana);
console.log(pizzaHut.menu);
pizzaHut.findOne("Napolitana");