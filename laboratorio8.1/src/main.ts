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

let pacientesPediatria: Pacientes[] = [];
const obtenPacientesAsignadosAPediatria = ( pacientes: Pacientes[]): Pacientes[] => {
  let pacientesPediatria: Pacientes[] = [];
  for ( let i : number = 0; i<pacientes.length; i++) {
    if(pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria.push({...pacientes[i]});
    }
  }
  return pacientesPediatria;
};

console.log("Pacientes asignados a Pediatría:", obtenPacientesAsignadosAPediatria(pacientes));

let pacientesPediatriaMenosDiez: Pacientes[] = [];
const obtenPacientesAsignadosAPediatriaMenosDiez = ( pacientes: Pacientes[]): Pacientes[] => {
  let pacientesPediatria: Pacientes[] = [];
  for ( let i : number = 0; i<pacientes.length; i++) {
    if(pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatria.push({...pacientes[i]});
    }
  }
  return pacientesPediatria;
};

console.log("Pacientes asignados a Pediatría:", obtenPacientesAsignadosAPediatriaMenosDiez(pacientes));


const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if(pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39)
      activarProctolo = true;
  }
  return activarProctolo;
};

console.log("activar protocolo de urgencias", activarProtocoloUrgencia(pacientes));


const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesReasignados: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesReasignados.push({...pacientes[i], especialidad: "Medico de familia"});
    }
  }
  return pacientesReasignados;
};

console.log("Pacientes reasignados a Médico de familia:", reasignaPacientesAMedicoFamilia(pacientes));


const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let tienePacientes : boolean = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      tienePacientes = true
    }
  }
  return tienePacientes;
};

console.log("hay pacientes de pediatría:", HayPacientesDePediatria(pacientes));


interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
let numeroDePaciente: NumeroPacientesPorEspecialidad = {
  medicoDeFamilia : 0,
  pediatria : 0,
  cardiologia : 0
  };
  for (let i = 0; i < pacientes.length; i++) {
    numeroDePaciente.medicoDeFamilia += pacientes[i].especialidad === "Medico de familia" ? 1 : 0;
    numeroDePaciente.pediatria += pacientes[i].especialidad === "Pediatra" ? 1 : 0;
    numeroDePaciente.cardiologia += pacientes[i].especialidad === "Cardiólogo" ? 1 : 0;
  }
  return numeroDePaciente;
}

console.log("Número de pacientes por especialidad:", cuentaPacientesPorEspecialidad(pacientes));