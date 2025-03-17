import { EstadoPartida, partida } from "./modelo";
import {numeroDeCarta,numeroAleatorio, obtenerPuntuacion, gestionarEstadoPartida} from "./motor";
import {vi} from "vitest";

describe ("numeroAleatorio", () => {
  it ("Deberia devolver un 8 cuando mathRandom devuelva un 0.8", () => {
    //arrange
    const resultadoEsperado = 8;
    vi.spyOn(Math, "random").mockReturnValue(0.7);
    //act
    const resultado = numeroAleatorio();
    //assert
    expect(resultado).toBe(resultadoEsperado);
  });
})


describe("numeroDeCarta", () => {
  it("Si el número aleatorio es 8 deberia sumarle 2 y como resultado dar 10", () => {
    //arrange
    const numeroAleatorio=8;
    const resultadoEsperado = 10;
    //act
    const resultado = numeroDeCarta(numeroAleatorio);

    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("numeroDeCarta", () => {
  it("Si el número aleatorio es 7 deberia devolver 7 ", () => {
    //arrange
    const numeroAleatorio=7;
    const resultadoEsperado = 7;
    //act
    const resultado = numeroDeCarta(numeroAleatorio);

    expect(resultado).toBe(resultadoEsperado);
  });
});

describe ("obtenerPuntuacion", () => {
  it("Si numeroDeCarta es 8 deberia devolver 0.5", () => {
    //arrange
    const numeroDeCarta = 8;
    const resultadoEsperado = 0.5;
    //act
    const resultado = obtenerPuntuacion(numeroDeCarta);
    //assert
    expect(resultado).toBe(resultadoEsperado);
  })
});

describe ("obtenerPuntuacion", () => {
  it("Si numeroDeCarta es 7 deberia devolver 7", () => {
    //arrange
    const numeroDeCarta = 7;
    const resultadoEsperado = 7;
    //act
    const resultado = obtenerPuntuacion(numeroDeCarta);
    //assert
    expect(resultado).toBe(resultadoEsperado);
  })
});

describe ("gestionarEstadoPartida", ()=>{
  it ("Debería devolver seguir jugando cuando la puntuacionTotal sea menor a 7.5", ()=>{
    //arrange
    const resultadoEsperado: EstadoPartida = "seguir_jugando";
    vi.spyOn(partida,"puntuacionTotal", "get").mockReturnValue(5);
    //act
    const resultado = gestionarEstadoPartida();
    //assert
    expect(resultado).toBe(resultadoEsperado);
  })

  it ("Debería de devolcer ganar cuando la puntuacuionTotal sea === 7.5", ()=>{
    //arrange
    const resultadoEsperado : EstadoPartida = "ganar";
    vi.spyOn(partida,"puntuacionTotal", "get").mockReturnValue(7.5);
    //act
    const resultado = gestionarEstadoPartida();
    //assert
    expect(resultado).toBe(resultadoEsperado);
  })

  it ("Debería de devoler perder cuando la puntuacuionTotal sea > 7.5", ()=>{
    //arrange
    const resultadoEsperado : EstadoPartida = "perder";
    vi.spyOn(partida,"puntuacionTotal", "get").mockReturnValue(8);
    //act
    const resultado = gestionarEstadoPartida();
    //assert
    expect(resultado).toBe(resultadoEsperado);
  })
})