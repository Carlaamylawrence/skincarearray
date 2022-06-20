const items = ["cleanser", "mask", "scrub", "sunscreen", "moisturizer"];

function showItems(items) {
  document.querySelector("#products").innerHTML = "";
  items.forEach((items) => {
    document.querySelector("#products").innerHTML += `<li>${items}</li>`;
  });
}
showItems(items);

function addItems() {
  const item = document.querySelector("#addProduct").value;
  if (item === "")
    document.querySelector("#products").innerHTML = `ENTER VALID VALUE`;
  else {
    items.push(item);
    showItems(items);
  }
}

function findItems() {
  const text = document.querySelector("#findProduct").value;
  const item = items.find((search) => search.includes(text));
  document.querySelector("#products").innerHTML = `<li>${
    item ? item : "no matches"
  }</li>`;
}
