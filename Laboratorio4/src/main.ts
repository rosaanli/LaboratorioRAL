const botonSiguiente = document.getElementById("siguiente");
const botonAtras = document.getElementById("atras");
const botonAsignar = document.getElementById("botonAsignar");
const reset = document.getElementById("reset");
const turno = document.getElementById("turno");
let turn = 0

if (botonSiguiente !== null && botonSiguiente !== undefined && botonSiguiente instanceof HTMLButtonElement) {
botonSiguiente.addEventListener("click", function () {
  turn ++
  turno!.innerHTML = (turn.toString()).padStart(2,"0");
});
}

if (botonAtras !== null && botonAtras !== undefined && botonAtras instanceof HTMLButtonElement) {
botonAtras.addEventListener("click", function () {
  turn --
  turno!.innerHTML =  (turn.toString()).padStart(2,"0");
});
}

if (reset !== null && reset !== undefined && reset instanceof HTMLButtonElement) {
reset.addEventListener("click", function () {
  turn = 0;
  turno!.innerHTML = turn.toString()
})
}

function asignarTurno() {
  let turnoIngresado = (document.getElementById("numeroAsignar") as HTMLInputElement).value;
  if (turnoIngresado !== undefined && turnoIngresado !==null && turno!==null) {
    turno.innerHTML = turnoIngresado.padStart(2,"0");
  }
}

if (botonAsignar !== null && botonAsignar !== undefined && botonAsignar instanceof HTMLButtonElement) {
botonAsignar.addEventListener("click", asignarTurno)
}