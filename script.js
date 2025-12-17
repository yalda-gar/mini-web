function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

let item = cart.find(p => p.name === name);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1,
            image: image
        });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    location.href = "cart.html";
}
