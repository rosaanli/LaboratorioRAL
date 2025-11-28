import { reiniciarPartida, iniciaPartida } from "./public/ui";
import { crearTableroInicial, Tablero, cartasCopiadas, cartas } from "./public/modelo";
import { barajarCartas } from "./public/motor";


document.addEventListener("DOMContentLoaded", () => {
  let cartasBarajadas = barajarCartas(cartasCopiadas(cartas));
  let tablero: Tablero = crearTableroInicial(cartasBarajadas);

  reiniciarPartida(tablero);
  iniciaPartida(tablero);
});