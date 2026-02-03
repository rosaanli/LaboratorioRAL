import { isValidIBAN } from "ibantools";
import { bancos } from "./cuenta-constantes";

/*Donde:
WW: código de país
00: dígito de control
0000: código de banco
0000: código de sucursal
00: dígito de control secundario
0000000000: número de cuenta
*/

export const limpiarNumero = (numeroCuenta: string): string => {
  const numeroLimpio = numeroCuenta.replace(/\s|-/g, "");

  return numeroLimpio;
};


export const estaBienFormado = (numeroCuenta: string): boolean => {
  const patron =
    /^(?<codigoDePais>[A-Z]{2})[\s|-]?(?<digitoControl>\d{2})[\s|-]?(?<codigoBanco>\d{4})[\s|-]?(?<codigoSucursal>\d{4})[\s|-]?(?<digitoControlSecundario>\d{2})[\s|-]?(?<numeroCuenta>\d{10})$/;

  const coincidencia = patron.exec(numeroCuenta);

  if (coincidencia) {
    const {
      codigoDePais,
      digitoControl,
      codigoBanco,
      codigoSucursal,
      digitoControlSecundario,
      numeroCuenta,
    } = coincidencia.groups as any;

    console.log(
      codigoDePais,
      digitoControl,
      codigoBanco,
      codigoSucursal,
      digitoControlSecundario,
      numeroCuenta,
    );
    return true;
  } else {
    alert("ERROR: no esta bien formado");
    return false;
  }
};


export const esValido = (numeroCuenta: string): boolean => {

  const validar = isValidIBAN(numeroCuenta);
  return validar;
};

export const codigoBanco = (numeroCuenta: string): string => {

  const patron =
    /^(?<codigoDePais>[A-Z]{2})[\s|-]?(?<digitoControl>\d{2})[\s|-]?(?<codigoBanco>\d{4})[\s|-]?(?<codigoSucursal>\d{4})[\s|-]?(?<digitoControlSecundario>\d{2})[\s|-]?(?<numeroCuenta>\d{10})$/;

  const coincidencia = patron.exec(numeroCuenta);

  if (coincidencia) {
    const { codigoBanco } = coincidencia.groups as any;
    console.log("Codigo Banco:", codigoBanco);
    return codigoBanco;
  } else {
    throw new Error("No se puede obtener el codigo del Banco");
  }
};

export const mostrarNombreBanco = (codigo: string): string => {
  const banco = bancos.find((banco) => banco.codigo === codigo);

  if (banco) {
    console.log("Nombre del banco:", banco.nombre);
    return banco.nombre;
  } else {
    return "No se ha podiso encontrar el nombre del Banco";
  }
};

export const informacionCuenta = (numeroCuenta: string) => {
  const patron =
    /^(?<codigoDePais>[A-Z]{2})[\s|-]?(?<digitoControl>\d{2})[\s|-]?(?<codigoBanco>\d{4})[\s|-]?(?<codigoSucursal>\d{4})[\s|-]?(?<digitoControlSecundario>\d{2})[\s|-]?(?<numeroCuenta>\d{10})$/;

  const coincidencia = patron.exec(numeroCuenta);

  if (coincidencia) {
    const { digitoControl, numeroCuenta, codigoBanco } =
      coincidencia.groups as any;

    return { digitoControl, numeroCuenta, codigoBanco };
  } else {
    throw new Error("No se puede obtener la informacion de la cuenta");
  }
};