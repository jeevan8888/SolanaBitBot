import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const FilterForm = ({ onClose }) => {
    return (
        <div className="bg-[#171821] rounded-md  mx-auto p-5 w-[700px] border">
            <div className="flex justify-between items-center">
                <h1 className="text-white font-bold text-lg ">Customize Filter</h1>
                <X
                    size={20}
                    color="white"
                    className="mt-2"
                    alt="image"
                    onClick={onClose}
                />
            </div>

            <h1 className="text-white font-bold text-lg mt-5">Pair age:</h1>

            <div className="flex justify-around mx-auto gap-3 mt-2">
                <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between  w-1/2 rounded-[8px] items-center">
                    <span className="text-[#7A7A7A] text-base font-medium rounded-l-[8px] ml-3">
                        Min
                    </span>
                    <div className="h-6 w-[2px] bg-[#404040] ml-1"></div>

                    <input
                        type="text"
                        className="outline-none text-white bg-transparent border-none ml-1 outline-none hover:border-none py-1  "
                    />
                    <span className="text-[#7A7A7A] text-base font-medium bg-[#303030] p-2 rounded-r-[8px]">
                        hours
                    </span>
                </div>

                <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between  w-1/2 rounded-[8px] items-center">
                    <span className="text-[#7A7A7A] text-base font-medium rounded-l-[8px] ml-3">
                        Max
                    </span>
                    <div className="h-6 w-[2px] bg-[#404040] ml-1"></div>
                    <input
                        type="text"
                        className="outline-none text-white bg-transparent border-none hover:border-none py-1  "
                    />
                    <span className="text-[#7A7A7A] text-base font-medium bg-[#303030] p-2 rounded-r-[8px]">
                        hours
                    </span>
                </div>
            </div>

            <h1 className="text-white font-bold text-lg mt-5">Invested:</h1>

            <div className="flex justify-between gap-4 mt-2">
                <div className="bg-[#0F0F0F] border w-1/2 border-[#7A7A7A] flex  gap-1  rounded-[8px] items-center">
                    <div className="bg-[#303030] p-3 rounded-l-[8px]">
                        <Image src={"/sol.png"} width={20} height={20} alt="image" />
                    </div>
                    <div className="h-6 w-[2px] bg-[#404040] ml-1"></div>
                    <input
                        type="text"
                        className="outline-none text-white bg-transparent border-none hover:border-none  p-1.5"
                        placeholder="Min"
                    />
                </div>

                <div className="bg-[#0F0F0F] border border-[#7A7A7A] w-1/2 flex gap-1 rounded-[8px] items-center">
                    <div className="bg-[#303030] p-3 rounded-l-[8px]">
                        <Image src={"/sol.png"} width={20} height={20} alt="image" />
                    </div>
                    <div className="h-6 w-[2px] bg-[#404040] ml-1"></div>
                    <input
                        type="text"
                        className="outline-none text-white bg-transparent p-1.5 border-none hover:border-none"
                        placeholder="Min"
                    />
                </div>
            </div>

            <h1 className="text-white font-bold text-lg mt-5">ROI:</h1>

            <div className="flex justify-around mx-auto gap-3 mt-2">
                <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between  w-1/2 rounded-[8px] items-center">
                    <span className="text-[#7A7A7A] text-base font-medium rounded-l-[8px] ml-3">
                        Min
                    </span>
                    <div className="h-6 w-[2px] bg-[#404040] ml-1"></div>
                    <input
                        type="text"
                        className="outline-none text-white bg-transparent border-none hover:border-none py-1  "
                    />
                    <span className="text-[#7A7A7A] text-base font-medium bg-[#303030] p-2 rounded-r-[8px]">
                        %
                    </span>
                </div>

                <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between  w-1/2 rounded-[8px] items-center">
                    <span className="text-[#7A7A7A] text-base font-medium rounded-l-[8px] ml-3">
                        Max
                    </span>
                    <div className="h-6 w-[2px] bg-[#404040] ml-1"></div>
                    <input
                        type="text"
                        className="outline-none text-white bg-transparent border-none hover:border-none py-1  "
                    />
                    <span className="text-[#7A7A7A] text-base font-medium bg-[#303030] p-2 rounded-r-[8px]">
                        %
                    </span>
                </div>
            </div>

            <h1 className="text-white font-bold text-lg mt-5">24 Hours change:</h1>

            <div className="flex justify-around mx-auto gap-3 mt-2">
                <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between  w-1/2 rounded-[8px] items-center">
                    <span className="text-[#7A7A7A] text-base font-medium rounded-l-[8px] ml-3">
                        Min
                    </span>
                    <div className="h-6 w-[2px] bg-[#404040] ml-1"></div>
                    <input
                        type="text"
                        className=" text-white bg-transparent border-none hover:border-none py-1 outline-none "
                    />
                    <span className="text-[#7A7A7A] text-base font-medium bg-[#303030] p-2 rounded-r-[8px]">
                        %
                    </span>
                </div>

                <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between  w-1/2 rounded-[8px] items-center">
                    <span className="text-[#7A7A7A] text-base font-medium rounded-l-[8px] ml-3">
                        Max
                    </span>
                    <div className="h-6 w-[2px] bg-[#404040] ml-1"></div>
                    <input
                        type="text"
                        className=" text-white outline-none bg-transparent border-none hover:border-none py-1  "
                    />
                    <span className="text-[#7A7A7A] text-base font-medium bg-[#303030] p-2 rounded-r-[8px]">
                        %
                    </span>
                </div>
            </div>

            <div className="flex gap-5 mt-14">
                <button className="bg-[#202020] hover:border hover:border-[#17C654] hover:bg-[#17C654]  border rounded-[7px] px-6 py-3 text-white text-base font-bold">
                    Reset
                </button>
                <button className="border-[#17C654] bg-[#17C654] border rounded-[7px] px-6 py-3 text-white text-base font-bold">
                    Botly
                </button>
            </div>
        </div>
    );
};

export default FilterForm;
