type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];


//Apartado 1 a) extraer la lista de paciente que están asignados a la especialidad de Pediatría
let pacientesPediatria: Pacientes[] = [];
const obtenPacientesAsignadosAPediatria = pacientes.filter(
  (pacientes: Pacientes) : boolean => pacientes.especialidad === "Pediatra");

  console.log("Pacientes asignados a Pediatría:", obtenPacientesAsignadosAPediatria);


//partado 1 b) extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaMenosDiez = pacientes.filter(
  (pacientes: Pacientes): boolean => pacientes.especialidad === "Pediatra" && pacientes.edad < 10
);

console.log("Pacientes asignados a Pediatría:", obtenPacientesAsignadosAPediatriaMenosDiez);


//Apartado 2 Activar el protocolo de urgencia si: ritmo cardíaco superior a 100 p y temperaturasuperior a 39 grados.
const activarProtocoloUrgencia = pacientes.some((pacientes: Pacientes): boolean =>
  pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39
);

console.log("activar protocolo de urgencias", activarProtocoloUrgencia);


//Apartado 3 reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignarPacientesAMedicoDeFamilia = pacientes.map(
  (pacientes: Pacientes): Pacientes =>
    pacientes.especialidad === "Pediatra" ? { ...pacientes, especialidad: "Medico de familia" } : pacientes
);
console.log("Pacientes reasignados a Medico de familia:", reasignarPacientesAMedicoDeFamilia);


//Apatado 4 comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = pacientes.some (
  (pacientes: Pacientes): boolean => pacientes.especialidad === "Pediatra")

console.log("hay pacientes de pediatría:", HayPacientesDePediatria);

//Apartado 5 calcular el número total de pacientes que están asignados por especialidad.
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = pacientes.reduce(
  (acc, pacientes) : NumeroPacientesPorEspecialidad=> {
    if(pacientes.especialidad === "Medico de familia") {
      acc.medicoDeFamilia += 1;
    } else if (pacientes.especialidad === "Pediatra") {
      acc.pediatria += 1;
    } else if (pacientes.especialidad === "Cardiólogo") {
      acc.cardiologia += 1;
    }
    return acc;
  },
  {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  }
);

console.log("Número de pacientes por especialidad:", cuentaPacientesPorEspecialidad);