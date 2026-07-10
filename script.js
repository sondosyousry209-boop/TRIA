let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".cart-btn").forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        let product = {
            name: this.dataset.name,
            price: this.dataset.price
        };

        cart.push(product);

       localStorage.setItem("cart", JSON.stringify(cart));

alert("✅ Product added to cart!");

    });

});

// Size Selection
document.querySelectorAll(".sizes").forEach(sizeContainer => {

    const buttons = sizeContainer.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", function() {

            buttons.forEach(btn => btn.classList.remove("active"));

            this.classList.add("active");

        });

    });

});
// Search Products

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}
// Contact Form

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("✅ Your message has been sent successfully!");

        contactForm.reset();

    });

}
// Scroll To Top

const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll", function(){

        if(window.scrollY > 300){
            topBtn.style.display = "block";
        }else{
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function(){

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}
// Loading Screen

window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(function(){

            loader.style.opacity = "0";

            setTimeout(function(){

                loader.style.display = "none";

            },600);

        },1000);

    }

});
