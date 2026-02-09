import { filtrarImg } from "./mortadelo-helpers";


document.addEventListener("DOMContentLoaded", ()=>{

  const boton = document.getElementById("boton-extraer")
  if (boton && boton instanceof HTMLButtonElement)
    boton.addEventListener("click", ()=>{
      filtrarImg();
    })
})
