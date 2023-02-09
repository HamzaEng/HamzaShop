import Cart from './Cart';
import { useValue } from './Contexte';

const Carts = () => {
    const { searchCarts } = useValue();
    return (
        <main className="carts">
            {searchCarts.map(cart => <Cart key={cart.id} cart={cart} />)}
        </main>
    )
}

export default Carts 