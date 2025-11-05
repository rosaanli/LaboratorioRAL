
//INTERFACES
export interface Partida {
  numeroDeIntentos: number;
};

export interface BloquearPartida {
  estaBloqueadaLaInteraccion: boolean;
};

export interface InfoCarta {
  idFoto: number;
  imagen: string;
}

export interface Carta {
  idFoto: number; // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
  // el ID se repete 2 veces en el array de cartas (hay dos cartas de un perro, hay dos cartas de un gato)
  imagen: string; // por comodidad repetimos la url de la imagen
  estaVuelta: boolean;
  encontrada: boolean;
}

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

/*
  Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
  EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
*/
//TYPES DE DATOS
export type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";


//DATOS INICIALES
export const infoCartas: InfoCarta[] = [
  /* Aquí ponemos seis cartas siguiendo la interfaz de InfoCarta */
    {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
  }
];



//
export const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

export const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  /* Aquí crearemos un array de cartas a partir de un array de infoCartas
     y duplicaremos las cartas para que haya dos de cada tipo.
  */
  let coleccionCartas: Carta[] = [];
  infoCartas.forEach((infocarta) => {
    coleccionCartas.push(crearCartaInicial(infocarta.idFoto, infocarta.imagen));
    coleccionCartas.push(crearCartaInicial(infocarta.idFoto, infocarta.imagen));
  });
  return coleccionCartas;
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

export const cartasCopiadas = (cartas: Carta[]) => {
  return cartas.map((carta) => ({
    ...carta,
  }));
};

export const crearTableroInicial = (cartas: Carta[]): Tablero => ({
  cartas: cartas.map((c) => ({ ...c, estaVuelta: false, encontrada: false })), // clones independientes
  estadoPartida: "PartidaNoIniciada",
  indiceCartaVolteadaA: undefined,
  indiceCartaVolteadaB: undefined,
});

export const partida: Partida = {
  numeroDeIntentos: 0,
};

export const bloquearPartida = {
  estaBloqueadaLaInteraccion: false,
};


