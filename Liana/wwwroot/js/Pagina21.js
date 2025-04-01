function agregarAlCarrito() {
    const talla = document.getElementById("talla").value;
    const cantidad = document.getElementById("quantity").value;

    // Obtener el carrito actual del almacenamiento local, o un array vacío si no existe
    let carrito = JSON.parse(localStorage.getItem("carritoPagina21")) || [];

    // Ruta de la imagen del producto
    const imagen = "/Imagenes/PaginaHombre/Traje2.jpg"; // Reemplaza con la ruta correcta de la imagen

    // Crear un objeto con los detalles del producto
    const producto = {
        nombre: "TRAJE EUROPEO WINE",
        precio: 379.99,
        talla: talla,
        cantidad: cantidad,
        imagen: imagen // Agrega la ruta de la imagen aquí
    };

    // Agregar el nuevo producto al carrito
    carrito.push(producto);

    // Convertir el carrito a una cadena JSON y guardarlo en el almacenamiento local
    localStorage.setItem("carritoPagina21", JSON.stringify(carrito));

    // Redirigir a la página del carrito de compras
    window.location.href = "Pagina3";
}


