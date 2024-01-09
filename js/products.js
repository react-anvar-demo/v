// get datas from products.json
let products = null;

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        console.log(products);
        addDataToHTML();
    })

// add data product to HTML
let listProduct = document.querySelector(".listProduct");
function addDataToHTML() {
    products.forEach(product => {
        // create new element item
        let newProduct = document.createElement('a');
        newProduct.href = '/pages/detail.html?id=' + product.id;
        newProduct.classList.add("item");
        newProduct.innerHTML = `
                <img src="${product.image}">
                <h2>${product.name}<h2/>
                <div class="price">${product.price} ${product.currency}<div/>
            `;

        // add this element in listProduct class
        listProduct.appendChild(newProduct)
    });
}
