import { codigoBanco, estaBienFormado, limpiarNumero, esValido, informacionCuenta, mostrarNombreBanco,} from "./cuenta-validaciones";


export const inputNumero = (): string => {
  const cuenta = document.getElementById("numero-cuenta");
  if (cuenta && cuenta instanceof HTMLInputElement) {
    console.log("cuenta:", cuenta.value);
    return cuenta.value;
  } else {
    throw new Error("no se ha podido obtener el input de la cuenta");
  }
};



const crearParrafo = (texto: string) => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;

  return parrafo;
};

const crearParrafoNegrita = (enNegrita: string, texto: string) => {
  const parrafo = document.createElement("p");
  const span = document.createElement("span");
  span.textContent = enNegrita;
  span.style.fontWeight = "bold";
  parrafo.appendChild(span);
  parrafo.append(texto);
  return parrafo;
};

const pintaCuentaBienFormada = (numeroCuenta: string) : string=> {
  let bienFormado = estaBienFormado(numeroCuenta);

  if (bienFormado === true){
    return "El IBAN esta bien formado";
  } else {
    return "El IBAN NO esta bien formado";
  }
};

const pintaCuentaValida = (numeroCuenta: string): string => {
  let valida = esValido(numeroCuenta);

  if (valida === true) {
    return "El IBAN es Valido";
  } else {
    return "El IBAN NO es Valido";
  }
};

const pintaNombreBanco = (numeroCuenta: string): string => {
  const codigo = codigoBanco(numeroCuenta);
  const nombreBanco = mostrarNombreBanco(codigo);
  return nombreBanco;
};


export const crearDivInfoCuenta = (): HTMLDivElement => {
  const numeroCuentaALimpiar = inputNumero();
   const numeroCuenta = limpiarNumero(numeroCuentaALimpiar);

  const crearDiv = document.createElement("div");

  const estaBienFormadaLaCuenta = pintaCuentaBienFormada(numeroCuenta);
  const resultadoFormacionCuenta = crearParrafo(estaBienFormadaLaCuenta);
  crearDiv.appendChild(resultadoFormacionCuenta);

  const esValido = pintaCuentaValida(numeroCuenta);
  const resultadoCuentaValida = crearParrafo(esValido);
  crearDiv.appendChild(resultadoCuentaValida);

  const nombreBanco = pintaNombreBanco(numeroCuenta);
  const resultadoNombreBanco = crearParrafoNegrita("Banco: ", nombreBanco);
  crearDiv.appendChild(resultadoNombreBanco);

  const pintaCodigoBanco = codigoBanco(numeroCuenta);
  const resultadoCodigoBanco = crearParrafoNegrita(
    "Codigo Sucursal: ",
    pintaCodigoBanco,
  );
  crearDiv.appendChild(resultadoCodigoBanco);

  const infoCuenta = informacionCuenta(numeroCuenta);
  const digitoControl = crearParrafoNegrita(
    "Digito de control: ",
    infoCuenta.digitoControl,
  );
  const numeroDeCuenta = crearParrafoNegrita(
    "Numero de cuenta: ",
    infoCuenta.numeroCuenta,
  );
  crearDiv.appendChild(digitoControl);
  crearDiv.appendChild(numeroDeCuenta);

  return crearDiv;
};