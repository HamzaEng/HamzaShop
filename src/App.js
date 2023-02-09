import Home from './Home';
import Details from './Details';
import MyCart from './MyCart';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Provider from './Contexte';

const App = () => {
    return (
        <div className='app'>
          <Provider>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Details/:id' element={<Details />} />
                    <Route path='/cart' element={<MyCart />} />
                </Routes>
          </Provider>
            
        </div>
    )
}

export default App 