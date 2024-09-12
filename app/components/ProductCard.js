function ProductCard({ product }) {
    return (
      <div className="border rounded shadow-md p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <h3 className="text-lg font-bold mt-2">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price}</p>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <ul className="list-none mb-4">
          <li>
            <span className="font-bold">Category:</span> {product.category}
          </li>
          <li>
            <span className="font-bold">Brand:</span> {product.brand}
          </li>
          <li>
            <span className="font-bold">Rating:</span> {product.rating} / 5
          </li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
          Add to Cart
        </button>
      </div>
    );
  }
  
  export default ProductCard;