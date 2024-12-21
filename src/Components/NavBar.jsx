import { CiMail, CiShoppingCart } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="w-full h-12 bg-[#fff] flex items-center justify-between px-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div>
        <img src="" alt="" />
        <p>LearnFormula</p>
      </div>
      <div className="flex gap-4">
        <ul className="flex gap-4 justify-center items-center">
          <li className="capitalize">Dashboard</li>
          <li className="capitalize">my course</li>
          <li className="capitalize">calender</li>
          <li className="capitalize">reports</li>
        </ul>
        <ul className="flex justify-center items-center gap-5">
          <li className="text-2xl">
            <CiShoppingCart />
          </li>
          <li className="text-2xl">
            <CiMail />
          </li>
          <li className="text-2xl">
            <IoIosNotificationsOutline />
          </li>
        </ul>
        <div className="h-[35px] w-[35px] bg-[#4400ff65] rounded-full flex justify-center items-center">
          <h2 className="text-sm text-[#4400ff]">DK</h2>
        </div>
        <div className="text-[12px]">
          <h2 className=" text-center">Admin</h2>
          <p>PhotoGraphy</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
