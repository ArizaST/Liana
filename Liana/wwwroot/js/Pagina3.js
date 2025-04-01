// Función para cargar y mostrar los productos en el carrito
function mostrarCarrito() {
    // Obtener el carrito de la página 2 del almacenamiento local
    const carritoPagina2JSON = localStorage.getItem("carritoPagina2");
    const carritoPagina2 = carritoPagina2JSON ? JSON.parse(carritoPagina2JSON) : [];

    // Obtener el carrito de la página 2.1 del almacenamiento local
    const carritoPagina21JSON = localStorage.getItem("carritoPagina21");
    const carritoPagina21 = carritoPagina21JSON ? JSON.parse(carritoPagina21JSON) : [];

    // Obtener el carrito de la página 2.2 del almacenamiento local
    const carritoPagina22JSON = localStorage.getItem("carritoPagina22");
    const carritoPagina22 = carritoPagina22JSON ? JSON.parse(carritoPagina22JSON) : [];

    // Obtener el carrito de la página 2.3 del almacenamiento local
    const carritoPagina23JSON = localStorage.getItem("carritoPagina23");
    const carritoPagina23 = carritoPagina23JSON ? JSON.parse(carritoPagina23JSON) : [];

    // Obtener el carrito de la página DetalleSaco del almacenamiento local
    const carritoDetalleSacoJSON = localStorage.getItem("carritoDetalleSaco");
    const carritoDetalleSaco = carritoDetalleSacoJSON ? JSON.parse(carritoDetalleSacoJSON) : [];

    const carritoJoyeria1JSON = localStorage.getItem("carritoJoyeria1");
    const carritoJoyeria1 = carritoJoyeria1JSON ? JSON.parse(carritoJoyeria1JSON) : [];

    // Combinar los productos de todos los carritos
    const carritoCombinado = carritoPagina2.concat(carritoPagina21, carritoPagina22, carritoPagina23, carritoDetalleSaco, carritoJoyeria1);

    // Obtener el contenedor de productos en el carrito
    const carritoItems = document.getElementById("cartItems");

    // Limpia el contenido anterior del carrito
    carritoItems.innerHTML = "";

    // Recorrer los productos en el carrito combinado
    carritoCombinado.forEach((producto, index) => {
        const item = document.createElement("div");
        item.classList.add("cart-item");
        item.innerHTML = `
            <div class="item-details">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="item-info">
                    <h4>${producto.nombre}</h4>
                    <p>Precio: $${producto.precio}</p>
                    <p>Talla: ${producto.talla}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                </div>
            </div>
            <div class="item-actions">
                <button class="sumar-btn" onclick="sumarProducto(${index})">+</button>
                <button class="restar-btn" onclick="restarProducto(${index})">-</button>
                <button class="eliminar-btn" onclick="eliminarProducto(${index})">Eliminar</button>

            </div>
        `;
        carritoItems.appendChild(item);
    });
}

