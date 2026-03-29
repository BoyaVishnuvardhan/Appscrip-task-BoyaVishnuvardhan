import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/api";
import "@/styles/product.css";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* FILTER BAR */}
      <div className="filter-bar">
        <p>{products.length} ITEMS</p>

        <select>
          <option>RECOMMENDED</option>
          <option>PRICE LOW TO HIGH</option>
          <option>PRICE HIGH TO LOW</option>
        </select>
      </div>

      {/* MAIN SECTION */}
      <div className="main">
        
        {/* SIDEBAR */}
        <div className="sidebar">
          <h3>FILTERS</h3>
          <p>Category</p>
          <p>Price</p>
          <p>Brand</p>
        </div>

        {/* PRODUCT GRID */}
        <div className="products">
          {products.map((item: any) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

      </div>
    </div>
  );
}