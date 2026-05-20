
// ===== LẤY DỮ LIỆU CŨ =====

function getContacts(){

    return JSON.parse(localStorage.getItem("contacts")) || [];

}



// ===== LƯU CONTACT =====

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let phone = document.getElementById("phone").value;

    let message = document.getElementById("message").value;



    // object contact
    let contact = {

        name,
        email,
        phone,
        message,

        time: new Date().toLocaleString()

    };



    // lấy data cũ
    let data = getContacts();

    // thêm mới
    data.push(contact);

    // lưu localStorage
    localStorage.setItem("contacts", JSON.stringify(data));



    alert("🎉 Gửi liên hệ thành công!");



    // reset form
    document.getElementById("contactForm").reset();

});
