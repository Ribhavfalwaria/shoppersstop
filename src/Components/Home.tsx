import styles from "./styles";
import { banner_background } from "../assets";
import FeatureCard from "./FeatureCard";
import { bestSellerProduct} from "../constants";
import { products } from "../constants/models/product";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
// import { banner_background } from "../assets";
const Home = () => {
  return (
    <>
      <section className={` w-full  xs:w-29 object-contain`}>
        <div className="flex flex-row bg-dimGrey justify-around flex-wrap">
          <div className={`p-5 flex flex-col`}>
            <p className={`text-5xl font-poppins`}>
              <span>
                Make Your Fashion
                <br />
                look
                <br className=" " /> more Attractive
              </span>
            </p>

            <br />
            <p className=" font-sans text-gray-700 mt-4 ">
              Shoppers Stop is your shopping destination for fashion,
              <br className="hidden " /> home, beauty kids ,clothes and more.
              <br />
              Browse the latest Collections and find you perfect fit.
            </p>
            <br />
            <div className="mt-5">
              <Link to={"/shop"}>

              <button className="bg-primary text-white text font-medium p-5 rounded-xl">
                SHOP NOW
              </button>
              </Link>
            </div>
          </div>
          <div className={`p-5 flex flex-col`}>
            <img
              src={banner_background}
              style={{ height: "400px", width: "700px" }}
              alt="ss"
            />

            <br />
          </div>
        </div>
        <div className="relative flex mx-2 py-5 items-center">
          <div className="flex-grow border-t border-primary "></div>
          <h1 className="font-poppins flex-shrink mx-4 text-4xl  font-noemal"> Best Seller</h1>
          <div className="flex-grow border-t border-primary "></div>
        </div>
        <div className={`${styles.flexAround} mx-auto flex-wrap`}>
          {bestSellerProduct.map((product: products,i:number) => (
            <FeatureCard
            {...product}
            key={i}
              // icon={product.icon}
              // id={product.id}
              // description={product.description}
              // category={product.category}
            />
          ))}
        </div>
        <div className="relative flex mx-2 py-5 items-center">
          <div className="flex-grow border-t border-primary "></div>
          <h1 className="font-poppins flex-shrink mx-4 text-4xl  font-noemal">Testimonials</h1>
          <div className="flex-grow border-t border-primary "></div>
        </div>
        <div className="flex flex-wrap mt-4">
          <Testimonials/>
        </div>
      
      </section>
    </>
  );
};

export default Home;
