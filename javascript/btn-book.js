// ===== GET URL DATA =====
const params = new URLSearchParams(window.location.search);

let tour = params.get("tour");
let price = Number(params.get("price")) || 3500000;
let peopleDefault = Number(params.get("people")) || 1;

// decode an toàn
if (tour) {
tour = decodeURIComponent(tour).trim();
}

// ===== FIX TOUR HIỂN THỊ =====
const tourNameEl = document.getElementById("tourName");

if (tour) {
tourNameEl.innerText = "Tour " + tour;
} else {
tourNameEl.innerText = "Tour Đà Nẵng 4 ngày 3 đêm";
}

// ===== FORMAT TIỀN =====
function formatVND(n){
return Number(n).toLocaleString("vi-VN") + "đ";
}

// set số người mặc định
const peopleInput = document.getElementById("people");
peopleInput.value = peopleDefault;

// ===== UPDATE TOTAL =====
function updateTotal(){
let people = Number(peopleInput.value || 1);
let total = price * people;

document.getElementById("tourPrice").innerText = formatVND(price);
document.getElementById("totalMoney").innerText =
"Tổng tiền: " + formatVND(total);

return total;
}

peopleInput.addEventListener("input", updateTotal);
updateTotal();


// ===== LOCAL STORAGE =====
function getOrders(){
return JSON.parse(localStorage.getItem("orders")) || [];
}

function saveOrder(order){
let data = getOrders();
data.push(order);
localStorage.setItem("orders", JSON.stringify(data));
}

// ===== RENDER ORDERS =====
function renderOrders(){
let box = document.getElementById("orderList");
let data = getOrders();

if(data.length === 0){
box.innerHTML = "<p>Chưa có đơn nào</p>";
return;
}

box.innerHTML = data.map((o,i)=>`
<div style="border-bottom:1px solid #eee;padding:10px 0">
<b>${o.tour}</b><br>
${o.name}<br>
${o.phone}<br>
${o.people} người<br>
<b>${formatVND(o.total)}</b><br>

<button onclick="deleteOrder(${i})"
style="background:red;color:white;border:none;padding:5px;margin-top:5px;border-radius:5px">
Xóa
</button>
</div>
`).join("");
}

// ===== DELETE =====
function deleteOrder(i){
let data = getOrders();
data.splice(i,1);
localStorage.setItem("orders",JSON.stringify(data));
renderOrders();
}

// ===== TOGGLE PANEL =====
function toggleOrders(){
let box = document.getElementById("orderBox");
box.style.display = box.style.display === "block" ? "none" : "block";
renderOrders();
}

// ===== BOOK TOUR =====
function bookTour(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let address = document.getElementById("address").value;
let people = Number(peopleInput.value);
let total = updateTotal();

if(!name || !phone || !email || !address){
alert("Vui lòng nhập đầy đủ thông tin!");
return;
}

let order = {
tour: tourNameEl.innerText,
name,
phone,
email,
address,
people,
total,
time: new Date().toLocaleString()
};

saveOrder(order);

alert("🎉 Đặt tour thành công!");
renderOrders();
}

renderOrders();
