import ProductCard from "./ProductCard";
import WhatsAppButton from "./WhatsAppButton";

const data = [
    {id: 0, img: "p_1.jpg", name: "Dried Mango", price: "$500" },
    {id: 1, img: "p_2.jpg", name: "Crunchy Crisps", price: "$300" },
    {id: 2, img: "p_1.jpg", name: "Jewel Cranberries", price: "$200" },
    {id: 3, img: "p_2.jpg", name: "Almond Organic", price: "$100" },
]
const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Leather Wallet</h3>
          <p className="text-gray-600 mt-2">
            Buy farm fresh fruits and vegetables online at the best price
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature__btn">Fruits</button>
          <button className="text-gray-600 hover:text-green-600">
            Vegitables
          </button>
          <button className="text-gray-600 hover:text-green-600">
            Bread & Bakery
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 pt-8">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/mw_1.jpg"
            alt="banner"
          />
        </div>
        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default FeatureSectionFruits;
