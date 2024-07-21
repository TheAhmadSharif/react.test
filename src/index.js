import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Routes, Route, Link } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';


const data = [
              {
                "id": 1,
                "title": "Polo Shirt",
                "price": 10.00,
                "images": [
                  "shirt.1.jpg"
                ]
              },
              {
                "id": 2,
                "title": "Nick Shirt",
                "price": 8.00,
                "images": [
                  "shirt.2.jpg"
                ]
              },
              {
                "id": 3,
                "title": "Addidas Shirt",
                "price": 12.00,
                "images": [
                  "shirt.3.jpg"
                ]
              },
        
        
        ]






export function Home() {
  return (
    <>
     <h1> Ecommerce Shop </h1>
        <ul className="list d-flex" id="mainMenu">
          <li><Link  to={`/`}>Home </Link></li>
          <li><Link  to={`product`}>Product </Link></li>
          <li><Link  to={`cart`}>Cart </Link></li>
          
        </ul>

        <Outlet />
    </>
     
  );
}
export function Product() {
  return (
    <>
        <h1> Product </h1>
        <div>
        {data.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <img src={product.images[0]} alt={product.title} style={{height: '120px'}} />

              <div>
                  Add To Cart
              </div>
          </div>



         
        ))}
      </div>


    
    </>
      
  );
}
export function Cart() {
  return (
      <h1> Cart </h1>
  );
}
export function NoPage() {
  return (
      <h1> NoPage </h1>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
