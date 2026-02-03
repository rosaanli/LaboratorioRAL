import { validarExtension, validarURL, validarDominio, validarLetra, validarCaracteresEspeciales, noValidarCaracteresEspeciales, validarMatriculaCoche, validarMatriculaAntigua, validarIP, validarNIF, extraerDatosNIF } from "./validaciones";

describe('validarExtension', () => {
  test.each(
    [
      ['.txt', true],
      ['.jpg', true],
      ['.png', true],
      ['.csv', true],
      ["", false],
      [".jpg.", false],
      [".csvv", false],
    ]
  )("deberia devolver para la extensión %p el valor %p ", (extension :string, expected : boolean)=>{
    expect(validarExtension(extension)).toBe(expected);
  })

});

describe("validarURL", () => {
  test.each([
    ["https://www.mibanco.es", true],
    ["https://mibanco.es", true],
    ["https://www.mibanco.com.co", true],
    ["https://www.mibanco.it", true],
    ["", false],
    ["http://www.mibanco.es.", false],
    ["htps://www.mibanco.es", false],
    ["aatps://www.mibanco.es", false],
  ])(
    "deberia devolver para la Url %p el valor %p ",
    (url: string, expected: boolean) => {
      expect(validarURL(url)).toBe(expected);
    },
  );
});

describe("validaDominio", () => {
  test.each([
    ["https://www.mibanco.es", true],
    ["https://mibanco.es", true],
    ["https://www.mibanco.com.co", false],
    ["https://www.mibanco.it", false],
    ["", false],
    ["http://www.mibanco.es.", false],
    ["htps://www.mibanco.es", true],
    ["aatps://www.mibanco.es", true],
  ])(
    "deberia devolver para el dominio %p el valor %p ",
    (dominio: string, expected: boolean) => {
      expect(validarDominio(dominio)).toBe(expected);
    },
  );
});


describe("validarLetra", () => {
  test.each([
    ["03492235A", true],
    ["03492235a", true],
    ["55049803e", true],
    ["x8071400i", true],
    ["03492236", false],
    ["x03492236", false],
    ["aeiou0", false],
    ["", false],
  ])(
    "deberia devolver para la cadena %p el valor %p ",
    (vocal: string, expected: boolean) => {
      expect(validarLetra(vocal)).toBe(expected);
    },
  );
});

describe("validarCaracterEspecial", () => {
  test.each([
    ["x8071400@", true],
    ["03492236&", true],
    ["aeiou0$", true],
    ["03492235A", false],
    ["03492235a", false],
    ["55049803e", false],
    ["", false],
  ])(
    "deberia devolver para la cadena %p consitene el valor %p ",
    (caracter: string, expected: boolean) => {
      expect(validarCaracteresEspeciales(caracter)).toBe(expected);
    },
  );
});


describe("noValidarCaracterEspecial", () => {
  test.each([
    ["A", true],
    ["a", true],
    ["e", true],
    ["@", false],
    ["&", false],
    ["$", false],
  ])(
    "deberia devolver para la cadena %p si no contiene el valor %p ",
    (caracter: string, expected: boolean) => {
      expect(noValidarCaracteresEspeciales(caracter)).toBe(expected);
    },
  );
});


describe("validarMatriculaCoche", () => {
  test.each([
    ["1234 abc", true],
    ["5678 def", true],
    ["9012 ghi", true],
    ["@234 ", false],
    ["1234 567", false],
    ["abcd 123", false],
  ])(
    "deberia devolver para la cadena %p si no contiene el valor %p ",
    (matricula: string, expected: boolean) => {
      expect(validarMatriculaCoche(matricula)).toBe(expected);
    },
  );
});


describe("validarMatriculaAntigua", () => {
  test.each([
    ["M 09345", true],
    ["M 1234 Y", true],
    ["MA 3456 CY", true],
    ["MA 1234 C ", false],
    ["1234 567", false],
    ["0894 BAC", false],
  ])(
    "deberia devolver para la cadena %p si no contiene el valor %p ",
    (matricula: string, expected: boolean) => {
      expect(validarMatriculaAntigua(matricula)).toBe(expected);
    },
  );
});


describe("validarIP", ()=>{
  test.each([
    ["103.456.789", true],
    ["12.345.678", true],
    ["1.1.1", true],
    ["1.1", false],
    ["13234.567.89", false],
    ["123.456.78910", false]
  ]) (
    "para la direcion IP %p deberi devolver %p", (ip : string, expected : boolean) =>{
      expect(validarIP(ip)).toBe(expected);
    }
  )
});

describe("validarNIF", () => {
  test.each([
    ["12345678Q", true],
    ["12345678-Q", true],
    ["12345678Q", true],
    ["12345678_Q", true],
    ["12345678 q", true],
    ["12.345.678 Q", true],
    ["123.456.78910", false],
    ["123.456.78.Q", false],
    ["12345678Q", true],
    ["12345678-Q", true],
    ["12345678 Q", true],
    ["12345678_Q", true],
    ["12.345.678 Q", true],
    ["12345678Q", true],
    ["12345678-Q", true],
    ["12345678 Q", true],
    ["12345678_Q", true],
    ["12345678 q", true],
    ["12.345.678 Q", true],
  ])(
    "para el NIF  %p deberia devolver %p",
    (nif: string, expected: boolean) => {
      expect(validarNIF(nif)).toBe(expected);
    },
  );
});

describe("extraerDatosNIF", () => {
  test.each([
    ["12345678Q", true],
    ["12345678-Q", true],
    ["12345678Q", true],
    ["12.345.671Q", true],
    ["12.345.672 Q", true],
    ["12.345.673-Q", true],
    ["123.456.78910", false],
    ["123.456.78.Q", false],
  ])(
    "para el NIF  %p deberia devolver %p",
    (nif: string, expected: boolean) => {
      expect(extraerDatosNIF(nif)).toBe(expected);
    },
  );
});