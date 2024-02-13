/*
** DESAFIOS ** 
*/
// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
console.log(lenguagesDeProgramacion);

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguajes(lenguagesDeProgramacion) {
    console.log(lenguagesDeProgramacion);
}
mostrarLenguajes(lenguagesDeProgramacion);

 // muestra los lenguajes por separado
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
}
  
mostrarLenguagesSeparadamente();

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
/*function mostrarLenguajesInverso(lenguagesDeProgramacion) {
    console.log(lenguagesDeProgramacion.reverse);
} 
mostrarLenguajesInverso(lenguagesDeProgramacion);*/
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();
// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
let numeros = [3,6,7,8,10,2];
/*
function promNum (num) {
    let prom = 0;
    let count = 0; 
    while (count != num.length) {
        prom = prom + num[count]
        count++
    }
    prom = prom / num.length;

    return prom
}
console.log(promNum(numeros));*/

function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  //let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
/*function numMaxMin(num) {
    let numMax = num.sort[0];
    let numMin = num.sort[num.length-1];
    console.log(`El número más grande es: ${numMax}, y el número más pequeño es: ${numMin}`);
}
console.log(numMaxMin(numeros));*/
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  //let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);
// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumNum (num = []) {
    let prom = 0;
    let count = 0; 
    while (count != num.length) {
        prom = prom + num[count]
        count++
    }

    return prom
}
console.log(sumNum(numeros));
 // solución propuesta
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numeros2 = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros);
  console.log('Suma:', suma);
// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
console.log('El indice es:', encontrarIndiceElemento(numeros, 7));
// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function concatLista (lista1, lista2) {
    let sumaListas = [];
    for(let i=0; i < lista1.length-1; i++) {
        sumaListas.push(lista1[i]+lista2[i]);
        console.log(sumaListas[i]);
    }
}
concatLista(numeros, numeros2);
// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista){
    let count = 0; 
    while (count != lista.length) {
        lista[count] = lista[count]*lista[count];
        count++;
    }
    return lista
}
console.log(cuadradoLista(numeros));
