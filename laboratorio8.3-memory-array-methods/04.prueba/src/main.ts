const cards = document.querySelectorAll<HTMLDivElement>(".card");

const urls = [
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
];

cards.forEach((card, index) => {
  card.addEventListener("click", () => {

    const img = card.querySelector<HTMLImageElement>("img");
    if (img) {
      img.src = urls[index];
  }
  });
});
