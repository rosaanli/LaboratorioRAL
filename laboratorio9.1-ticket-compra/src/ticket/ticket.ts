import { LineaTicket, ResultadoLineaTicket } from "./model";
import { calcularIvaPorcantidadProducto, calcularTotalticket, calcularTotalTipoIva } from "./ticket.helpers";

export const calculaTicketFinal = (lineasTicket: LineaTicket[])  => {
  let lineaTicket: ResultadoLineaTicket [] = [];
  for (let i = 0; i < lineasTicket.length; i++) {
    lineaTicket = [...lineaTicket, calcularIvaPorcantidadProducto(lineasTicket[i])];
  }

  return {
    lineas: lineaTicket,
    total: calcularTotalticket(lineasTicket),
    desgloseIva: calcularTotalTipoIva(lineasTicket),
  };
};
