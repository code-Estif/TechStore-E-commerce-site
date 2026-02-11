import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    return (
        <header className="header">
            <NavLink to="/products" className="header__logo">
                <img src="/Logo.svg" alt="Logo" className="header__logo-img" />
            </NavLink>
            <NavLink to="/cart" className="header__cart">
                <img src="/cart-icon.svg" alt="Cart" className="header__cart-icon" />
                <span>Cart ({cartCount})</span>
            </NavLink>
        </header>
    );
}

export default Header;
