interface Carta {
  idFoto: number;
  imagen: string;
}

const cartas: Carta[] = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
  },
];

const barajar = <T>(cartas: T[]): T[] => {
  // Fisher-Yates (in-place)
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
};

const pintarCartas = (cartas: Carta[]) => {
  const divApp = document.querySelector(".card") as HTMLElement;
  divApp.innerHTML = "";
  cartas.forEach((carta) => {
    const divCarta = document.createElement("div");
    divCarta.className = "card";

    const img = document.createElement("img");
    img.src = carta.imagen;
    img.alt = "Carta";

    divCarta.appendChild(img);
    divApp.appendChild(divCarta);
  });
};
pintarCartas(barajar(cartas));
