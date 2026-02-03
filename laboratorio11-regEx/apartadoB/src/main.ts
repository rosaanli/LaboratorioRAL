const myRegEx = /\....$/;

let resultado = myRegEx.test("miarchivo.txt");
console.log(resultado);

resultado = myRegEx.test("miarchivo.jpg");
console.log(resultado);

resultado = myRegEx.test("miarchivo.pn");
console.log(resultado);

