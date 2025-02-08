let cartItems = []; // Array to store cart items

function addCart(img, title, price) {
    const newItem = { img: img.src, title, price };
    cartItems.push(newItem);
    alert("Item added to cart!");
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.querySelector(".cart-items");
    cartContainer.innerHTML = ""; // Clear existing items

    cartItems.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.title}">
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    });
}

function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove item from array
    updateCartDisplay(); // Update the display
}

function showCart() {
    document.querySelector(".main").style.display = "none";
    document.querySelector(".trend").style.display = "none";
    document.querySelector(".cart-section").style.display = "block";
}
// Show Payment Section
function proceedToPayment() {
    document.querySelector(".cart-section").style.display = "none";
    document.querySelector(".payment-section").style.display = "block";
}

// Toggle Credit Card Fields
document.querySelectorAll('input[name="paymentMethod"]').forEach((input) => {
    input.addEventListener("change", (event) => {
        const creditCardDetails = document.getElementById("creditCardDetails");
        if (event.target.value === "Credit Card") {
            creditCardDetails.style.display = "block";
        } else {
            creditCardDetails.style.display = "none";
        }
    });
});

// Handle Payment Submission
document.getElementById("paymentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    if (paymentMethod === "Credit Card") {
        const cardNumber = document.getElementById("cardNumber").value;
        const cardName = document.getElementById("cardName").value;
        const cardExpiry = document.getElementById("cardExpiry").value;
        const cardCVV = document.getElementById("cardCVV").value;

        if (!cardNumber || !cardName || !cardExpiry || !cardCVV) {
            alert("Please fill in all credit card details.");
            return;
        }

        alert("Payment successful via Credit Card!");
    } else if (paymentMethod === "PayPal") {
        alert("Payment successful via PayPal!");
    }

    // Reset and navigate back to the main page
    document.getElementById("paymentForm").reset();
    document.querySelector(".payment-section").style.display = "none";
    document.querySelector(".main").style.display = "flex";
});


let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");


console.log(card);
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
   about.style.display="none"



document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="rgb(2, 173, 173)";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"


}
function shops(){
mainPage.style.display="none";
blog.style.display="none";
about.style.display="none"
card.style.display="block";
card2.style.display="block";


document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="rgb(2, 173, 173)";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"


}

function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="block";
   about.style.display="none"


document.getElementById("blog").style.color="rgb(2, 173, 173)";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"





}

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="block"

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="rgb(2, 173, 173)"

}

function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="block"

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"
document.getElementById("contact").style.color="rgb(2, 173, 173)"

}

// cart

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="none"
    document.querySelector(".cart").style.display="flex"
}


function addCart(){
    alert("Added To Cart");
    location.reload()
}

function showLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
        alert("Login successful!");
        closeLogin();
    } else {
        alert("Please fill in all fields.");
    }
}