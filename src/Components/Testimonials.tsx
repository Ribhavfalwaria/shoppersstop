import React from "react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedBackCard";
import styles from "./styles";

const Testimonials = () => {
  return (
<section className="w-full xs:w-29 object-contain">
{/* 
<div className="flex flex-row  justify-center flex-wrap">
<h1 className="font-poppins text-4xl mt-5">Testimonials</h1>
</div> */}
 <div className={`${styles.flexAround} mx-auto flex-wrap`}>
          {
            feedback.map((f,i)=>(<FeedbackCard key={i} {...f}/>))
          }
        </div>
</section>
  ) 
};

export default Testimonials;
