// const body = document.body;
// const maincontainer = document.querySelector(".maincontainer");

// function divGenrator(tag, attN, atttype, parent) {
//   let element = document.createElement(tag);
//   if (!!attN && atttype) {
//     element.setAttribute(attN, atttype);
//   }
//   if (!!parent) {
//     parent.append(element);
//   }
//   return element;
// }

// window.addEventListener("scrollend", function (e) {
//   for (let i = 0; i <= 15; i++) {
//     divGenrator("div", "class", "card", maincontainer);
//   }
// });

// window.addEventListener("scrollend", function (e) {
//   maincontainer.innerHTML +=
//     "<div></div><div></div><div></div><div></div><div></div><div></div>";
// });

async function displayImageDiv() {
  const mainContainer = document.querySelector(".maincontainer");
  for (let i = 0; i <= 10; i++) {
    let rendomePic = await fetch("https://picsum.photos/200/300");
    if (rendomePic.ok) {
      const image = document.createElement("img");
      image.src = rendomePic.url;
      mainContainer.append(image);
    }
  }
}
displayImageDiv();
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    displayImageDiv();
  }
});

// window.addEventListener("scrollend", function (e) {
//   displayImagDiv();
// });
