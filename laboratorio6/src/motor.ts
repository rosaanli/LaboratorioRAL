import {
  puntuacion
} from './modelo';

export const numeroAleatorio =() => {
  return Math.floor(Math.random()*10)+1;
}


export const numeroDeCarta =(numeroAleatorio:number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio+2;
  }
  return numeroAleatorio;
}

  export const dameUrlCarta = (numeroDeCarta:number) => {

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


  export const obtenerPuntuacion = (numeroDeCarta:number) => {
  if(numeroDeCarta > 7) {
    return 0.5;
  } else {
    return numeroDeCarta;
  }
}

  export const sumaPuntuacion = (puntosCarta:number) => {
  return puntosCarta + puntuacion.puntuacionTotal;
}

  export const actualizarPuntuacionTotal = (puntosSumados:number) => {
  puntuacion.puntuacionTotal = puntosSumados;
}