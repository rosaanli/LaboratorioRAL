import { ValidacionClave } from './model';
import { tieneMayusculasYMinusculas, tieneNumeros, tieneCaracteresEspeciales, tieneLongitudMinima, tieneNombreUsuario, tienePalabrasComunes, laClaveEsValida } from './contrasena.helpers';

describe ('tieneMayusculasYMinusculas', () => {
  it('deberia devolver false si la clave no tiene mayusculas y minusculas', () => {
    //arrange
    const clave = 'hola';
    //act
     const resultado = tieneMayusculasYMinusculas(clave);
    //assert
    const esperado : ValidacionClave = {
      esValida : false,
      error : 'La clave debe de tener mayúsculas y minúsculas'
    };
    expect(resultado).toEqual(esperado);
  });


  it("deberia devolver true si la clave tiene mayusculas y minusculas", () => {
    //arrange
    const clave = "Hola1@";
    //act
    const resultado = tieneMayusculasYMinusculas(clave);
    //assert
    const esperado: ValidacionClave = {
      esValida: true,
      error: "",
    };
    expect(resultado).toEqual(esperado);
  });

});

describe ('tieneNumeros', () => {
  it('deberia false true si la clave no tiene numeros', () => {
    //arrange
    const clave = 'hola';
    //act
    const resultado = tieneNumeros(clave);

    //assert
    const esperado = {
      esValida : false,
      error : 'La clave debe de tener números'
    };
    expect(resultado).toEqual(esperado);
  });

    it("deberia  true si la clave tiene numeros", () => {
      //arrange
      const clave = "hola1";
      //act
      const resultado = tieneNumeros(clave);

      //assert
      const esperado = {
        esValida: true,
        error: '',
      };
      expect(resultado).toEqual(esperado);
    });
});

describe("tieneCaracteresEspeciales", () => {
  it("deberia false si la clave no tiene caracteres especiales", () => {
    //arrange
    const clave = "hola";
    //act
    const resultado = tieneCaracteresEspeciales(clave);

    //assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
    expect(resultado).toEqual(esperado);
  });

  it("deberia true si la clave tiene caracteres especiales", () => {
    //arrange
    const clave = "hol@";
    //act
    const resultado = tieneCaracteresEspeciales(clave);

    //assert
    const esperado = {
      esValida: true,
      error: "",
    };
    expect(resultado).toEqual(esperado);
  });
});

describe("tieneNumeros", () => {
  it("deberia false true si la clave no tiene numeros", () => {
    //arrange
    const clave = "hola";
    //act
    const resultado = tieneNumeros(clave);

    //assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener números",
    };
    expect(resultado).toEqual(esperado);
  });

  it("deberia  true si la clave tiene numeros", () => {
    //arrange
    const clave = "hola1";
    //act
    const resultado = tieneNumeros(clave);

    //assert
    const esperado = {
      esValida: true,
      error: "",
    };
    expect(resultado).toEqual(esperado);
  });
});

describe("tieneLongitudMinima", () => {
  it("deberia false si la clave no tiene minimo 8 caracteres", () => {
    //arrange
    const clave = "hola";
    //act
    const resultado = tieneLongitudMinima(clave);
    //assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
    expect(resultado).toEqual(esperado);
  });

  it("deberia true si la clave tiene minimo 8 caracteres", () => {
    //arrange
    const clave = "123456789";
    //act
    const resultado = tieneLongitudMinima(clave);

    //assert
    const esperado = {
      esValida: true,
      error: "",
    };
    expect(resultado).toEqual(esperado);
  });
});

describe("tieneNombreUsuario", () => {
  it("Recibe un usuario y contraseña y deberia devolver FALSE si la clave tiene el nombre de usuario", () => {
    //arrange
    const usuario = "pepito";
    const contraseña = "pepito789"

    //act
    const resultado = tieneNombreUsuario(usuario, contraseña)

    //assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    expect(resultado).toEqual(esperado);

  });

  it("Recibe un usuario y contraseña y deberia devolver true si la clave no tiene el nombre de usuario", () => {
    //arrange
    const usuario = "pepito";
    const contraseña = "geronimo789"

    //act
    const resultado = tieneNombreUsuario(usuario, contraseña)

    //assert
    const esperado = {
      esValida: true,
      error: "",
    };
    expect(resultado).toEqual(esperado);
  });
});


describe("tienePalabrasComunes", () => {
  it("deberia true si la clave no tiene palabras comunes", () => {
    //arrange
    const palabrasComunes = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
    ];

    const clave = "hola123";
    //act
    const resultado = tienePalabrasComunes(clave, palabrasComunes);

    //assert
    const esperado = {
      esValida: true,
      error: "",
    };
    expect(resultado).toEqual(esperado);
  });

  it ("deberia false si la clave tiene palabras comunes", () => {
    //arrange
    const palabrasComunes = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
    ];

    const clave = "holapassword123";
    //act
    const resultado = tienePalabrasComunes(clave, palabrasComunes);

    //assert
    const esperado = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
    expect(resultado).toEqual(esperado);
  })
});


