const botonSiguiente = document.getElementById("siguiente") as HTMLButtonElement;
const botonAtras = document.getElementById("atras") as HTMLButtonElement;
const botonAsignar = document.getElementById("botonAsignar") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;
const turno = document.getElementById("turno")
let turn = 0

botonSiguiente.addEventListener("click", function () {
  turn ++
  turno!.innerHTML = (turn.toString()).padStart(2,"0");
});


botonAtras.addEventListener("click", function () {
  turn --
  turno!.innerHTML =  (turn.toString()).padStart(2,"0");
});

reset.addEventListener("click", function () {
  turn = 0;
  turno!.innerHTML = turn.toString()
})

function asignarTurno() {
  let turnoIngresado = (document.getElementById("numeroAsignar") as HTMLInputElement).value;
  if (turnoIngresado !== undefined && turnoIngresado !==null && turno!==null) {
    turno.innerHTML = turnoIngresado.padStart(2,"0");
  }
}

botonAsignar.addEventListener("click", asignarTurno)