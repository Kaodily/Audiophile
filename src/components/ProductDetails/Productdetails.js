import { useContext } from "react";
import { ProductContext } from "./Product";
import { Link } from "react-router-dom";

const Productdetails = () => {
  const {data} = useContext(ProductContext);
  let arr = [];
  for (let each of data) {
    arr.unshift(each);
  }

  return (
    <article className="pt-5 text-center">
      {arr.map((data) => {
       let image =  window.innerWidth >= '800' ? data.image.mobile :  data.image.desktop
        // let image =data.image.tablet
        return (
          <div key={data.id} className="py-9">
            <div className="mx-[20px] rounded-md px-8 py-3 text-black ">
              <img src={image} alt={data.name} className='mx-auto'/>
            </div>
            <h3 className="uppercase mt-7 text-[12px] sm:text-[14px] tracking-widest font-bold text-[#D87D4A] text-center ">
              New product
            </h3>
            <h3 className="font-bold text-[20px] sm:text-[30px] sm:px-[200px] px-20 py-4 tracking-widest uppercase">
              {data.name}
            </h3>
            <p className="px-9 leading-6 text-center sm:leading-8  font-medium text-[14px] sm:text-[20px] sm:px-[100px] opacity-50">
              {data.description}
            </p>
            <Link to={`/${data.category}/${data.slug}`}>
              <button className="uppercase w-[150px] sm:w-[180px] font-medium text-[16px]  text-white mt-[30px] sm:h-[60px] h-[40px] bg-[#D87D4A]">
                See product
              </button>
            </Link>
          </div>
        );
      })}
    </article>
  );
};
export default Productdetails;
