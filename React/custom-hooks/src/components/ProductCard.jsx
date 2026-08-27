import { FaShoppingCart, FaArrowRight } from "react-icons/fa";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-art" aria-hidden="true"><FaShoppingCart /></div>
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to cart <FaArrowRight />
      </button>
    </div>
  );
}

export default ProductCard;