// Función para sumar la cantidad de un producto en el carrito
function sumarProducto(index) {
    const carritoPagina2JSON = localStorage.getItem("carritoPagina2");
    let carritoPagina2 = carritoPagina2JSON ? JSON.parse(carritoPagina2JSON) : [];

    const carritoPagina21JSON = localStorage.getItem("carritoPagina21");
    let carritoPagina21 = carritoPagina21JSON ? JSON.parse(carritoPagina21JSON) : [];

    const carritoPagina22JSON = localStorage.getItem("carritoPagina22");
    let carritoPagina22 = carritoPagina22JSON ? JSON.parse(carritoPagina22JSON) : [];

    const carritoPagina23JSON = localStorage.getItem("carritoPagina23");
    let carritoPagina23 = carritoPagina23JSON ? JSON.parse(carritoPagina23JSON) : [];

    const carritoDetalleSacoJSON = localStorage.getItem("carritoDetalleSaco");
    let carritoDetalleSaco = carritoDetalleSacoJSON ? JSON.parse(carritoDetalleSacoJSON) : [];

    const carritoJoyeria1JSON = localStorage.getItem("carritoJoyeria1");
    let carritoJoyeria1 = carritoJoyeria1JSON ? JSON.parse(carritoJoyeria1JSON) : [];

    let carritoCombinado = carritoPagina2.concat(carritoPagina21, carritoPagina22, carritoPagina23, carritoDetalleSaco, carritoJoyeria1);

    // Incrementa la cantidad del producto en el carrito combinado
    if (carritoCombinado[index]) {
        carritoCombinado[index].cantidad++;
    }

    // Guarda el carrito actualizado en el almacenamiento local
    localStorage.setItem("carritoPagina2", JSON.stringify(carritoPagina2));
    localStorage.setItem("carritoPagina21", JSON.stringify(carritoPagina21));
    localStorage.setItem("carritoPagina22", JSON.stringify(carritoPagina22));
    localStorage.setItem("carritoPagina23", JSON.stringify(carritoPagina23));
    localStorage.setItem("carritoDetalleSaco", JSON.stringify(carritoDetalleSaco));
    localStorage.setItem("carritoJoyeria1", JSON.stringify(carritoJoyeria1));

    calcularTotal();
    mostrarCarrito();
}

