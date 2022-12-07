import Cart from './Cart';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="title">
        Random Storefront Name
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default Header;
