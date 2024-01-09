// get datas product in products.json
let products = null;
fetch('../products.json')
.then(response => response.json())
.then(data =>{
    products = data;
    console.log(products);
    showDetail();
})
function showDetail() {
    let detail  = document.querySelector('.detail');
    let productId =  new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => {
        return value.id == productId
    })[0];

    // If there is no product has id = productsId
    // => return to home page
    if(!thisProduct){
        window.location.href = "/";
    }

    // and if has , add data this product in HTML
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = '$' + thisProduct.price;
    detail.querySelector('.description').innerText =  thisProduct.description;

    // get datas product similar
    // show all products

    (products.filter(value => value.id != productId))
    .forEach(product => {
        let listProduct =document.querySelector(".listProduct")
        let newProduct = document.createElement('a');
        newProduct.href = '/pages/detail.html?id' + product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}">
            <h2>${product.name}<h2/>
            <div class="price">${product.price}<div/>
        `;
        listProduct.appendChild(newProduct)
    });



}