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