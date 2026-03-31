// import React from 'react';

// const ProductCards = () => {
//   const products = [
//     { id: 1, title: "AI Writing Pro", price: "29", tag: "BEST SELLER" },
//     { id: 2, title: "Design Templates Pack", price: "49", tag: "POPULAR" },
//     { id: 3, title: "Premium Stock Assets", price: "19", tag: "NEW" },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl mx-auto">
//       {products.map((product) => (
//         <div key={product.id} className="p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm text-left relative">
//           <span className="absolute top-6 right-6 bg-orange-50 text-orange-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
//             {product.tag}
//           </span>
//           <div className="w-12 h-12 bg-gray-50 rounded-xl mb-6 flex items-center justify-center text-2xl">📦</div>
//           <h3 className="text-xl font-bold mb-2">{product.title}</h3>
//           <p className="text-gray-400 text-sm mb-6">Generate high-quality content, blogs, and marketing copy in seconds.</p>
//           <div className="flex items-baseline gap-1 mb-8">
//             <span className="text-3xl font-bold">${product.price}</span>
//             <span className="text-gray-400 text-sm">/Monthly</span>
//           </div>
//           <button className="w-full py-3 rounded-2xl bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition-all">
//             Buy Now
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCards;