import { reiniciarPartida, iniciaPartida } from "./public/ui";
import { crearTableroInicial, Tablero, cartasCopiadas, cartas } from "./public/modelo";
import { barajarCartas } from "./public/motor";



export let cartasBarajadas = barajarCartas(cartasCopiadas(cartas));

export let tablero: Tablero = crearTableroInicial(cartasBarajadas);


reiniciarPartida(tablero);
iniciaPartida(tablero);