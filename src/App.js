import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

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
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>
        </div>
        </body>
    );
}

export default App;