// Función para restar la cantidad de un producto en el carrito
function restarProducto(index) {
    const carritoPagina2JSON = localStorage.getItem("carritoPagina2");
    let carritoPagina2 = carritoPagina2JSON ? JSON.parse(carritoPagina2JSON) : [];

    const carritoPagina21JSON = localStorage.getItem("carritoPagina21");
    let carritoPagina21 = carritoPagina21JSON ? JSON.parse(carritoPagina21JSON) : [];

    const carritoPagina22JSON = localStorage.getItem("carritoPagina22");
    let carritoPagina22 = carritoPagina22JSON ? JSON.parse(carritoPagina22JSON) : [];

    const carritoPagina23JSON = localStorage.getItem("carritoPagina23");
    let carritoPagina23 = carritoPagina23JSON ? JSON.parse(carritoPagina23JSON) : [];

    const carritoDetalleSacoJSON = localStorage.getItem("carritoDetalleSaco");
    let carritoDetalleSaco = carritoDetalleSacoJSON ? JSON.parse(carritoDetalleSacoJSON) : [];

    const carritoJoyeria1JSON = localStorage.getItem("carritoJoyeria1");
    let carritoJoyeria1 = carritoJoyeria1JSON ? JSON.parse(carritoJoyeria1JSON) : [];

    let carritoCombinado = carritoPagina2.concat(carritoPagina21, carritoPagina22, carritoPagina23, carritoDetalleSaco, carritoJoyeria1);

    // Decrementa la cantidad del producto en el carrito combinado
    if (carritoCombinado[index] && carritoCombinado[index].cantidad > 1) {
        carritoCombinado[index].cantidad--;
    } else {
        // Si la cantidad es 1 o menos, elimina el producto del carrito
        carritoCombinado.splice(index, 1);
    }

    // Guarda el carrito actualizado en el almacenamiento local
    localStorage.setItem("carritoPagina2", JSON.stringify(carritoPagina2));
    localStorage.setItem("carritoPagina21", JSON.stringify(carritoPagina21));
    localStorage.setItem("carritoPagina22", JSON.stringify(carritoPagina22));
    localStorage.setItem("carritoPagina23", JSON.stringify(carritoPagina23));
    localStorage.setItem("carritoDetalleSaco", JSON.stringify(carritoDetalleSaco));
    localStorage.setItem("carritoJoyeria1", JSON.stringify(carritoJoyeria1));

    calcularTotal();
    mostrarCarrito();
    
}
function eliminarProducto(index) {
    // Obtén el carrito de la página 2 desde el almacenamiento local
    const carritoPagina2JSON = localStorage.getItem("carritoPagina2");
    const carritoPagina2 = carritoPagina2JSON ? JSON.parse(carritoPagina2JSON) : [];

    // Obtén el carrito de la página 2.1 desde el almacenamiento local
    const carritoPagina21JSON = localStorage.getItem("carritoPagina21");
    const carritoPagina21 = carritoPagina21JSON ? JSON.parse(carritoPagina21JSON) : [];

    // Obtén el carrito de la página 2.2 desde el almacenamiento local
    const carritoPagina22JSON = localStorage.getItem("carritoPagina22");
    const carritoPagina22 = carritoPagina22JSON ? JSON.parse(carritoPagina22JSON) : [];

    // Obtén el carrito de la página 2.3 desde el almacenamiento local
    const carritoPagina23JSON = localStorage.getItem("carritoPagina23");
    const carritoPagina23 = carritoPagina23JSON ? JSON.parse(carritoPagina23JSON) : [];

    const carritoDetalleSacoJSON = localStorage.getItem("carritoDetalleSaco");
    const carritoDetalleSaco = carritoDetalleSacoJSON ? JSON.parse(carritoDetalleSacoJSON) : [];

    const carritoJoyeria1JSON = localStorage.getItem("carritoJoyeria1");
    const carritoJoyeria1 = carritoJoyeria1JSON ? JSON.parse(carritoJoyeria1JSON) : [];

    // Combina los productos de todos los carritos en un carrito combinado
    const carritoCombinado = carritoPagina2.concat(carritoPagina21, carritoPagina22, carritoPagina23, carritoDetalleSaco, carritoJoyeria1);

    // Elimina el producto del carrito combinado
    carritoCombinado.splice(index, 1);

    // Guarda el carrito combinado actualizado en el almacenamiento local
    localStorage.setItem("carritoPagina2", JSON.stringify(carritoCombinado));
    localStorage.setItem("carritoPagina21", JSON.stringify([]));
    localStorage.setItem("carritoPagina22", JSON.stringify([]));
    localStorage.setItem("carritoPagina23", JSON.stringify([]));
    localStorage.setItem("carritoDetalleSaco", JSON.stringify([]));
    localStorage.setItem("carritoJoyeria1", JSON.stringify([]));

    calcularTotal();
    mostrarCarrito();
}
function calcularTotal() {
    const carritoPagina2JSON = localStorage.getItem("carritoPagina2");
    const carritoPagina2 = carritoPagina2JSON ? JSON.parse(carritoPagina2JSON) : [];

    const carritoPagina21JSON = localStorage.getItem("carritoPagina21");
    const carritoPagina21 = carritoPagina21JSON ? JSON.parse(carritoPagina21JSON) : [];

    const carritoPagina22JSON = localStorage.getItem("carritoPagina22");
    const carritoPagina22 = carritoPagina22JSON ? JSON.parse(carritoPagina22JSON) : [];

    const carritoPagina23JSON = localStorage.getItem("carritoPagina23");
    const carritoPagina23 = carritoPagina23JSON ? JSON.parse(carritoPagina23JSON) : [];

    const carritoDetalleSacoJSON = localStorage.getItem("carritoDetalleSaco");
    const carritoDetalleSaco = carritoDetalleSacoJSON ? JSON.parse(carritoDetalleSacoJSON) : [];

    const carritoJoyeria1JSON = localStorage.getItem("carritoJoyeria1");
    const carritoJoyeria1 = carritoJoyeria1JSON ? JSON.parse(carritoJoyeria1JSON) : [];

    const carritoCombinado = carritoPagina2.concat(carritoPagina21, carritoPagina22, carritoPagina23, carritoDetalleSaco, carritoJoyeria1);

    let total = 0; // Inicializa el total en 0

    // Recorre los productos en el carrito y suma sus precios al total
    carritoCombinado.forEach((producto) => {
        total += producto.precio * producto.cantidad;
    });

    // Actualiza el elemento HTML que muestra el total
    const totalElement = document.getElementById("cartTotal");
    totalElement.textContent = total.toFixed(2);
}

mostrarCarrito();
calcularTotal();
