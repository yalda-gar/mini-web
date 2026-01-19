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


let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartDiv = document.getElementById("cart");
let total = 0;

if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty</p>";
} else {
    cart.forEach(item => {
        let quantity = Number(item.quantity) || 1;
        let price = Number(item.price);
        let itemTotal = price * quantity;

        total += itemTotal;

        cartDiv.innerHTML += `
            <div>
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-info">
                    <strong>${item.name}</strong>
                    <span>Price: $${price.toFixed(2)}</span>
                    <span>Quantity: 
                        <button onclick="decreaseQuantity('${item.name}')"<-">-</button>
                        ${quantity}
                        <button onclick="increaseQuantity('${item.name}')">+</button>
                    </span>
                    
                    <span>Total: $${itemTotal.toFixed(2)}</span>
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            </div>
        `;
    });
}

document.getElementById("total").innerText =
    "Grand Total: $" + total.toFixed(2);

    function increaseQuantity(name) {
        cart = cart.map(item => {
            if (item.name === name) item.quantity += 1;
            return item;
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    function decreaseQuantity(name) {
        cart = cart.map(item => {
            if (item.name === name && item.quantity > 1) item.quantity -= 1;
            return item;
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    function removeFromCart(name) {
        cart = cart.filter(item => item.name !== name);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    
    }



    //renderCart();

        function renderCart() {
            window.location.reload();
        }
        

