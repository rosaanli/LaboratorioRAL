
import { divContador, divTablero, botonReiniciarPartida, botonIniciarPartida } from "./constantes";
import { partida, Tablero, cartasCopiadas, cartas, } from "./modelo";
import { sePuedeVoltearLaCarta, sonPareja, barajarCartas, partidaCompleta, voltearLaCarta, parejaEncontrada, parejaNoEncontrada} from "./motor";


export const aumentarIntentos = () => {
  partida.numeroDeIntentos++;
  divContador.innerHTML = `Número de intentos: ${partida.numeroDeIntentos}`;
};


export const pintaDivCartas = (tablero: Tablero) => {
  tablero.cartas.forEach((_, indiceCarta) => {
    const creaDivCarta = document.createElement("div");
    creaDivCarta.classList.add("card");

    const imgCarta = document.createElement("img");
    //imgCarta.src = ""; // imagen de la carta boca abajo
    imgCarta.dataset.indice = String(indiceCarta);
    imgCarta.style.visibility = "hidden"; // Ocultar hasta que se voltee la carta

    creaDivCarta.appendChild(imgCarta);

    divTablero?.appendChild(creaDivCarta);
  });
};

export const handleClickCarta = (tablero: Tablero): void => {
    console.log(tablero);
  const cartas = document.querySelectorAll(`#tablero .card`);
  cartas.forEach((carta, indiceCarta) => {
    carta.addEventListener("click", () => {
      if (sePuedeVoltearLaCarta(tablero, indiceCarta)) {
        voltearLaCarta(tablero, indiceCarta);
        mostrarImagen(tablero, indiceCarta);
        comprobarSiEsSegundaCarta(tablero);
      } else {
        console.log("no se puede voltear esta carta");
      }
    });
  });
};

export const mostrarImagen = (tablero: Tablero, indice: number): void => {
  const divImgCarta = document.querySelector<HTMLImageElement>(`#tablero .card img[data-indice="${indice}"]`);
  if (divImgCarta) {
    divImgCarta.src = tablero.cartas[indice].imagen;
    divImgCarta.style.visibility = "visible"; // Hacer visible la imagen
  }
}

const comprobarSiEsSegundaCarta = (tablero: Tablero) => {
  const indiceCartaA = tablero.indiceCartaVolteadaA;
  const indiceCartaB = tablero.indiceCartaVolteadaB;

    if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
      sonPareja(indiceCartaA, indiceCartaB, tablero) ? heEncontradoLaPareja(indiceCartaA, indiceCartaB, tablero) : noHeEncontradoLaPareja(indiceCartaA, indiceCartaB, tablero);
      aumentarIntentos();
  };
};

const heEncontradoLaPareja = (indiceCartaA: number, indiceCartaB: number, tablero: Tablero) => {
  parejaEncontrada(indiceCartaA, indiceCartaB, tablero);
  if (partidaCompleta(tablero)) {
    console.log('Enhorabuena, has completado la partida');
    botonReiniciarPartida.style.display = "block";
  }
}

const noHeEncontradoLaPareja = (indiceCartaA: number, indiceCartaB: number, tablero: Tablero) => {
  parejaNoEncontrada(indiceCartaA, indiceCartaB, tablero);
  voltearCartaBocaAbajo(tablero);
}

const voltearCartaBocaAbajo = (tablero: Tablero) => {
  setTimeout(() => {
    voltearBocaAbajo(tablero);
  }, 1000)
}

const voltearBocaAbajo = (tablero: Tablero) => {
  for (let indice = 0; indice < tablero.cartas.length; indice++) {
    const elementoImagen = document.querySelector(`img[data-indice="${indice}"]`);

    if (!tablero.cartas[indice].encontrada && !tablero.cartas[indice].estaVuelta) {
      if (elementoImagen !== null && elementoImagen !== undefined && elementoImagen instanceof HTMLImageElement) {
        //elementoImagen.src = '';
        elementoImagen.style.visibility = "hidden";
      }
    }
  }
}


export const iniciaPartida = (tablero: Tablero): void => {
    if (botonIniciarPartida) {
      botonIniciarPartida.addEventListener("click", () => {
        tablero.estadoPartida = "CeroCartasLevantadas";
        if (divTablero) {
          pintaDivCartas(tablero);
          handleClickCarta (tablero);
          botonIniciarPartida.style.display = "none";
          divContador.style.display = "block";
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

