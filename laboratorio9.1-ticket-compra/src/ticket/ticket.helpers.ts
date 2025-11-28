import { LineaTicket, Producto, ResultadoLineaTicket  } from "./model"
import {ImporteTipoIva} from "./constantes"

export const calculaIvaProducto = (producto : Producto) => {
  const {nombre, precio, tipoIva } = producto;
  const ivaInfo = ImporteTipoIva.find(iva => iva.tipo === tipoIva);

  if (ivaInfo) {
    const porcentaje = ivaInfo.porcentaje;
    return {nombre, precio, iva: precio * porcentaje /100}
  } else {
  return {nombre, precio, iva: 0};
  };
};


export const calcularIvaPorcantidadProducto = (lineaProducto: LineaTicket) : ResultadoLineaTicket => {
  const unidadProducto = lineaProducto.producto;
  const cantidad = lineaProducto.cantidad;

  const ivaUnidadProducto = calculaIvaProducto(unidadProducto);
  const ivaTotalproductos = ivaUnidadProducto.iva * cantidad;

  const precioTotalConIva = (unidadProducto.precio * cantidad) + ivaTotalproductos;

  return {
    nombre: unidadProducto.nombre,
    cantidad: cantidad,
    precioSinIva: unidadProducto.precio * cantidad,
    tipoIva: unidadProducto.tipoIva,
    precioConIva: precioTotalConIva
  };
};


const calcularTotalticket = (lineasTicket: LineaTicket[]) => {
  let totalSinIva = 0;
  let totalConIva = 0;
  let totalIva = 0;
  lineasTicket.forEach(linea => {
    const resultado = calcularIvaPorcantidadProducto(linea);
    totalSinIva = totalSinIva + resultado.precioSinIva;
    totalConIva = totalConIva + resultado.precioConIva;
    totalIva = totalIva - totalSinIva;
  });
  return {
    totalSinIva,
    totalConIva,
    totalIva
  };
};

const calcularTotalTipoIva = (lineasTicket: LineaTicket[]) => {