describe('laClaveEsValida', () => {

  it('deberia devolver FALSE  y error: "La clave debe de tener números" si no tiene NUMEROS', () => {
    //arrange
    const nombreUsuario = "nomada";
    const clave = "Numeros@";
    const palabrasComunes = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
    ];

    //act
    const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener números",
    };
    expect(resultado).toEqual(esperado);
  });

    it('deberia devolver TRUE  y error: "" si la clave  tiene NUMEROS', () => {
    //arrange
    const nombreUsuario = "nomada";
    const clave = "Numeros@1";
    const palabrasComunes = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
    ];

    //act
    const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: true,
      error: "",
    };
    expect(resultado).toEqual(esperado);
  });

    it("deberia devolver FALSE si la clave no tiene MAYUSCULAS y MINUSCULAS", () => {
      //arrange
      const nombreUsuario = "nomada";
      const clave = "minusculas@123";
      const palabrasComunes = [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein",
        "welcome",
        "monkey",
      ];

      //act
      const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

      //assert
      const esperado = {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      };
      expect(resultado).toEqual(esperado);
    });

    it("deberia devolver TRUE si la clave tiene MAYUSCULAS y MINUSCULAS", () => {
      //arrange
      const nombreUsuario = "nomada";
      const clave = "Minusculas@123";
      const palabrasComunes = [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein",
        "welcome",
        "monkey",
      ];

      //act
      const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

      //assert
      const esperado = {
        esValida: true,
        error: "",
      };
      expect(resultado).toEqual(esperado);
    });

    it("deberia devolver FALSE si la clave no tiene LOGITUD MINIMA DE 8 DIGITOS", () => {
      //arrange
      const nombreUsuario = "nomada";
      const clave = "Longi@1";
      const palabrasComunes = [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein",
        "welcome",
        "monkey",
      ];

      //act
      const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

      //assert
      const esperado = {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      };
      expect(resultado).toEqual(esperado);
    });

        it("deberia devolver TRUE si la clave tiene LOGITUD MINIMA DE 8 DIGITOS", () => {
          //arrange
          const nombreUsuario = "nomada";
          const clave = "Longitud@1";
          const palabrasComunes = [
            "password",
            "123456",
            "qwerty",
            "admin",
            "letmein",
            "welcome",
            "monkey",
          ];

          //act
          const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

          //assert
          const esperado = {
            esValida: true,
            error: "",
          };
          expect(resultado).toEqual(esperado);
        });

  it('deberia devolver FALSE  y error: "La clave debe de tener caracteres especiales" si no tiene CARACTERES ESPECIALES', () => {
    //arrange
    const nombreUsuario = "nomada";
    const clave = "Numeros1";
    const palabrasComunes = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
    ];

    //act
    const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
    expect(resultado).toEqual(esperado);
  });

  it('deberia devolver TRUE  y error: "" si tiene CARACTERES ESPECIALES', () => {
    //arrange
    const nombreUsuario = "nomada";
    const clave = "Numeros1@";
    const palabrasComunes = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
    ];

    //act
    const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: true,
      error: "",
    };
    expect(resultado).toEqual(esperado);
  });

  it('deberia devolver FALSE  y error: "La clave no debe tener el nombre del usuario" si tiene NOMBRE DE USUARIO', () => {
    //arrange
    const nombreUsuario = "nomada";
    const clave = "Nomada1@";
    const palabrasComunes = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
    ];

    //act
    const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    expect(resultado).toEqual(esperado);
  });

  it('deberia devolver TRUE  y error: "" si no tiene NOMBRE DE USUARIO', () => {
    //arrange
    const nombreUsuario = "nomada";
    const clave = "Usuario1@";
    const palabrasComunes = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
    ];

    //act
    const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: true,
      error: "",
    };
    expect(resultado).toEqual(esperado);
  });


  it('deberia devolver FALSE  y error: "La clave no debe tener palabras comunes" si tiene PALABRAS COMUNES', () => {
    //arrange
    const nombreUsuario = "nomada";
    const clave = "Welcome1@";
    const palabrasComunes = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
    ];

    //act
    const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
    expect(resultado).toEqual(esperado);
  });

  it('deberia devolver TRUE  y error: "" si no tiene PALABRAS COMUNES', () => {
    //arrange
    const nombreUsuario = "nomada";
    const clave = "Comunes1@";
    const palabrasComunes = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
    ];

    //act
    const resultado = laClaveEsValida(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: true,
      error: "",
    };
    expect(resultado).toEqual(esperado);
  });
});
