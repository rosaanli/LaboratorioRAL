import { LineaTicket, ResultadoLineaTicket } from "./model";
import { calcularIvaPorCantidad, calcularTotalticket, calcularTotalTipoIva } from "./ticket.helpers";

export const calculaTicketFinal = (lineasTicket: LineaTicket[])  => {
  let lineaTicket: ResultadoLineaTicket [] = [];
  for (let i = 0; i < lineasTicket.length; i++) {
    lineaTicket = [...lineaTicket, calcularIvaPorCantidad(lineasTicket[i])];
  }

  return {
    lineas: lineaTicket,
    total: calcularTotalticket(lineasTicket),
    desgloseIva: calcularTotalTipoIva(lineasTicket),
  };
};
