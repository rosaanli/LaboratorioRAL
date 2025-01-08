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
    puntuacionTotal = 0;
    botonDarCarta.disabled = true;
    botonPlantarse.disabled = true;
    verificarBotones();
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

  if (puntuacionTotal > 7.5) {
    alert("¡ Lo has clavado! ¡Enhorabuena!");
  };
};


const handlePlantarse = () => {
    mePlanto(puntuacionTotal);
    botonPlantarse.disabled = true;
    botonDarCarta.disabled = true;
    puntuacionTotal = 0;
    verificarBotones();
  }

const botonPlantarse = document.getElementById("botonPlantarse") as HTMLButtonElement;
  if (botonPlantarse) {
    botonPlantarse.addEventListener("click", handlePlantarse);
    };


const botonNuevaPartida = document.getElementById("nuevaPartida") as HTMLButtonElement;

const verificarBotones = () => {
  if (botonPlantarse.disabled && botonPlantarse.disabled) {
    botonNuevaPartida.style.display = "block";
  }
}


const nuevaPartida = () => {
      puntuacionTotal = 0;
      actualizarPuntuacion();
      handleSieteyMedia();
      botonPlantarse.disabled = false;
      botonDarCarta.disabled = false;
      botonNuevaPartida.style.visibility = "hidden";
    };

const handleNuevaPartida = () => {
  nuevaPartida();
}

if (botonNuevaPartida) {
  botonNuevaPartida.addEventListener("click", handleNuevaPartida);
}



