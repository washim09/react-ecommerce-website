import { LuMailOpen } from "react-icons/lu"


const NewsLetter = () => {
  return (
    <div className="bg-orange-900 mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">Sign Up To Our Newsletters</h3>
            <p>...and received $20 coupon for first shopping</p>
          </div>
        </div>
        <div className="w-full max-w-[500px] relative">
          <input 
            className="py-4 px-6 w-full rounded-full" 
            type="text" 
            placeholder="Your Email Address"
          />
          <button className="bg-orange-900 absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-orange-600">
            Subscribe!
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter