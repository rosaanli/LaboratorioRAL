import {InfoCarta, Carta, infoCartas, crearCartaInicial, Tablero} from "./public/modelo"


const botonIniciarPartida = document.getElementById(
  "iniciar-partida"
) as HTMLButtonElement;
const divContador = document.getElementById("contador") as HTMLDivElement;

const botonReiniciarPartida = document.getElementById(
  "reiniciar-partida"
) as HTMLButtonElement;

let numeroDeIntentos = 0;

const aumentarIntentos = () => {
  numeroDeIntentos++;
  divContador.innerHTML = `Número de intentos: ${numeroDeIntentos}`;
};


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

// export const cambiaIndiceANumero = (divCarta: HTMLDivElement): number => {
//   const indiceStr = divCarta.dataset.indice;
//   const indiceNum = Number(indiceStr);
//   return indiceNum;
// };

const crearTableroInicial = (cartas: Carta[]): Tablero => ({
  cartas: cartas.map(c => ({ ...c, estaVuelta: false, encontrada: false })), // clones independientes
  estadoPartida: "PartidaNoIniciada",
  indiceCartaVolteadaA: undefined,
  indiceCartaVolteadaB: undefined,
});

export let tablero: Tablero = crearTableroInicial(cartasBarajadas);
console.log("tablero inicial:", tablero);
const divTablero = document.getElementById("tablero");


const pintaDivCartas = (tablero: Tablero) => {
  tablero.cartas.forEach((_, indiceCarta) => {
    const creaDivCarta = document.createElement("div");
    creaDivCarta.classList.add("card");

    const imgCarta = document.createElement("img");
    imgCarta.src = ""; // imagen de la carta boca abajo
    imgCarta.dataset.indice = String(indiceCarta);

    creaDivCarta.appendChild(imgCarta);

    // const imagenCarta = document.querySelectorAll("#tablero .card img") as NodeListOf<HTMLImageElement>;
    // imagenCarta[indiceCarta].src = cartas[indiceCarta].imagen;
    divTablero?.appendChild(creaDivCarta);
  });
};

export const handleClickCarta = (tablero: Tablero): void => {
  const cartas = document.querySelectorAll(`#tablero .card`);
  cartas.forEach((carta, indiceCarta) => {
      carta.addEventListener("click", () => {
        // IGNORAR si ya hay una carta seleccionada y es la misma
        if (
          tablero.estadoPartida === "UnaCartaLevantada" &&
          tablero.indiceCartaVolteadaA === indiceCarta
        ) {
          return alert("No puedes seleccionar la misma carta dos veces.");
        }
        // efecto visual inmediato
        (carta as HTMLDivElement).classList.add("revealed");

        voltearLaCarta(tablero, indiceCarta);
        handleEstadoPartida(tablero, indiceCarta);
        console.log(
          "Estado de la partida después del click:",
          tablero.estadoPartida
        );
      });
  });
};


//MOTOR
export type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

//MOTOR
/*
  Una carta se puede voltear si no está encontrada y no está ya volteada,
  o no hay dos cartas ya volteadas. No se puede dar doble click en la misma carta.
*/
let estaBloqueadaLaInteraccion = false;

const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
  if (estaBloqueadaLaInteraccion) return false;
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



const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
  const sePuedeVoltear = sePuedeVoltearLaCarta (tablero, indice);

  if (sePuedeVoltear) {
      const divImgCarta = document.querySelector<HTMLImageElement>(`#tablero .card img[data-indice="${indice}"]`);
      if (divImgCarta) {
        tablero.cartas[indice].estaVuelta = true;
        divImgCarta.src = tablero.cartas[indice].imagen;
      }
  }
}

