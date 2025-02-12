import {
  numeroDeCarta,
  dameUrlCarta,
  obtenerPuntuacion,
  sumaPuntuacion,
  actualizarPuntuacionTotal,
  numeroAleatorio
} from './motor';

import {
  puntuacion
} from './modelo';

export const botonDarCarta = document.getElementById("botonDarCarta") as HTMLButtonElement;
export const botonPlantarse = document.getElementById("botonPlantarse");
export const botonNuevaPartida = document.getElementById("nuevaPartida");
export const botonSimular = document.getElementById("simular");

export const pintaCarta = (dameUrlCarta:string) =>{
  const cartaAPintar = document.getElementById("cartaPrincipal");
  if (cartaAPintar && cartaAPintar instanceof HTMLImageElement){
    cartaAPintar.src= dameUrlCarta;
  }
}


export const mostrarPuntuacion = () => {
  const puntuacionDiv= document.getElementById("puntuacion");
  if (puntuacionDiv){
    puntuacionDiv.innerHTML = puntuacion.puntuacionTotal.toString();
  }
}

const gestionarPartida = () => {
  if (puntuacion.puntuacionTotal > 7.5) {
    alert("Has perdido");
    offBotonDarCarta();
    offBotonPlantarse();
    ocultarBotonSimular();
    mostrarBotonNuevaPartida();
  }
  if(puntuacion.puntuacionTotal === 7.5){
    alert("Has ganado!");
    offBotonDarCarta();
    offBotonPlantarse();
    ocultarBotonSimular()
    mostrarBotonNuevaPartida();
  }
}

  export const mePlanto =(puntuacionTotal:number) => {
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

  export const handleSieteyMedia =()=>{
  const generaNumero = numeroAleatorio();
  const dameNumeroDeCarta=numeroDeCarta(generaNumero);
  const urlCarta = dameUrlCarta(dameNumeroDeCarta);
  pintaCarta(urlCarta);
  const puntosCarta = obtenerPuntuacion(dameNumeroDeCarta);
  const puntosSumados=sumaPuntuacion(puntosCarta);
  actualizarPuntuacionTotal(puntosSumados);
  mostrarPuntuacion();
  onBotonPlantarse();
  gestionarPartida();
}

  export const handlePlantarse = () => {
  mePlanto(puntuacion.puntuacionTotal);
  offBotonPlantarse();
  offBotonDarCarta();
  mostrarBotonSimular();
  mostrarBotonNuevaPartida();
}

  export const handleSimular = () => {
  handleSieteyMedia();
  offBotonPlantarse();
  gestionarPartida();
}


  export const handleNuevaPartida = () => {
  pintaCarta("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
  onBotonDarCarta();
  ocultarBotonNuevaPartida();
  ocultarBotonSimular();
  puntuacion.puntuacionTotal = 0;
  mostrarPuntuacion();
  gestionarPartida();
}

const onBotonPlantarse =() => {
  if(botonPlantarse instanceof HTMLButtonElement){
    botonPlantarse.disabled = false;
    botonPlantarse.style.display = "block";
  }
}
const offBotonPlantarse =()=> {
  if(botonPlantarse instanceof HTMLButtonElement){
    botonPlantarse.disabled = true;
  }
}


const onBotonDarCarta = () => {
  if(botonDarCarta instanceof HTMLButtonElement){
    botonDarCarta.disabled = false;
  }
}
const offBotonDarCarta =() => {
  if(botonDarCarta instanceof HTMLButtonElement){
    botonDarCarta.disabled = true;
  }
}

const mostrarBotonSimular =()=> {
  if(botonSimular instanceof HTMLButtonElement){
    botonSimular.style.display = "block";
  }
}
const ocultarBotonSimular = () => {
  if(botonSimular instanceof HTMLButtonElement){
    botonSimular.style.display = "none";
  }
}

const mostrarBotonNuevaPartida =() => {
  if (botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.style.display = "block";
  }
}
const ocultarBotonNuevaPartida =() => {
  if (botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.style.display = "none";
  }
}

