/*3 vectores
v1 v2 v3 v4
tienen 3 strings
SI LA VARIABLE SPIDERMAN ESTA EN PELIGRO DEBE LANZAR EL MENSAJE:
"COMO DECIA EL TIO BEN, RECUERDA LO SIGUIENTE Ten cuidado con el duende verde, "

SI NO ESTA EN PELIGRO ESCRIBIR 
"COMO DECIA EL TÍO BEN, UN GRAN PODER REQUIERE RESPONSABILIDAD.

FUNCIONES FLECHA "
*/

const v1= "tio Ben";

const v2= "Recuerda lo siguiente";

const v3= " Un gran poder requiere una responsabilidad";

const v4= "Ten cuidado con el duende verde";

let danger = false;

const spiderman = (v1, v2, v3, v4, danger) => {
    if (danger) {
        return `${v1}${v2}${v4}`;
    } else {
        return `${v1}${v3}`;
    }
};

console.log(spiderman(v1, v2, v3, v4, danger));


const titulo = document.createElement("h1");



