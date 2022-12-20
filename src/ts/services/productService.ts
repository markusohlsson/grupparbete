import { Product } from "../models/Product";

/* Headcovers */

let headcover1: Product = new Product(
  "Headcover Gris",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "../assets/products/Headcover_1.jpg",
  "headcover1",
  0
);

let headcover2: Product = new Product(
  "Headcover Ko",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "../assets/products/Headcover_2.jpg",
  "headcover2",
  0
);

let headcover3: Product = new Product(
  "Headcover Älg",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "..assets/products/Headcover_3.jpg",
  "headcover3",
  0
);

export let headcovers: Product[] = [headcover1, headcover2, headcover3];

/* Golfklubbor */

let proFliHi: Product = new Product(
  "Pro Fli Hi",
  "2799",
  "Mizuno Pro har alltid varit Mizunos mest innovationsinriktade serie med avancerad ingenjörskonst dold i ett stilrent och tidlöst paket.",
  "Golfklubbor",
  "../assets/products/Pro_Fli_Hi.jpg",
  "proFliHi",
  0
);

let stealthUDI: Product = new Product(
  "Stealth UDI",
  "2899",
  "Stealth UDI är ett tourinspirerat utilityjärn riktat mot den bättre spelaren. Tyngdpunkten är placerad för att skapa en låg och penetrerande bollflykt med maximal kontroll.",
  "Golfklubbor",
  "../assets/products/Stealth_UDI.png",
  "stealthUDI",
  0
);

let u510: Product = new Product(
  "U510",
  "2699",
  "Titleist U510 är ett utility-järn med hybridliknande egenskaper men med formen av en kraftfull järnklubba för högre utgångsvinkel och längd.",
  "Golfklubbor",
  "../assets/products/U510.jpg",
  "u510",
  0
);

export let clubs: Product[] = [proFliHi, stealthUDI, u510];

/* Golfbollar */

let tp5Pop: Product = new Product(
  "TP5 pix, Glass",
  "599",
  "Golfboll med...",
  "Golfbollar",
  "../assets/products/TP5_PIX_ROCKET_POP.jpg",
  "tp5Pop",
  0
);

let tp5Sushi: Product = new Product(
  "TP5 pix, Sushi",
  "599",
  "Golfboll med fräsch doft av fisk",
  "Golfbollar",
  "../assets/products/TP5_PIX_SUSHI.jpg",
  "tp5Sushi",
  0
);

let tp5Spider: Product = new Product(
  "TP5 pix, Spindel",
  "599",
  "Perfekt för familj med pälsallergi!",
  "Golfbollar",
  "../assets/products/TP5_PIX_SPIDER.jpg",
  "tp5Spider",
  0
);

export let balls: Product[] = [tp5Pop, tp5Sushi, tp5Spider];

/* Alla produkter */

export let productList: Product[] = [
  headcover1,
  headcover2,
  headcover3,
  proFliHi,
  stealthUDI,
  u510,
  tp5Pop,
  tp5Sushi,
  tp5Spider,
];

/* Funktioner */

// let container: HTMLDivElement = document.getElementById(
//   "container"
// ) as HTMLDivElement;

let bigContainer: HTMLDivElement = document.getElementById(
  "productsContainer"
) as HTMLDivElement;

// let productPageContainer: HTMLDivElement = document.getElementById(
//   "productPageContainer"
// ) as HTMLDivElement;

let readMoreButton: HTMLButtonElement = document.createElement("button");

let productContainer: HTMLDivElement = document.createElement("div");

export function createHTMLForProduct(products: Product[]) {
  for (let i: number = 0; i < products.length; i++) {
    let productDiv: HTMLDivElement = document.createElement("div");
    productContainer = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h3");
    let imageContainer: HTMLDivElement = document.createElement("div");
    let image: HTMLImageElement = document.createElement("img");
    let price: HTMLParagraphElement = document.createElement("p");
    let description: HTMLParagraphElement = document.createElement("p");
    // let addToCartButton: HTMLButtonElement = document.createElement("button");
    let amountInput: HTMLInputElement = document.createElement("input");
    readMoreButton = document.createElement("button");

    let a: HTMLAnchorElement = document.createElement("a");

    productDiv.className = "product";
    productContainer.className = "product" + "__" + products[i].id;
    title.className = "product__title";
    imageContainer.className = "product__imageContainer";
    image.className = "product__imageContainer__img";
    price.className = "product__price";
    description.className = "product__description";
    amountInput.type = "number";

    readMoreButton.id = "buttonMore";
    // let amount:number = amountInput.valueAsNumber;

    a.href = "/pages/productpage.html";

    title.innerHTML = products[i].title;
    price.innerHTML = products[i].price + " " + "kr"; // måste göra om till number sen
    description.innerHTML = products[i].description;
    // addToCartButton.innerHTML = "Lägg i varukorg";
    readMoreButton.innerHTML = "Läs mer...";

    productContainer.appendChild(title);
    productContainer.appendChild(imageContainer);
    imageContainer.appendChild(image);
    productContainer.appendChild(description);
    productContainer.appendChild(price);
    productContainer.appendChild(amountInput);
    // productContainer.appendChild(addToCartButton);
    a.appendChild(readMoreButton);
    productContainer.appendChild(a);

    productDiv.appendChild(productContainer);
    bigContainer.appendChild(productDiv);
    // productPageContainer.appendChild(productDiv);

    readMoreButton.addEventListener("click", () => {
      localStorage.setItem("savedProductList", JSON.stringify(productList[i]));
      // createHTMLForProduct(productList);
    });
  }
}

// productDiv.addEventListener("click", () => {
//   // här ska vi länkas över till en ny sida //
//   productPageContainer.className = "on";
//   container.appendChild(productDiv);
//   productPageContainer.appendChild(container);
// });

// readMoreButton.addEventListener("click", () => {
//   // här är jag!!//
// });

// PRODUCTPAGE //

// här borde vi med andra ord vara på produktsidan //

// let xxxx: Element = document.getElementById("xxxx") as HTMLElement;
// let aStartpage: HTMLAnchorElement = document.createElement("a");
// aStartpage.href = "../index.htmll#productsContainer";
// xxxx.appendChild(aStartpage);

// xxxx.addEventListener("click", () => {
//   productPageContainer.className = "on";
//   container.innerHTML = "";
//   createHTMLForProduct(productList);
// });

// loopa igen efter enskild - alla med??? //

// fixa så att priset syns på den enskilda sidan - ändra inställningarna på knappen //

// flytta över till 4 olika html-filer //
