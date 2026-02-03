import {crearDivInfoCuenta } from "./cuenta-helpers";


export const mostrarInfoCuenta = () => {
    let divInfoCuenta = document.getElementById("resultado-busqueda");
    if (divInfoCuenta && divInfoCuenta instanceof HTMLDivElement){
      divInfoCuenta.innerHTML = "";
      const infoCuenta = crearDivInfoCuenta();
      divInfoCuenta.appendChild(infoCuenta);
    } else{
      console.error("No se ha podido obtener la información de la cuenta")
    }
};

document.addEventListener("DOMContentLoaded", () => {
  const botonBuscar = document.getElementById("boton-buscar");
  if (botonBuscar && botonBuscar instanceof HTMLButtonElement) {
    botonBuscar.addEventListener("click", () => {
      console.log(mostrarInfoCuenta)
      mostrarInfoCuenta();

    })
  }
})