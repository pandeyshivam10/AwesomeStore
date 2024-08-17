import React, { useState } from "react";
import useStore from "@/lib/store";
import toast from "react-hot-toast";

interface Rating {
  rate: number;
  count: number;
}

interface CardProps {
  id?: number;
  title: string;
  description: string;
  category?: string;
  image: string;
  price: number;
  rating?: Rating;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  category,
  image,
  price,
  id,
  rating,
}) => {
  const [isHearted, setIsHearted] = useState(false);
  const cart = useStore((state) => state.cart);
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (id && !cart.some((item) => item.id === id)) {
      addToCart({
        id,
        title,
        description,
        category,
        image,
        price,
        rating,
        quantity: 1,
      });
      toast.success("This item is now in your cart");
    } else {
      toast.error("This item is already in your shopping list");
    }
  };

  const handleToggleHeart = () => {
    setIsHearted(!isHearted);
  };

  return (
    <div className="w-[320px] productCard overflow-hidden cursor-pointer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50 text-gray-800 shadow-md rounded-lg mb-5 transition-transform transform hover:scale-105">
      <img
        className="w-full h-[275px] object-contain rounded-t-lg"
        src={`${image}`}
        alt={title}
        height={275}
        width={320}
      />

      <div className="p-4">
        <div className="font-bold mb-2 text-lg line-clamp-2 leading-7">
          {title}
        </div>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
      <div className="flex justify-between items-center px-4 py-2">
        {category && (
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
            {category}
          </span>
        )}
        <span className="flex items-center bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
          ₹{price}
        </span>
        {rating && (
          <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
            {rating.rate} ★ ({rating.count})
          </span>
        )}
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <button
          className="bg-blue-500 hover:bg-blue-600 border border-blue-400 text-white font-bold py-2 px-4 rounded-full transition-all duration-200"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          className={`ml-4 transition-all duration-200 ${
            isHearted ? "text-red-500" : "text-gray-500"
          } focus:outline-none`}
          onClick={handleToggleHeart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isHearted ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
