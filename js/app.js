const searchShow = document.querySelector(".form-search");
const searchBtn = document.getElementById("show-search");
const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", () => {
  searchShow.style = "display: none";
  searchBtn.style = "opacity: 1";
});
searchBtn.addEventListener("click", () => {
  searchBtn.style = "opacity: 0";
  searchShow.style = "display: flex";
});

function tabUi(evt, choose) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(choose).style.display = "block";
  evt.currentTarget.className += " active";
}

const showCartBtn = document.getElementById("show-cart-btn");
const showCart = document.querySelector(".show-cart");
const closeCartBtn = document.getElementById("close-cart");
const main = document.getElementById('main')

showCartBtn.addEventListener("click", () => {
  showCart.style = "transform: translateX(0)";
});
main.addEventListener('click', (e) => {
  showCart.style = "transform: translateX(100%)";
})
closeCartBtn.addEventListener("click", () => {
  showCart.style = "transform: translateX(100%)";
});
