//Ejercicio que puedo investigar

let lista1 = [1,20,5,7,9]
let lista2 = [2,4,6,8,0]
numMayor = lista1[0];

for(let i=0; i<lista1.length; i++)
{
 if(lista1[i]>numMayor) {
    numMayor = lista1[i];
    }      
    console.log("Número mayor de la lista 1 es: ",numMayor);
}
for(let i=0; i<lista2.length; i++)
    {
     if(lista2[i]>numMayor) {
        numMayor = lista2[i];
        }      
        console.log("Número mayor de la lista 2 es: ",numMayor);
    }

    console.log("Número mayor es: ",numMayor);