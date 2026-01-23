import axios from 'axios';
import {Personaje} from "./personajes-listado.model"


export const listadoPersonajes = async () : Promise<Personaje[]> => {
  try{
    const { data } = await axios.get("http://localhost:3000/personajes");
    return data;
  }
  catch(error) {
    throw new Error ("Error al obtener el listado de personajes")
  }
};

