import "./Header.css";
import logo from "../../assets/images/Logo.svg";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />

      <a href="/order">Order</a>
      <a href="review">Order Review</a>
      <a href="inventory">Manage Inventory</a>
      <a href="login">Login</a>
    </div>
  );
};

export default Header;
