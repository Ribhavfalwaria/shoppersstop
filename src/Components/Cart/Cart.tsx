import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles1 from "./cart.module.css";
import CartCard from "../cartCard";
import { useAppSelector } from "../../store/store";
import { storeItem } from "../../constants/models/storeItem";
import { MdClose } from "react-icons/md";
const Cart = ({ data,setter }: { data: boolean, setter: Dispatch<SetStateAction<boolean>> }) => {
  const count = useAppSelector((state) => state.shoppingCart);
  const [totalPrice, settotalPrice] = useState<number>(0);
  useEffect(() => {
    let totalPrice: number = 0;
    count.forEach((i: storeItem) => {
      let price = +i?.price?.split("$")[1];
      totalPrice += price * i.quantity;
    });
    settotalPrice(totalPrice);
  }, [count]);

  return (
    <div
      className={`${
        data === true ? styles1.ott : styles1.ott1
      } flex flex-col flex-wrap`}
      style={{ zIndex: 10 }}
    >
      <div className="flex justify-center items-center justify-between p-3">
        <p className="font-poopins text-2xl" > Your Cart</p>
        <p className="font-poopins text-2xl mr-3 cursor-pointer" onClick={()=>setter(false)}> <MdClose size={30} /></p>
      </div>
      <br />
      {count.length === 0 ? (
        <div className="flex justify-center items-center p-4">
          <p className="font-poppins text-gray-500 text-4xl">
            No items available
          </p>
        </div>
      ) : (
        <div className="flex w-full flex-col flex-wrap">
          {count.map((item: any) => (
            <CartCard {...item} />
          ))}
        </div>
      )}
      <div className="flex justify-between items-center p-5">
        <p className="font-poppins text-gray-500">Total Price</p>
        <p className="font-poppins text-gray-500">{totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
