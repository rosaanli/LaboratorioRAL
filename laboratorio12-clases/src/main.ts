interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
}

const reservas: Reserva[] = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

class ReservaHabitacionParticular {
  reservas: Reserva[];
  iva: number;

  constructor(reserva: Reserva[], iva: number) {
    this.reservas = reserva;
    this.iva = iva;
  }

  precioNoche(reserva: Reserva): number {
    switch (reserva.tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
      default:
        return 0;
    }
  }

  calculaPrecioNocheYExtra(): number {
    return this.reservas.reduce((total, reserva) => {
      const precioNoche = this.precioNoche(reserva);
      const precioConExtra = reserva.pax >= 2 ? precioNoche + 40 : precioNoche;
      return total + precioConExtra * reserva.noches;
    }, 0);
  }

  calculaTotal(): number {
    const precioNocheYExtra: number = this.calculaPrecioNocheYExtra();
    return precioNocheYExtra + (precioNocheYExtra * this.iva) / 100;
  }
}

const instancia = new ReservaHabitacionParticular(reservas, 21);
console.log(`Total reserva:`, instancia.calculaTotal());

class ReservaHabitacionOperador extends ReservaHabitacionParticular {
  constructor(reservas: Reserva[]) {
    super(reservas, 21);
  }

  precioNoche(): number {
    return 100;
  }

  calculaPrecioNocheYDescuento(): number {
    return this.reservas.reduce((total, reserva) => {
      const precioNoche = this.precioNoche();
      const precioConDescuento = precioNoche - (precioNoche * 15) / 100; // Aplica un descuento del 15%
      return total + precioConDescuento * reserva.noches;
    }, 0);
  }

  calculaTotal(): number {
    const precioNocheYDescuento: number = this.calculaPrecioNocheYDescuento();
    return precioNocheYDescuento + (precioNocheYDescuento * this.iva) / 100;
  }
}

const instanciaOperador = new ReservaHabitacionOperador(reservas);
console.log(`Total reserva:`, instanciaOperador.calculaTotal());




// Desafio padre***********************************************************************************

interface ReservaPadre {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

const reservaDos: ReservaPadre[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

class ReservasHotel {
  reservas: ReservaPadre[];
  iva: number;

  constructor(reserva: ReservaPadre[], iva: number) {
    this.reservas = reserva;
    this.iva = iva;
  }

  precioNoche(reserva: ReservaPadre): number {
    let precioBase: number = 100;

    switch (reserva.tipoHabitacion) {
      case "standard":
        precioBase = 100;
        break;
      case "suite":
        precioBase = 150;
        break;
      default:
        precioBase;
        break;
    }

    if (reserva.desayuno) {
      precioBase += 15;
    } else {
      precioBase;
    }

    if (reserva.pax >= 2) {
      precioBase += 40;
    } else {
      precioBase;
    }

    return precioBase;
  }

  calculaPrecioNoche(): number {
    return this.reservas.reduce((total, reserva) => {
      const precioNoche = this.precioNoche(reserva);
      return total + precioNoche * reserva.noches;
    }, 0);
  }

  calculaTotal(): number {
    const precioNocheConIva = this.calculaPrecioNoche();
    return precioNocheConIva + (precioNocheConIva * this.iva) / 100;
  }
}

class ReservaParticularDesafio extends ReservasHotel {
  constructor(reserva: ReservaPadre[], iva: number) {
    super(reserva, iva);
  }
}

class reservaTourOperadorDesafio extends ReservasHotel {
  descuento: number;

  constructor(reserva: ReservaPadre[], iva: number, descuento: number) {
    super(reserva, iva);
    this.descuento = descuento;
  }

  calculaPrecioNocheYDescuento(): number {
    const precioNoche = super.calculaPrecioNoche();
    return precioNoche - (precioNoche * this.descuento) / 100;
  }

  calculaTotal(): number {
    const precioNocheYDescuento: number = this.calculaPrecioNocheYDescuento();
    return precioNocheYDescuento + (precioNocheYDescuento * this.iva) / 100;
  }
}

const instanciaUnoDesafio = new ReservaParticularDesafio(reservaDos, 21);
console.log(`Subtotal reserva particular:`, instanciaUnoDesafio.calculaPrecioNoche());
console.log(`Total reserva particular:`, instanciaUnoDesafio.calculaTotal());

const InstanciaDosDesafio = new reservaTourOperadorDesafio(reservaDos, 21, 15);
console.log(`Subtotal reserva operador:`, InstanciaDosDesafio.calculaPrecioNocheYDescuento());
console.log(`Total reserva tour operador:`, InstanciaDosDesafio.calculaTotal());