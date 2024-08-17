"use clients";
import React, { useEffect, useState } from "react";
import Card from "./card-ui/card";
import { products } from "@/context/productData";

const HomeItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-md:gap-4 w-[90%] mx-auto justify-items-center max-md:justify-items-center">
      {products.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          title={item.title}
          description={item.description}
          category={item.category}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default HomeItems;
