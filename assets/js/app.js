let carrito = [];
const productosGrid = document.getElementById('productos-grid');

// 1. Cargar productos desde el JSON
async function cargarProductos() {
    try {
        const respuesta = await fetch('assets/js/productos.json');
        const productos = await respuesta.json();
        renderizarProductos(productos);
    } catch (error) {
        console.error("Error cargando el menú", error);
    }
}

// 2. Mostrar productos en pantalla
function renderizarProductos(items) {
    productosGrid.innerHTML = '';
    items.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${prod.id})">Añadir</button>
        `;
        productosGrid.appendChild(div);
    });
}

// 3. Manejar el carrito (Lógica simplificada)
window.agregarAlCarrito = (id) => {
    // Aquí buscarías el producto en el array y lo añadirías al array 'carrito'
    console.log("Añadido producto:", id);
    actualizarInterfazCarrito();
};

cargarProductos();