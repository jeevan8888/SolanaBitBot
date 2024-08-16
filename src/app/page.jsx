"use client";
import ClosedPoolTable from "@/components/ClosedPoolTable";
import FilterForm from "@/components/FilterForm";
import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import OpeningPoolTable from "@/components/OpeningPoolTable";
import PendingPoolTable from "@/components/PendingPoolTable";
import Questions from "@/components/Questions";
import SettingsContent from "@/components/SettingsContent";
import TermsCondition from "@/components/TermsCondition";
import { Copy, Settings, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head';
import WalletConnectComponent from "@/components/WalletConnectComponent";
import {ethers} from "ethers";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [tab, setTab] = useState("Pending Pool");
  const [isOpen, setIsOpen] = useState(false);
  const [profilePopup, setProfilePopup] = useState(false);

  const [IsTerm , setIsTerm] = useState(false);

  const handleterms = ()=>{
    setIsTerm(true);
  }

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const CustomCloseButton = ({ closeToast }) => (
    <X size={12} color="white" className="text-white " onClick={closeToast} />
  );

  const notify = () => {
    toast.success(
      <div className="flex items-center ">
        <div className="ml-3">
          <h1 className="text-base font-bold text-white">
            Transaction Completed
          </h1>
          <div className="w-full flex items-center justify-between gap-12">
            <p className="text-xs font-normal text-white">
              Sold 1,000,000 PEPE For 0.9 SOL{" "}
            </p>
            <p className="text-xs font-normal text-[#28DEAF] ml-3">View transaction.</p>
          </div>
        </div>
      </div>,
      {
        position: "top-right",
        padding: "0px",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: <CustomCloseButton />,
        style: {
          backgroundColor: "#1a202c",
          width: "450px",
          right: "200px",
          top: "70px",
        },
      }
    );
  };
  const Error = () => {
    toast.error(
      <div className="flex items-center ">
        <div className="ml-3">
          <h1 className="text-base font-bold text-white">
            Transaction Failed
          </h1>
          <div className="w-full flex items-center justify-between gap-28">
            <p className="text-xs font-normal text-white">
              Insufficient funds
            </p>
          </div>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: <CustomCloseButton />,
        style: {
          backgroundColor: "#1a202c",
          width: "300px",
          right: "0px",
          top: "70px",
        },
      }
    );
  };

  return (
    <div className="bg-[#121212]  relative flex flex-col justify-start h-screen overflow-auto pb-9">
      <ToastContainer />
      <Navbar tab={tab} setTab={setTab} />
      {tab === "Settings" ? (
        <Image
          src={"/settingbg.png"}
          alt=""
          width={200}
          height={200}
          className="w-[620px] h-[650px] absolute right-60 top-12"
        />
      ) : (
        <Image
          src={"/eclipse.png"}
          alt=""
          width={200}
          height={200}
          className="w-[520px] h-[550px] absolute -left-10 top-12"
        />
      )}

      {tab === "Pending Pool" && (
        <>
          <div className="mx-8 mt-10">
            <h1
              className="text-lg font-bold text-white uppercase"
              onClick={() => setProfilePopup(true)}
            >
              PENDING POOL
            </h1>

            <p className="text-sm font-bold text-white mt-2">
              Presenting your current Pending Pool, updated in real-time
            </p>

            <div className="flex justify-between items-center mt-[24px]">
              <div className="relative">
                <div
                  className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5 cursor-pointer"
                  onClick={handleButtonClick}
                >
                  <Image
                    src="/filter.svg"
                    alt="Filter"
                    width={16}
                    height={16}
                  />
                  <h1 className="text-white text-base font-bold">Filter</h1>
                  <Image
                    src="/dropdown.svg"
                    alt="Dropdown"
                    width={10}
                    height={10}
                    className="mt-1"
                  />
                </div>

                {isOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                    <FilterForm onClose={handleClose} />
                  </div>
                )}
              </div>

              {/*this button is for checking terms and condition toast */}
              <div
                className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1"
                onClick={handleterms}
              >
                <h1 className="text-white text-base font-bold">Terms&cond.</h1>
              </div>

              {IsTerm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                <TermsCondition />
              </div>
              )}

              {/*this button is check for error toast */}

              <div
                className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1"
                onClick={Error}
              >
                <h1 className="text-white text-base font-bold">Error toast</h1>
              </div>


              <div
                className="border rounded-[48px] cursor-pointer flex justify-between gap-2 items-center px-3 py-1.5"
                onClick={notify}
              >
                <Image src={"/setting.svg"} alt="" width={24} height={24} />
                <h1 className="text-white text-base font-bold">Settings</h1>
              </div>
            </div>
          </div>
        </>
      )}

      {tab === "Open positions" && (
        <>
          <div className="mx-8 mt-10">
            <h1 className="text-lg font-bold text-white uppercase">
              Open positions
            </h1>

            <p className="text-sm font-bold text-white mt-2">
              Presenting your current open positions, updated in real-time
            </p>

            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div
                    className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5 cursor-pointer"
                    onClick={handleButtonClick}
                  >
                    <Image
                      src="/filter.svg"
                      alt="Filter"
                      width={16}
                      height={16}
                    />
                    <h1 className="text-white text-base font-bold">Filter</h1>
                    <Image
                      src="/dropdown.svg"
                      alt="Dropdown"
                      width={10}
                      height={10}
                      className="mt-1"
                    />
                  </div>

                  {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                      <FilterForm onClose={handleClose} />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 text-[#FFFFFF91]">
                  <label className="inline-flex items-center cursor-pointer pl-2">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                    <div
                      className="relative w-9 h-3 bg-gray-200 rounded-[14px] peer dark:bg-gray-700 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:-top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all 
                     peer-checked:bg-[#28DEAF]"
                    ></div>
                    <span className="text-sm font-medium text-grfay-900 dark:text-gray-300 pl-3">
                      Show hidden
                    </span>
                  </label>
                  <p className="text-[16px] font-bold">Open position: 17</p>
                  <p className="text-[16px] font-bold">
                    Total Invested SOL: 14
                  </p>
                  <p className="text-[16px] font-bold">Total Current SOL: 11</p>
                </div>
              </div>

              <div
                className="border cursor-pointer rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5"
                onClick={notify}
              >
                <Image src={"/setting.svg"} alt="" width={24} height={24} />
                <h1 className="text-white text-base font-bold">Settings</h1>
              </div>
            </div>
          </div>
        </>
      )}

      {tab === "Closed positions" && (
        <>
          <div className="mx-8 mt-10">
            <h1 className="text-lg font-bold text-white uppercase">
              Closed positions
            </h1>
            <p className="text-sm font-bold text-white mt-2">
              Presenting your closed positions
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div
                    className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5 cursor-pointer"
                    onClick={handleButtonClick}
                  >
                    <Image
                      src="/filter.svg"
                      alt="Filter"
                      width={16}
                      height={16}
                    />
                    <h1 className="text-white text-base font-bold">Filter</h1>
                    <Image
                      src="/dropdown.svg"
                      alt="Dropdown"
                      width={10}
                      height={10}
                      className="mt-1"
                    />
                  </div>

                  {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                      <FilterForm onClose={handleClose} />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-5 ml-3">
                  <div className="flex items-center gap-2 text-[#FFFFFF91]">
                    <p className="text-[14px] font-bold">
                      Closed Positions PNL: 177 SOL
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="border rounded-[48px] flex cursor-pointer justify-between gap-2 items-center px-3 py-1.5"
                onClick={notify}
              >
                <Image src={"/setting.svg"} alt="" width={24} height={24} />
                <h1 className="text-white text-base font-bold">Settings</h1>
              </div>
            </div>
          </div>
        </>
      )}

      {tab === "Settings" && (
        <>
          <div className="mx-8 mt-10 relative">
            <h1 className="text-lg font-bold text-white uppercase">Settings</h1>
            <div className="flex items-center gap-5 mt-3">
              <h1 className="text-base font-bold text-white uppercase">
                Trading wallet
              </h1>
              <div className="bg-[#23242D] rounded-full p-2  flex items-center justify-between w-1/2 px-4">
                <span className="p-1 text-white ">
                  E1kNdiernvienwoeinvejrhbi2hyuybefvuerbvhufvm5Sfvnuinv
                </span>
                <Copy size={24} color="white" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </>
      )}

      {profilePopup && (
        <>
          <div
            className="fixed inset-0 bg-opacity-30 justify-center items-center backdrop-blur-sm bg-black flex w-full z-50"
            onClick={() => setProfilePopup(false)}
          >
            <TermsCondition onClick={() => setProfilePopup(false)} />
          </div>
        </>
      )}

      <div className="mt-5 p-5 z-40 relative h-full">
        {tab === "Pending Pool" && <PendingPoolTable />}
        {tab === "Open positions" && <OpeningPoolTable />}
        {tab === "Closed positions" && <ClosedPoolTable />}
        {tab === "Settings" && <SettingsContent />}
      </div>
      <div className="border cursor-pointer rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5">
        <Head>
          <meta name="description" content="Connect your wallet using WalletConnect in Next.js" className="mt-5 p-5 z-40 relative h-full"/>
        </Head>
        <main>
          <WalletConnectComponent />
        </main>
      </div>
    </div>
  );
}
