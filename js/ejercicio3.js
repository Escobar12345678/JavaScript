
let lista1 = [1,20,5,7,9]
let lista2 = [2,4,6,8,0]
numMayor = lista1[0];


function compararListas(l1,l2,mayor){
    for(let i=0; i<l1.length; i++){
        if(l1[i]>mayor) {
            mayor = l1[i];
        }  
        console.log("numero mayor lista1: ", mayor)
    }

    for(let i=0; i<l2.length; i++){
        if(l2[i]>mayor) {
            mayor = l2[i];
            }  
            console.log("numero mayor lista2:", mayor )
            return mayor;
        }
        console.log("el resultado es:",)


}