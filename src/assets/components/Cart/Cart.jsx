import React from 'react';
import shoppingCartImg from '/products/shopping-cart.png';


function Cart({ cart, handleRemoveItem,handleClearCart }) {
  

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-10 bg-white border border-gray-100 rounded-3xl shadow-sm min-h-100">
      <div className="text-left w-full mb-8">
        <h3 className="text-xl font-bold text-gray-900">Your Cart</h3>
      </div>
      
      
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img src={shoppingCartImg} alt="Empty Cart" className="w-10 h-10 mb-4 object-contain opacity-40" />
          <p className="text-lg text-gray-500 font-medium">Your cart is empty</p>
        </div>
      ) : (
        <div className="w-full">
          
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-50 py-4 mb-2 bg-gray-50/50 px-4 rounded-xl">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <button 
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 text-sm font-bold hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          
          <div className="mt-10 pt-6 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium">Total:</span>
              <span className="text-2xl font-bold text-gray-900">${totalPrice}</span>
            </div>
            <button onClick={handleClearCart} className="w-full bg-[#7C3AED] text-white py-4 rounded-full font-bold shadow-lg hover:bg-[#6D28D9] transition-all">
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;