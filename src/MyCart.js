import { Link } from "react-router-dom";
import { FaCartPlus, FaHome } from "react-icons/fa";
import MyCartItem from "./MyCartItem";
import { useValue } from './Contexte';

const MyCart = () => {
  const { itemsInCart, handleDeleteAll } = useValue();
  const subTotal = itemsInCart.reduce(function (acc, obj){return acc + obj.total} ,0);
  const TVA = (subTotal * 0.02).toFixed(2);
  let TTC = subTotal + TVA;
  return (
    <>
      <header className="header">
        <h1 className="home__h1">
          <Link to="/">
            <FaHome className="home__logo" />
          </Link>
          HamzaShop
        </h1>
        <div className="header__search">
          <Link to="/cart" className="cart__container">
            <FaCartPlus className="header__cart" />
            <span>My Cart </span>
          </Link>
        </div>
      </header>
      <main className="myCart">
        {itemsInCart.length ? (
          <div className="myCart__container">
            <table className="myCart__table">
            <h1>Your Cart </h1>
              <thead>
                <tr>
                  <th>PRODUCTS</th>
                  <th>NAME OF PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>REMOVE</th>
                  <th>TOTAL </th>
                </tr>
              </thead>
              <tbody>
                {itemsInCart.map((cart) => (
                  <MyCartItem
                    key={cart.id}
                    cart={cart}
                  />
                ))}
              </tbody>
            </table>
            <div className="myCart__total">
              <button type="button" onClick={handleDeleteAll} className="clearBtn" >CLEAR CART</button>
              <p>SUB TOTAL : <b>${subTotal}</b></p>
              <p>TVA: <b>${TVA}</b> </p>
              <p>TTC : <b>${TTC}</b></p>
            </div>
          </div>
        ) : (
          <h1 className="myCart__status">Your Cart is Empty </h1>
        )}
      </main>
    </>
  );
};

export default MyCart;
