import {calculaIvaProducto, calcularIvaPorcantidadProducto} from "./ticket.helpers";
import {LineaTicket, Producto, TipoIva} from "./model";

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
      precionSinIva: 15,
      tipoIva: "superreducidoA",
      precioConIva: 15.75
    };
    expect(resultado).toEqual(esperado);
  });
});