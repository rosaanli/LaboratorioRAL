import { bloquearPartida, Carta, Tablero} from "../public/modelo"



// En el motor nos va a hacer falta un método para barajar cartas
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
    if (bloquearPartida.estaBloqueadaLaInteraccion) return false;
    // obtener las cartas del tablero
    const cantidadCartasVolteadas = tablero.cartas.reduce((acc, carta) => {
      if (carta.estaVuelta) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    const carta = tablero.cartas[indice]
      if (carta && !carta.estaVuelta && !carta.encontrada && cantidadCartasVolteadas < 2) {
        return true;
      } else {
        return false;
      }
  }

  /*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
  export const sonPareja = (
    indiceA: number,
    indiceB: number,
    tablero: Tablero
  ): boolean => {
    const idImgA = tablero.cartas[indiceA].idFoto;
    const idImgB = tablero.cartas[indiceB].idFoto;
    if (idImgA === idImgB) {
      return true;
    } else {
      return false;
    }
  };

  export const partidaCompleta = (tablero: Tablero): boolean => {
    return tablero.cartas.every((carta) => carta.encontrada);
    /* Usando contador

     const cantidadCartasEncontradas = tablero.cartas.reduce((acc, carta) => {
      if (carta.encontrada === true) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    console.log("Cantidad de cartas encontradas:", cantidadCartasEncontradas);
    tablero.estadoPartida = "PartidaCompleta";
    return cantidadCartasEncontradas === tablero.cartas.length;*/
  };
