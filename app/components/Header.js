import Link from 'next/link';
import Image from 'next/image';
import { useState, useContext } from 'next/context';
import CartContext from '../context/CartContext';

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart, addItem, removeItem } = useContext(CartContext);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log(`Searching for: ${searchQuery}`);
  };

  const handleAddItem = (product) => {
    addItem(product);
  };

  const handleRemoveItem = (product) => {
    removeItem(product);
  };

  return (
    <header className="bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Next%20js%20showcase-1B1VZuRAK37C2TsmCuIkG8AJ4rNFSW.jpg" alt="My E-Commerce Store" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold ml-2 text-gray-800">My E-Commerce Store</span>
          </a>
        </Link>
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md ml-2">
            Search
          </button>
        </form>
        <div className="flex items-center">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md ml-4"
            onClick={() => setShowCart(!showCart)}
          >
            {showCart ? 'Hide Cart' : 'Show Cart'}
          </button>
          <Link href="/account">
            <a className="text-gray-800 hover:text-gray-900 transition duration-300 ease-in-out ml-4">
              Account
            </a>
          </Link>
        </div>
        {showCart && (
          <div className="absolute top-12 right-0 w-64 bg-white shadow-md py-2 px-4">
            <h2 className="text-lg font-bold mb-2">Your Cart</h2>
            <ul className="list-none mb-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                    onClick={() => handleRemoveItem(item)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md w-full">
              Checkout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;