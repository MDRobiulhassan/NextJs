document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 39.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 59.99,
    },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
  const checkoutButton = document.getElementById("checkout-button");

  // Render products
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <span>${product.name} - $${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to Cart</button>
    `;

    productList.appendChild(productDiv);
  });

  // Add to cart handler
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);

      if (product) {
        addToCart(product);
      }
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");

      cart.forEach((item) => {
        total += item.price;

        const cartItem = document.createElement("div");
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
      });

      totalPrice.textContent = `$${total.toFixed(2)}`;
    } else {
      emptyCart.classList.remove("hidden");
      cartTotal.classList.add("hidden");
    }
  }

  // Checkout
  checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    cart.length = 0;
    alert("Checkout Successful");
    renderCart();
  });
});
