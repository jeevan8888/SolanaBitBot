import { Info, Lock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const SettingBuy = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked1, setIsChecked1] = useState(true);

  return (
    <>
      <div className="mt-[32px]">
        <div className="flex items-center gap-1 py-1">
          <p className="text-[16px] font-bold text-[#FFFFFF]">
            Investment Per Asset
          </p>
          <Info size={20} color="white" className="cursor-pointer"/>
        </div>

        <div className="bg-[#0F0F0F] border  border-[#7A7A7A] flex w-[150px] h-[40px]  gap-1  rounded-[8px] items-center mt-[16px]">
          <div className="flex items-center gap-1 px-2 w-fit">
            <Image src={"/sol.png"} width={25} height={25} alt="image" />
          </div>
          <div className="h-6 w-[2px] bg-[#404040]"></div>

          <div className="w-full px-1">
            <input
              type="text"
              
              className=" text-white text-[14px] bg-transparent border-none outline-none hover:border-none  p-1.5 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 py-1 mt-[32px]">
          <p className="text-[16px] font-bold text-[#FFFFFF]">Pooled SOL</p>
          <Info size={20} color="white" />
        </div>

        <div className="flex items-center gap-5 mt-[16px]">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3">
                Min
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <input
              type="text"
              className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
            />
          </div>
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3">
                Max
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <input
              type="text"
              className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 py-1 mt-[32px]">
          <p className="text-[16px] font-bold text-[#FFFFFF]">Pooled Token</p>
          <Info size={20} color="white" />
        </div>

        <div className="flex items-center gap-5 mt-[16px]">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-10">
                Min%
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
                Max%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <input
              type="text"
              className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 py-1 mt-[32px]">
          <p className="text-[16px] font-bold text-[#FFFFFF]">
            24 hours change %
          </p>
          <Info size={20} color="white" />
        </div>

        <div className="flex items-center gap-5 mt-[18px] pb-5">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-10">
                Min%
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
                Max%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <input
              type="text"
              className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
            />
          </div>
          <div className="w-[300px] rounded-[16px] bg-[#1A1A1A] h-[55px] flex justify-evenly items-center">
            <div className="flex items-center gap-1">
              <Info size={20} color="white" />

              <p className="text-[12px] font-bold text-[#FFFFFF]">
                LP Burned Audit
              </p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked1}
                onChange={() => setIsChecked1(!isChecked1)}
              />
              <div
                className="relative w-6 h-2 bg-gray-200 rounded-[14px] peer dark:bg-gray-700 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:-top-0.5 after:start-[0px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all 
                     peer-checked:bg-[#28DEAF]"
              ></div>
            </label>
            <Image
              src={"/crown1.png"}
              alt=""
              width={15}
              height={15}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingBuy;
