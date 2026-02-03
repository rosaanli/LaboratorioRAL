import { codigoBanco, estaBienFormado, esValido, mostrarNombreBanco, limpiarNumero } from "./cuenta-validaciones";

describe("estaBienFormado", ()=>{
  test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
    ["ES.66.2100.0418.40.1234567891", false],
    ["ES*66*2100*0418*40*1234567891", false],
    ["ES662100041840123456789", false],
  ])(
    "deberia devolver para el IBAN %p  el valor %p",
    (numeroIBAN: string, expected: boolean) => {
      expect(estaBienFormado(numeroIBAN)).toBe(expected);
    },
  );
})



describe("limpiarNumero", () => {
  it("deberia devolver el iban modificado sin espacios ni guiones", () => {
    //arrange
    const numeroIBAN: string = "ES21-1465-0100-72-2030876293";
    //act
    const esperado = "ES2114650100722030876293";
    const resultado = limpiarNumero(numeroIBAN);
    //assert
    expect(resultado).toBe(esperado);
  });

  it("deberia devolver el iban modificado sin espacios ni guiones", () => {
    //arrange
    const numeroIBAN: string = "ES21 1465 0100 72 2030876293";
    //act
    const esperado = "ES2114650100722030876293";
    const resultado = limpiarNumero(numeroIBAN);
    //assert
    expect(resultado).toBe(esperado);
  });

  it("deberia devolver el iban modificado sin espacios ni guiones", () => {
    //arrange
    const numeroIBAN: string = "ES2114650100722030876293";
    //act
    const esperado = "ES2114650100722030876293";
    const resultado = limpiarNumero(numeroIBAN);
    //assert
    expect(resultado).toBe(esperado);
  });


  test.each([
    ["ES2114650100722030876293", "ES2114650100722030876293"],
    ["ES21-1465-0100-72-2030876293", "ES2114650100722030876293"],
    ["ES 66 2100 0418 40 1234567891", "ES6621000418401234567891"],
  ])(
    "deberia devolver para el IBAN %p  el valor %p",
    (numeroIBAN: string, expected: string) => {
      expect(limpiarNumero(numeroIBAN)).toBe(expected);
    },
  );
});


describe("limpiarNumero", () => {
  it("deberia devolver el iban modificado sin espacios ni guiones", () => {
    //arrange
    const numeroIBAN: string = "ES21-1465-0100-72-2030876293";
    //act
    const esperado = "ES2114650100722030876293";
    const resultado = limpiarNumero(numeroIBAN);
    //assert
    expect(resultado).toBe(esperado);
  });
});




describe("esValida", () => {
  test.each([
    ["ES9121000418450200051332", true],
    ["ES7921000813610123456789", true],
    ["ES6621000418401234567891", true],
    ["ES6000491500051234567892", true],
    ["ES9000246912501234567891", true],
    ["ES9420805801101234567891", true],
    ["ES7100302053091234567895", true],
    ["ES66210004184012345678", false],
    ["ES66210004184012345678", false],
  ])(
    "deberia devolver para el IBAN %p  el valor %p",
    (numeroIBAN: string, expected: boolean) => {
      expect(esValido(numeroIBAN)).toBe(expected);
    },
  );
});



describe("codigoBanco", () => {
  test.each([
    ["ES9121000418450200051332", "2100"],
    ["ES7921000813610123456789", "2100"],
    ["ES6621000418401234567891", "2100"],
    ["ES6000491500051234567892", "0049"],
    ["ES9000246912501234567891", "0024"],
  ])(
    "deberia devolver para el IBAN %p  el valor %p",
    (numeroIBAN: string, expected: string) => {
      expect(codigoBanco(numeroIBAN)).toBe(expected);
    },
  );
});


describe("mostrarnombreBanco", () => {
  test.each([
    ["2100", "Caixabank"],
    ["2100", "Caixabank"],
    ["2100", "Caixabank"],
    ["0049", "Banco Santander"],
    ["0024", "Banco de credito Balear"],
  ])(
    "deberia devolver para el IBAN %p  el valor %p",
    (numeroIBAN: string, expected: string) => {
      expect(mostrarNombreBanco(numeroIBAN)).toBe(expected);
    },
  );
});
