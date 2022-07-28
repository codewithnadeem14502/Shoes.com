// console.log("hello world")
const Wrapper = document.querySelector(".sliderWrapper");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 200,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 150,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 147,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 407,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 77,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProdut = products[0]
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

const menuItems = document.querySelectorAll(".menuItem");
// foor type , it listen our click 
menuItems.forEach((item,index)=>{
    item.addEventListener("click",() =>{
        // change the current slide
        Wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //  changing the choosen the product 
        choosenProduct = products[index]

        // change text of current products
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$"+choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

//  assing the new color to background
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});


// colors
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white"
        size.style.color = "black"
        })
        size.style.backgroundColor="black"
        size.style.color = "white"
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex"
})
close.addEventListener("click",()=>{
    payment.style.display = "none"
})