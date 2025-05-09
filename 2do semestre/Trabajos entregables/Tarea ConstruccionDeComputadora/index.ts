import { ComputadoraBuilder } from "./ComputadoraBuilder";

const miPC = new ComputadoraBuilder()
    .setProcesador("Intel Core i7")
    .setRAM("16GB")
    .setAlmacenamiento("1TB SSD")
    .setTarjetaGrafica("NVIDIA RTX 3060")
    .setSistemaOperativo("Windows 11")
    .build();

miPC.mostrarConfiguracion();