
/* SEARCH TOUR */
let search = document.getElementById("search");

search.addEventListener("keyup",function(){

let keyword = search.value.toLowerCase();

let tours = document.querySelectorAll(".tour");

tours.forEach(function(tour){

let title = tour.querySelector(".title").innerText.toLowerCase();

if(title.includes(keyword)){
tour.style.display="block";
}else{
tour.style.display="none";
}

});

});


/* FORM SUBMIT */

let form = document.getElementById("tourForm");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Đăng ký tour thành công!");

form.reset();

});

