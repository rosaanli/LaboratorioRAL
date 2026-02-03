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



**DIFERENCIA ENTRE ToBe Y ToEqual**
La diferencia entre toBe y toEqual en Jest (el framework de testing que estás usando) es fundamental:

toBe
Utiliza comparación estricta (===)
Compara identidad de referencia para objetos
Es perfecto para valores primitivos (números, strings, booleans)
Comprueba si dos variables apuntan al mismo objeto en memoria
toEqual
Utiliza comparación profunda (deep equality)
Compara contenido/estructura de objetos y arrays
Es perfecto para objetos y arrays
Comprueba si dos objetos tienen las mismas propiedades y valores


**Que hace .map()**

¿Qué hace .map()?
El método .map() crea un nuevo array aplicando una función a cada elemento del array original. No modifica el array original.

Sintaxis:
Parámetros de la función callback:
elemento: El elemento actual que se está procesando
índice (opcional): El índice del elemento actual
array (opcional): El array completo que se está recorriendo

Características importantes:
✅ Lo que SÍ hace .map():
Siempre retorna un nuevo array
Mantiene el mismo número de elementos que el array original
No modifica el array original (inmutable)
Ejecuta la función para cada elemento
❌ Lo que NO hace .map():
No filtra elementos (para eso usa .filter())
No modifica el array original
No puede cambiar la longitud del array resultante

Regla simple para recordar 📝
Usa .map() cuando:

Tienes un array
Quieres transformar cada elemento
Quieres obtener un nuevo array del mismo tamaño
Cada elemento de entrada produce exactamente un elemento de salida

**Como funcionan los indices**

Cómo funcionan los índices 📍
Cuando tienes dos arrays relacionados, el índice te permite sincronizar las posiciones.
Regla de oro para recordar 💡
El índice es como un "pegamento" que mantiene unidos elementos de diferentes arrays que están en la misma posición.

Array 1: [A, B, C]
Array 2: [X, Y, Z]
         ↓  ↓  ↓
Parejas: A-X, B-Y, C-Z
Índices: 0, 1, 2

**🍰 ¿Qué es .slice()?**
Imagina que tienes una tarta (string) y quieres cortar un trozo específico. .slice() es como un cuchillo que corta desde una posición hasta otra.

Ejemplo: 📍 Los parámetros: .slice(0, -1)
"1234567".slice(0, -1)

Primer parámetro: 0
Significa: "Empieza a cortar desde la posición 0"
La posición 0 es el primer carácter
Segundo parámetro: -1
Significa: "Termina de cortar 1 posición antes del final"

**🔑 ¿Qué hacen los corchetes []?**
Los corchetes son como un "selector de posición" - te permiten acceder a un carácter específico dentro de un string.


**Calcular Resto**
El resto de una división es el valor que sobra cuando un número no se divide exactamente entre otro.

En programación, se calcula usando el operador módulo (%).

Por ejemplo:

7 dividido entre 3 es 2, y sobra 1.
En código: 7 % 3 = 1
Así, el operador % te da el resto de la división.