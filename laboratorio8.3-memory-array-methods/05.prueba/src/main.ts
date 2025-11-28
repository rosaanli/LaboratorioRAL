import { reiniciarPartida, iniciaPartida } from "./memory/ui";
import { crearTableroInicial, Tablero, cartasCopiadas, cartas } from "./memory/modelo";
import { barajarCartas } from "./memory/motor";


document.addEventListener("DOMContentLoaded", () => {
  let cartasBarajadas = barajarCartas(cartasCopiadas(cartas));
  let tablero: Tablero = crearTableroInicial(cartasBarajadas);

  reiniciarPartida(tablero);
  iniciaPartida(tablero);
});