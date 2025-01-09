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
      break;
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
      break;
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
    default :
      return "esto no existe";
      break;
  }
}


const pintaCarta = (dameUrlCarta:string) =>{
  const cartaAPintar = document.getElementById("cartaPrincipal");
  if (cartaAPintar && cartaAPintar instanceof HTMLImageElement){
    cartaAPintar.src= dameUrlCarta;
  }
}


const sumaPuntuacion = (numeroDeCarta:number) => {
  if (numeroDeCarta > 7){
    return puntuacionTotal += 0.5;
  } else {
    return puntuacionTotal += numeroDeCarta;
  }
}

const actualizarPuntuacion = () => {
  const puntuacion= document.getElementById("puntuacion");
  if (puntuacion) {
    puntuacion.innerHTML = puntuacionTotal.toString();
  }
}
document.addEventListener("DOMContentLoaded",actualizarPuntuacion)


const gameOver = () => {
  if (puntuacionTotal >= 7.5) {
    alert("Has perdido");
    botonDarCarta.disabled = true;
    botonPlantarse.disabled = true;
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

  if (puntuacionTotal === 7.5) {
    alert("¡ Lo has clavado! ¡Enhorabuena!");
  };
};


const handlePlantarse = () => {
  mePlanto(puntuacionTotal);
  botonPlantarse.disabled = true;
  botonDarCarta.disabled = true;
  verificarBotones();
}


const botonPlantarse = document.getElementById("botonPlantarse") as HTMLButtonElement;
  if (botonPlantarse) {
    botonPlantarse.addEventListener("click", handlePlantarse);
    };


const botonNuevaPartida = document.getElementById("nuevaPartida") as HTMLButtonElement;

const verificarBotones = () => {
  if (botonPlantarse.disabled && botonDarCarta.disabled) {
    botonNuevaPartida.style.display = "block";
  }
}

const nuevaPartida = () => {
  botonPlantarse.disabled = false;
  botonDarCarta.disabled = false;
  botonNuevaPartida.style.display = "none";
  puntuacionTotal = 0;
  actualizarPuntuacion();
}

const gameoverNuevaPartida = () => {
  if (botonPlantarse.disabled && botonDarCarta.disabled) {
  botonPlantarse.disabled = true;
  botonDarCarta.disabled = true;
  botonNuevaPartida.style.display= "block";
  }
}

const handleNuevaPartida = () => {
  nuevaPartida();
  gameoverNuevaPartida();
}


if (botonNuevaPartida) {
  botonNuevaPartida.addEventListener("click", handleNuevaPartida);
}




const handleSimular = () => {
}

const botonSimular = document.getElementById("simular") as HTMLButtonElement;
  if (botonSimular) {
    botonSimular.addEventListener("click", handleSimular);
  }





