
import { MercadoPago } from "./MercadoPagoClase";
import { TarjetDeCredito } from "./TarjetDeCredito";
import { Transferencia } from "./Transferencia";

const mercadoPago1:MercadoPago = new MercadoPago("santiago","casal",31042140)

mercadoPago1.generarRecibo();
mercadoPago1.cancelarPago();
mercadoPago1.procesar();
