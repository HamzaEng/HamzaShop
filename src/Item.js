import { useNavigate } from 'react-router-dom';

const Item = ({ cart, setDisplayItem }) => {
    const navigate = useNavigate();
    return (
      <div className="CardContainer">
            <div className='cart__item cardItem'>
                <h3 className='itemTitle'>Item Added to the Cart</h3>
                <figure className='container'
                 style={{
                    backgroundImage: "url(" + require(`./Data/${cart.img}`) + ")",
                  }}>
                </figure>
                <strong>{cart.title}</strong>
                <p>price : <strong>${cart.price}</strong></p>
                <button type='button' onClick={()=> navigate('/cart') } className="goToCart">
                    In Cart 
                </button>
                <button type='button' onClick={()=> setDisplayItem(false)} className='continue' >
                    Continue Shopping 
                </button>
            </div>
      </div>
    )
}

export default Item