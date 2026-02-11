import { useCart } from '../context/CartContext';

function ProductModal({ product, onClose }) {
    const { addToCart } = useCart();

    if (!product) return null;

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2 className="modal__title">Product Details</h2>
                    <button className="modal__close" onClick={onClose}>✕</button>
                </div>
                <div className="modal__body">
                    <div className="modal__content">
                        <div className="modal__image">
                            {product.image ? (
                                <img src={product.image} alt={product.name} className="modal__img" />
                            ) : (
                                <span className="modal__image-placeholder">Image</span>
                            )}
                        </div>
                        <div className="modal__details">
                            <h3 className="modal__product-name">{product.name}</h3>
                            <p className="modal__product-meta">{product.brand}</p>
                            
                            <div className="modal__rating-section">
                                <span className="modal__rating-stars">★</span>
                                <span className="modal__rating-value">{product.rating} / 5.0</span>
                            </div>

                            <p className="modal__product-price">${product.price}</p>

                            <div className="modal__specs">
                                <h4 className="modal__specs-title">Specifications</h4>
                                <div className="modal__specs-list">
                                    <div className="modal__spec-item">
                                        <span className="modal__spec-label">Brand</span>
                                        <span className="modal__spec-value">{product.brand}</span>
                                    </div>
                                    <div className="modal__spec-item">
                                        <span className="modal__spec-label">RAM</span>
                                        <span className="modal__spec-value">{product.ram}</span>
                                    </div>
                                    <div className="modal__spec-item">
                                        <span className="modal__spec-label">Storage</span>
                                        <span className="modal__spec-value">{product.storage}</span>
                                    </div>
                                    <div className="modal__spec-item">
                                        <span className="modal__spec-label">Availability</span>
                                        <span className={`modal__spec-value ${product.inStock ? 'modal__spec-value--in-stock' : 'modal__spec-value--out-stock'}`}>
                                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="modal__actions">
                                <button
                                    className="modal__btn modal__btn--primary"
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock}
                                >
                                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                </button>
                                <button className="modal__btn">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;
