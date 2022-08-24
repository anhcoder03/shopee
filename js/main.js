const productElement = document.querySelector(".product-list");
const blogElement = document.querySelector(".blog-list");

const products = [
  {
    id: 1,
    name: "Lira Earrings",
    image: "./assets/images/img-products/Img 02.png",
    price: "$ 20,00",
  },
  {
    id: 2,
    name: "Hal Earrings",
    image: "./assets/images/img-products/Img 01.png",
    price: "$ 25,00",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3 ",
    image: "./assets/images/img-products/Img 03.png",
    price: "$ 30,00",
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    image: "./assets/images/img-products/Img 04.png",
    price: "$ 30,00",
  },
  {
    id: 5,
    name: "Plaine Necklace",
    image: "./assets/images/img-products/Img 05.png",
    price: "$ 19,00",
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    image: "./assets/images/img-products/Img 06.png",
    price: "$ 29,00",
  },
];

const rendingProduct = products.map((product) => {
  return `
  <div class="product-item" data-id="${product.id}">
    <div class="product-image">
      <a href="#"
        ><img src="${product.image}" alt=""
      /></a>
      <div class="modal-product">
        <a href="#"><ion-icon name="cart-outline" id="icon"></ion-icon></a>
        <a href="#"><ion-icon name="eye-outline"  id="icon"></ion-icon></a>
        <a href="#"><ion-icon name="heart-outline" id="icon"></ion-icon></a>
        </a>
      </div>
    </div>
    <div class="product-info">
      <a href="#" class="product-name">${product.name}</a>
      <p>${product.price}</p>
    </div>
  </div>`;
});

if (productElement) {
  productElement.innerHTML = rendingProduct.join("");
}

// blog
const blogs = [
  {
    id: 1,
    title: "Top Trends From Spring",
    time: "Fashion - October 8, 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum quis quibusdam in itaque facere ab alias expedita corrupti, rerum repellat nihil nesciunt cupiditate eaque numquam quidem aut deleniti quod?",
    img: "./assets/images/img-blog/Img 01.png",
  },
  {
    id: 2,
    title: "Top Trends From Spring",
    time: "Fashion - October 8, 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum quis quibusdam in itaque facere ab alias expedita corrupti, rerum repellat nihil nesciunt cupiditate eaque numquam quidem aut deleniti quod?",
    img: "./assets/images/img-blog/Img 02.png",
  },
  {
    id: 3,
    title: "Top Trends From Spring",
    time: "Fashion - October 8, 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum quis quibusdam in itaque facere ab alias expedita corrupti, rerum repellat nihil nesciunt cupiditate eaque numquam quidem aut deleniti quod?",
    img: "./assets/images/img-blog/Img 03.png",
  },
  {
    id: 4,
    title: "Top Trends From Spring",
    time: "Fashion - October 8, 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum quis quibusdam in itaque facere ab alias expedita corrupti, rerum repellat nihil nesciunt cupiditate eaque numquam quidem aut deleniti quod?",
    img: "./assets/images/img-blog/Img 04.png",
  },
];

const rendingBlog = blogs.map((blog) => {
  return `
  <div class="blog-item" data-id="${blog.id}">
    <div class="blog-img">
      <a href="#">
      <img src="${blog.img}" alt="" />
      </a>
    </div>
    <div class="blog-bottom">
      <p class="blog-time">${blog.time}</p>
      <a href="#" class="blog-title">${blog.title}</a>
      <p class="desc">${blog.desc}</p>
      <a href="#">Read More</a>
    </div>
</div>`;
});

if (blogElement) {
  blogElement.innerHTML = rendingBlog.join("");
}
