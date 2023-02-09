import { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from './Data/Products';

export const Contexte = createContext();

export function useValue() {
    return useContext(Contexte);
}

const Provider = ({ children }) => {
    const [carts, setCarts] = useState(Products);
    const [searchCarts, setSearchCarts] = useState([]);
    const [itemsInCart, setItemsInCart] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        setCarts(Products);
    }, [])
    useEffect(()=>{
        const filterItems = carts.filter(cart => (cart.title).toLowerCase().includes(search.toLowerCase()) || (cart.info).toLowerCase().includes(search.toLowerCase()));
        setSearchCarts(filterItems);
        const inCartItems = (carts.filter((cart) => cart.inCart)).map(cart => ({...cart, total: cart.price}));
        setItemsInCart(inCartItems);
    }, [search, carts]);

    const addToCart = ( id ) => {
        const filterCarts = carts.map(cart => cart.id === id ? {...cart, inCart: true, count: 1} : cart );
        setCarts(filterCarts);
    }
    const handleCount = (btnName, id) => {
        switch(btnName) {
          case 'plus': setItemsInCart(itemsInCart.map(cart => cart.id === id ? {...cart, count: cart.count + 1, total: (cart.count + 1) * cart.price} : cart));
          break;
          default: setItemsInCart(itemsInCart.map(cart => cart.id === id ? {...cart, count: cart.count - 1,total: (cart.count - 1) * cart.price} : cart));
          break;
        }
    }
    const handleDelete = (id) => {
        const filterItems = itemsInCart.filter(cart => cart.id !== id );
        setItemsInCart(filterItems);
        const newCarts = carts.map(cart => cart.id === id ? {...cart, inCart: false} : cart);
        setCarts(newCarts);

        
    }
    const handleDeleteAll = () => {
        setItemsInCart([]);
        setCarts(Products);
        navigate('/')
        
    }
    return (
        <Contexte.Provider 
        value={{carts, setCarts, search, setSearch, searchCarts, setSearchCarts, itemsInCart, setItemsInCart, handleCount, handleDelete, handleDeleteAll, addToCart}}
        >
            {
                children
            }
        </Contexte.Provider>
    )
}

export default Provider