import {calculaIvaProducto, calcularIvaPorcantidadProducto, calcularTotalticket, calcularTotalTipoIva} from "./ticket.helpers";
import {LineaTicket, Producto, TotalPorTipoIva} from "./model";

describe("calculaIvaProducto", () =>{
  it("deberia devolver el IVA para un producto y tipo de IVA dado", () => {
  //arrange
    const producto : Producto = {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
  }
  //act
  const resultado = calculaIvaProducto(producto);
  //assert
  const esperado = {
    nombre : "Lasaña",
    precio : 5,
    iva: 0.25
  };
  expect(resultado).toEqual(esperado);
  });
});


describe("calcularIvaPorcantidadProducto", () =>{
  it("deberia devolver el IVA para un producto y cantidad dada", () => {
    //arrange
    const producto : LineaTicket = {
      producto :{
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA"
    },
      cantidad: 3
    };
    //act
    const resultado = calcularIvaPorcantidadProducto(producto);

    //assert
    const esperado = {
      nombre: "Lasaña",
      cantidad: 3,
      precioSinIva: 15,
      tipoIva: "superreducidoA",
      precioConIva: 15.75
    };
    expect(resultado).toEqual(esperado);
  });

  it("deberia devolver el IVA para un producto y cantidad dada", () => {
    //arrange
    const producto: LineaTicket = {
      producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  }
    //act
    const resultado = calcularIvaPorcantidadProducto(producto);

    //assert
    const esperado = {
      nombre: "Leche",
      cantidad: 6,
      precioSinIva: 6,
      tipoIva: "superreducidoC",
      precioConIva: 6,
    };
    expect(resultado).toEqual(esperado);
  });

  it("deberia devolver el IVA para un producto y cantidad dada", () => {
    //arrange
    const producto: LineaTicket = {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  }
    //act
    const resultado = calcularIvaPorcantidadProducto(producto);

    //assert
    const esperado = {
      nombre: "Legumbres",
      cantidad: 2,
      precioSinIva: 4,
      tipoIva: "general",
      precioConIva: 4.84,
    };
    expect(resultado).toEqual(esperado);
  });
});

describe("calcularTotalticket", () => {
  it("deberia devolver el total del ticket", () => {
    //arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
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
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      }
    ];
    //act
    const resultado = calcularTotalticket(lineasTicket);

    //assert
    const esperado = {
      totalSinIva: 25,
      totalConIva: 26.59,
      totalIva: 1.59,
    };
    expect(resultado).toEqual(esperado);
  });
});


describe("calcularTotalTipoIva", () => {
  it("deberia devolver el total por tipo de IVA", () => {
    //arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
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
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2, //0.84
      },
      {
        producto: {
          nombre: "Perfume",
          precio: 20,
          tipoIva: "general",
        },
        cantidad: 3, //12.6
      }
    ];
    //act
    const resultado = calcularTotalTipoIva(lineasTicket);

    //assert
    const esperado : TotalPorTipoIva[] = [
    { tipoIva: "general", cuantia: 13.44 },
    { tipoIva: "reducido", cuantia: 0 },
    { tipoIva: "superreducidoA", cuantia: 0.75 },
    { tipoIva: "superreducidoB", cuantia: 0 },
    { tipoIva: "superreducidoC", cuantia: 0 },
    { tipoIva: "sinIva", cuantia: 0 },
    ];
    expect(resultado).toEqual(esperado);
  });
});