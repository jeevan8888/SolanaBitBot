import Image from "next/image";
import React from "react";

const ClosedPoolTable = () => {
  return (
    <>
      <div className="h-[360px] overflow-hidden overflow-y-scroll custom-scrollbar">
        <table className="w-[100%] border-collapse leading-7">
          <thead className="">
            <tr className="text-[#858686] leading-3 sm:text-[13px] xl:text-[14px] border-t-[0.5px] border-[#515151] bg-[#121212] h-[45px] text-[16px] font-bold">
              <th className=" text-left px-4 p-1">Pair</th>
              <th className=" text-left px-4 p-1">Created</th>
              <th className=" text-left px-4 p-1">Invested</th>
              <th className=" text-left px-4 p-1">Sold</th>
              <th className=" text-left px-4 p-1">ROI</th>
              <th className=" text-left px-4 p-1">PNL</th>
              <th className=" text-left px-4 p-1"></th>
            </tr>
          </thead>

          <tbody className="font-medium">
            <tr className="leading-6 cursor-pointer  bg-[#171717] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[12px]">WIF</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[12px]">21h</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[12px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px]">21</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px]">21</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[12px] text-[#17C654]">32.12%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px] text-[#17C654]">+0.2</p>
                </div>
              </td>

              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex justify-around items-center gap-3">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/opening.png"
                      alt=""
                      width={19}
                      height={19}
                      className="w-[19px] h-[19px]"
                    />
                    <Image
                      src="/eagle.png"
                      alt=""
                      width={19}
                      height={24}
                      className="w-[19px] h-[24px]"
                    />
                  </div>

                  <div>
                    <Image
                      src="/eyeclosed.png"
                      alt=""
                      width={19}
                      height={24}
                      className="w-[19px] h-[24px]"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="leading-6 cursor-pointer  bg-[#0F0F0F] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[12px]">WIF</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[12px]">30 mins</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[12px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px]">21</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px]">6.7</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[12px] text-red-500">32.12%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px] text-red-500">-0.2</p>
                </div>
              </td>

              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex justify-around items-center gap-3">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/opening.png"
                      alt=""
                      width={19}
                      height={19}
                      className="w-[19px] h-[19px]"
                    />
                    <Image
                      src="/eagle.png"
                      alt=""
                      width={19}
                      height={24}
                      className="w-[19px] h-[24px]"
                    />
                  </div>

                  <div>
                    <Image
                      src="/eyeclosed.png"
                      alt=""
                      width={19}
                      height={24}
                      className="w-[19px] h-[24px]"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="leading-6 cursor-pointer  bg-[#171717] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[12px]">WIF</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[12px]">16 days</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[12px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px]">21</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px]">6.7</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[12px] text-[#17C654]">32.12%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px] text-[#17C654]">+0.2</p>
                </div>
              </td>

              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex justify-around items-center gap-3">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/opening.png"
                      alt=""
                      width={19}
                      height={19}
                      className="w-[19px] h-[19px]"
                    />
                    <Image
                      src="/eagle.png"
                      alt=""
                      width={19}
                      height={24}
                      className="w-[19px] h-[24px]"
                    />
                  </div>

                  <div>
                    <Image
                      src="/eyeclosed.png"
                      alt=""
                      width={19}
                      height={24}
                      className="w-[19px] h-[24px]"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="leading-6 cursor-pointer  bg-[#0F0F0F] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[12px]">WIF</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[12px]">16 days</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[12px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px]">21</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px]">6.7</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[12px] text-red-500">32.12%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px] text-[#17C654]">+0.2</p>
                </div>
              </td>

              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex justify-around items-center gap-3">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/opening.png"
                      alt=""
                      width={19}
                      height={19}
                      className="w-[19px] h-[19px]"
                    />
                    <Image
                      src="/eagle.png"
                      alt=""
                      width={19}
                      height={24}
                      className="w-[19px] h-[24px]"
                    />
                  </div>

                  <div>
                    <Image
                      src="/eyeclosed.png"
                      alt=""
                      width={19}
                      height={24}
                      className="w-[19px] h-[24px]"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="leading-6 cursor-pointer  bg-[#171717] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[12px]">WIF</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[12px]">16 days</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[12px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px]">21</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px]">6.7</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[12px] text-[#17C654]">32.12%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[12px] text-red-500">-0.2</p>
                </div>
              </td>

              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex justify-around items-center gap-3">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/opening.png"
                      alt=""
                      width={19}
                      height={19}
                      className="w-[19px] h-[19px]"
                    />
                    <Image
                      src="/eagle.png"
                      alt=""
                      width={19}
                      height={24}
                      className="w-[19px] h-[24px]"
                    />
                  </div>

                  <div>
                    <Image
                      src="/eyeclosed.png"
                      alt=""
                      width={19}
                      height={24}
                      className="w-[19px] h-[24px]"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClosedPoolTable;
