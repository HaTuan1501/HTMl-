let search = document.getElementById("search");

search.addEventListener("keyup", function(event){

let keyword = search.value.toLowerCase();

let posts = document.querySelectorAll(".post");

posts.forEach(function(post){

let title = post.querySelector(".title").innerText.toLowerCase();

if(title.includes(keyword)){
post.style.display="block";
}else{
post.style.display="none";
}

});

});
search.addEventListener("keypress", function(e){

if(e.key === "Enter"){
alert("Đang tìm: " + search.value);
}

});
window.alert('Chào Mừng Đến Với Thế Giới Coder')


