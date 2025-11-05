
import { divContador, divTablero, botonReiniciarPartida, botonIniciarPartida } from "./constantes";
import { partida, Tablero, cartasCopiadas, cartas, bloquearPartida} from "../public/modelo";
import { sePuedeVoltearLaCarta, sonPareja, barajarCartas, partidaCompleta } from "./motor";


export const aumentarIntentos = () => {
  partida.numeroDeIntentos++;
  divContador.innerHTML = `Número de intentos: ${partida.numeroDeIntentos}`;
};


export const pintaDivCartas = (tablero: Tablero) => {
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


export const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
  const sePuedeVoltear = sePuedeVoltearLaCarta (tablero, indice);

  if (sePuedeVoltear) {
      const divImgCarta = document.querySelector<HTMLImageElement>(`#tablero .card img[data-indice="${indice}"]`);
      if (divImgCarta) {
        tablero.cartas[indice].estaVuelta = true;
        divImgCarta.src = tablero.cartas[indice].imagen;
      }
  }
};




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
        bloquearPartida.estaBloqueadaLaInteraccion = true;
        document.getElementById("tablero")?.classList.add("no-click");
        setTimeout(() => {
          parejaNoEncontrada(tablero, indiceA, indiceB);
          bloquearPartida.estaBloqueadaLaInteraccion = false;
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

export const divPadre = (indice: number) => {
  const divCarta = document.querySelector<HTMLDivElement>(
    `#tablero .card [data-indice="${indice}"]`
  );
  if (divCarta) {
    return divCarta?.closest<HTMLDivElement>(".card");
  } else {
    return null;
  }
};

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  const divCartaA = document.querySelector<HTMLDivElement>(
    `#tablero .card [data-indice="${indiceA}"]`
  );
  const divCartaB = document.querySelector<HTMLDivElement>(
    `#tablero .card [data-indice="${indiceB}"]`
  );

  const divPadreA = divPadre(indiceA);
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

  if (divCartaA) {
    divCartaA.closest<HTMLDivElement>(".card");
  }

  tablero.estadoPartida = "CeroCartasLevantadas";
};


/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
export const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {

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
Iniciar partida
*/


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



export const reiniciarPartida = (tablero: Tablero) => {
  if (botonReiniciarPartida) {
    botonReiniciarPartida.addEventListener("click", () => {
      divTablero!.innerHTML = ""; // limpiar tablero
      partida.numeroDeIntentos = 0;
      divContador.innerHTML = `Número de intentos: ${partida.numeroDeIntentos}`;
      botonIniciarPartida.style.display = "none";
      botonReiniciarPartida.style.display = "none";
      tablero.cartas = barajarCartas(cartasCopiadas(cartas));
      tablero.estadoPartida = "CeroCartasLevantadas";

    pintaDivCartas(tablero);
    handleClickCarta(tablero);
    });
  };
};