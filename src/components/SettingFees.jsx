import { Info, Lock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import InfoCard from "./InfoCard";

const SettingFees = () => {
  const [selected, setSelected] = useState("10%");
  const [isOpen, setIsOpen] = useState(false);
  const [infoPop, setInfoPop] = useState(false);

  const togglePop = () => setInfoPop(!infoPop);

  const options = [
    { value: "5%" },
    { value: "10%" },
    { value: "20%" },
    { value: "50%" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option.value);
    setIsOpen(false);
  };

  return (
    <>
      <div className="mt-[37px]">
        <div className="flex items-center gap-1 py-1 relative">
          <p className="text-[16px] font-bold text-[#FFFFFF]">Priority Fee</p>
          <Info size={20} color='white' onClick={togglePop} className="cursor-pointer"/>
          {infoPop && (<div className="absolute right-7 top-3">
            <InfoCard />
          </div>)}
        </div>

        <div className="bg-[#0F0F0F] border  border-[#7A7A7A] flex w-[150px] h-[40px]  gap-1 rounded-[8px] items-center mt-[26px]">
          <div className="flex items-center gap-1 px-2 w-fit">
            <Image src={"/sol.png"} width={25} height={25} alt="image" />
          </div>
          <div className="h-6 w-[2px] bg-[#404040]"></div>

          <div className="w-full px-1">
            <input
              type="text"
              placeholder="Optimal"
              className=" text-white text-[14px] bg-transparent border-none outline-none hover:border-none  p-1.5 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 py-1 mt-[37px]">
          <p className="text-[16px] font-bold text-[#FFFFFF]">Bribery Fee</p>
          <Info size={20} color='white' />

        </div>

        <div className="bg-[#0F0F0F] border  border-[#7A7A7A] flex w-[150px] h-[40px]  gap-1  rounded-[8px] items-center mt-[26px]">
          <div className="flex items-center gap-1 px-2 w-fit">
            <Image src={"/sol.png"} width={25} height={25} alt="image" />
          </div>
          <div className="h-6 w-[2px] bg-[#404040]"></div>

          <div className="w-full px-1">
            <input
              type="text"
              placeholder="Optimal"
              className=" text-white text-[14px] bg-transparent border-none outline-none hover:border-none  p-1.5 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 py-1 mt-[37px]">
          <p className="text-[16px] font-bold text-[#FFFFFF]">Slippage</p>
          <Info size={20} color='white' />

        </div>

        <div className="relative inline-block text-left mt-[26px]">
          <div>
            <button
              type="button"
              onClick={toggleDropdown}
              className="inline-flex justify-between w-[140px] rounded-md shadow-sm px-4 py-2 bg-[#0F0F0F] text-sm font-medium text-[#7A7A7A] focus:outline-none border border-[#7A7A7A]"
            >
              {selected}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="origin-top-right absolute mt-2 w-[140px] rounded-md shadow-lg bg-[#333333] text-[#C0C0C0] ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    className={`${option.locked ? "text-[#C0C0C0]" : "text-[#C0C0C0]"
                      } group flex justify-between items-center px-4 py-2 text-sm w-full`}
                    disabled={option.locked}
                  >
                    {option.value}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingFees;
