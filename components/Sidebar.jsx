import React from "react";
import dashboard from "../public/dashboard.png";
import transactionIcon from "../public/transaction_icon.png";
import settingsIcon from "../public/setting_icon.png";
import userIcon from "../public/user_icon.png";
import scheduleIcon from "../public/schedule_icon.png";
import Image from "next/image";

const Sidebar = () => {
  const styles = {
    background: "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)",
    border: "2px solid linear-gradient(180deg, #4285F4 0%, #286DE0 100%) ",
  };
  return (
    <div
      className="h-[96vh] fixed rounded-[30px] p-[1%] bg-black text-white w-[280px]"
      style={styles}
    >
      <h1 className="mt-5 text-4xl ml-5 font-bold ">Board.</h1>
      <div className="mt-12 ml-5 font-Montserrat">
        <div className="flex items-center my-10 mx-0 cursor-pointer hover:scale-110 transition duration-500">
          <Image
            src={dashboard}
            width={20}
            height={20}
            className="mr-4"
            alt="Dashboard"
          />
          <p className="text-lg">Dashboard</p>
        </div>
        <div className="flex items-center my-10 mx-0 cursor-pointer hover:scale-110 transition duration-500">
          <Image
            src={transactionIcon}
            width={20}
            height={23}
            className="mr-4"
            alt="transaction"
          />
          <p className="text-lg">Transactions</p>
        </div>
        <div className="flex items-center my-10 mx-0 cursor-pointer hover:scale-110 transition duration-500">
          <Image
            src={scheduleIcon}
            width={20}
            height={20}
            className="mr-4"
            alt="Schedule"
          />
          <p className="text-lg">Schedules</p>
        </div>
        <div className="flex items-center my-10 mx-0 cursor-pointer hover:scale-110 transition duration-500">
          <Image
            src={userIcon}
            width={20}
            height={20}
            className="mr-4"
            alt="user"
          />
          <p className="text-lg">Users</p>
        </div>
        <div className="flex items-center my-10 mx-0 cursor-pointer hover:scale-110 transition duration-500">
          <Image
            src={settingsIcon}
            width={19}
            height={20}
            className="mr-4"
            alt="Settings"
          />
          <p className="text-lg">Settings</p>
        </div>
      </div>
      <div className="absolute bottom-9 ml-5 text-sm">
        <p className="my-3 cursor-pointer hover:scale-110 transition">Help</p>
        <p className="my-3 cursor-pointer hover:scale-110 transition">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
