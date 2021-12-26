let h1e = document.getElementById("head1");
h1e.addEventListener("mouseenter",function(){
    h1e.style.letterSpacing ="0em";
    h1e.style.color = "black";
})

let menasse = document.getElementsByClassName("cart");
let cart = document.getElementById("cartSymbol");
menasse.addEventListener("click", function(){
    cart.classList.add("position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger");
})