/*
1. obtener HTML completo
2. busqueda URL dentro de HTML, devuelve un array con los src.
3. crear un contenedor (div, grid) en el html
  3.1 Crear funcion Crear "p"
    3.1.1 añadir un "p"
  3.2 reemplaza "p" por la URL
  3.3 Crear Funcion añadir IMG
    3.3.1 añade un contenedor (div) para IMG
    3.3.2 añade la imagen con la URL
*/


const obtenerHtml = () : string => {
  const texto = document.getElementById("contenido-html");
  if (texto && texto instanceof HTMLTextAreaElement) {
    return texto.value;
  } else {
    throw new Error(
      "No se pudo encontrar el elemento textarea con id 'contenido-html'.",
    );
  }
};

// busca linea img
export const buscaIMG = (html: string) : string[] => {
  const patron = /<img[^>]+src="(?<src>[^"]+)"/gmi;
  const coincidencias = Array.from(html.matchAll(patron));

  const srcArray : string[] = [];
  coincidencias.forEach((coincidencia) => {
    const { src } = coincidencia.groups as any;
    srcArray.push(src);
  });
return srcArray;
};


const crearParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  return parrafo;
};

const crearImg = (srcURL: string) : HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = srcURL;

  return imagen;
};


const crearDIvImg = (imagen : string) : HTMLDivElement =>{
    const crearCard = document.createElement("div");
    crearCard.classList.add("card");
    const imagenURL = crearParrafo(imagen);
    const crearIMG = crearImg(imagen)

    crearCard.appendChild(imagenURL);
    crearCard.appendChild(crearIMG);
    return crearCard;
};

const mostrarImagenes = (imagenes: string[]) => {
  const contenedorHTML = document.getElementById("listado-imagenes");
  if (contenedorHTML && contenedorHTML instanceof HTMLDivElement){
    contenedorHTML.innerHTML = "";
    imagenes.forEach((imagen)=> {
      const crearImagen = crearDIvImg(imagen);
      contenedorHTML.appendChild(crearImagen)
  })
  }
};


export const filtrarImg = () => {
  try {
  const html = obtenerHtml();
  const imagenes = buscaIMG(html);
  mostrarImagenes(imagenes);
  }
   catch (error) {
    console.error("Error al obtener el HTML:", error);
  }
}
