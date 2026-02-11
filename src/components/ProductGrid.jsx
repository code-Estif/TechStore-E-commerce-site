import ProductCard from './ProductCard';

function ProductGrid({ products, onProductClick, title = "Smartphones", showDealPrices = false, hideHeader = false, loading = false }) {
    const skeletonItems = Array(8).fill(null);

    return (
        <section className="product-grid">
            {!hideHeader && (
                <div className="product-grid__header">
                    <h1 className="product-grid__title">{loading ? 'Loading Products...' : title}</h1>
                    <span className="product-grid__count">{loading ? '...' : products.length} products</span>
                </div>
            )}
            <div className="product-grid__items">
                {loading ? (
                    skeletonItems.map((_, index) => (
                        <div key={`skeleton-${index}`} className="product-card product-card--skeleton">
                            <div className="product-card__image skeleton-pulse"></div>
                            <div className="product-card__info">
                                <div className="skeleton-line skeleton-line--title skeleton-pulse"></div>
                                <div className="skeleton-line skeleton-line--meta skeleton-pulse"></div>
                                <div className="skeleton-line skeleton-line--rating skeleton-pulse"></div>
                            </div>
                            <div className="product-card__pricing">
                                <div className="skeleton-line skeleton-line--price skeleton-pulse"></div>
                            </div>
                        </div>
                    ))
                ) : products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onProductClick={onProductClick}
                            showDealPrices={showDealPrices}
                        />
                    ))
                ) : (
                    <p className="product-grid__empty">No products match your filters.</p>
                )}
            </div>
        </section>
    );
}

export default ProductGrid;
