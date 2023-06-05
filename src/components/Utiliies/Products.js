import { datas } from "../../Data";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className=" mx-9 sm:flex md:justify-center sm:mt-16 sm:mx-8">
      {datas.map((data) => {
        return (
          <div
            key={data.id}
            className="w-[100%] lg:w-[26%] lg:h-[240px] relative sm:mr-3 lg:mx-5  h-[150px] bg-white rounded-md my-[70px] shadow-sm ">
            <div className="absolute top-[-30px] left-[50%] translate-x-[-50%]">
              <img
                src={data.image}
                alt={data.product}
                className="w-[130px] lg:w-[160px]  "
              />
            </div>
            <h3 className="uppercase text-center text-[14px] pt-20 lg:pt-32 sm:text-[20px] font-bold  ">
              {data.product}
            </h3>
            <Link to={`/${data.product}`}>
              <div
                onClick={window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })}
                className="flex justify-center mt-[10px]">
                <p className="text-[12px] sm:text-[14px] pr-1 opacity-50">
                  SHOP{" "}
                </p>
                <div>
                  <img
                    className="w-[7px] mt-1"
                    src="../assets/shared/desktop/icon-arrow-right.svg"
                    alt="arrow"
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
