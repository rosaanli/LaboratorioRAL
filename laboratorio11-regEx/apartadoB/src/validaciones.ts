export const validarExtension = (value: string): boolean => {
  const patron = /^\....$/;

  return patron.test(value);
};

export const validarURL = (URL: string): boolean => {
  const patron = /^https:\/\//;

  return patron.test(URL);
};

export const validarDominio = (dominio: string): boolean => {
  const patron = /\.es$/;

  return patron.test(dominio);
};

export const validarLetra = (vocal: string): boolean => {
  const patron = /[aeiou]$/;

  return patron.test(vocal.toLowerCase());
};

export const validarCaracteresEspeciales = (caracter: string): boolean => {
  const patron = /[@&$]/;

  return patron.test(caracter);
};

export const noValidarCaracteresEspeciales = (caracter: string): boolean => {
  const patron = /^[^@&$]/;

  return patron.test(caracter);
};

export const validarMatriculaCoche = (matricula: string): boolean => {
  const patron = /^\d{4}\s[a-zA-Z]{3}$/;

  return patron.test(matricula);
};

export const validarMatriculaAntigua = (matricula: string): boolean => {
  const patron = /^[A-Z]{1,2}\s\d{4,5}\s?[A-Z]{0,2}$/;

  return patron.test(matricula);
};

export const validarIP = (ip: string): boolean => {
  const patron = /^\d{1,3}\.\d{1,3}\.\d{1,3}$/;

  return patron.test(ip);
};

export const validarNIF = (nif: string): boolean => {
  const patron = /^\d{2}\.?\d{3}\.?\d{3}\.?(\s?|-?|_?)[a-zA-Z]$/;

  return patron.test(nif);
};

export const extraerDatosNIF = (nif: string): boolean => {
  const patron =
    /^(?<parteNumerica>\d{2}\.?\d{3}\.?\d{3}\.?)(\s?|-?|_?)(?<letra>[a-zA-Z])$/;

  const coincidencia = patron.exec(nif);

  if(coincidencia){
    const { parteNumerica, letra} = coincidencia.groups as any;

    const numeroLimpio = parteNumerica.replace(/\./g, "");

    console.log("la parte númerica es: ", parteNumerica, numeroLimpio);
    console.log("La letra es:", letra);

    return true;
  } else {
    console.log("FALLO")
    return false;
  }
};