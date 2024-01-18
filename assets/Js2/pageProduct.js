// Start page Product

const bgProductPage = document.querySelector(".bgProductPage");
const ContahinarPageProduct = document.getElementById("ContahinarPageProduct");

const cardProduct = document.querySelectorAll(".cardProduct");

// When I click on the name or image of the product, the product page appears
cardProduct.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const imgProduct = item.getElementsByClassName("img-product")[0].src;
    const taitlebarnd = item.getElementsByClassName("taitlebarnd")[0].innerText;
    const taitleProduct =
      item.getElementsByClassName("taitleProduct")[0].innerText;
    const priceProduct =
      item.getElementsByClassName("priceProduct")[0].innerText;
    // Create a product page
    const PageProduct = ` <div class="productPage">
    <i class="fa-solid fa-xmark closeproductPage"></i>
    <div class="infoProductInPageProduct">
      <h4 class="titleProductInPageProduct" >${taitleProduct}</h4>
      <p class="taitlebarndInPageProduct">${taitlebarnd}</p>
      <p class="priceProductInPageProduct">${priceProduct}</p>
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      
    </div>
    <div class="imgProductInPageProduct">
      <img class="imgProductInPageProducttt" src="${imgProduct}" alt="">
    </div>
  </div>`;

    ContahinarPageProduct.innerHTML = PageProduct;

    const closeproductPage = document.querySelector(".closeproductPage");
    const productPage = document.querySelector(".productPage");

    // When you click on the close icon, the box will be hidden
    closeproductPage.addEventListener("click", (eo) => {
      productPage.style.transform = "scale(0)";

      setTimeout(() => {
        bgProductPage.style.display = "none";
      }, 300);
    });

    // When you click on the black screen, the box is hidden
    bgProductPage.addEventListener("click", (eo) => {
      if (eo.target.classList.contains("bgProductPage")) {
        productPage.style.transform = "scale(0)";

        setTimeout(() => {
          bgProductPage.style.display = "none";
        }, 300);
      }
    });

    // When I click on the name or image of the product, the product page appears
    if (
      eo.target.classList.contains("taitleProduct") ||
      eo.target.classList.contains("img-product")
    ) {
      bgProductPage.style.display = "flex";
      setTimeout(() => {
        productPage.style.transform = "scale(1)";
      }, 200);
    }
  });
});

// End page Product

{
  /* <button class="addToCartProductInPageProduct" > add to Cart</button>
<button class="addToLoveProductInPageProduct">Add to Love</button> */
}
