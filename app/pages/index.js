import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';

function Home() {
  const [products, setProducts] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsResponse = await fetch('/api/products');
      const promotionsResponse = await fetch('/api/promotions');
      const bestSellersResponse = await fetch('/api/best-sellers');

      const productsData = await productsResponse.json();
      const promotionsData = await promotionsResponse.json();
      const bestSellersData = await bestSellersResponse.json();

      setProducts(productsData);
      setPromotions(promotionsData);
      setBestSellers(bestSellersData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Welcome to my e-commerce store!</h1>
      <Carousel>
        {/* Carousel content */}
      </Carousel>
      <h2>Featured Products</h2>
      <ProductList products={products} />
      <h2>Promotions</h2>
      <ul>
        {promotions.map((promotion) => (
          <li key={promotion.id}>{promotion.name} - {promotion.description}</li>
        ))}
      </ul>
      <h2>Best Sellers</h2>
      <ProductList products={bestSellers} />
    </div>
  );
}

export default Home;