import {Carta, Tablero} from "../public/modelo"

export const barajarCartas = (cartas : Carta[]): Carta[] => {
    // Fisher-Yates (in-place)
    for (let i = cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
    return cartas;
  };

/*
  Una carta se puede voltear si no está encontrada y no está ya volteada,
  o no hay dos cartas ya volteadas. No se puede dar doble click en la misma carta.
*/
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  return (
    !tablero.cartas[indice].encontrada && !tablero.cartas[indice].estaVuelta
  );
  }

export const voltearLaCarta = (tablero: Tablero, indice: number) => {
  tablero.cartas[indice].estaVuelta = true;

  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.estadoPartida = "UnaCartaLevantada";
    tablero.indiceCartaVolteadaA = indice;
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.estadoPartida = "DosCartasLevantadas";
    tablero.indiceCartaVolteadaB = indice;
  }
};

  /*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
  const idImgA = tablero.cartas[indiceA].idFoto;
  const idImgB = tablero.cartas[indiceB].idFoto;

  return idImgA === idImgB;
};

export const parejaEncontrada = (indiceA: number,indiceB: number,tablero: Tablero) => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const parejaNoEncontrada = (indiceA: number,indiceB: number,tablero: Tablero) => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const partidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.encontrada);
};
