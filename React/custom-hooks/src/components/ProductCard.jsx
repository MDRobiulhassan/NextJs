import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product, onAddCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">{product.price.toFixed(2)}</p>
      <button onClick={() => onAddCart(product)}>
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
