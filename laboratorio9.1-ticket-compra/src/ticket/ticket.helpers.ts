import { LineaTicket, Producto, ResultadoLineaTicket, TotalPorTipoIva  } from "./model"
import {ImporteTipoIva} from "./constantes"

export const calculaIvaUnidadProducto = (producto : Producto) => {
  const {nombre, precio, tipoIva } = producto;
  const ivaInfo = ImporteTipoIva.find(iva => iva.tipo === tipoIva);

  if (ivaInfo) {
    const porcentaje = ivaInfo.porcentaje;
    return {nombre, precio, iva: precio * porcentaje /100}
  } else {
  return {nombre, precio, iva: 0};
  };
};


export const calcularIvaPorCantidad = (lineaProducto: LineaTicket) : ResultadoLineaTicket => {
  /* DUDAS CON DESTRUCTURING - Intento hacer destructuring anidado pro no funciona bien*/
  const {producto: {nombre, precio, tipoIva}, cantidad} = lineaProducto;

  const ivaUnidadProducto = calculaIvaUnidadProducto(lineaProducto.producto);
  const ivaTotalproductos = ivaUnidadProducto.iva * cantidad;

  const precioTotalConIva = precio * cantidad + ivaTotalproductos;

    return {
    nombre: nombre,
    cantidad: cantidad,
    precioSinIva: precio * cantidad,
    tipoIva: tipoIva,
    precioConIva: precioTotalConIva,
  };

  /* Forma sin destructuring anidado
  const unidadProducto = lineaProducto.producto;
  const cantidad = lineaProducto.cantidad;

  const ivaUnidadProducto = calculaIvaProducto(unidadProducto);
  const ivaTotalproductos = ivaUnidadProducto.iva * cantidad;

  const precioTotalConIva =
    unidadProducto.precio * cantidad + ivaTotalproductos;

  return {
    nombre: unidadProducto.nombre,
    cantidad: cantidad,
    precioSinIva: unidadProducto.precio * cantidad,
    tipoIva: unidadProducto.tipoIva,
    precioConIva: precioTotalConIva,
  };
  */
};


export const calcularTotalticket = (lineasTicket: LineaTicket[]) => {
  let totalSinIva = 0;
  let totalConIva = 0;
  let totalIva = 0;

  lineasTicket.forEach(linea => {
    const resultado = calcularIvaPorCantidad(linea);
    totalSinIva = totalSinIva + resultado.precioSinIva;
    totalConIva = totalConIva + resultado.precioConIva;
    totalIva = Number((totalConIva - totalSinIva).toFixed(2));
  });

  return {
    totalSinIva,
    totalConIva,
    totalIva
  };
};

const ivaPorTipo = (linea: LineaTicket) : number => {
  return Number((calcularIvaPorCantidad(linea).precioConIva - calcularIvaPorCantidad(linea).precioSinIva).toFixed(2));
};


export const calcularTotalTipoIva = (lineasTicket: LineaTicket[]) : TotalPorTipoIva[]=> {

  const resultado: TotalPorTipoIva[] = [
    { tipoIva: "general", cuantia: 0 },
    { tipoIva: "reducido", cuantia: 0 },
    { tipoIva: "superreducidoA", cuantia: 0 },
    { tipoIva: "superreducidoB", cuantia: 0 },
    { tipoIva: "superreducidoC", cuantia: 0 },
    { tipoIva: "sinIva", cuantia: 0 },
  ];

// TODO: Preguntar como hacer esto sin indicar la posicion numerica del array o sin switch
  for (let i=0; i < lineasTicket.length; i++) {
    const iva = ivaPorTipo(lineasTicket[i]);

    switch (lineasTicket[i].producto.tipoIva) {
      case "general":
        resultado[0].cuantia = resultado[0].cuantia + iva;
        break;

      case "reducido":
        resultado[1].cuantia = resultado[1].cuantia + iva;
        break;

      case "superreducidoA":
        resultado[2].cuantia = resultado[2].cuantia + iva;
        break;

      case "superreducidoB":
        resultado[3].cuantia = resultado[3].cuantia + iva;
        break;
      case "superreducidoC":
        resultado[4].cuantia = resultado[4].cuantia + iva;
        break;

      case "sinIva":
        resultado[5].cuantia = resultado[5].cuantia + iva;
        break;
    }
  }

  return resultado;
}

