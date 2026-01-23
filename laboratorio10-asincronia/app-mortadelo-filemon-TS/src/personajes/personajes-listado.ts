import { Personaje } from "./personajes-listado.model";
import { listadoPersonajes } from "./personajes-listado.api";

const crearImagen = (imagen : string) => {
  const imagenElement = document.createElement("img");
  imagenElement.src = (`http://localhost:3000/${imagen}`);
  imagenElement.alt = imagen;
  return imagenElement;
};

const crearParrafo = (enNegrita: string, texto: string) => {
  const parrafo = document.createElement("p");
  const span = document.createElement("span");
  span.textContent = enNegrita;
  span.style.fontWeight = "bold";
  parrafo.appendChild(span);
  parrafo.append(texto);
  return parrafo;
};

const crearPersonajes = (personaje : Personaje) : HTMLDivElement => {

  const creaElementoPersonaje = document.createElement("div");
  creaElementoPersonaje.classList.add("card");

  const creaDivImagen = document.createElement("div");
  creaDivImagen.classList.add("personaje-imagen");
  creaElementoPersonaje.appendChild(creaDivImagen);

  const imagen = crearImagen(personaje.imagen);
  creaDivImagen.appendChild(imagen);

  const creaElementoInfo = document.createElement("div");
  creaElementoInfo.classList.add("personaje-info");
  creaElementoPersonaje.appendChild(creaElementoInfo);


  const nombre = crearParrafo("Nombre: ", personaje.nombre);
  creaElementoInfo.appendChild(nombre);

  const especialidad = crearParrafo("Especialidad: ", personaje.especialidad);
  creaElementoInfo.appendChild(especialidad);

  const habilidades = crearParrafo("Habilidades: ", personaje.habilidades.join(", "));
  creaElementoInfo.appendChild(habilidades);

  return creaElementoPersonaje;
};

export const pintaPersonaje = async () => {
  const personajes = await listadoPersonajes();
  const contenedorPersonajes = document.getElementById("listado-personajes");

  if (contenedorPersonajes && contenedorPersonajes instanceof HTMLDivElement) {
  personajes.forEach(personaje => {
    const crearContenedorPersonaje = crearPersonajes(personaje);
    contenedorPersonajes.appendChild(crearContenedorPersonaje);
  });
  } else {
    throw new Error("No se ha creado el contenedor del personaje");
  }
};


export const inputPersonaje = () : string => {
  const personaje = document.getElementById("nombre-personaje");
    if (personaje && personaje instanceof HTMLInputElement) {
      console.log("personaje escrito:", personaje.value)
      return personaje.value;
    } else
      {
        throw new Error("no se ha podido obtener el input del personaje")
      }
  };


const limpiarTexto = (texto: string) => texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");


export const filtrarPersonajes = async () : Promise<Personaje[]> => {
  const personajes : Personaje[] = await listadoPersonajes();
  const nombrePersonaje = inputPersonaje();

  const listaPersonajeFiltrado : Personaje[] = personajes.filter(
    (personaje) => {
      return limpiarTexto(personaje.nombre.toLowerCase()).includes(limpiarTexto(nombrePersonaje.toLowerCase()));
    })
  console.log(listaPersonajeFiltrado)
  return listaPersonajeFiltrado;
};


export const pintaPersonajeFiltrado = (personajeFiltrado : Personaje[]) => {
  const contenedorPersonajes = document.getElementById("listado-personajes");

  if (contenedorPersonajes && contenedorPersonajes instanceof HTMLDivElement) {
    contenedorPersonajes.innerHTML="";
    personajeFiltrado.forEach((personaje) => {
      const crearContenedorPersonaje = crearPersonajes(personaje);
      contenedorPersonajes.appendChild(crearContenedorPersonaje);
    });
  } else {
    throw new Error("No se ha creado el contenedor del personaje filtrado");
  }
};

document.addEventListener("DOMContentLoaded", () =>{
  try{
    const botonFiltrar = document.getElementById("boton-filtrar");

    if(botonFiltrar && botonFiltrar instanceof HTMLButtonElement ){
      botonFiltrar.addEventListener("click", async () => {
        const personaje = filtrarPersonajes();
        pintaPersonajeFiltrado(await personaje);
        })
    }

    pintaPersonaje();

  } catch (error) {
    console.error("Error al pintar los personajes", error);
  }
});