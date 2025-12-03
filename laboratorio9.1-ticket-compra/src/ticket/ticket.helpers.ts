import { LineaTicket, Producto, ResultadoLineaTicket, TotalPorTipoIva, TipoIva  } from "./model"
import {listaTiposIva} from "./constantes"

export const calculaIvaUnidadProducto = (producto : Producto) => {
  const {nombre, precio, tipoIva } = producto;
  const ivaPorcentaje = obtenerIvaPorTipoIva(tipoIva);

  if (ivaPorcentaje) {
    return {
      nombre,
      precio,
      iva: precio * ivaPorcentaje
    }
  } else {
  return {nombre, precio, iva: 0};
  };
};

const calcularPrecioProductos = (lineaProducto: LineaTicket) : number => {
  const {producto: {precio}, cantidad} = lineaProducto;
  return precio * cantidad;
};

export const calcularIvaProductos = (lineaProducto: LineaTicket) : number => {
  const {cantidad, producto} = lineaProducto;
  const ivaUnidadProducto = calculaIvaUnidadProducto(producto);

  const ivaProductos = Number((ivaUnidadProducto.iva * cantidad).toFixed(2));
  return ivaProductos;
};

export const precioConIvaProductos = (lineaProducto: LineaTicket) : number => {
  return calcularPrecioProductos(lineaProducto) + calcularIvaProductos(lineaProducto);
}

// const ivaCuantiaPorTipo = (linea: LineaTicket): number => {
//   return Number((calcularIvaPorCantidad(linea).precioConIva - calcularIvaPorCantidad(linea).precioSinIva).toFixed(2));
// };


export const infoIvaproductos = (lineaProducto: LineaTicket) : ResultadoLineaTicket => {

  const {producto: {nombre, tipoIva}, cantidad} = lineaProducto;

  const precioProductosSinIva = calcularPrecioProductos(lineaProducto);
  const precioProductosConIva = precioConIvaProductos(lineaProducto);

    return {
    nombre: nombre,
    cantidad: cantidad,
    precioSinIva: precioProductosSinIva,
    tipoIva: tipoIva,
    precioConIva: precioProductosConIva,
  };
};


export const calcularTotalticket = (lineasTicket: LineaTicket[]) => {
  const precioTotalSinIva = lineasTicket.reduce((acc : number, linea : LineaTicket) => acc + calcularPrecioProductos(linea), 0);
  const precioTotalConIva = lineasTicket.reduce((acc : number, linea : LineaTicket) => acc + precioConIvaProductos(linea), 0);

  const totalIva = Number((precioTotalConIva - precioTotalSinIva).toFixed(2));

  return {
    totalSinIva: precioTotalSinIva,
    totalConIva: precioTotalConIva,
    totalIva : totalIva,
  };
};


const obtenerIvaPorTipoIva = (tipoIva: TipoIva) => {
  switch (tipoIva) {
    case "general":
      return 0.21;

    case "reducido":
      return 0.10;

    case "superreducidoA":
      return 0.05;

    case "superreducidoB":
      return 0.04;

    case "superreducidoC":
      return 0;

    case "sinIva":
      return 0;

    default:
      return 0;
  }
};


export const calcularTotalTipoIva = (lineasTicket: LineaTicket[]) : TotalPorTipoIva[]=> {
  const listaTotalporTipoIva = listaTiposIva.map((tipoIva : TipoIva)=>
    {
      const listaDeElementosFiltradosPorIva = lineasTicket.filter((lineaTicket)=> lineaTicket.producto.tipoIva === tipoIva);

      const totalIvaProducto = listaDeElementosFiltradosPorIva.reduce((acc : number, elemento : LineaTicket)=> acc + calcularIvaProductos(elemento),0);

    return {
      tipoIva: tipoIva,
      cuantia: totalIvaProducto,
    };
  })
  return listaTotalporTipoIva.filter((totalPorTipoIva) => totalPorTipoIva.cuantia > 0);
};

export const calculaLineaTicketFinal = (lineasTicket: LineaTicket[])  => {
    let lineaTicket: ResultadoLineaTicket[] = []; // for en funcion aparte
    for (let i = 0; i < lineasTicket.length; i++) {
      lineaTicket = [...lineaTicket, infoIvaproductos(lineasTicket[i])];
    }
    return lineaTicket;
};
