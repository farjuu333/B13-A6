 
import React, { useState, use } from 'react';
import { toast } from 'react-toastify';


const ProductCard = ({ product, getTagStyle, handleAddToCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  
  const handleClick = () => {
    if (!isAddedToCart) {
      handleAddToCart(product); 
      setIsAddedToCart(true);   
      toast.success("Item added to cart!")
    }
  };

  return (
    <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      
      {/* Badge/Tag */}
      {product.tag && (
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getTagStyle(product.tagType)}`}>
          {product.tag}
        </div>
      )}

      {/* Icon */}
      <div className="text-3xl mb-6 bg-gray-50 w-12 h-12 flex items-center justify-center rounded-xl">
        {product.icon}
      </div>

      {/* Title & Description */}
      <h3 className="text-[20px] font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-[13px] text-gray-500 mb-6 leading-relaxed flex-grow">
        {product.description}
      </p>

      {/* Price */}
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-[24px] font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm font-medium">/{product.period}</span>
      </div>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-[13px] text-gray-600">
            <span className="text-green-500 text-sm">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      
      <button 
        onClick={handleClick}
        className={`w-full py-3 rounded-xl font-semibold transition-all ${
          isAddedToCart ? "bg-green-500 text-white cursor-default" : "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
        }`}
      >
        {isAddedToCart ? "Added To Cart!" : "Buy Now"}
      </button>
    </div>
  );
};

const Models = ({ modelPromise, handleAddToCart }) => {
  const models = use(modelPromise);

  const getTagStyle = (type) => {
    switch (type) {
      case 'popular': return 'bg-blue-100 text-blue-600';
      case 'best-seller': return 'bg-orange-100 text-orange-600';
      case 'new': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {models.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          getTagStyle={getTagStyle} 
          
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Models; 

