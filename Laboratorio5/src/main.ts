

let puntuacionObtenida:number = 0;

const muestraPuntuacion = () =>  {
  let cuadroPuntuacion = document.getElementById("puntuacion");
  if (cuadroPuntuacion ) {
      cuadroPuntuacion.innerHTML = puntuacionObtenida.toString();
}
}

muestraPuntuacion()
document.addEventListener("DOMContentLoaded",muestraPuntuacion)


let darCarta:number;

const dameCarta = () => {
  darCarta = Math.floor(Math.random()*10);
  if (darCarta > 7) {
    darCarta += 2;
  };
  muestraCarta(darCarta);
};

const carta = document.getElementById("cartaPrincipal");
const unoDeCopas = document.getElementById("unoDeCopas");
const dosDeCopas = document.getElementById("dosDeCopas");
const tresDeCopas = document.getElementById("tresDeCopas");
const cuatroDeCopas = document.getElementById("cuatroDeCopas");
const cincoDeCopas = document.getElementById("cincoDeCopas")



const muestraCarta = (carta:number) :void => {
  switch (carta) {
    case 1:
      carta = unoDeCopas;

  }


}

const botonPedir = document.getElementById("dameCarta");
if (botonPedir) {
  botonPedir.addEventListener("click", dameCarta)
}


 // const mostrarCarta = () : void => {


  // }

