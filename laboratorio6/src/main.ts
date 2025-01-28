import {dameUrlCarta,puntuacion,sumaPuntuacion} from "./modelo"

const numeroAleatorio =() => {
  return Math.floor(Math.random()*10)+1;
}

const numeroDeCarta =(numeroAleatorio:number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio+2;
  }
  return numeroAleatorio;
}



const pintaCarta = (dameUrlCarta:string) =>{
  const cartaAPintar = document.getElementById("cartaPrincipal");
  if (cartaAPintar && cartaAPintar instanceof HTMLImageElement){
    cartaAPintar.src= dameUrlCarta;
  }
}




const actualizarPuntuacion = () => {
  const puntuacionElemento = document.getElementById("puntuacion");
  if (puntuacionElemento) {
    puntuacionElemento.innerHTML = puntuacion.puntuacionTotal.toString();
  }
}
document.addEventListener("DOMContentLoaded",actualizarPuntuacion)


const gameOver = () => {
  if (puntuacion.puntuacionTotal >= 7.5) {
    alert("Has perdido");
    botonDarCarta.disabled = true;
    botonPlantarse.disabled = true;
    botonSimular.style.display = "none";
  }
}


const handleSieteyMedia =()=>{
  const generaNumero = numeroAleatorio();
  const dameNumeroDeCarta=numeroDeCarta(generaNumero);
  const urlCarta = dameUrlCarta(dameNumeroDeCarta);
  pintaCarta(urlCarta);
  sumaPuntuacion(dameNumeroDeCarta);
  actualizarPuntuacion();
  gameOver();
  verificarBotones();
}


const botonDarCarta = document.getElementById("botonDarCarta") as HTMLButtonElement;
if (botonDarCarta) {
  botonDarCarta.addEventListener("click", handleSieteyMedia);
}


// PLANTARSE
const mePlanto =(puntuacionTotal:number) => {
  if (puntuacionTotal <= 4) {
      alert("Has sido muy conservador eh");
  };

  if (puntuacionTotal === 5) {
      alert("Te ha entrado el canguelo eh");
  };

  if (puntuacionTotal >= 6 && puntuacionTotal <= 7) {
      alert("Casi casi...");
  };

  if (puntuacionTotal >=7.5) {
    alert("¡ Lo has clavado! ¡Enhorabuena!");
  };
};


const handlePlantarse = () => {
  mePlanto(puntuacion.puntuacionTotal);
  botonPlantarse.disabled = true;
  botonDarCarta.disabled = true;
  verificarBotones();
}


const botonPlantarse = document.getElementById("botonPlantarse") as HTMLButtonElement;
  if (botonPlantarse) {
    botonPlantarse.addEventListener("click", handlePlantarse);
    };


//SIMULAR
const handleSimular = () => {
  handleSieteyMedia();
}

const botonSimular = document.getElementById("simular") as HTMLButtonElement;
  if (botonSimular) {
    botonSimular.addEventListener("click", handleSimular);
  }


// BOTONES
const verificarBotones = () => {
  if (botonPlantarse.disabled && botonDarCarta.disabled) {
    botonNuevaPartida.style.display = "block";

  if (botonPlantarse.disabled && botonDarCarta.disabled && puntuacion.puntuacionTotal < 7.5) {
    botonSimular.style.display = "block";
    } else {
      botonSimular.style.display = "none";
    }
  }
}

const nuevaPartida = () => {
  pintaCarta("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
  botonPlantarse.disabled = false;
  botonDarCarta.disabled = false;
  botonNuevaPartida.style.display = "none";
  botonSimular.style.display = "none";
  puntuacion.puntuacionTotal = 0;
  actualizarPuntuacion();
}


const handleNuevaPartida = () => {
  nuevaPartida();
}

const botonNuevaPartida = document.getElementById("nuevaPartida") as HTMLButtonElement;
if (botonNuevaPartida) {
  botonNuevaPartida.addEventListener("click", handleNuevaPartida);
}


