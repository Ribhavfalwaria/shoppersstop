import { useState } from "react";
import styles from "./styles";
import { headerData } from "../constants";
import { CiUser } from "react-icons/ci";
import {  close, menu } from "../assets";
import Cart from "./Cart/Cart";
import { BsCart2 } from "react-icons/bs";
import { useAppSelector } from "../store/store";
import { Link } from "react-router-dom";

const Header = () => {
  const count = useAppSelector((state) => state.shoppingCart);
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState(false);
  return (
    <>
      <div className="relative flex justify-end">
        <Cart data={cart} setter={setCart} />
      </div>
      <nav className="w-full flex justify-between items-center navbar">
        <div className={`${styles.headerBox} ${styles.flexBetween} bg-dimGrey`}>
          <div className="p-1 ml-3 ">
            <p className="font-poppins text-3xl text-gray-700">Shoppers<span className="text-red-500">Stop</span> </p>
          </div>
          <ul className="list-none sm:flex hidden  justify-end items-center flex-1 mt-3">
            {headerData.map((item, i) => (
              <Link to={item.link}    key={item.id}>
              <li
              
           
              className={`font-poppins text-grey-500 cursor-pointer font-medium hover:text-white ${
                i === headerData.length - 1 ? "mr-2" : "mr-4"
              }`}
              id={item.id}
              >
                {item.value}
              </li>
                </Link>
            ))}
            <div className="flex justify-between items-center mr-4">
              <div>
                <CiUser size={30} />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins text-sm">Mukesh Kumar</span>
                <span className="font-poppins text-xs">Mukesh@gmail.com</span>
              </div>
            </div>
            <div
              className="flex relative mr-5"
              onClick={() => {
                setCart(!cart);
              }}
            >
              <div
                className="absolute w-[25px] h-[25px] cursor-pointer flex justify-center items-center ml-[15px] mt-[-7px] bg-red-600"
                style={{ borderRadius: "50%" }}
              >
                <h1 className="text-xs text-white">{count.length}</h1>
              </div>
              <BsCart2 size={30} />
            </div>
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col  justify-end items-center flex-1">
                {headerData.map((link, i) => (
                  <li
                    key={`#${link.id}`}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                      i === headerData.length - 1 ? "mr-0" : "mb-4"
                    }`}
                  >
                    <a href={`#${link.id}`}>{link.value}</a>
                  </li>
                ))}
                 <div
              className="flex relative "
              onClick={() => {
                setCart(!cart);
              }}
            >
              <div
                className="absolute w-[25px] h-[25px] cursor-pointer flex justify-center items-center ml-[15px] mt-[-7px] bg-red-600"
                style={{ borderRadius: "50%" }}
              >
                <h1 className="text-xs text-white">{count.length}</h1>
              </div>
              <BsCart2 size={30} />
            </div>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
