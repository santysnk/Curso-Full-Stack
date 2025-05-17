import { ModuloWifi } from "./ModuloWifi";
import { SmartHeladera } from "./SmartHeladera";

// ----- Instanciación de objetos -----
// Crear instancia de ModuloWifi con velocidad 300 Mbps y frecuencia 5 GHz
let wifiModulo = new ModuloWifi(300, 5);

// Crear instancia de SmartHeladera con marca, modelo, temperatura y el módulo de WiFi
let miSmartHeladera = new SmartHeladera("Samsung", "rt38k5932sl", 3, wifiModulo);


// Encender la SmartHeladera (método heredado de clase Heladera que a su vez lo hereda de la clase Electrodomestico)
miSmartHeladera.encender();
console.log("-----------------------------------------------------");

// Obtener información del Electrodomestico
console.log(`Marca: ${miSmartHeladera.getMarca()}`);
console.log(`Modelo: ${miSmartHeladera.getModelo()}`);
console.log(`Estado (encendido?): ${miSmartHeladera.getEstaEncendido()}`);
console.log("-----------------------------------------------------");

// Modificar la temperatura y luego obtenerla 
miSmartHeladera.setTemperatura(-1);  // Se ajusta la temperatura a -1°C
console.log(`Temperatura actual: ${miSmartHeladera.getTemperatura()}°C`);
console.log("-----------------------------------------------------");

// Conectar a Internet 
miSmartHeladera.conectarInternet();
console.log("-----------------------------------------------------");

// Mostrar toda la información del aparato (incluye la información de electrodoméstico, heladera y moduloWifi)
miSmartHeladera.mostrarInfo();
console.log("-----------------------------------------------------");

// Mostrar la configuración del modulo Wifi 
miSmartHeladera.mostrarModuloWifi();
console.log("-----------------------------------------------------");

// Actualizar los valores del ModuloWifi directamente (a través de sus setters)
// Esto simula, por ejemplo, actualizar la configuración del WiFi.
wifiModulo.setVelocidadMbps(350);
wifiModulo.setFrecuenciaGHz(5.2);
console.log("Nuevo estado del modulo Wifi tras actualizar sus parámetros:");

// Mostrar los cambios
miSmartHeladera.mostrarModuloWifi();
console.log("-----------------------------------------------------");

// Apagar la smart heladera para finalizar la prueba
miSmartHeladera.apagar();
console.log("-----------------------------------------------------");
