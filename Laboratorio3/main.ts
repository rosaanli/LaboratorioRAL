interface Grupo{
  nombre:string;
  año:number;
  activo: boolean;
  generoMusical: string;
}
const estilo = "background:green; font-weight:bold; font-size: 18px"

const popRock = "🎵 Pop Rock ";
const rock = "🎸 Rock"
const hardRock = "🤘 Hard Rock"
const clasica ="🎼 Clásica"

const grupoMusical1:Grupo = {
  nombre:"The Beatles",
  año: 1960,
  activo: true,
  generoMusical: popRock,
}

const grupoMusical2:Grupo = {
  nombre: "Queen",
  año: 1970,
  activo: false,
  generoMusical: rock,
}

const grupoMusical3:Grupo = {
  nombre: "AC DC",
  año: 1960,
  activo: true,
  generoMusical: hardRock,
}

const grupoMusical4:Grupo = {
  nombre: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  generoMusical: clasica,
}

const grupoMusical5:Grupo = {
  nombre: "The Rolling Stones",
  año: 1962,
  activo: true,
  generoMusical: "Rock",
}


console.log(`%c ${grupoMusical1.nombre}`, estilo, grupoMusical1)
console.log(`%c ${grupoMusical2.nombre}`, estilo, grupoMusical2)
console.log(`%c ${grupoMusical3.nombre}`, estilo, grupoMusical3)
console.log(`%c ${grupoMusical4.nombre}`, estilo, grupoMusical4)
console.log(`%c ${grupoMusical5.nombre}`, estilo, grupoMusical5)

console.log("*****")