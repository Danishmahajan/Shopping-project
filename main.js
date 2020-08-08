
   let carts=document.querySelectorAll('.add-cart');


   let products = [
       {
        name:'BSN Syntha 6',
        tag:'BSN Syntha 6',
        price:3400 ,
        inCart:0
       },
       {
        name:'GNC Pure Isolate',
         tag:'GNC Pure Isolate',
        price:4500,
        inCart:0
       },
       {
        name:'MuscleTech Nitrotech',
        tag:'MuscleTech Nitrotech',
        price:4550,
        inCart:0
       },
       {
        name:'GNC Whey Protein',
        tag:'GNC Whey Protein',
        price:3900,
        inCart:0
       },
       {
        name:'MusclePharm Combat Whey',
        tag:'MusclePharm Combat Whey',
        price:3550,
        inCart:0
       },
       {
        name:'One Science Nitra Whey',
        tag:'One Science Nitra Whey',
        price:4000,
        inCart:0
       },
       {
        name:'GNC Pro Whey Protein',
        tag:'GNC Pro Whey Protein',
        price:3400,
        inCart:0
       },
       {
        name:'RONNIE COLEMAN Pro Antium',
        tag:'RONNIE COLEMAN Pro Antium',
        price:4349,
        inCart:0
       },
       {
        name:'GNC  Raw Protein',
        tag:'GNC  Raw Protein',
        price:2899,
        inCart:0
       },
       {
        name:'NitroTech  Raw Protein',
        tag:'NitroTech  Raw Protein',
        price:3579,
        inCart:0
       },
       {
        name:'Universal  Daily Formula',
        tag:'Universal  Daily Formula',
        price:745,
        inCart:0
       }


   ];
   for(let i=0;i<carts.length;i++){
     carts[i].addEventListener('click',()=>{
      cartNumbers(products[i]);
      totalCost(products[i])
     })
   }

   function onLoadCartNumbers(){
    let productNumbers =localStorage.getItem('cartNumbers');

    if (productNumbers) {
      document.querySelectorAll('.cart span').textContent = productNumbers;
    }
   }

   function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');
   

    productNumbers = parseInt(productNumbers);
  if (productNumbers) {
   localStorage.setItem('cartNumbers', productNumbers+1); 
    document.querySelector('.cart span').textContent = productNumbers + 1 ;
  }else{
     localStorage.setItem('cartNumbers',1); 
     document.querySelector('.cart span').textContent = 1;
  }

  setItems(product);
}
function setItems(product){
  let cartItems =localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
 
  if (cartItems!==null) {
    
    if ( cartItems[product.tag]== undefined) {
      cartItems={
        ...cartItems,
        [product.tag]:product
      }
    }
    cartItems[product.tag].inCart+=1;
  }else{
    product.inCart =1;
    cartItems = {
      [product.tag]:product
    }
  }
 
  localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
  // console.log("the products price is ",product.price);
  let cartCost =localStorage.getItem('totalCost');
  
  console.log("my cartCost is",cartCost);
console.log(typeof cartCost);

if (cartCost!=null) {
  cartCost = parseInt(cartCost);
localStorage.setItem("totalCost",cartCost + product.price);
}else{
localStorage.setItem("totalCost",product.price);
}
}




// function displayCart(){
//  let cartItems = localStorage.getItem("productsInCart");
//  cartItems = JSON.parse(cartItems);
// let productContainer = document.querySelector(".products-Container");

//  if (cartItems && productContainer) {
// productContainer.innerHTML = '';
// Object.value(cartItems).map(item =>{
//   productContainer.innerHTML +=my_string = 
//   `<div class="product">
//      <ion-icon name="close-circle-outline"></ion-icon>
//      <img src="./images/$(item.tag).jpg">
//      <span>$(item.name)</span>
     
//   `;
// })
//  }
//  }
 onLoadCartNumbers();
 // displayCart();
       