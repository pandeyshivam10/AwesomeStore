"use client";

import React from "react";
import useStore from "@/lib/store";
import CartItem from "@/components/cart-ui/CartItem";
import CartSummary from "@/components/cart-ui/CartSummary";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const fixedDiscount = 10; // Example: ₹10 off
  const percentageDiscount = 0.1; // Example: 10% off
  const discount =
    subtotal > 0 ? fixedDiscount + subtotal * percentageDiscount : 0;
  const totalPrice = subtotal - discount;

  return (
    <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-8 mt-16">
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            className: "toast-success",
          },
          error: {
            className: "toast-error",
          },
          loading: {
            className: "toast-info",
          },
          // Add other toast types if needed
        }}
      />
      <motion.h1
        className="text-4xl font-extrabold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Shopping Cart
      </motion.h1>

      {cart.length > 0 ? (
        <>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CartItem
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CartSummary
              subtotal={subtotal}
              discount={discount}
              totalPrice={totalPrice}
            />
          </motion.div>
        </>
      ) : (
        <motion.p
          className="text-center text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your cart is empty.
        </motion.p>
      )}
    </div>
  );
};

export default Cart;
