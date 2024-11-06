export interface iCar {
    make: string;
    model: string;
    year: number;
    color: string;
}

export interface iCar2 {
    make: string;
    model: string;
    year: number;
    color: string;
    getInfo: ()=> void
}

interface iPizza{
    name:string,
    size: string[],
    toppings: string[],
}

interface iPizzeria{
    name:string,
    direccion: string,
    menu: iPizza[],
    addPizza: (pizza: iPizza) => void,
    listAll: () => void,
    findOne: (pizzaName: string) => void,
    printPizza: (pizza: iPizza) => void
}
