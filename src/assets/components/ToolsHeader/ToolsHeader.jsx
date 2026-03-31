
const ToolsHeader = ({ activeTab, setActiveTab, cartCount }) => {
  return (
    <div className="w-full flex flex-col items-center mt-30 mb-15 gap-4">
      
      
      <div className="flex items-center bg-gray-100 p-1 rounded-full mt-4">
        <button 
          onClick={() => setActiveTab('products')}
          className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === 'products' ? 'bg-[#7C3AED] text-white shadow-sm' : 'text-gray-500'
          }`}
        >
          Products
        </button>
        <button 
          onClick={() => setActiveTab('cart')}
          className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-sm' : 'text-gray-500'
          }`}
        >
          
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default ToolsHeader;