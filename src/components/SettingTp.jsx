import { Info, Lock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import InfoCard from "./InfoCard";

const SettingTp = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked1, setIsChecked1] = useState(true);
  const [infoPop, setInfoPop] = useState(false);

  const toggleDropdown = () => setInfoPop(!infoPop);

  return (
    <>
      <div className="mt-[40px]">
        <div className="flex items-center gap-1 py-1  relative">
          <p className="text-[16px] font-bold text-[#FFFFFF]">Take Profits</p>
          <Info size={20} color="white" onClick={toggleDropdown} className="cursor-pointer" />
          {infoPop && (
            <div className="absolute right-10 top-3">
              <InfoCard />
            </div>
          )}
        </div>

        <div className="flex items-center gap-5 mt-[37px]">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-10">
                ROI%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <div>
              <input
                type="text"
                className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
              />
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm mr-1 font-medium rounded-l-[8px] ml-3 w-10">
                Amt.%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <div>
              <input
                type="text"
                className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-[20px]">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-10">
                ROI%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <div>
              <input
                type="text"
                className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
              />
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-12">
                Amt.%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <input
              type="text"
              className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 mt-[20px]">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-10">
                ROI%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <div>
              <input
                type="text"
                className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
              />
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-12">
                Amt.%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <input
              type="text"
              className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 py-1 mt-[37px] ">
          <p className="text-[16px] font-bold text-[#FFFFFF]">Stop Loss</p>
          <Info size={20} color="white" className="cursor-pointer" />
        </div>

        <div className="flex items-center gap-5 mt-[26px]">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-10">
                ROI%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <div>
              <input
                type="text"
                className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
              />
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-12">
                Amt.%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <input
              type="text"
              className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
            />
          </div>
        
        </div>
      </div>
    </>
  );
};

export default SettingTp;
