
const divCard = document.getElementById("card1") as HTMLDivElement;
const animal = document.getElementById ("animal") as HTMLImageElement;

divCard.addEventListener("click", () => {
  animal.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";
});


