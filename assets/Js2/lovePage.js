const love = document.querySelector(".love");
const bgLovePage = document.querySelector(".bgLovePage");
const perantLove = document.querySelector(".perantLove");

// When you click on the love icon, the box will appear
love.addEventListener("click", (eo) => {
  bgLovePage.style.display = "block";
  setTimeout(() => {
    perantLove.style.transform = "translateX(0)";
  }, 100);
});
// When you click on the close icon, the box will be hidden

const closeLovePage = document.querySelector(".closeLovePage");

closeLovePage.addEventListener("click", (eo) => {
  perantLove.style.transform = "translateX(50vw)";
  setTimeout(() => {
    bgLovePage.style.display = "none";
  }, 300);
});
// When you click on the black screen, the box is hidden

bgLovePage.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("bgLovePage")) {
    perantLove.style.transform = "translateX(50vw)";
    setTimeout(() => {
      bgLovePage.style.display = "none";
    }, 300);
  }
});

//
const loveProduct = document.querySelectorAll(".love-product");
const loveProductIcon = document.querySelectorAll(".fa-heart");
const productsLoveNumber = document.querySelector(".products-love");

loveProduct.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    loveProductIcon[index + 1].style.color = "red";
    productsLoveNumber.innerText++;
    const cardProductLovePage = item.parentElement;
    const imgProductInLOvePage =
      cardProductLovePage.getElementsByClassName("img-product")[0].src;
    const taitlebarndInLovePage =
      cardProductLovePage.getElementsByClassName("taitlebarnd")[0].innerText;
    const taitleProductInLovePage =
      cardProductLovePage.getElementsByClassName("taitleProduct")[0].innerText;
    const priceProductInLovePage =
      cardProductLovePage.getElementsByClassName("priceProduct")[0].innerText;
   
    // Add & Create the item to your favorites content
    const productInLovePageContent = `<div class="boxLove">
    <img class="imgProductInLove" src="${imgProductInLOvePage}" alt="">
    <div class="moreInfoInLove">
      <p class="taitleProductInLove">${taitleProductInLovePage}</p>
      <h6 class="brandNaneInLovePage">${taitlebarndInLovePage}</h6>
      <div class="iconLoveAndPrice">
        <h6 class="priceProductInLove">${priceProductInLovePage}</h6>
        <i class="fa-regular fa-trash-can trashInLove"></i>
      </div>
    </div>
  </div>`;
    const lovePage = document.querySelector(".lovePage");
    lovePage.innerHTML += productInLovePageContent;

    // When you click on the close icon, the box will be hidden
    const closeLovePage = document.querySelector(".closeLovePage");
    closeLovePage.addEventListener("click", (eo) => {
      perantLove.style.transform = "translateX(50vw)";
      setTimeout(() => {
        bgLovePage.style.display = "none";
      }, 300);
    });
    //   When you click on the delete icon, the item is removed and the red color is removed from the love icon
    const trashInLove = document.querySelectorAll(".trashInLove");
    trashInLove.forEach((item, index) => {
      item.addEventListener("click", (eo) => {
        item.parentElement.parentElement.parentElement.remove();
        productsLoveNumber.innerText--;

        const imgOfDeletedProductLove =
          item.parentElement.parentElement.parentElement.getElementsByClassName(
            "imgProductInLove"
          )[0].src;

        const cardProduct = document.querySelectorAll(".cardProduct");

        cardProduct.forEach((item) => {
          if (
            item.getElementsByClassName("img-product")[0].src ==
            imgOfDeletedProductLove
          ) {
            item.getElementsByClassName("fa-heart")[0].style.color = "#ccd2ed";
          }
        });
      });
    });
  });
});
