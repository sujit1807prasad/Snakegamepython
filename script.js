function showProductInfo(product){

let title = "";
let details = "";
let price = "";

if(product === "rice"){
title = "Rice";
details = "High quality rice available for daily cooking. Different varieties available in Amit General Store.";
price = "Price: ₹40 to 60/- per kg";
}

else if(product === "oil"){
title = "Cooking Oil";
details = "Best quality cooking oils like sunflower oil,mustard oil and refined oil available.";
price = "Price: ₹100 to 190/- per litre";
}

else if(product === "spices"){
title = "Indian Spices";
details = "Fresh and pure spices such as turmeric, chilli powder, coriander powder and garam masala.";
price = "Price: ₹10 to 150/-per packet";
}

else if(product === "sugar"){
title = "Sugar";
details = "Refined and unrefined sugar available for your sweetening needs.";
price = "Price: ₹45 to 55/- per kg";
}

else if(product === "salt"){
title = "Salt";
details = "Iodized and non-iodized salt available for cooking and seasoning.";
price = "Price: ₹20 to 30/- per pack";
}

else if(product === "tea"){
title = "Tea";
details = "Assorted tea varieties including black tea, green tea and masala chai.";
price = "Price: ₹100 to 120/- per pack";
}

else if(product === "maggi"){
title = "Maggi Noodles";
details = "Quick and delicious instant noodles available in various flavors.";
price = "Price: ₹10 to 15/- per pack";
}
else if(product === "soap"){
title = "Soap";
details = "Variety of soaps for personal hygiene, including antibacterial and moisturizing options.";
price = "Price: ₹10 to 35/- per piece";
}

document.getElementById("productTitle").innerHTML = title;
document.getElementById("productDetails").innerHTML = details;
document.getElementById("productPrice").innerHTML = price;

}

function searchProduct(){

let input = document.getElementById("searchBar").value.toLowerCase();
let products = document.querySelectorAll(".product, .item");

products.forEach((product) => {
    let heading = product.getElementsByTagName("h3")[0];
    if (!heading) return;
    let name = heading.innerText.toLowerCase();

    if(name.includes(input)){
        product.style.display="block";
    } else {
        product.style.display="none";
    }
});

}

let cart = [];

function addToCart(product, price) {
    cart.push({ name: product, price: price });
    alert(product + " added to cart!");
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");
    let totalPrice = document.getElementById("totalPrice");
    let cartCount = document.getElementById("cartCount");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
        total += item.price;
    });
    totalPrice.innerHTML = `Total: ₹${total}`;
    if (cartCount) cartCount.innerHTML = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
function buyNow(product, price){

alert("You selected: " + product + 
"\nPrice: ₹" + price +
"\nPlease contact Amit General Store to complete your order.");

}

