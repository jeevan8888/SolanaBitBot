import React from "react";

const BuyText = () => {
  return (
    <div className="">
      <div className="bg-black p-5 rounded-lg flex flex-col gap-5">
        <span className="text-[25px] font-bold text-white">
          What is Auto-Buy?
        </span>
        <p className="text-[#858686] text-[15px] font-medium leading-8">
          The Auto Buy functionality is configured to determine the precise
          conditions under which tokens from the Pending Pool are purchased.
          Once the specified criteria are fulfilled, the bot will automatically
          execute the purchase, and the token will be reflected in the open
          positions.
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

export default BuyText;
