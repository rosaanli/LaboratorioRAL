import { ValidacionClave } from './model';

/*La clave debe de tener mayúsculas y minúsculas.
La clave debe de tener números.
La clave debe de tener caracteres especiales (@,#,+, _, ...)
La clave debe de tener una longitud mínima de 8 caracteres.
La clave no debe tener el nombre del usuario.
La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).*/

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const letras = clave
    .split("")
    .filter(
      (caracter) =>
        (caracter >= "A" && caracter <= "Z") ||
        (caracter >= "a" && caracter <= "z")
    );

  const hayMayuscula = letras.some(
    (caracter) => caracter >= "A" && caracter <= "Z"
  );
  const hayMinuscula = letras.some(
    (caracter) => caracter >= "a" && caracter <= "z"
  );

  if (!hayMayuscula || !hayMinuscula) {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  } else {
    return {
      esValida: true,
      error: "",
    };
  }
};


export const tieneNumeros = (clave: string): ValidacionClave => {
  const tieneNumeros = clave.split('').some((caracter : string) => !isNaN(parseInt(caracter)));
  if (!tieneNumeros) {
    return {
      esValida: false,
      error: "La clave debe de tener números",
    };
  } else {
    return {
      esValida: true,
      error: "",
    };
  }
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteresEspeciales = "@#$_-+.,;:!?&%/()[]{}=<>";

  const tieneCaracterEspecial = caracteresEspeciales.split('').some((caracterEspecial : string) => {
    const comoprobarCaracter = clave.split('').some((caracter : string) => caracter===caracterEspecial);
    return comoprobarCaracter;
  });

  if (!tieneCaracterEspecial) {
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
  } else {
    return {
      esValida: true,
      error: "",
    };
  }
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length < 8) {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  } else {
      return {
      esValida: true,
      error: "",
    };
  }
};

export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
  const nombreUsuarioArrayMinusculas = nombreUsuario.toLowerCase().split('');
  const claveArrayMinusculas = clave.toLowerCase().split('');

  const contieneNombre = claveArrayMinusculas.some ((_, i)=> {
    return nombreUsuarioArrayMinusculas.every((letra, j) => claveArrayMinusculas[i + j] === letra);
  });

  if (  !contieneNombre) {
          return {
      esValida: true,
      error: "",
      };
    } else {
      return {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      };
  }
};

export const tienePalabrasComunes = ( clave: string, commonPasswords: string[]): ValidacionClave => {
  const claveArrMinusculas = clave.toLowerCase().split('');

  const tienePalabraComun = claveArrMinusculas.some((_, i) =>{
    return commonPasswords.some((palabra)=> {
      return palabra.split("").every((letra, j) => claveArrMinusculas[i + j] === letra);
      })
    });

  if (tienePalabraComun){
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
  } else {
    return {
      esValida: true,
      error: "",
    };
  }
};



export const laClaveEsValida = (clave : string, nombreUsuario: string, commonPasswords: string[]) : ValidacionClave => {
  const validaciones = [
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];

  const validacionFallida = validaciones.find(validacion => !validacion.esValida);

  if (validacionFallida) {
    return {
      esValida: false,
      error: validacionFallida.error
    };
  } else {
      return {
        esValida: true,
        error: ""
      };
    }
};