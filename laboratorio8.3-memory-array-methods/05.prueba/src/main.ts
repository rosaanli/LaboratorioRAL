import {InfoCarta, Carta, infoCartas, crearCartaInicial, Tablero} from "./public/modelo"


const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  /* Aquí crearemos un array de cartas a partir de un array de infoCartas
     y duplicaremos las cartas para que haya dos de cada tipo.
  */
  let coleccionCartas : Carta[] = [];
  infoCartas.forEach((infocarta) =>{
  coleccionCartas.push(crearCartaInicial(infocarta.idFoto, infocarta.imagen));
  coleccionCartas.push(crearCartaInicial(infocarta.idFoto, infocarta.imagen));
});
  return coleccionCartas;
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);
console.log("cartas iniciales:", cartas);


export const cartasCopiadas = (cartas: Carta[]) => {
  return cartas.map((carta) => ({
    ...carta
  }));
};

// En el motor nos va a hacer falta un método para barajar cartas
const barajarCartas = (cartas : Carta[]): Carta[] => {
    // Fisher-Yates (in-place)
    for (let i = cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
    return cartas;
  };


export let cartasBarajadas = (barajarCartas(cartasCopiadas(cartas)));
console.log("cartas barajadas:", cartasBarajadas);

const crearTableroInicial = (cartas: Carta[]): Tablero => ({
  cartas: cartas.map(c => ({ ...c, estaVuelta: false, encontrada: false })), // clones independientes
  estadoPartida: "PartidaNoIniciada",
  indiceCartaVolteadaA: undefined,
  indiceCartaVolteadaB: undefined,
});

export let tablero: Tablero = crearTableroInicial(cartasBarajadas);
console.log("este es el tablero:",tablero);

//MOTOR
export type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";




//MOTOR
/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
  //..
}

const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
  //...
}

/*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
  //...
}

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
  //...
}

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
  // ...
}

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
export const esPartidaCompleta =(tablero: Tablero) : boolean => {
  //...
}

/*
Iniciar partida
*/

export const iniciaPartida = (tablero: Tablero): void => {
  //...
};