import {
  partida
} from './modelo';

//testear ok
export const numeroAleatorio = () : number => {
  return Math.floor(Math.random()*10)+1;
}

//testear ok, mayor y menor que 7
export const numeroDeCarta = (numeroAleatorio:number) :number => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio+2;
  }
  return numeroAleatorio;
}

  export const dameUrlCarta = (numeroDeCarta:number) : string => {

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

//testear (siempre que tenemos if testeamos todas las bifurcaciones)
  export const obtenerPuntuacion = (numeroDeCarta:number) : number => {
  if(numeroDeCarta > 7) {
    return 0.5;
  } else {
    return numeroDeCarta;
  }
}

  export const sumaPuntuacion = (puntosCarta:number) :number => {
  return puntosCarta + partida.puntuacionTotal;
}

  export const actualizarPuntuacionTotal = (puntosSumados:number) => {
  partida.puntuacionTotal = puntosSumados;
}

export const gestionarEstadoPartida = () => {
  if (partida.puntuacionTotal===7.5){
    partida.estadoPartida="ganar";
  } else if (partida.puntuacionTotal > 7.5){
    partida.estadoPartida ="perder";
  }
  return partida.estadoPartida;
}