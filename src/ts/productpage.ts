import { Product } from "./models/Product";

// ta bort ikon //

let away: HTMLHeadingElement = document.getElementById(
  "hamburgericonbtn"
) as HTMLHeadingElement;

away.style.opacity = "0";

// hämta från LS //

let testListString: string = localStorage.getItem("savedProductList") || "";
let listProduct: Product = JSON.parse(testListString);

// varukorgslistan //

let cartList: Product[] = [];

function createHTMLForProductPage(productList: Product) {
  let productPageBigContainer: HTMLDivElement = document.getElementById(
    "productPageBigContainer"
  ) as HTMLDivElement;
  let productPageContainer: HTMLDivElement = document.getElementById(
    "productPageContainer"
  ) as HTMLDivElement;
  let title: HTMLHeadingElement = document.createElement("h3");
  let imageContainer: HTMLDivElement = document.createElement("div");
  let image: HTMLImageElement = document.createElement("img");
  let textContainer: HTMLDivElement = document.createElement("div");
  let price: HTMLParagraphElement = document.createElement("p");
  let description: HTMLParagraphElement = document.createElement("p");
  let addToCartButton: HTMLButtonElement = document.createElement("button");

  productPageContainer.className = "product" + "__" + productList.id;
  title.className = "product__textContainer__title";
  imageContainer.className = "product__imageContainer";
  image.className = "product__imageContainer__img";
  textContainer.className = "product__textContainer";
  price.className = "product__textContainer__price";
  description.className = "product__textContainer__description";
  addToCartButton.className = "product__textContainer__addToCartButton";

  title.innerHTML = productList.title;
  price.innerHTML = productList.price + " " + "kr";
  description.innerHTML = productList.description;
  addToCartButton.innerHTML = "Lägg i varukorg";

  productPageContainer.appendChild(imageContainer);
  imageContainer.appendChild(image);
  textContainer.appendChild(title);
  textContainer.appendChild(description);
  textContainer.appendChild(price);
  textContainer.appendChild(addToCartButton);

  productPageContainer.appendChild(textContainer);
  productPageBigContainer.appendChild(productPageContainer);

  addToCartButton.addEventListener("click", () => {
    const cartListJSON: string = localStorage.getItem("cartList") || "";

    if (cartListJSON) {
      let cartListLS: Product[] = JSON.parse(cartListJSON);

      cartList = cartListLS;
    }

    const existingCartItemindex = cartList.findIndex(
      (cartItem) => cartItem.id === productList.id
    );

    if (existingCartItemindex >= 0) {
      cartList[existingCartItemindex].amount++; // = userAmount
    } else {
      productList.amount++; // = userAmount
      cartList.push(productList);
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));
  });
}

createHTMLForProductPage(listProduct);
