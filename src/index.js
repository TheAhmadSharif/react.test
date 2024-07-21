import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Routes, Route, Link } from "react-router-dom";
import './index.css';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Badge, Container, CssBaseline, Box, Grid, Card } from '@mui/material';
import { ShoppingCartCheckout } from '@mui/icons-material';

const themeOptions = {
  typography: {
    // fontFamily: ['Josefin_Sans', 'sans-serif', 'Domine', 'serif'].join(','),
    fontFamily: ['sans-serif', 'Domine', 'serif'].join(','),
    button: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  palette: {
    background: {
        default: "#F3F3F3"
      },
    primary: {
      main: '#ff7043',
    },
    secondary: {
      main: '#f4ff81',
    },
  },
};
const theme = createTheme(themeOptions);



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
        <ThemeProvider theme = { theme }>
        <Container>
                <h1> Ecommerce Shop </h1>
                  <Box>
                  <ul className="list d-flex" id="mainMenu" sx = {{ my: 2}}>
                    <li><Link  to={`/`}>Home </Link></li>
                    <li><Link  to={`product`}>Product </Link></li>
                    <li><Link  to={`cart`}>Cart </Link></li>
                  </ul>
                  </Box>
                  <Outlet />
            </Container>
        </ThemeProvider>
    </>
     
  );
}
export function Product() {
  return (
    <>
       <Grid container spacing={4}>

          <Grid item md={12}>
          <h1> Product </h1>
          </Grid>
          
          
                      {data.map((product) => (
                        <Grid item md={3} key={product.id} className="product">
                          <Card>
                          <div>

                                  <img 
                                  src={`${process.env.PUBLIC_URL}/${product.images[0]}`} 
                                  alt={product.title} 
                                  style={{height: '120px'}} 
                                  />


                                      <h2>{product.title}</h2>
                                      <p>Price: ${product.price.toFixed(2)}</p>
                                  </div>




                                    <div>
                                        Add To Cart
                                    </div>
                          </Card>
                         
                        </Grid>
                      ))}
                  
                
        </Grid>
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
