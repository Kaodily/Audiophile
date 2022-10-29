import { useContext } from "react";
import { ProductContext } from "./Product";
import { Link } from "react-router-dom";

const Productdetails = () => {
  const {data,width} = useContext(ProductContext);
  let arr = [];
  for (let each of data) {
    arr.unshift(each);
  }

  return (
    <article className="pt-5 text-center lg:mx-[130px] ">
      {arr.map((data,index) => {
       let image = data.image.mobile
        if (width >= 768 && width <= 1024) {
          image = data.image.tablet
        } else if (width > 1024) {
         image = data.image.desktop
        }
        return (
          <div key={data.id} className="py-9 md:grid grid-cols-2  md:text-left">
            <div className="mx-[20px] rounded-md px-8 py-3 text-black ">
              <img src={image} alt={data.name} className='mx-auto lg:mx-[0]'/>
            </div>
            <div className=" md:pt-20 lg:pt-8 md:pl-16 "  style={index % 2 === 0 ? {order: 1} : {order:-9999}}>
            <h3 className="uppercase mt-7 text-[12px] sm:text-[14px] md:text-left tracking-widest font-bold text-[#D87D4A] text-center ">
              New product
            </h3>
            <h3 className="font-bold text-[20px] sm:text-[24px] sm:px-[200px] md:px-0 md:text-left px-20 py-4 tracking-widest uppercase">
              {data.name}
            </h3>
              <p className="px-9 leading-6 text-center md:text-left md:px-0 sm:leading-8 md:w-[350px] font-medium text-[14px] sm:text-[16px] sm:px-[100px] opacity-50"
          >
              {data.description}
            </p>
            <Link to={`/${data.category}/${data.slug}`}>
              <button className="uppercase w-[150px] sm:w-[180px] font-medium text-[16px]  text-white mt-[30px] sm:h-[60px] h-[40px] bg-[#D87D4A]">
                See product
              </button>
            </Link>
           </div>
          </div>
        );
      })}
    </article>
  );
};
export default Productdetails;
