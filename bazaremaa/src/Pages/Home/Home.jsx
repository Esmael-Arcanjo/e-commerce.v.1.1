import React from 'react'
import CartSidebar from "../Carrinho/CartSidebar";

const Home = () => {
    const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);


    return (
           <>
      
   
        <h1 class="text-3xl font-bold underline">
            Home
        </h1>

        <Header toggleCart={toggleCart} cartCount={cart.length} />
      <CartSidebar
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
      />
      {/* Aqui vai sua página (produtos, home, etc.) */}
       </>
    )
}

export default Home