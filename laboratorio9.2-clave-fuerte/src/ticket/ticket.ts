import { LineaTicket } from "./model";
import { calcularTotalticket, calcularTotalTipoIva, calculaLineaTicketFinal } from "./ticket.helpers";

export const calculaTicketFinal = (lineasTicket: LineaTicket[])  => {
  return {
    lineas:calculaLineaTicketFinal(lineasTicket),
    total: calcularTotalticket(lineasTicket),
    desgloseIva: calcularTotalTipoIva(lineasTicket),
  };
};
