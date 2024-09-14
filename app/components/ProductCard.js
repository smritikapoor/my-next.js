function ProductCard({ product, onAddToCart }) {
    return (
      <div className="border rounded shadow-md p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <h3 className="large-font bold">{product.name}</h3>
        <p className="gray-color">${product.price}</p>
        <p className="gray-color">{product.description}</p>
        <ul className="list-none mb-4">
          <li><span className="bold">Category:</span> {product.category}</li>
          <li><span className="bold">Brand:</span> {product.brand}</li>
          <li><span className="bold">Rating:</span> {product.rating} / 5</li>
        </ul>
        <button className="blue-button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    );
  }