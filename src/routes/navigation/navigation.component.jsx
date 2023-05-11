import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
// Import sign out user
import { signOutUser } from "../../utils/firebase/firebase.utils";
import logo from "../../assets/logo.png";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/* check currentUser is exit true then render sign out */}
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>

        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
