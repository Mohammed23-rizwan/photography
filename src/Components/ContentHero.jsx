import ContentNav from "./ContentNav";
import { PiPlayBold } from "react-icons/pi";
import { Users } from "../assets/data/RecentData";

const ContentHero = () => {
  console.log(Users);
  return (
    <div className="my-10">
      <ContentNav />
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-[700px] md:h-[600px] lg:h-[230px] pt-4">
        {Users.map((user) => {
          return (
            <div className="col-span-1 h-[300px] md:h-full" key={user.id}>
              <div className="w-full h-[80%] rounded-2xl relative overflow-hidden flex items-end">
                <div className="absolute right-0 top-0  z-[-1]">
                  <img
                    src={user.img}
                    alt=""
                    className="bg-center bg-cover blur-sm"
                  />
                </div>
                <div className="w-full flex justify-between items-center p-2">
                  <div>
                    <p className="text-[#ffffff95] text-sm capitalize">
                      step {user.steps}
                    </p>
                    <h2 className="text-sm text-white capitalize">
                      {user.topic}
                    </h2>
                  </div>
                  <div className="w-[30px] h-[30px] bg-[#ffffff29] flex justify-center items-center rounded-lg">
                    <PiPlayBold className="" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="capitalize text-lg font-normal">{user.name}</h2>
                <p className="capitalize text-[#00000097]">
                  course {user.hours} hours
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentHero;
