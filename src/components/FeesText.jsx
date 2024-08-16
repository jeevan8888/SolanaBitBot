import React from "react";

const FeesText = () => {
  return (
    <div className="">
      <div className="bg-black p-5 rounded-lg flex flex-col gap-5">
        <span className="text-[25px] font-bold text-white">What are Fees?</span>
        <p className="text-[#858686] text-[15px] font-medium leading-8">
          This section allows you to configure fee limits that will be applied
          to every transaction executed by the bot, ensuring optimal cost
          management.
        </p>
      </div>

      <div className="flex justify-end gap-5 mt-14">
        <button className=" hover:border border-[#17C654] bg-[#17C654] border rounded-[7px] px-6 py-3 text-white text-base font-bold">
          Update
        </button>
        <button className="bg-[#202020] hover:border  hover:bg-[#2c2c2c] border rounded-[7px] px-6 py-3 text-white text-base font-bold">
          Canel
        </button>
      </div>
    </div>
  );
};

export default FeesText;
