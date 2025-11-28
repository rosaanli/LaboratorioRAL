import { Iva, LineaTicket } from "./model";

export const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];

export const ImporteTipoIva : Iva[] = [
  {
    tipo: "general",
    porcentaje: 21,
  },

  {
    tipo: "reducido",
    porcentaje: 10,
  },

  {
    tipo: "superreducidoA",
    porcentaje: 5,
  },

  {
    tipo: "superreducidoB",
    porcentaje: 4,
  },

  {
    tipo: "superreducidoC",
    porcentaje: 0,
  },

  {
    tipo: "sinIVA",
    porcentaje: 0,
  },
];
