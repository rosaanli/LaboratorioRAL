import {validarClave} from './constrasena'

describe('validarClave', ()=>{
  it ('deberia devolver TRUE si cumple con todos los requisitos de seguridad', () => {
    //arrange
    const clave = "TodoValido@1"
    const nombreUsuario = "nomada"
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
    const resultado = validarClave(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {esValida: true, error : ""};
    expect (resultado).toEqual(esperado);
  })


  it("deberia devolver False si no tiene NUMEROS", () => {
    //arrange
    const clave = "NoTodoValido@";
    const nombreUsuario = "nomada";
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
    const resultado = validarClave(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: false,
      error:
        "no cumple con alguno de los requisitos de seguridad : La clave debe de tener números",
    };
    expect(resultado).toEqual(esperado);
  });

  it("deberia devolver False si no tiene LONGITUD MININA 8 caracteres", () => {
    //arrange
    const clave = "No@1";
    const nombreUsuario = "nomada";
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
    const resultado = validarClave(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: false,
      error:
        "no cumple con alguno de los requisitos de seguridad : La clave debe de tener una longitud mínima de 8 caracteres",
    };
    expect(resultado).toEqual(esperado);
  });

  it("deberia devolver False si tiene el NOMBRE DE USUARIO", () => {
    //arrange
    const clave = "Nomada@1";
    const nombreUsuario = "nomada";
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
    const resultado = validarClave(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: false,
      error:
        "no cumple con alguno de los requisitos de seguridad : La clave no debe tener el nombre del usuario",
    };
    expect(resultado).toEqual(esperado);
  });

  it("deberia devolver False si tiene el PALABRAS COMUNES", () => {
    //arrange
    const clave = "Monkey@1";
    const nombreUsuario = "nomada";
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
    const resultado = validarClave(clave, nombreUsuario, palabrasComunes);

    //assert
    const esperado = {
      esValida: false,
      error:
        "no cumple con alguno de los requisitos de seguridad : La clave no debe de contener palabras comunes",
    };
    expect(resultado).toEqual(esperado);
  });
})
