const emailButton= document.getElementById('email')
const emailLog = document.getElementById('deskTopMenu');
const menuMobile = document.getElementById('menuMobile');
const iconMenuMobile = document.getElementById('iconMenuMobile');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const payDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


emailButton.addEventListener('click', twirlDeskTopMenu);
iconMenuMobile.addEventListener('click',twirlMenuMobile);
carritoIcon.addEventListener('click',twirlPayDetail);



function twirlDeskTopMenu() {
  emailLog.classList.toggle('inactive');
  if(!payDetail.classList.contains('inactive')){
    payDetail.classList.toggle('inactive');   
  }
}
function twirlMenuMobile(){
  menuMobile.classList.toggle('inactive')
  if(!payDetail.classList.contains('inactive')){
    payDetail.classList.toggle('inactive');   
  }
}
function twirlPayDetail(){
  payDetail.classList.toggle('inactive')

    if(!menuMobile.classList.contains('inactive')){
      menuMobile.classList.toggle('inactive');
      emailLog.classList.toggle('inactive'); 
    }
}

const productList =[];

productList.push({
  name: 'bike',
  price: 202,
  img: 'https://tinyurl.com/2ef74obb'
})
productList.push({
  name: 'mouse',
  price: 20,
  img: 'https://tinyurl.com/2ef74obb'
})
productList.push({
  name: 'desktop',
  price: 572,
  img: 'https://tinyurl.com/2ef74obb'
});
productList.push({
  name: 'bike',
  price: 202,
  img: 'https://tinyurl.com/2ef74obb'
})
productList.push({
  name: 'mouse',
  price: 20,
  img: 'https://tinyurl.com/2ef74obb'
})
productList.push({
  name: 'desktop',
  price: 572,
  img: 'https://tinyurl.com/2ef74obb'
})


function renderProducts(arr){
  for (product of arr){


    const productCart = document.createElement('div');
    const productCartImg = document.createElement('img');
    const productInfo = document.createElement('div');
    const productDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');
    const productFigure = document.createElement('figure');
    const productFigureImg = document.createElement('img');
  
    productCart.classList.add('product-card');
    productInfo.classList.add('product-info');
  
    productCart.appendChild(productCartImg);
    productCart.appendChild(productInfo);
    
    productInfo.appendChild(productDiv);
    productInfo.appendChild(productFigure);
  
  
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);
  
    productFigure.appendChild(productFigureImg);
  
    productFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
    productCartImg.setAttribute('src',product.img);
  
    productName.innerHTML = product.name;
    productPrice.innerHTML = product.price;
     
    cardsContainer.appendChild(productCart);
  }
}


/* <div class="product-card">
  <img src="https://tinyurl.com/2ef74obb" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div> */