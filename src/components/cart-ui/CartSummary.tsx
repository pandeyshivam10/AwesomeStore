import React from "react";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  totalPrice: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  discount,
  totalPrice,
}) => {
  return (
    <div className="p-8 mt-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 rounded-xl shadow-lg border border-gray-300">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cart Summary</h2>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between text-base font-medium text-gray-700">
          <span>Subtotal:</span>
          <span className="font-semibold text-gray-800">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-700">
          <span>Discount:</span>
          <span className="font-semibold text-red-600">-₹{discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900 mt-4">
          <span>Total Price:</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
