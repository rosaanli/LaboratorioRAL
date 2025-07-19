# NOTAS

Este archivo es para dejar notas, ideas y recordatorios relacionados con el proyecto.

---
¿las interface tambien se puede utilizar en javascript?

No, las interfaces como interface Pelis { ... } son una característica exclusiva de TypeScript y no existen en JavaScript puro. TypeScript las usa para ayudar con la verificación de tipos durante el desarrollo, pero al compilar a JavaScript, las interfaces desaparecen y no tienen ningún efecto en el código final. En JavaScript, puedes usar objetos y clases, pero no interfaces.

---
Para tipar podemos utilizar Any como cajon desastre, epro no es un buena practica, puede producir errores y te deja meter todo lo que quieras, string, boolean, numbre, tiene mucho riesgo.

Genericos
- <T>:

En TypeScript, los genéricos permiten crear componentes (funciones, clases, interfaces) que funcionan con diferentes tipos de datos sin perder el control de los tipos. El tipo genérico más común es <T>, donde "T" es un nombre que representa cualquier tipo.

Por ejemplo, una función genérica:

```typescript
function identidad<T>(valor: T): T {
  return valor;
}

// Uso:
const resultado1 = identidad<string>("Hola"); // resultado1 es string
const resultado2 = identidad<number>(123);    // resultado2 es number
```

También se usan en interfaces y clases:

```typescript
interface Caja<T> {
  contenido: T;
}

const cajaDeNumero: Caja<number> = { contenido: 42 };
const cajaDeTexto: Caja<string> = { contenido: "texto" };
```

Así puedes reutilizar código y mantener la seguridad de tipos.