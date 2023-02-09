import { useParams, Link } from "react-router-dom";
import { useValue } from './Contexte';

const Details = () => {
  const { carts, addToCart } = useValue();
  const { id } = useParams();
  const cart = carts.find((cart) => cart.id.toString() === id);
  return (
    <main className="details">
      {cart && (
        <>
          <figure
            className="details__figure"
            style={{
              backgroundImage: "url(" + require(`./Data/${cart.img}`) + ")",
            }}
          ></figure>
          <div className="details__texts">
            <h1> {cart.title}</h1>
            <b>Price: {cart.price}$</b>
            <p>Description: {cart.info}</p>
            <div className="btns">
                {!cart.inCart && (
                  <button
                    type="button"
                    className="cartBtn"
                    onClick={() => addToCart(cart.id)}
                  >
                    Add To Cart{" "}
                  </button>
                )}
                <Link to="/cart" className="btnLink">
                {cart.inCart && (
                  <button
                    type="button"
                    className="cartBtn"
                    onClick={() => addToCart(cart.id)}
                  >
                    In Cart
                  </button>
                )}
                </Link>
              <Link to="/" className="btnLink">
                <button className="backBtn" type="button">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Details;
