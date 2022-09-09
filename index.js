const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const menu = document.querySelector(".menu");

const leftPosition = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.add("show");

  }
});

closeNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.remove("show");
  }
}
);
function shop(){
  alert("please select the product")
}
function mycoolfunction(){
  alert("your product has been added to the cart. please fill the form mentioned below ")
}
function last(){
  alert("order is placed successfully")
}