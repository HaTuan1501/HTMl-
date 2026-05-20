/* SEARCH TOUR */

let search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", function () {

    let keyword = search.value.toLowerCase();

    let tours = document.querySelectorAll(".tour");

    tours.forEach(function (tour) {

      let titleElement = tour.querySelector(".title") || tour.querySelector("h3");

      let title = titleElement ? titleElement.innerText.toLowerCase() : "";

      if (title.includes(keyword)) {
        tour.style.display = "block";
      } else {
        tour.style.display = "none";
      }

    });

  });
}


/* FORM SUBMIT */

let form = document.getElementById("tourForm");

if (form) {
  form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Đăng ký tour thành công!");

    form.reset();

  });
}


/* ĐỔI MÀU ICON NAVBAR */

let links = document.querySelectorAll("nav a");

let currentPage = window.location.href;

links.forEach(link => {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});


/* SLIDER */

document.addEventListener("DOMContentLoaded", function () {

  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".mySwiper", {

      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }

    });
  }

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

});


/* DARK MODE */

let darkBtn = document.getElementById("darkModeToggle");

if (darkBtn) {
  darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
}


/* BACK TO TOP */

let topBtn = document.getElementById("topBtn");

if (topBtn) {

  window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }

  });

  topBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

}


/* TOUR LIKE */

document.querySelectorAll(".like").forEach(btn => {

  btn.addEventListener("click", function () {
    btn.classList.toggle("active");
  });

});


/* FILTER PRICE */

let priceFilter = document.getElementById("priceFilter");

if (priceFilter) {

  priceFilter.addEventListener("change", function () {

    let value = this.value;

    document.querySelectorAll(".tour").forEach(tour => {

      let priceText = tour.querySelector(".price").innerText;
      let price = parseInt(priceText.replace(/\D/g, ""));

      if (value === "all" || price <= parseInt(value)) {
        tour.style.display = "block";
      } else {
        tour.style.display = "none";
      }

    });

  });

}


/* TÍNH TIỀN TOUR */

let people = document.getElementById("people");
let total = document.getElementById("total");

let basePrice = 3500000;

if (people && total) {

  people.addEventListener("input", function () {

    let value = people.value || 0;
    let result = basePrice * value;

    total.innerText = result.toLocaleString();

  });

}


/* LẤY DỮ LIỆU TỪ URL */

let params = new URLSearchParams(window.location.search);

let name = params.get("name");
let priceParam = params.get("price");

if (name) {

  let tourName = document.getElementById("tourName");
  if (tourName) {
    tourName.innerText = name;
  }

}

if (priceParam) {

  let tourPrice = document.getElementById("tourPrice");
  if (tourPrice) {
    tourPrice.innerText = Number(priceParam).toLocaleString() + " VNĐ";
  }

}
