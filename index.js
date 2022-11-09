
let productoSeleccionado = parseInt(
    prompt(
        "Escoge el producto que deseas comprar: 1.Heladera - 2.Lavarropas - 3.Microondas - 4.Cafetera"
    )
    )
let seguirComprando = true
let totalCompra = 0
let decision

const productosArray = []

class NewProduct {
    constructor(id, name, price, stock) {
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
}

const Heladera = new NewProduct(1, "Heladera", 600, 20)
productosArray.push(Heladera)
const Lavarropas = new NewProduct(2, "Lavarropas", 1000, 40)
productosArray.push(Lavarropas)
const Microondas = new NewProduct(3, "Microondas", 200, 30)
productosArray.push(Microondas)
const Cafetera = new NewProduct(4, "Cafetera", 800, 15)
productosArray.push(Cafetera)

const carrito = []

while (seguirComprando === true) {

    const producto = productosArray.find(
        (prod) => prod.id === productoSeleccionado
    )
    if (producto) {
        carrito.push(producto)
    }


    decision = parseInt(prompt("¿Quieres seguir comprando? 1.Si - 2.No"))
    if (decision === 1) {
        productoSeleccionado = parseInt(
            prompt(
                "Escoge el producto que deseas agregar a tu compra: 1.Heladera - 2.Lavarropas - 3.Microondas - 4.Cafetera"
            )
        )
    } else {
        seguirComprando = false
    }
}

carrito.forEach(producto =>{
    totalCompra = totalCompra + producto.price
})
console.log(carrito)
console.log(totalCompra)
alert(`El total de tu compra es: ${totalCompra}`)

function descuento(valor) {
    let descuento = 0
    if (valor <= 1000) {
        descuento = 10
    } else if (valor > 1000 && valor <= 2000) {
        descuento = 15
    } else {
        descuento = 20
    }

    let valorDescuento = valor * (descuento / 100)
    let valorFinal = valor - valorDescuento
    return valorFinal
}


