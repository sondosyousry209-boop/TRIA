let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];


// ================= ADD TO CART =================

document
    .querySelectorAll(".cart-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function(e) {

                e.preventDefault();


                let product = {

                    name:
                        this.dataset.name,

                    price:
                        this.dataset.price

                };


                cart.push(product);


                localStorage.setItem(

                    "cart",

                    JSON.stringify(cart)

                );


                showToast(

                    "✅ Product added to cart!"

                );

            }

        );

    });


// ================= SIZE SELECTION =================

document
    .querySelectorAll(".sizes")
    .forEach(sizeContainer => {


        const buttons =

            sizeContainer
                .querySelectorAll("button");


        buttons.forEach(button => {


            button.addEventListener(

                "click",

                function() {


                    buttons.forEach(btn => {


                        btn.classList.remove(

                            "active"

                        );

                    });


                    this.classList.add(

                        "active"

                    );

                }

            );

        });

    });


// ================= SEARCH PRODUCTS =================

const searchInput =

    document.getElementById(

        "searchInput"

    );


if (searchInput) {


    searchInput.addEventListener(

        "keyup",

        function() {


            let value =

                searchInput.value

                    .toLowerCase();


            let cards =

                document.querySelectorAll(

                    ".card"

                );


            cards.forEach(card => {


                let title =

                    card

                        .querySelector("h3")

                        .textContent

                        .toLowerCase();


                if (

                    title.includes(value)

                ) {


                    card.style.display =

                        "block";


                } else {


                    card.style.display =

                        "none";

                }

            });

        }

    );

}


// ================= SCROLL TO TOP =================

const topBtn =

    document.getElementById(

        "topBtn"

    );


if (topBtn) {


    window.addEventListener(

        "scroll",

        function() {


            if (

                window.scrollY > 300

            ) {


                topBtn.style.display =

                    "block";


            } else {


                topBtn.style.display =

                    "none";

            }

        }

    );


    topBtn.addEventListener(

        "click",

        function() {


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }

    );

}


// ================= LOADING SCREEN =================

window.addEventListener(

    "load",

    function() {


        const loader =

            document.getElementById(

                "loader"

            );


        if (loader) {


            setTimeout(

                function() {


                    loader.classList.add(

                        "hide"

                    );


                    setTimeout(

                        function() {


                            loader.remove();


                        },

                        600

                    );

                },

                1000

            );

        }

    }

);


// ================= MOBILE MENU =================

const menuToggle =

    document.getElementById(

        "menuToggle"

    );


const navLinks =

    document.getElementById(

        "navLinks"

    );


if (

    menuToggle &&

    navLinks

) {


    menuToggle.addEventListener(

        "click",

        function() {


            navLinks.classList.toggle(

                "active"

            );

        }

    );

}


// ================= TRIA TOAST NOTIFICATION =================

function showToast(message) {


    const toast =

        document.createElement(

            "div"

        );


    toast.className =

        "tria-toast";


    toast.innerHTML = `

        <div class="toast-icon">

            ✓

        </div>


        <div class="toast-content">

            <strong>

                TRIA

            </strong>


            <span>

                ${message}

            </span>

        </div>


        <div class="toast-progress">

        </div>

    `;


    document.body.appendChild(

        toast

    );


    setTimeout(

        function() {


            toast.classList.add(

                "show"

            );

        },

        100

    );


    setTimeout(

        function() {


            toast.classList.remove(

                "show"

            );


            setTimeout(

                function() {


                    toast.remove();


                },

                500

            );

        },

        3500

    );

}
