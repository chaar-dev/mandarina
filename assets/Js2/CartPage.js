// Start Cart Page

const cart = document.querySelector(".cart");
const closeCartPage = document.getElementById("closeCartPage");
const perantCart = document.querySelector(".perantCart");
const bgCartPage = document.querySelector(".bgCartPage");
const cartPage = document.querySelector(".cartPage");
// start Function for calculating the total price
const updateTotalPrice = () => {
  const allProductsInCart = document.querySelectorAll(".boxCart");
  let total = 0;

  allProductsInCart.forEach((item) => {
    let price = Number(
      item
        .getElementsByClassName("priceProductInCart")[0]
        .innerText.replace("$", "")
    );
    let quntity = Number(
      item.getElementsByClassName("numberProductInCart")[0].value
    );

    total = total + price * quntity;
  });

  const priceSpan = document.querySelector(".priceSpan");
  priceSpan.innerText = `$${total}`;
}; // End Function for calculating the total price

// When you click on the Cart icon, the box will appear
cart.addEventListener("click", (eo) => {
  bgCartPage.style.display = "block";
  setTimeout(() => {
    perantCart.style.transform = " translateX(0)";
  }, 100);
});
// When you click on the black screen, the box is hidden

bgCartPage.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("bgCartPage")) {
    perantCart.style.transform = " translateX(50vw)";
    setTimeout(() => {
      bgCartPage.style.display = "none";
    }, 300);
  }
});
// When you click on the item, it activates the function to calculate the total price
bgCartPage.addEventListener("click", (eo) => {
  updateTotalPrice();
});
// When the item changes, it activates the function to calculate the total price
bgCartPage.addEventListener("change", (eo) => {
  updateTotalPrice();
});

// When you click on the close icon, the box will be hidden

closeCartPage.addEventListener("click", (eo) => {
  perantCart.style.transform = " translateX(50vw)";
  setTimeout(() => {
    bgCartPage.style.display = "none";
  }, 400);
});

const shopping = document.querySelectorAll(".shopping");
shopping.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const perantProduct = item.parentElement.parentElement;
    const imgProduct =
      perantProduct.getElementsByClassName("img-product")[0].src;
    const taitleProduct =
      perantProduct.getElementsByClassName("taitleProduct")[0].innerText;
    const priceProduct =
      perantProduct.getElementsByClassName("priceProduct")[0].innerText;
    // Add & Create the item to your cart content
    const perantCartContent = ` 
        <div class="boxCart">
        <img class="imgProductInCart" src="${imgProduct}" alt="">
        <div class="moreInfoInCart">
          <p class="taitleProductInCat">${taitleProduct}</p>
          <div class="iconCart">
            <i class="fa-regular fa-trash-can trashInCart"></i>
            <i class="fa-solid fa-plus PulsOne"></i>
            <input class="numberProductInCart" value="1" min="1" type="number" >
            <i class="fa-solid fa-minus minusOne"></i>
          </div>
          <h6 class="priceProductInCart">${priceProduct}</h6>
        </div>
      </div>`;
    cartPage.innerHTML += perantCartContent;
    // When you click on the close icon, the box will be hidden
    const closeCartPage = document.getElementById("closeCartPage");
    closeCartPage.addEventListener("click", (eo) => {
      perantCart.style.transform = " translateX(50vw)";
      setTimeout(() => {
        bgCartPage.style.display = "none";
      }, 300);
    });

    item.getElementsByTagName("button")[0].setAttribute("disabled", "");
    const productsNumber = document.querySelector(".products-number");
    productsNumber.innerText++;

    // When pressed, the quantity increases by one
    const PulsOne = document.querySelectorAll(".PulsOne");
    PulsOne.forEach((item) => {
      item.addEventListener("click", (eo) => {
        item.nextElementSibling.value++;
      });
    });
    // When pressed, the quantity decreases by one
    const minusOne = document.querySelectorAll(".minusOne");
    minusOne.forEach((item) => {
      item.addEventListener("click", (eo) => {
        if (item.previousElementSibling.value > 1) {
          item.previousElementSibling.value--;
        }
      });
    });

    //   When you click on the delete icon, the item is removed and the red color is removed from the cart icon
    const trashInCart = document.querySelectorAll(".trashInCart");
    trashInCart.forEach((item) => {
      item.addEventListener("click", (eo) => {
        item.parentElement.parentElement.parentElement.remove();

        const imgOfDeletedProductShoping =
          item.parentElement.parentElement.parentElement.getElementsByClassName(
            "imgProductInCart"
          )[0].src;

        const cardProduct = document.querySelectorAll(".cardProduct");

        cardProduct.forEach((item) => {
          if (
            item.getElementsByClassName("img-product")[0].src ==
            imgOfDeletedProductShoping
          ) {
            item
              .getElementsByClassName("fa-cart-shopping")[0]
              .removeAttribute("disabled");
          }
        });
        productsNumber.innerText--;
      });
    });
    updateTotalPrice();
  });
});

// End Cart Page
