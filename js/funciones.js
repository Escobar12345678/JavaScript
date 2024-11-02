const precioOriginal = 1000;
const precioDescuento = 15;

function calcularPorDescuento(precioProducto,descuento){
    const resultadoDescuento = precioProducto*descuento/100;
    const precioDescuento = precioProducto-resultadoDescuento;
    return precioDescuento;
}

const precioFinal = calcularPorDescuento(precioOriginal,precioDescuento)
    console.log(precioFinal);
