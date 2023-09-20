import Image from "next/image";
import React, { useEffect, useState } from "react";
import bell from "../public/bell.png";
import user from "../public/user.png";
import logout from "../public/logout.png";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  const [userImage, setUserImage] = useState("");

  const handleLogout = () => {
    alert("Confirm before loggin out!");
    signOut("google", { callbackUrl: "/" });
  };

  useEffect(() => {
    if (session.status == "authenticated") {
      setUserImage(session.data.user.image);
    }
  }, [session.status]);

  return (
    <div className="flex justify-between mt-5">
      <div className="flex-[7]">
        <h1 className="font-bold text-3xl">Dashboard</h1>
      </div>
      <div className="flex-[5] flex justify-end gap-5 mr-10 items-center">
        <input
          type="text"
          placeholder="Search"
          id="search"
          className="p-2 rounded-[10px] border-none w-[260px]"
        />
        <Image
          src={bell}
          className="cursor-pointer hover:scale-125 transition duration-500"
          width={20}
          height={22}
          alt="Alert"
        />
        <Image
          src={logout}
          className="cursor-pointer hover:scale-125 transition duration-500"
          width={22}
          height={22}
          alt="Logout"
          onClick={() => handleLogout()}
        />
        <div id="user">
          <Image
            src={userImage ? userImage : user}
            width={40}
            height={40}
            className=" cursor-pointer rounded-[50%]"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
