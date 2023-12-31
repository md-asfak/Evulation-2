async function productFunc() {
  let dataFetch = await fetch("https://fakestoreapi.com/products");
  let data = await dataFetch.json();
  console.log(data);
  showData(data);
}

let main = document.querySelector("#product-container");
function showData(xy) {
  xy.map((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    let title = document.createElement("h4");
    title.setAttribute("class", "title");
    title.innerHTML = el.title;

    let des = document.createElement("p");
    des.setAttribute("class", "p");
    des.innerHTML = el.description;

    let image = document.createElement("img");
    image.setAttribute("class", "img");
    image.src = el.image;

    let price = document.createElement("span");
    price.setAttribute("class", "prices");
    price.innerHTML = `$ ${el.price}`;

    let div1 = document.createElement("div");

    let button = document.createElement("button");
    button.setAttribute("class", "btn");
    button.innerHTML = "Click";

    div1.append(button);
    div.append(image, title, des, price, div1);
    main.append(div);
  });
}

productFunc();
