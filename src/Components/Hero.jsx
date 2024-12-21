import { PiPlayBold } from "react-icons/pi";
import img1 from "../assets/img/back1.jpg";
import img2 from "../assets/img/back2.jpg";
import img3 from "../assets/img/back3.jpg";

const Hero = () => {
  return (
    <div className="w-full h-full pt-12">
      <h2 className="uppercase py-4 font-bold tracking-[1px]">
        Recent Activity
      </h2>
      <div className="grid lg:grid-cols-4  gap-10">
        <div className="lg:col-span-2 col-span-4 rounded-2xl relative overflow-hidden flex items-end p-5 h-[230px]">
          <div className="absolute w-full h-full top-0 right-0 overflow-hidden z-[-1]">
            <img src={img1} alt="" className="w-full h-full blur-sm" />
          </div>
          <div className="text-white w-full">
            <div className="">
              <h2 className="text-[#ffffff97]">Continue</h2>
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <div>
                <p className="text-4xl capitalize tracking-[1px]">
                  Portrait photography fundamentals
                </p>
              </div>
              <div className="w-[70px] h-[58px] rounded-[8px] bg-[#ffffff29] flex justify-center items-center">
                <PiPlayBold className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[230px] overflow-hidden relative rounded-2xl p-5 col-span-4 md:col-span-2 lg:col-span-1">
          <div className="absolute z-[-1] top-0 right-0 w-full h-full">
            <img
              src={img2}
              alt=""
              className="w-full h-full object-cover bg-cover bg-center blur-sm"
            />
          </div>
          <div className="w-full h-full text-white flex flex-col justify-between">
            <div>
              <p className="capitalize text-3xl">
                History of modern art movements
              </p>
            </div>
            <div className="flex justify-between items-end w-full h-full">
              <div className="capitalize ">
                <p className="text-[#ffffff97]">final quiz</p>
                <h2 className="text-lg capitalize">completed 12/08</h2>
              </div>
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[8px] bg-[#ffffff29]">
                <PiPlayBold className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[230px] col-span-4 md:col-span-2 lg:col-span-1 overflow-hidden relative rounded-2xl p-5">
          <div className="absolute z-[-1] top-0 right-0 w-full h-full">
            <img
              src={img3}
              alt=""
              className="w-full h-full object-cover bg-cover bg-center blur-sm"
            />
          </div>
          <div className="w-full h-full text-white flex flex-col justify-between">
            <div>
              <p className="capitalize text-3xl">music theory basics</p>
            </div>
            <div className="flex justify-between items-end w-full h-full">
              <div className="capitalize ">
                <p className="text-[#ffffff97]">final quiz</p>
                <h2 className="text-lg capitalize">completed 1/08</h2>
              </div>
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[8px] bg-[#ffffff29]">
                <PiPlayBold className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
