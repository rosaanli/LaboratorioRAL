let puntuacionTotal:number = 0;

const numeroAleatorio =() => {
  return Math.floor(Math.random()*10)+1;
}

const numeroDeCarta =(numeroAleatorio:number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio+2;
  }
  return numeroAleatorio;
}

const dameUrlCarta = (numeroDeCarta:number) => {

  switch (numeroDeCarta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
    default :
      return "esto no existe";
  }
}

const pintaCarta = (dameUrlCarta:string) =>{
  const cartaAPintar = document.getElementById("cartaPrincipal");
  if (cartaAPintar && cartaAPintar instanceof HTMLImageElement){
    cartaAPintar.src= dameUrlCarta;
  }
}

const obtenerPuntuacion = (numeroDeCarta:number) => {
  if(numeroDeCarta > 7) {
    return 0.5;
  } else {
    return numeroDeCarta;
  }
}

const sumaPuntuacion = (puntosCarta:number) => {
  return puntosCarta + puntuacionTotal;
}

const actualizarPuntuacionTotal = (puntosSumados:number) => {
  puntuacionTotal = puntosSumados;
}

const mostrarPuntuacion = () => {
  const puntuacion= document.getElementById("puntuacion");
  if (puntuacion) {
    puntuacion.innerHTML = puntuacionTotal.toString();
  }
}
document.addEventListener("DOMContentLoaded",mostrarPuntuacion)


const onBotonPlantarse =() => {
  if(botonPlantarse instanceof HTMLButtonElement){
    botonPlantarse.disabled = false;
    botonPlantarse.style.display = "none";
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

const offBotonPlantarse =()=> {
  if(botonPlantarse instanceof HTMLButtonElement){
    botonPlantarse.disabled = true;
  }
}

const offBotonNuevaPartida = ()=> {
  if(botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.disabled = true;
  }
};

const ocultarBotonSimular = () => {
  if(botonSimular instanceof HTMLButtonElement){
    botonSimular.style.display = "none";
  }
}

const ocultarBotonNuevaPartida =() => {
  if (botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.style.display = "none";
  }
}

const gestionarPartida = () => {
  if (puntuacionTotal >= 7.5) {
    alert("Has perdido");
    offBotonDarCarta();
    offBotonPlantarse();
    ocultarBotonSimular()
  }
  if(puntuacionTotal === 7.5){
    alert("Has ganado!");
    offBotonDarCarta();
    offBotonPlantarse();
    ocultarBotonSimular()
  }
}

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

const handleSieteyMedia =()=>{
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
  verificarBotones();
}

const verificarBotones = () => {
  if (
    botonNuevaPartida instanceof HTMLButtonElement &&
    botonPlantarse instanceof HTMLButtonElement &&
    botonDarCarta instanceof HTMLButtonElement
  ) {
    if (botonDarCarta.disabled && botonPlantarse.disabled && botonSimular) {
      botonSimular.style.display = "block";
      botonNuevaPartida.style.display = "block";
    } else {
      ocultarBotonSimular();
      ocultarBotonNuevaPartida();
    }
  }
};

const handlePlantarse = () => {
  mePlanto(puntuacionTotal);
  offBotonPlantarse();
  offBotonDarCarta();
  verificarBotones();
}

const handleSimular = () => {
  handleSieteyMedia();
}

const nuevaPartida = () => {
  pintaCarta("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
  onBotonPlantarse();
  onBotonDarCarta();
  ocultarBotonNuevaPartida();
  ocultarBotonSimular();
  puntuacionTotal = 0;
  mostrarPuntuacion();
}


const handleNuevaPartida = () => {
  nuevaPartida();
}

const botonDarCarta = document.getElementById("botonDarCarta") as HTMLButtonElement;
if (botonDarCarta && botonDarCarta instanceof HTMLButtonElement) {
  botonDarCarta.addEventListener("click", handleSieteyMedia);
}

const botonPlantarse = document.getElementById("botonPlantarse");
if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", handlePlantarse);
    };

const botonNuevaPartida = document.getElementById("nuevaPartida");
if (botonNuevaPartida  && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", handleNuevaPartida);
}

const botonSimular = document.getElementById("simular");
  if (botonSimular && botonSimular instanceof HTMLButtonElement) {
    botonSimular.addEventListener("click", handleSimular);
  }

