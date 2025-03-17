import {
  numeroDeCarta,
  dameUrlCarta,
  obtenerPuntuacion,
  sumaPuntuacion,
  actualizarPuntuacionTotal,
  numeroAleatorio,
  gestionarEstadoPartida,
} from './motor';

import {
  partida
} from './modelo';

export const botonDarCarta = document.getElementById("botonDarCarta");
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
    puntuacionDiv.innerHTML = partida.puntuacionTotal.toString();
  }
}

const offBotonDarCarta =() => {
  if(botonDarCarta instanceof HTMLButtonElement){
    botonDarCarta.disabled = true;
  }
}



  export const handleSieteyMedia =()=>{
  const generaNumero : number = numeroAleatorio();
  const dameNumeroDeCarta = numeroDeCarta(generaNumero);
  const urlCarta : string = dameUrlCarta(dameNumeroDeCarta);
  pintaCarta(urlCarta);
  const puntosCarta = obtenerPuntuacion(dameNumeroDeCarta);
  const puntosSumados=sumaPuntuacion(puntosCarta);
  actualizarPuntuacionTotal(puntosSumados);
  mostrarPuntuacion();
  onBotonPlantarse();
  gestionarPartida();
}

  export const handlePlantarse = () => {
  mePlanto(partida.puntuacionTotal);
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
  partida.puntuacionTotal = 0;
  partida.estadoPartida="seguir_jugando";
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

export const gestionarPartida = () => {
  if (gestionarEstadoPartida()==="perder") {
    alert("Has perdido");
    offBotonDarCarta();
    offBotonPlantarse();
    ocultarBotonSimular();
    mostrarBotonNuevaPartida();
  }
  if(gestionarEstadoPartida()==="ganar"){
    alert("Has ganado!");
    offBotonDarCarta();
    offBotonPlantarse();
    ocultarBotonSimular()
    mostrarBotonNuevaPartida();
  }
}

//testear??
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