const accesorios = [
    {id: 1, nombre: "auriculares", precio: 400},
    {id: 2, nombre: "vidrio templado", precio: 300},
    {id: 3, nombre: "cable usb", precio: 700},
    {id: 4, nombre: "cargador", precio: 800},
    {id: 5, nombre: "funda de silicona", precio: 1200},
];

let carrito = []

let nombre = prompt("Bienvenido! Por favor ingresa tu nombre")

let seleccion = prompt("Hola " + nombre + " ¿Desea comprar algun accesorio?").toLowerCase();

while(seleccion != "si" && seleccion != "no"){
    alert("No pudimos procesar su respuesta. Por favor ingresar si o no")
    seleccion = prompt("Hola " + nombre + " ¿Desea comprar algun accesorio?").toLowerCase();
}

if(seleccion == "si"){
    alert("A continuación le mostramos nuestra lista de accesorios")
    let todosLosAccesorios = accesorios.map((accesorio) => accesorio.nombre + " $" + accesorio.precio);

    alert(todosLosAccesorios.join("\n"))
} else if (seleccion == "no"){
    alert("Gracias " + nombre + "! Esperamos vuelvas pronto, muchas gracias.")
}

while(seleccion != "no"){
    let accesorio = prompt("Agrega un accesorio a tu carrito").toLowerCase();
    let precio = 0

    if(accesorio == "auriculares" || accesorio == "vidrio templado" || accesorio == "cable usb" || accesorio == "cargador" || accesorio == "funda de silicona"){
        switch(accesorio){
            case "auriculares": precio = 400;
            break;
            case "vidrio templado": precio = 300;
            break;
            case "cable usb": precio = 700;
            break;
            case "cargador": precio = 800;
            break;
            case "funda de silicona": precio = 1200;
            break;
            default:
                break;
        }

        let unidades = parseInt(prompt("¿Cuantas unidades desea comprar?"))

        carrito.push({accesorio, unidades, precio})
    } else {
        alert("Ese accesorio no se encuentra en stock")
    }

    seleccion = prompt("¿Quiere comprar otros accesorios?").toLowerCase();

    while(seleccion === "no"){
        alert("Muchas gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            alert(`accesorio: ${carritoFinal.accesorio}, unidades: ${carritoFinal.unidades}, Total a pagar por accesorio $${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acumulador, el) => acumulador + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es $${total}`)