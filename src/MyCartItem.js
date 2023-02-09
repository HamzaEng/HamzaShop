import { FaTrashAlt } from 'react-icons/fa';
import { useValue } from './Contexte';

const MyCartItem = ({ cart }) => {
    const { handleCount, handleDelete } = useValue();
    return (
        <tr>
            <td className="item__img">
                <img src={require(`./Data/${cart.img}`)} alt="" className='product__img' />
            </td>
            <td>{cart.title}</td>
            <td><b>${cart.price}</b></td>
            <td>
                <button type='button'  className='square'  onClick={e => { cart.count > 1 ? handleCount(e.target.name, cart.id) : handleDelete(cart.id) }} name="minus" >-</button>
                <span className='square'>{cart.count}</span >
                <button className='square' onClick={e => handleCount(e.target.name, cart.id)} name="plus" >+</button>
            </td>
            <td>
                <FaTrashAlt className='deleteBtn' onClick={e => handleDelete(cart.id)} />
            </td>
            <td>
                item Total: <b>{`$${cart.total}`}</b>
            </td>
        </tr>
    )
}

export default MyCartItem 