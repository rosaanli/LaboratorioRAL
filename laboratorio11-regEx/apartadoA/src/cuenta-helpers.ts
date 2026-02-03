import { codigoBanco, estaBienFormado, esValido, informacionCuenta, mostrarNombreBanco,} from "./cuenta-validaciones";


export const crearParrafo = (texto: string) => {
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

const pintaCuentaBienFormada = () : string=> {
  let bienFormado = estaBienFormado();

  if (bienFormado === true){
    return "El IBAN esta bien formado";
  } else {
    return "El IBAN NO esta bien formado";
  }
};

const pintaCuentaValida = () : string=> {
  let valida = esValido();

  if (valida === true){
    return "El IBAN es Valido";
  } else {
    return "El IBAN NO es Valido";
  }
};

const pintaNombreBanco = () : string => {
  const codigo =  codigoBanco();
  const nombreBanco = mostrarNombreBanco(codigo);
  return nombreBanco;
}


export const crearDivInfoCuenta = () : HTMLDivElement=>{
  const crearDiv = document.createElement("div");

  const estaBienFormadaLaCuenta = pintaCuentaBienFormada();
  const resultadoFormacionCuenta = crearParrafo(estaBienFormadaLaCuenta);
  crearDiv.appendChild(resultadoFormacionCuenta);

  const esValido = pintaCuentaValida();
  const resultadoCuentaValida = crearParrafo(esValido)
  crearDiv.appendChild(resultadoCuentaValida);

  const nombreBanco = pintaNombreBanco();
  const resultadoNombreBanco = crearParrafoNegrita("Banco: ", nombreBanco);
  crearDiv.appendChild(resultadoNombreBanco);

  const pintaCodigoBanco = codigoBanco();
  const resultadoCodigoBanco = crearParrafoNegrita("Codigo Sucursal: ", pintaCodigoBanco);
  crearDiv.appendChild(resultadoCodigoBanco);

  const infoCuenta = informacionCuenta();
  const digitoControl = crearParrafoNegrita("Digito de control: ", infoCuenta.digitoControl)
  const numeroDeCuenta = crearParrafoNegrita("Numero de cuenta: " , infoCuenta.numeroCuenta);
  crearDiv.appendChild(digitoControl);
  crearDiv.appendChild(numeroDeCuenta);

  return crearDiv;
};