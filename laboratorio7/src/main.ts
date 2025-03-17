import {} from "./motor";

import {} from "./modelo";

import {
  handleNuevaPartida,
  handlePlantarse,
  handleSieteyMedia,
  handleSimular,
  mostrarPuntuacion,
  botonDarCarta,
  botonPlantarse,
  botonNuevaPartida,
  botonSimular,
} from "./ui";


document.addEventListener("DOMContentLoaded",mostrarPuntuacion);


if (botonDarCarta && botonDarCarta instanceof HTMLButtonElement) {
  botonDarCarta.addEventListener("click", handleSieteyMedia);
}

if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", handlePlantarse);
    };


if (botonNuevaPartida  && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", handleNuevaPartida);
}

if (botonSimular && botonSimular instanceof HTMLButtonElement) {
  botonSimular.addEventListener("click", handleSimular);
}
