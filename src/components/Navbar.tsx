// Navbar.tsx
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";
import { useCart } from './CartContext';

const Navbar = () => {
 const { cart } = useCart();
 
  return (
    <div className="fixed top-0 left-0 w-full bg-orange-900 z-10">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-4xl font-medium text-white">Logo</h1>
          <div className="relative max-w-[500px]">
            <input type="text" className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" placeholder="Search Product..." />
            <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20} />
          </div>
  
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="block py-2 px-3 text-white bg-gray-500 md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-gray-500" aria-current="page"><Link to={'/'}>Home</Link></li>
              <li className="block py-2 px-3 text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to={'FeatureSectionFruits'}>Leather Wallet</Link></li>
              <li className="block py-2 px-3 text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to={'FeatureSectionBreakfast'}>Card Holder</Link></li>
              <li className="block py-2 px-3 text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to={'BlogSection'}>Belts</Link></li>
            </ul>
          </div>
  
          <div className="flex gap-4">
            <div className="icon_wrapper">
              <AiOutlineUser />
            </div>
            <div className="icon_wrapper relative">
            <Link to="/cart">
                <AiOutlineShoppingCart />
                <CartCountBadge size="w-[25px] h-[25px]" count={cart.length} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
