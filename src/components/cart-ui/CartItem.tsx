import React from "react";
import { toast } from "react-hot-toast";

interface CartItemProps {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  image,
  price,
  quantity,
  updateQuantity,
  removeFromCart,
}) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <img
        src={image}
        alt={title}
        width={100}
        height={100}
        className="rounded-lg object-cover"
      />
      <div className="flex-1 flex flex-col">
        <h2 className="font-semibold text-gray-800 text-lg mb-2">{title}</h2>
        <p className="text-gray-500 mb-2">Price: ₹{price}</p>
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => updateQuantity(id, quantity - 1)}
            className="px-3 py-1 bg-blue-300 rounded-l text-gray-800 hover:bg-blue-400 transition-colors"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-12 text-center bg-gray-200 text-gray-800 border border-gray-300 rounded"
          />
        <button
  onClick={() => updateQuantity(id, quantity + 1)}
  className="px-2 py-1 text-sm bg-blue-300 rounded-r text-gray-800 hover:bg-blue-400 transition-colors"
>
            +
          </button>
        </div>
        <button
          onClick={() => {
            removeFromCart(id);
            toast.success("Item removed successfully");
          }}
          className="mt-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
