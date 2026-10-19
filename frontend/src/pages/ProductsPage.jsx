import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/FeaturedProducts";
import { useCart } from "../context/CartContext";

const ALL_CATEGORIES = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("default");

  // Sync active category with URL query param ?category=
  const activeCategory = searchParams.get("category") || "All";

  function setCategory(cat) {
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  }

  const filtered = useMemo(() => {
    let list =
      activeCategory === "All"
        ? [...PRODUCTS]
        : PRODUCTS.filter((p) => p.category === activeCategory);

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [activeCategory, sort]);

  return (
    <main className="page products-page" id="main-content">
      <div className="container">
        {/* Page header */}
        <div className="page-header">
          <h1 className="page-title">All Products</h1>
          <p className="page-subtitle">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} available
          </p>
        </div>

        {/* Toolbar */}
        <div className="products-toolbar">
          {/* Category filter pills */}
          <div className="filter-pills" role="group" aria-label="Filter by category">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-pill${activeCategory === cat || (cat === "All" && activeCategory === "All") ? " filter-pill--active" : ""}`}
                onClick={() => setCategory(cat)}
                aria-pressed={activeCategory === cat || (cat === "All" && activeCategory === "All")}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="sort-control">
            <label htmlFor="sort-select" className="sort-label">Sort by:</label>
            <select
              id="sort-select"
              className="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="empty-state">
            <p>No products found in this category.</p>
          </div>
        ) : (
          <ul className="products__grid" role="list">
            {filtered.map((p) => (
              <li key={p.id}>
                <ProductCard product={p} onAddToCart={addToCart} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
