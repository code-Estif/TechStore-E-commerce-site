import { useCompare } from '../context/CompareContext';

function ProductCard({ product, onProductClick, showDealPrices }) {
    const { toggleCompare, isCompared, compareItems } = useCompare();

    const handleCompareChange = (e) => {
        e.stopPropagation();
        toggleCompare(product);
    };

    const isCurrentlyCompared = isCompared(product.id);
    const isDisabled = !isCurrentlyCompared && compareItems.length >= 2;

    const renderStars = (rating) => {
        return (
            <div className="product-card__rating">
                <span className="product-card__stars">★</span>
                <span className="product-card__rating-value">{rating}</span>
            </div>
        );
    };

    return (
        <div
            className={`product-card ${!product.inStock ? 'product-card--out' : ''}`}
            onClick={() => onProductClick(product)}
            tabIndex="0"
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onProductClick(product);
                }
            }}
        >
            <div className="product-card__image">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="product-card__img" />
                ) : (
                    <span className="product-card__image-placeholder">Image</span>
                )}
            </div>

            <div className="product-card__badge-container">
                {product.onSale && showDealPrices && (
                    <span className="product-card__badge product-card__badge--sale">Sale</span>
                )}
                {!product.inStock && (
                    <span className="product-card__badge product-card__badge--out">Out of Stock</span>
                )}
            </div>

            <div className="product-card__compare" onClick={(e) => e.stopPropagation()}>
                <label className="product-card__compare-label">
                    <input
                        type="checkbox"
                        checked={isCurrentlyCompared}
                        onChange={handleCompareChange}
                        disabled={isDisabled}
                    />
                    <span>Compare</span>
                </label>
            </div>

            <div className="product-card__info">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__meta">{product.brand}</p>
                {renderStars(product.rating)}
            </div>

            <div className="product-card__pricing">
                {product.onSale && showDealPrices && product.originalPrice ? (
                    <>
                        <span className="product-card__original-price">${product.originalPrice}</span>
                        <span className="product-card__price product-card__price--sale">${product.price}</span>
                    </>
                ) : (
                    <span className="product-card__price">${product.price}</span>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
