let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the existing cart display
    cartItems.innerHTML = '';

    // Add each item in the cart
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartItems.appendChild(li);
    });

    // Update total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}
