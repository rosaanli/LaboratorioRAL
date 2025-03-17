export type EstadoPartida = "ganar" | "perder" | "seguir_jugando"

export interface Partida {
  puntuacionTotal: number;
  estadoPartida: EstadoPartida;
}

export const partida:Partida = {
  puntuacionTotal : 0,
  estadoPartida : "seguir_jugando",
}