import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import Drinks from './containers/Drinks';
import Essential from './containers/Essential';
import Food from './containers/Food';

// Initializes all components
const App = () => {
    return (
        <body style={{backgroundColor:'#f4f4f4',
            color:'#555',
            fontfamily: 'Arial, Helvetica, sans-serif',
            fontsize:'16px',
            lineheight:'1.6em',
            margin:'0'}}>
        <div className="container">
            <nav style={{backgroundColor: '#006400',
            width: '100%',
            overflow: 'hidden',
            margin: 'auto'}}>
            <div className="row">
                <div className="col-md-12">
                    <h1 style={{color: "white"}}>Catalog</h1>
                </div>
            </div>
            </nav>
            <div className="row">
            <BrowserRouter>
                <div className="col-md-8">
                    <ul style={{listStyle: "none"}}>
                    <li>
                        <Link to="/">All</Link>
                    </li>
                    <li>
                        <Link to="/Drinks">Drinks</Link>
                    </li>
                    <li>
                        <Link to="/Food">Food</Link>
                    </li>                   
                    <li>
                        <Link to="/Essential">Essential</Link>
                    </li>
                    </ul>

                <Routes>
                    <Route exact path='/' element={<ProductList/>} />
                    <Route path='/Drinks' element={<Drinks/>} />
                    <Route path='/Food' element={<Food/>} />
                    <Route path='/Essential' element={<Essential/>} />
                </Routes>
                </div>
                </BrowserRouter>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>
        </div>
        </body>
    );
}

export default App;
