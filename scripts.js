const imageArray = [
  // First 6 products
  {
    url: "./image/product/product 1.png",
    name: "Gyro Sandwich",
    rating: 4.9,
    price: "$15.00",
  },
  {
    url: "./image/product/product 2.png",
    name: "Enchilade",
    rating: 4.9,
    price: "$15.00",
  },
  {
    url: "./image/product/product 3.png",
    name: "Green Beans",
    rating: 4.9,
    price: "$15.00",
  },
  {
    url: "./image/product/product 4.png",
    name: "Pizza",
    rating: 4.9,
    price: "$15.00",
  },
  {
    url: "./image/product/product 5.png",
    name: "Chicken Pot Pie",
    rating: 4.9,
    price: "$15.00",
  },
  {
    url: "./image/product/product 6.png",
    name: "Green Salad",
    rating: 4.9,
    price: "$15.00",
  },
  // Next 6 products
  {
    url: "./image/product/product 1.png",
    name: "Gyro Sandwich",
    rating: 4.9,
    price: "$15.00",
  },
  {
    url: "./image/product/product 2.png",
    name: "Enchilade",
    rating: 4.9,
    price: "$15.00",
  },
  {
    url: "./image/product/product 3.png",
    name: "Green Beans",
    rating: 4.9,
    price: "$15.00",
  },
  {
    url: "./image/product/product 4.png",
    name: "Pizza",
    rating: 4.9,
    price: "$15.00",
  },
  {
    url: "./image/product/product 5.png",
    name: "Chicken Pot Pie",
    rating: 4.9,
    price: "$15.00",
  },
  {
    url: "./image/product/product 6.png",
    name: "Green Salad",
    rating: 4.9,
    price: "$15.00",
  },
];

let productsShown = false;

function handleShowMoreProduct() {
  const productContainer = document.getElementById("product-list");
  const seeMoreBtn = document.querySelector(".see-more-product-btn p");

  if (!productsShown) {
    const productCards = document.createElement("div");
    productCards.classList.add("product-cards");
    productCards.id = "extra-products";

    for (let i = 6; i < 12; i++) {
      const item = imageArray[i];
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
          <div class="product-card-img">
            <img src="${item.url}" alt="${item.name}" />
          </div>
          <div class="product-card-desc">
            <div>
              <h2>${item.name}</h2>
              <p id="add-cart-btn">Add To Cart</p>
            </div>
            <div>
              <p>${item.rating}</p>
              <p>${item.price}</p>
            </div>
          </div>
        `;

      productCards.appendChild(productCard);
    }

    productContainer.appendChild(productCards);
    seeMoreBtn.textContent = "See Less Products";
    productsShown = true;
  } else {
    const extraProducts = document.getElementById("extra-products");
    if (extraProducts) {
      extraProducts.remove();
    }
    seeMoreBtn.textContent = "See More Products";
    productsShown = false;
  }
}
