const productUrl = `/assets/produtos.json`;

const prodTop = document.querySelector('.product.product__t');
const prodBottom = document.querySelector('.product.product__b');
const prodExc = document.querySelector('.product.product__exc');
const prodMost = document.querySelector('.product.most_s');

let products = [];

const prodItens = fetch(productUrl)
    .then(response => response.json())
    .then( data =>  {
        data.map( (product, index) => {    
          products += `
          <div class="product__card" data-key="${index}">
          <figure>
              <img src="${product.src}" alt="Coleira Corda">
              <figcaption>${product.title}</figcaption>
          </figure>
          <span class="rates"><img src="/assets/images/product/rate.png" alt="Rates"></span>
           
          <p class="price"> <b>${product.price.toFixed(2)}</b>  <span class="offer">${product.offer.toFixed(2)}</span>  </p>
          <a href="#" class="btn__buy" onclick="addToCart(${index})">COMPRAR</a>
         
          </div>
          `         

          prodTop.innerHTML = products; 
          prodBottom.innerHTML = products; 
          prodExc.innerHTML += products; 
          prodMost.innerHTML += products; 
        })
    })

//Modal Newsletter
setTimeout(  () => {
    document.querySelector('.modal').classList.add('show');
}, 500 )

const btnClose = document.querySelector('.modal .close');
btnClose.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('show');
}  )
let email = document.getElementById('mail');

function salvarLead() {   
    if (email.value != ""){
     sessionStorage.setItem('email cadastro', email.value);
     alert('Parabéns email cadastrado')
    }else {
     alert('Favor inserir um email válido ou feche o modal')
    }
}
//Modal produtos

let btnCartClose = document.querySelector('.close__cart');
btnCartClose.addEventListener('click', () => {
    document.querySelector('.cart').classList.remove('open');

} );

const cart = document.querySelector('.cart');
function addToCart(e){  
    if (!cart.classList.contains('open') ) {
        cart.classList.add('open')
    let index = e;

     updateCart(index)           
    }  
}
const prodCart =   document.querySelector('.cart .product');
const subCart =document.querySelector('.cart .cart__subtotal');

function updateCart(e) {
    switch( e )  {
        case 0 :
            prodCart.innerHTML += `
            <div class="product__line">
            <div class="img--smal">
            <img src="/assets/images/product/product-1.png" alt="" width="60px" height="90px">
            </div>
            <div class="infos">
            <p class="product__name">
               Morbi condimentum egestas quam - 3m
            </p>
            <p class="color">
             Cor:misto
            </p>
            <p class="size">
             Tamanho - 3M
            </p>
            <p class="price">
             R$ 18,90
            </p>
            </div> 
            </div>
             `
             break; 
             case 1 :
                prodCart.innerHTML += `
                <div class="product__line">
                <div class="img--smal">
                <img src="/assets/images/product/product-2.png" alt="" width="60px" height="90px">
                </div>
                <div class="infos">
                <p class="product__name">
                   Morbi condimentum egestas quam - 3m
                </p>
                <p class="color">
                 Cor:misto
                </p>
                <p class="size">
                 Tamanho - 3M
                </p>
                <p class="price">
                 R$ 18,90
                </p>
                </div> 
                </div>
            `
                 break; 
                 default:
                     console.log('Deu ruim');       
   }
   subCart.innerHTML = `R$ 18,90`
}  
const btnMobile = document.querySelector('.menu__mobile');
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    btnMobile.classList.toggle('open');
}
btnMobile.addEventListener('click', toggleMenu);