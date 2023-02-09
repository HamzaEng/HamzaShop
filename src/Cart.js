import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useValue } from './Contexte';
import Item from './Item';

const Cart = ({ cart }) => {
  const [ displayItem, setDisplayItem ] = useState(false);
  const { addToCart } = useValue();
  return (
    <article className="cart__item">
      <div
        onClick={()=> {setDisplayItem(true); addToCart(cart.id) }}
        style={{
          backgroundImage: "url(" + require(`./Data/${cart.img}`) + ")",
        }}
        className="container"
      >
        {!cart.inCart && (
          <button
            type="button"
            className="container__btn"
            onClick={() => addToCart(cart.id)}
          >
            <FaCartPlus className="cart__logo" />
          </button>
        )}
          {cart.inCart && (
            <button type="button">
              <p className="inCart">In Cart</p>
            </button>
          )}
      </div>
      { displayItem && <Item cart={cart} setDisplayItem={setDisplayItem} /> }
      <p className="item__title">
        {cart.title} <span className="price">{`$${cart.price}`}</span>
      </p>
      <p className="item__p">
        {cart.info.length <= 25 ? cart.info : cart.info.slice(0, 30) + "..."}
      </p>
      <Link to={`Details/${cart.id}`} className="item__details">
        View More
      </Link>
    </article>
  );
};

export default Cart;
