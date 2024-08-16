import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const MemberShipCard = ({ onClick }) => {
  return (
    <>
      <div className="bg-black w-[495px] p-9 rounded-[8px] border border-[#515151]">
        <div className="flex items-center gap-2 justify-between">
          <span className="text-white text-2xl font-bold">
            Acquire membership Card
          </span>
          <X size={24} color="white" alt="image" onClick={onClick} />
        </div>
        <p className="text-base font-normal mt-5 text-white">
          When purchasing a membership card, please ensure you use the same
          wallet you use with the Bot. We will authenticate your NFT ownership
          upon login, so be sure to disconnect and log in again after buying the
          NFT. This card entitles you to 0% fees on the Bot.
        </p>
        <div
          className="px-20 relative rounded-[8px] border border-[#515151] w-[412px] h-[193px] mx-auto mt-7"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #B932F8 0%, #0F0F0F 100%)",
          }}
        >
          <div className="">
            <Image
              src={"/group.svg"}
              width={30}
              height={30}
              alt="image"
              className="ml-4 mt-3"
            />
            <Image
              src={"/group.svg"}
              width={52}
              height={52}
              alt="image"
              className="ml-52 mt-20"
            />
          </div>

          <div className="w-[215px] h-[131px] border-[#6A6A6A] rounded-[8px] absolute mx-5 top-8 backdrop-blur-sm border-[1px] ">
            <h1 className="text-[8px] font-normal text-white px-3.5 py-2">
              Membership card
            </h1>
            <Image
              src={"/logoS.svg"}
              width={18}
              height={18}
              alt="image"
              className="mt-16 mx-3.5"
            />
          </div>
        </div>

        <button className="text-white text-base font-bold bg-[#9913D9] flex items-center justify-center gap-2 rounded-[8px] py-3.5 mt-7 w-full">
          Buy at Magic Eden
          <Image src={"/magic.svg"} width={24} height={24} alt="image" />
        </button>
      </div>
    </>
  );
};

export default MemberShipCard;
