import { useCart } from '../context/CartContext';

function CartPage() {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal,
        clearCart
    } = useCart();

    return (
        <main className="cart-page">
            <h1 className="cart-page__title">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="cart-page__empty">
                    <p>Your cart is empty.</p>
                    <a href="/products" className="cart-page__continue">Continue Shopping</a>
                </div>
            ) : (
                <>
                    <div className="cart-page__items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-page-item">
                                <div className="cart-page-item__image">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="cart-page-item__img" />
                                    ) : (
                                        <span className="cart-page-item__image-placeholder">Image</span>
                                    )}
                                </div>
                                <div className="cart-page-item__details">
                                    <h3 className="cart-page-item__name">{item.name}</h3>
                                    <p className="cart-page-item__meta">{item.brand}</p>
                                    <p className="cart-page-item__price">${item.price}</p>
                                </div>
                                <div className="cart-page-item__quantity">
                                    <button
                                        className="cart-page-item__qty-btn"
                                        onClick={() => decreaseQuantity(item.id)}
                                        disabled={item.quantity <= 1}
                                    >
                                        −
                                    </button>
                                    <span className="cart-page-item__qty-value">{item.quantity}</span>
                                    <button
                                        className="cart-page-item__qty-btn"
                                        onClick={() => increaseQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="cart-page-item__subtotal">
                                    ${item.price * item.quantity}
                                </div>
                                <button
                                    className="cart-page-item__remove"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-page__summary">
                        <div className="cart-page__total">
                            <span>Total:</span>
                            <span className="cart-page__total-value">${getCartTotal()}</span>
                        </div>
                        <div className="cart-page__actions">
                            <button className="cart-page__clear" onClick={clearCart}>
                                Clear Cart
                            </button>
                            <button className="cart-page__checkout">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}

export default CartPage;
