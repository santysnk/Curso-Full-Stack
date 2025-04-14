import { ModuloWifi } from "./ModuloWifi";
import { SmartHeladera } from "./SmartHeladera";

// Crear instancia ModuloWifi
let wifiModulo = new ModuloWifi(300, 5);

// Crear instancia SmartHeladera
let miSmartHeladera = new SmartHeladera("Samsung", "rt38k5932sl", 3, wifiModulo);

// Uso de los metodos
miSmartHeladera.encender();
console.log("-----------------------------------------------------");
miSmartHeladera.setTemperatura(-1);
console.log("-----------------------------------------------------");
miSmartHeladera.conectarInternet();
console.log("-----------------------------------------------------");

miSmartHeladera.mostrarInfo();