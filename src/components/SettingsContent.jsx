import { Info, Lock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SettingPendingPool from "./SettingPendingPool";
import SettingBuy from "./SettingBuy";
import SettingTp from "./SettingTp";
import SettingFees from "./SettingFees";
import SettingGeneral from "./SettingGeneral";
import Questions from "./Questions";
import BuyText from "./BuyText";
import SlText from "./SlText";
import FeesText from "./FeesText";
import GeneralText from "./GeneralText";

const SettingsContent = () => {
  const [dynamicCategory, setDynamicCategory] = useState("Pending");
  return (
    <>
      <div className="h-[350px] flex custom-scrollbar">
        <div className="w-full h-[350px]">
          {/* Dynamic Navbar */}
          <div className="flex items-center gap-8">
            <div
              className={`flex items-center gap-1 cursor-pointer ${
                dynamicCategory === "Pending" && "border-b-2 border-white"
              } py-1`}
              onClick={() => setDynamicCategory("Pending")}
            >
              <p
                className={`text-[16px] font-bold ${
                  dynamicCategory === "Pending"
                    ? "text-[#FFFFFF]"
                    : "text-[#858686]"
                }`}
              >
                Pending Pool
              </p>
              <Info size={20} color="white" />
            </div>
            <div
              className={`flex items-center gap-1 cursor-pointer ${
                dynamicCategory === "Buy" && "border-b-2 border-white"
              } py-1`}
              onClick={() => setDynamicCategory("Buy")}
            >
              <p
                className={`text-[16px] font-bold ${
                  dynamicCategory === "Buy"
                    ? "text-[#FFFFFF]"
                    : "text-[#858686]"
                }`}
              >
                Auto-Buy
              </p>
              <Info size={20} color="white" />
            </div>
            <div
              className={`flex items-center gap-1 cursor-pointer ${
                dynamicCategory === "Sl/Tp" && "border-b-2 border-white"
              } py-1`}
              onClick={() => setDynamicCategory("Sl/Tp")}
            >
              <p
                className={`text-[16px] font-bold ${
                  dynamicCategory === "Sl/Tp"
                    ? "text-[#FFFFFF]"
                    : "text-[#858686]"
                }`}
              >
                SL/TP
              </p>
              <Info size={20} color="white" />
            </div>
            <div
              className={`flex items-center gap-1 cursor-pointer ${
                dynamicCategory === "Fees" && "border-b-2 border-white"
              } py-1`}
              onClick={() => setDynamicCategory("Fees")}
            >
              <p
                className={`text-[16px] font-bold ${
                  dynamicCategory === "Fees"
                    ? "text-[#FFFFFF]"
                    : "text-[#858686]"
                }`}
              >
                Fees
              </p>
              <Info size={20} color="white" />
            </div>
            <div
              className={`flex items-center gap-1 cursor-pointer ${
                dynamicCategory === "General Setting" &&
                "border-b-2 border-white"
              } py-1`}
              onClick={() => setDynamicCategory("General Setting")}
            >
              <p
                className={`text-[16px] font-bold ${
                  dynamicCategory === "General Setting"
                    ? "text-[#FFFFFF]"
                    : "text-[#858686]"
                }`}
              >
                General Settings
              </p>
            </div>
          </div>

          {/* Content Section */}
          {dynamicCategory === "Pending" && <SettingPendingPool />}
          {dynamicCategory === "Buy" && <SettingBuy />}
          {dynamicCategory === "Sl/Tp" && <SettingTp />}
          {dynamicCategory === "Fees" && <SettingFees />}
          {dynamicCategory === "General Setting" && <SettingGeneral />}
        </div>

        {/* Second Section */}
        <div className="w-full h-[350px] px-5">
          {dynamicCategory === "Pending" && <Questions />}
          {dynamicCategory === "Buy" && <BuyText />}
          {dynamicCategory === "Sl/Tp" && <SlText />}
          {dynamicCategory === "Fees" && <FeesText />}
          {dynamicCategory === "General Setting" && <GeneralText />}
        </div>
      </div>
    </>
  );
};

export default SettingsContent;
