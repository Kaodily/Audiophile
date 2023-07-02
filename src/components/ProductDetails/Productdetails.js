import { Link } from "react-router-dom";

const Productdetails = ({ data }) => {
  const arr = data.reverse();
  return (
    <article className="pt-5 text-center  ">
      {arr.map((data, index) => {
        return (
          <div
            key={data.id}
            className="py-9 lg:grid grid-cols-2  lg:mx-[130px]  lg:text-left">
            <div className="mx-[20px] rounded-md px-8 py-3 text-black ">
              <picture className="mx-[10px] md:mx-0 rounded-md px-8 py-3 ">
                <source
                  srcSet={`${"."}${data.categoryImage.desktop}`}
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet={`${"."}${data.categoryImage.tablet}`}
                  media="(min-width: 768px)"
                />
                <source srcSet={data.categoryImage.mobile} />
                <img
                  src={data.categoryImage.mobile}
                  alt={data.name}
                />
              </picture>
            </div>
            <div
              className=" lg:pt-8 md:pl-16 "
              style={index % 2 === 0 ? { order: 1 } : { order: -9999 }}>
              <h3 className="uppercase mt-7 text-[12px] sm:text-[14px] lg:text-left tracking-widest font-bold text-[#D87D4A] text-center ">
                New product
              </h3>
              <h3 className="font-bold text-[20px] sm:text-[24px] sm:px-[200px] lg:px-0 lg:text-left px-20 py-4 tracking-widest uppercase">
                {data.name}
              </h3>
              <p className="px-9 leading-6 text-center lg:text-left lg:px-0 sm:leading-8  font-medium text-[14px] sm:text-[16px] sm:px-[100px] opacity-50">
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
