
import { useState } from 'react'
import './App.css'
import Banner from './assets/components/Banner/Banner'
import Cart from './assets/components/Cart/Cart'
import CTASection from './assets/components/CTASection/CTASection'
import Footer from './assets/components/Footer/Footer'
import GetStarted from './assets/components/GetStarted/GetStarted'
import Models from './assets/components/Models/Models'
import Navbar from './assets/components/Navbar/Navbar'
import PricingSection from './assets/components/PricingSection/PricingSection'
import StatsSection from './assets/components/StatsSection/StatsSection'
import ToolsHeader from './assets/components/ToolsHeader/ToolsHeader'
import { toast } from 'react-toastify'

const getModels = async ()=>{
  const res = await fetch("/Models.json")
  return res.json()
}
const modelPromise = getModels()

function App() {
  
const [activeTab, setActiveTab] = useState('products');


  const [cart, setCart] = useState([]);

  
  const handleAddToCart = (product) => {
    
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]); 
    } else {
      alert("This product is already in your cart!");
    }
  };

  
  const handleRemoveItem = (id) => {
    const remainingCart = cart.filter(item => item.id !== id);
    setCart(remainingCart); 
    toast.success("Item deleted!")
  };

  const handleClearCart = () => {
    setCart([]); 
    
     toast.success("Payment Successfull!")
  };
  return (
    <>
    
      
      <Navbar cartCount={cart.length} />
      <Banner></Banner>
      <StatsSection></StatsSection>
     

      
      <ToolsHeader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={cart.length} 
      />
      
      
      {
        activeTab === 'products' ? (
          <Models 
            modelPromise={modelPromise} 
            handleAddToCart={handleAddToCart}
          />
        ) : (
          
          <Cart 
            cart={cart} 
            handleRemoveItem={handleRemoveItem}
            handleClearCart={handleClearCart} 
          />
        )
      }
      
     
      <GetStarted></GetStarted>
      <PricingSection></PricingSection>
      <CTASection></CTASection>
      <Footer></Footer>
    </>
  )
}

export default App
