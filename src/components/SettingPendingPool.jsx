import { Info, Lock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const SettingPendingPool = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);

  const [selected, setSelected] = useState("30 Min");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "1 Min", locked: false },
    { value: "5 Min", locked: false },
    { value: "15 Min", locked: false },
    { value: "30 Min", locked: false },
    { value: "1 H", locked: true },
    { value: "3 H", locked: true },
    { value: "12 H", locked: true },
    { value: "24 H", locked: true },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (!option.locked) {
      setSelected(option.value);
      setIsOpen(false);
    }
  };
  return (
    <>
      <div className="mt-[77px]">
        <div className="flex items-center gap-1 py-1">
          <p className="text-[16px] font-bold text-[#FFFFFF]">Pooled SOL</p>
          <Info size={20} color="white" />
        </div>

        <div className="flex items-center gap-5 mt-[18px]">
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

        <div className="flex items-center gap-5 mt-[18px]">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-12">
                Min %
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
                Max %
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
          <p className="text-[16px] font-bold text-[#FFFFFF]">Premium Audits</p>
          <Info size={20} color="white" />
        </div>

        <div className="grid grid-cols-2 gap-y-3 mt-[18px]">
          <div className="w-[300px] rounded-[16px] bg-[#1A1A1A] h-[55px] flex justify-evenly items-center">
            <div className="flex items-center gap-1">
              <Info size={20} color="white" />

              <p className="text-[12px] font-bold text-[#FFFFFF]">
                Can Freeze Audit
              </p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <div
                className="relative w-6 h-2 bg-gray-200 rounded-[14px] peer dark:bg-gray-700 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:-top-0.5 after:start-[0px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all 
                     peer-checked:bg-[#28DEAF]"
              ></div>
            </label>
          </div>
          <div className="w-[300px] rounded-[16px] bg-[#1A1A1A] h-[55px] flex justify-evenly items-center">
            <div className="flex items-center gap-1">
              <Info size={20} color="white" />

              <p className="text-[12px] font-bold text-[#FFFFFF]">
                Top 10 Holders Audit
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
          <div className="w-[300px] rounded-[16px] bg-[#1A1A1A] h-[55px] flex justify-evenly items-center">
            <div className="flex items-center gap-1">
              <Info size={20} color="white" />

              <p className="text-[12px] font-bold text-[#FFFFFF]">
                Can Mint Audit
              </p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked2}
                onChange={() => setIsChecked2(!isChecked2)}
              />
              <div
                className="relative w-6 h-2 bg-gray-200 rounded-[14px] peer dark:bg-gray-700 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:-top-0.5 after:start-[0px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all 
                     peer-checked:bg-[#28DEAF]"
              ></div>
            </label>
          </div>
          <div className="w-[300px] rounded-[16px] bg-[#1A1A1A] h-[55px] flex justify-around items-center mb-5">
            <div className="flex items-center gap-1">
              <Info size={20} color="white" />

              <p className="text-[12px] font-bold text-[#FFFFFF]">Watch For</p>
            </div>

            <div className="relative inline-block text-left ">
              <div>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="inline-flex justify-between w-full rounded-md shadow-sm px-4 py-2 bg-[#333333] text-sm font-medium text-[#C0C0C0] focus:outline-none"
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
                <div className="origin-top-right absolute right-0 mt-2 w-[100px] rounded-md shadow-lg bg-[#333333] text-[#C0C0C0] ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(option)}
                        className={`${
                          option.locked ? "text-[#C0C0C0]" : "text-[#C0C0C0]"
                        } group flex justify-between items-center px-4 py-2 text-sm w-full`}
                        disabled={option.locked}
                      >
                        {option.value}
                        {option.locked && (
                          <Image
                            src={"/crown1.png"}
                            alt=""
                            width={15}
                            height={15}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPendingPool;
