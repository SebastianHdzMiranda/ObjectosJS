const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

/* Agregar nuevas propiedades*/
producto.imagen = "imagen.jpg";
console.log(producto);



// eliminar una propiedad del objeto
delete producto.disponible;
console.log(producto);
