import React from "react";
import { shoppingData } from "../constants";
import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <div>
      {shoppingData.map((shoppingItem: any, i: number) => (
        <div key={i}>
          <div className="relative flex mx-2 py-5 items-center">
            <div className="flex-grow border-t border-primary "></div>
            <h1 className="font-poppins flex-shrink mx-4 text-4xl  font-noemal">
              {shoppingItem.category}
            </h1>
            <div className="flex-grow border-t border-primary "></div>
          </div>
          <div className="flex flex-row flex-wrap justify-around">
            {shoppingItem.items.map((item: any, i: number) => (
              <ProductCard {...item} key={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
