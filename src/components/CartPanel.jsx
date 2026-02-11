import { useCart } from '../context/CartContext';

function CartPanel({ isOpen, onClose }) {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal
    } = useCart();

    if (!isOpen) return null;

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
                <div className="cart-panel__header">
                    <h2 className="cart-panel__title">Your Cart</h2>
                    <button className="cart-panel__close" onClick={onClose}>✕</button>
                </div>
                <div className="cart-panel__body">
                    {cartItems.length === 0 ? (
                        <p className="cart-panel__empty">Your cart is empty.</p>
                    ) : (
                        <>
                            <ul className="cart-panel__list">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="cart-item">
                                        <div className="cart-item__image">
                                            <span className="cart-item__image-placeholder">Img</span>
                                        </div>
                                        <div className="cart-item__details">
                                            <p className="cart-item__name">{item.name}</p>
                                            <p className="cart-item__meta">{item.brand}</p>
                                            <p className="cart-item__price">${item.price}</p>
                                            <div className="cart-item__quantity">
                                                <button
                                                    className="cart-item__qty-btn"
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    −
                                                </button>
                                                <span className="cart-item__qty-value">{item.quantity}</span>
                                                <button
                                                    className="cart-item__qty-btn"
                                                    onClick={() => increaseQuantity(item.id)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            className="cart-item__remove"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="cart-panel__footer">
                                <div className="cart-panel__total">
                                    <span>Total:</span>
                                    <span className="cart-panel__total-value">${getCartTotal()}</span>
                                </div>
                                <button className="cart-panel__checkout">Checkout</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartPanel;