export const handleEstadoPartida = (tablero: Tablero, indice: number): void => {
console.log("Manejando estado de partida:", tablero.estadoPartida);

  switch (tablero.estadoPartida) {
    case "CeroCartasLevantadas":
      tablero.indiceCartaVolteadaA = indice;
      tablero.estadoPartida = "UnaCartaLevantada";
      break;

    case "UnaCartaLevantada":

      tablero.indiceCartaVolteadaB = indice;

      const indiceA = tablero.indiceCartaVolteadaA as number;
      const indiceB = tablero.indiceCartaVolteadaB as number;

      const siSonPareja = sonPareja(indiceA, indiceB, tablero);
      if (siSonPareja) {
        parejaEncontrada(tablero, indiceA, indiceB);
      } else {
        estaBloqueadaLaInteraccion = true;
        document.getElementById("tablero")?.classList.add("no-click");
          setTimeout(() => {
            parejaNoEncontrada(tablero, indiceA, indiceB);
            estaBloqueadaLaInteraccion = false;
            document.getElementById("tablero")?.classList.remove("no-click");
            tablero.estadoPartida = "CeroCartasLevantadas";
          }, 1000);
        }
        aumentarIntentos();
        const hasGanado = partidaCompleta(tablero);
         if (hasGanado) {
          tablero.estadoPartida = "PartidaCompleta";
          botonReiniciarPartida.style.display = "block";
         }
      break;

    default:
      console.log("Estado de partida no manejado:", tablero.estadoPartida);
      break;
  }
};



/*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
  const idImgA = tablero.cartas[indiceA].idFoto
  const idImgB = tablero.cartas[indiceB].idFoto
  if (idImgA === idImgB){
    return true;
  } else {
    return false;
  }
}

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/


const divPadre = (indice: number)  => {
  const divCarta = document.querySelector<HTMLDivElement>(`#tablero .card [data-indice="${indice}"]`);
  if (divCarta) {
    return divCarta?.closest<HTMLDivElement>(".card");
  } else {
    return null;
  }
};


const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {

  const divCartaA = document.querySelector<HTMLDivElement>(
    `#tablero .card [data-indice="${indiceA}"]`
  );
  const divCartaB = document.querySelector<HTMLDivElement>(
    `#tablero .card [data-indice="${indiceB}"]`
  );

    const divPadreA = divPadre( indiceA);
    const divPadreB = divPadre(indiceB);

  if (divCartaA && divCartaB && divPadreA && divPadreB) {
    divCartaA.classList.add("no-click");
    divCartaA.style.opacity = "0.6";
    divPadreA.style.backgroundColor = "#bda3f6ff";
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceA].estaVuelta = false;

    divCartaB.classList.add("no-click");
    divCartaB.style.opacity = "0.6";
    divPadreB.style.backgroundColor = "#bda3f6ff";
    tablero.cartas[indiceB].encontrada = true;
    tablero.cartas[indiceB].estaVuelta = false;
  }

  if (divCartaA){
      divCartaA.closest<HTMLDivElement>(".card");
  }

  tablero.estadoPartida = "CeroCartasLevantadas";
}

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {

  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;

  // quitar la clase visual 'revealed' de los div.card padres (si existen)
  const divCardA = document
    .querySelector<HTMLDivElement>(
      `#tablero .card img[data-indice="${indiceA}"]`
    )
    ?.closest(".card");
  const divCardB = document
    .querySelector<HTMLDivElement>(
      `#tablero .card img[data-indice="${indiceB}"]`
    )
    ?.closest(".card");

  if (divCardA) divCardA.classList.remove("revealed");
  if (divCardB) divCardB.classList.remove("revealed");

  tablero.estadoPartida = "CeroCartasLevantadas";
}

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
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


/*
Iniciar partida
*/

export const reiniciarPartida = (tablero: Tablero) => {
  if (botonReiniciarPartida) {
    botonReiniciarPartida.addEventListener("click", () => {
      divTablero!.innerHTML = ""; // limpiar tablero
      numeroDeIntentos = 0;
      divContador.innerHTML = `Número de intentos: ${numeroDeIntentos}`;
      botonIniciarPartida.style.display = "none";
      botonReiniciarPartida.style.display = "none";
      tablero.cartas = barajarCartas(cartasCopiadas(cartas));
      tablero.estadoPartida = "CeroCartasLevantadas";

    pintaDivCartas(tablero);
    handleClickCarta(tablero);
    });
  };
};

export const iniciaPartida = (tablero: Tablero): void => {
    if (botonIniciarPartida) {
      botonIniciarPartida.addEventListener("click", () => {
        tablero.estadoPartida = "CeroCartasLevantadas";
        if (divTablero) {
          divTablero.innerHTML = ""; // limpiar tablero
          pintaDivCartas(tablero);
          handleClickCarta (tablero);
          botonIniciarPartida.style.display = "none";
          divContador.style.display = "block";
          console.log("estado partida al iniciar:", tablero.estadoPartida);
        }
      });
    }
  }

reiniciarPartida(tablero);
iniciaPartida(tablero);