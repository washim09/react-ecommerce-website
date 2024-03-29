
import { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import WhatsAppButton from './WhatsAppButton';
import { useCart } from './CartContext';

const Hero = () => {
  const { addToCart } = useCart();
  const heroItems = [
    {
      imagePath: '/w_1.jpg',
      text1: '100% Original Leather Wallet',
      text2: 'Handmade Best Quality Wallet',
      price: '$18.36',
    },
    {
      imagePath: '/w_2.jpg',
      text1: 'Sheep Leather Wallet',
      text2: null,
      price: '$25',
    },
    {
      imagePath: '/w_3.jpg',
      text1: 'Best Yummy Chips',
      text2: null,
      price: '$10',
    },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % heroItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleShopNow = (imagePath: string, text1: string, text2: string | null, price: string) => {
    // Add item to cart
    const item = {
       imagePath,
       text1,
       text2: text2 || "",
       price: parseFloat(price.replace('$', '')), // Parse price as a float
       quantity: 1, // Default quantity
    };
    addToCart(item);
   };
   
   
  

  return (
    <div className="container pt-28 relative">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img className="w-full h-full object-cover rounded-lg" src={heroItems[currentItemIndex].imagePath} alt="hero image" />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block font-bold">{heroItems[currentItemIndex].text1}</p>
            {heroItems[currentItemIndex].text2 && <h2 className="text-2xl sm:text-4xl font-bold">{heroItems[currentItemIndex].text2}</h2>}
            <p className="text-yellow-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8">{heroItems[currentItemIndex].price}</div>
            <button className="bg-orange-900 hover:bg-orange-600 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer" onClick={() => handleShopNow(heroItems[currentItemIndex].imagePath, heroItems[currentItemIndex].text1, heroItems[currentItemIndex].text2, heroItems[currentItemIndex].price)}>Shop Now <BsArrowRight /></button>
          </div>
        </div>
        
        <div className="relative">
          <img className="w-full h-full object-cover rounded-lg" src={heroItems[(currentItemIndex + 1) % heroItems.length].imagePath} alt="hero image 2" />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <h2 className="text-2xl font-bold">{heroItems[(currentItemIndex + 1) % heroItems.length].text1}</h2>
            {heroItems[(currentItemIndex + 1) % heroItems.length].text2 && <p className="text-xl">{heroItems[(currentItemIndex + 1) % heroItems.length].text2}</p>}
            <div className="font-medium text-red-600 text-2xl pb-8">{heroItems[(currentItemIndex + 1) % heroItems.length].price}</div>
            <button className="bg-orange-900 hover:bg-orange-600 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer" onClick={() => handleShopNow(heroItems[(currentItemIndex + 1) % heroItems.length].imagePath, heroItems[(currentItemIndex + 1) % heroItems.length].text1, heroItems[(currentItemIndex + 1) % heroItems.length].text2, heroItems[(currentItemIndex + 1) % heroItems.length].price)}>Shop Now <BsArrowRight /></button>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-full object-cover rounded-lg" src={heroItems[(currentItemIndex + 2) % heroItems.length].imagePath} alt="hero image 3" />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[80%] -translate-y-[90%] sm:space-y-4">
            <h2 className="text-2xl font-bold">{heroItems[(currentItemIndex + 2) % heroItems.length].text1}</h2>
            {heroItems[(currentItemIndex + 2) % heroItems.length].text2 && <p className="text-xl">{heroItems[(currentItemIndex + 2) % heroItems.length].text2}</p>}
            <div className="font-medium text-red-600 text-2xl pb-8">{heroItems[(currentItemIndex + 2) % heroItems.length].price}</div>
            <button className="bg-orange-900 hover:bg-orange-600 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer" onClick={() => handleShopNow(heroItems[(currentItemIndex + 2) % heroItems.length].imagePath, heroItems[(currentItemIndex + 2) % heroItems.length].text1, heroItems[(currentItemIndex + 2) % heroItems.length].text2, heroItems[(currentItemIndex + 2) % heroItems.length].price)}>Shop Now <BsArrowRight /></button>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Hero;
