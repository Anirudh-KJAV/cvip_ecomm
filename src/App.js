import './App.css';
import Header from './components/header';
import ProductList from './components/productList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product] = useState([
    {
      url: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70',
      name: 'Realme11Pro+5G',
      Chipset: 'Mdt Dimensity 7050',
      Display: '6.7 Amoled 120hz',
      price: 27999
    },
    {
      url: 'https://www.94mobiles.com/wp-content/uploads/2023/05/Xiaomi-Poco-F5.jpg',
      name: 'Poco F5',
      Chipset: 'Snd 7 Plus Gen 2',
      Display: '6.67 Amoled 120Hz',
      price: 25999
    },
    {
      url: 'https://m.media-amazon.com/images/I/71iaqy+yM2L._SL1500_.jpg',
      name: 'Xiaomi Redmi K50i',
      Chipset: 'Mdt Dimensity 8100',
      Display: '6.6 IPS LCD 144Hz',
      price: 20999
    },
    {
      url: 'https://static.digit.in/default/thumb_330262_default_td_480x480.png?tr=w-1200',
      name: 'Samsung Galaxy M34',
      Chipset: 'Exynos 1280',
      Display: '6.5 SupAmoled 120Hz',
      price: 18999
    },
    {
      url: 'https://www.mobiledor.com/wp-content/uploads/Motorola-Moto-G73.webp',
      name: 'Moto G73',
      Chipset: 'Mdt Dimensity 930',
      Display: '6.5 IPS LCD 120Hz',
      price: 16999
    },
    {
      url: 'https://m.media-amazon.com/images/I/61M0tGMbBPL.jpg',
      name: 'iQOO Z6 Lite 5G',
      Chipset: 'Snd 4 Gen 1',
      Display: '6.58 IPS LCD 120Hz',
      price: 14990
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;