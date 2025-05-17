import { Casa } from "./Casa";
import { CasaRodante } from "./casaRondantes";
import { Carpa } from "./Carpa";

const casa1:Casa = new Casa("grande",3,true,true,"colon 210",1);
const casa2:CasaRodante = new CasaRodante("chica",2,"alsina 20");
const casa3:Carpa = new Carpa("grande",1);

//console.log(casa1.getHabitaciones());

casa1.setHabitaciones(5);

//console.log(casa1.getHabitaciones());

casa1.setCochera(false);

casa1.setDireccion("as230"); 

console.log(casa1.getDireccion());

casa2.infoTamaño()
casa1.infoTamaño()
casa3.infoTamaño()


