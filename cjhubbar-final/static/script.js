var x = 5
var y = 7
var z = x + y
console.log(z)

var A = "Hello"
var B = " world!"
var C = A + B
console.log(C)

function sumnPrint(x1, x2) {

    console.log(x1 + x2)

}

sumnPrint(x, y)
sumnPrint(A, B)

if (C.length > z) {
    if (C.length < z) {
        console.log(z)
    }
    console.log(C)
} else {
    console.log("good job!")
}

L1 = ["Watermelon", "Pineapple", "Pear", "Banana"]
L2 = ["Apple", "Banana", "Kiwi", "Orange"]

// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Banana found!")
//         }
//     }
// }

// function findTheBanana(arr) {
//     arr.forEach(function (item) {
//         if (item === "Banana") {
//             alert("Banana found!")
//         }
//     })
// }

// findTheBanana(L1)
// findTheBanana(L2)

var now = new Date()
var hour = now.getHours()

function greeting(h) {
    var message
    if (h < 5 || h >= 20) {
        message = "Good night"
    } else if (h < 12) {
        message = "Good morning"
    } else if (h < 18) {
        message = "Good afternoon"
    } else {
        message = "Good evening"
    }
    return message
}

var greetingElement = document.getElementById("greeting")

if (greetingElement) {
    greetingElement.innerHTML = greeting(hour) + ", Welcome to the MonoMuse Museum!"
}

function addYear() {
    var yearElement = document.getElementById("copyYear")
    if (yearElement) {
        yearElement.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved."
    }
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}
ActiveNav();

$("#readMore").click(function () {
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

$("#readLess").click(function () {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

function showForm(date) {
    document.getElementById("purchaseForm").style.display = "block";
    document.getElementById("selectedDate").innerHTML = "Selected date: " + date;
    document.getElementById("purchaseForm").scrollIntoView({ behavior: "smooth" });
}

function submitPurchase() {
    alert("Redirecting to payment system.");
}

function toggleNav() {
    var nav = document.querySelector(".nav_bar");
    nav.classList.toggle("responsive");
}

var mapElement = document.getElementById("map");
if (mapElement) {
    var map = L.map('map').setView([40.4433, -79.9436], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> | Map tiles by <a href="https://leafletjs.com" target="_blank">Leaflet</a>'
    }).addTo(map);
    L.marker([40.4433, -79.9436]).addTo(map)
        .bindPopup(' __MonoMuse Museum — Pittsburgh, PA__')
        .openPopup();
}

function calcPrice() {
    var qty = parseInt(document.getElementById("quantity").value) || 0;
    var display = document.getElementById("priceDisplay");
    if (qty >= 1 && qty <= 10) {
        var total = qty * 18;
        display.innerHTML = "Total: $" + total.toFixed(2);
    } else {
        display.innerHTML = "";
    }
}

function submitPurchase() {
    var visitDate = document.getElementById("visitDate").value;
    var ticketType = document.getElementById("ticketType").value;
    var qty = parseInt(document.getElementById("quantity").value);
    var email = document.getElementById("email").value;
    var zip = document.getElementById("zip").value;

    if (!visitDate) { alert("Please select a visit date."); return; }
    if (!ticketType) { alert("Please select a ticket type."); return; }
    if (!qty || qty < 1 || qty > 10) { alert("Please enter a quantity between 1 and 10."); return; }
    if (!email || !email.includes("@")) { alert("Please enter a valid email address."); return; }
    if (!zip || zip.length !== 5 || isNaN(zip)) { alert("Please enter a valid 5-digit zip code."); return; }

    var total = qty * 18;
    var mailing = document.getElementById("mailingList").checked;

    localStorage.setItem("mm_ticketType", ticketType);
    localStorage.setItem("mm_qty", qty);
    localStorage.setItem("mm_email", email);
    localStorage.setItem("mm_zip", zip);
    localStorage.setItem("mm_total", total.toFixed(2));
    localStorage.setItem("mm_date", visitDate);
    localStorage.setItem("mm_mailing", mailing);

    window.location.href = "confirmation.html";
}

function togglePurchaseForm() {
    var form = $("#purchaseForm");
    if (form.is(":visible")) {
        form.slideUp(400);
    } else {
        form.slideDown(400, function () {
            form.get(0).scrollIntoView({ behavior: "smooth", block: "center" });
        });
    }
}

var currentSlide = 0;

function changeSlide(direction) {
    var slides = document.querySelectorAll(".slide");
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    document.getElementById("slideCounter").textContent = (currentSlide + 1) + " / " + slides.length;
}