const NavEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const movileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardContainer = document.querySelector('.cards-container')


NavEmail.addEventListener('click', toggleMenu)

menuBurgerIcon.addEventListener('click', toggleMovileMenu)

menuCarrito.addEventListener('click',toggleCarritoAside)



function toggleMenu(){
    const isAsideCloce = aside.classList.contains('inactive')

    if(!isAsideCloce){
        aside.classList.add('inactive')
    }

    movileMenu.classList.toggle('inactive')
    desktopMenu.classList.toggle('inactive')

}

function toggleMovileMenu(){
    const isAsideCloce = aside.classList.contains('inactive')

    if(!isAsideCloce){
        aside.classList.add('inactive')

    }

    movileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMovileMenuClose = movileMenu.classList.contains('inactive')
    const isDesktop = desktopMenu.classList.contains('inactive')
    if(!isMovileMenuClose){
            movileMenu.classList.add('inactive');
    }
    if(!isDesktop){
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')

}



const productoList = []
productoList.push({
    name:"Camisas overzait",
    price:"$120",
    img:"https://dynamobrand.co/cdn/shop/products/DSC00499.jpg?v=1681252226",
})
productoList.push({
    name:"Camisillas overzit",
    price:"$120",
    img:"https://dynamobrand.co/cdn/shop/products/DSC00499.jpg?v=1681252226",
})
productoList.push({
    name:"Camisillas overzit",
    price:"$120",
    img:"https://dynamobrand.co/cdn/shop/products/DSC00499.jpg?v=1681252226",
})
productoList.push({
    name:"Camisas overzait",
    price:"$120",
    img:"https://dynamobrand.co/cdn/shop/products/DSC00499.jpg?v=1681252226",
})
productoList.push({
    name:"Camisillas overzit",
    price:"$120",
    img:"https://dynamobrand.co/cdn/shop/products/DSC00499.jpg?v=1681252226",
})
productoList.push({
    name:"Camisas overzait",
    price:"$120",
    img:"https://dynamobrand.co/cdn/shop/products/DSC00499.jpg?v=1681252226",
})
/*
<div class="product-card">
        <img src="https://dynamobrand.co/cdn/shop/products/DSC00499.jpg?v=1681252226" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/
function renderProduct(arr){
    for(product of productoList){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        //product = {name,price,imagen} product.image
        const ProductImg = document.createElement('img')
        ProductImg.setAttribute('src',product.img)
        //
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDIV = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name;
    
        productInfoDIV.appendChild(productPrice)
        productInfoDIV.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDIV);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
    
    
        cardContainer.appendChild(productCard)
    }
}
renderProduct(productoList);