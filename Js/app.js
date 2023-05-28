const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

productos.forEach((product) => { //recorro el array productos con forEach con product 
    let content = document.createElement("div"); //en mi documento html creo un div
    content.className = "card";
    content.innerHTML = //Aca empiezo recorriendo uno por uno segun lo que quiero de mi producto
        ` 
        <img src="${product.img}"> 
        <p class="descripcion">${product.descripcion}</p>
        <h3 class="entrada-nombre">${product.nombre}</h3>
        <p class="precio">${product.precio}$</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprarBtn";

    content.append(comprar);

    //Funcionalidad
    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            descripcion: product.descripcion,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito)
    });
});

 //ACA CREAMOS EL MODELO DEL CARRITO, ES DECIR COMO EL PROCESO FINAL ANTES DE COMPRAR

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML =
        `<h1 class="modal-hader-title">Carrito</h1>
        `;
    
    modalContainer.append(modalHeader); //EN ESTA PARTE CREAMO LA CABEZERA EN UN DIV CON UN H1

    const modalBtn = document.createElement("h1");
    modalBtn.innerText = "x";
    modalBtn.className = "modal-header-btn"

    modalBtn.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalBtn);//ACA CREAMOS EL BOTON PARA CERRAR EL PROCESO DE FACTURA

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");//ACA CREAMOS UN DIV DONDE 
        carritoContent.className = "carrito-style"
        carritoContent.innerHTML = ` 
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        `;

        modalContainer.append(carritoContent);
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);//USAMOS EL METODO REDUCE, ACC ES EL ACUMULADOR Y EL ES EL PRODUCTO QUE SELECCIONAMOS CON EL PRECIO
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-compra";
    totalCompra.innerHTML = `
    <p>Total a pagar: ${total}$</p>
    `;

    modalContainer.append(totalCompra);//ACA CREAMOS EL TOTAL QUE NOS TIRA EL CARRITO 
});