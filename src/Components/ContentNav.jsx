const ContentNav = () => {
  return (
    <div className="w-full flex justify-between">
      <div>
        <ul className="flex gap-3 items-center">
          <li className="font-bold">All</li>
          <li className="capitalize text-[#00000097]">course</li>
          <li className="capitalize text-[#00000097]">videos</li>
          <li className="capitalize text-[#00000097]">quizzes</li>
        </ul>
      </div>
      <div>
        <button className="px-4 py-1 rounded-[8px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          Current
        </button>
      </div>
    </div>
  );
};

export default ContentNav;
