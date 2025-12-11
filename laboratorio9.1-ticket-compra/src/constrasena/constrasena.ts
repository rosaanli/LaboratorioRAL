import { ValidacionClave } from './model';
import {laClaveEsValida} from './contrasena.helpers';



export const validarClave = (clave: string, nombreUsuario: string, commonPasswords: string[]): ValidacionClave => {

  const {esValida: claveEsValida, error: validacionFallida} = laClaveEsValida(clave, nombreUsuario, commonPasswords);



  if (!claveEsValida){
    return {
      esValida: false,
      error : `no cumple con alguno de los requisitos de seguridad : ${validacionFallida}`
    }
  }else {
      return {
        esValida: true,
        error: ""
      }
    }
};
