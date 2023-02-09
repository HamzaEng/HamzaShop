import { FaCartPlus, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./Search";
import Carts from './Carts';

const Home = () => {
  return (
    <section className="home">
      <header className="header">
        <h1 className="home__h1">
          <Link to="/">
            <FaHome className="home__logo" />
          </Link>
          HamzaShop
        </h1>
        <div className="header__search">
          <Search />
          <Link to="/cart" className="cart__container">
            <FaCartPlus className="header__cart" />
            <span>My Cart </span>
          </Link>
        </div>
      </header>
      <main className="carts">
          <Carts />
      </main>
    </section>
  );
};

export default Home;
