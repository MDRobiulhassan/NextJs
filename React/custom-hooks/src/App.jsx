import "./App.css";
import { useCart } from "./hooks/useCart.js";
import { products } from "./data/products.js";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  const cartCount = cart.reduce((count, item) => count + (item.quantity || 0), 0);

  return (
    <>
      <div className="app">
        <header className="site-header">
          <div>
            <p className="eyebrow">CURATED TECH ESSENTIALS</p>
            <h1>Upgrade your everyday.</h1>
            <p className="subtitle">Thoughtfully designed tools for work, play, and everything between.</p>
          </div>
          <div className="cart-badge" aria-label={`${cartCount} items in cart`}>
            <span>{cartCount}</span> items in cart
          </div>
        </header>
        <main className="products">
          <section className="catalog">
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE COLLECTION</p>
                <h2>Popular picks</h2>
              </div>
              <span>{products.length} products</span>
            </div>
            <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
            </div>
          </section>
          <Cart
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            total={total}
          />
        </main>
      </div>
    </>
  );
}

export default App;
