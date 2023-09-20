import React, { useState } from "react";
import BottomArrow from "../public/BottomArrow.png";
import PieChart from "../public/PieChart.png";
import Image from "next/image";
import AddProfile from "../public/AddProfile.png";
import whatsapp from "../public/whatsapp.png";
import EmailLogo from "../public/EmailLogo.png";
import instagramLogo from "../public/instagramLogo.png";
import ytLogo from "../public/ytLogo.png";

const BottomCards = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ytLink, setYtLiink] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [profilename, setProfileName] = useState("");
  const [profileemail, setProfileEmail] = useState("");
  const [profilephone, setProfilePhone] = useState("");
  const [profileytLink, setProfileYtLiink] = useState("");
  const [profileinstaLink, setProfileInstaLink] = useState("");
  const [basic, setBasic] = useState(false);
  const [social, setSocial] = useState(true);
  const [details, setDetails] = useState(false);
  // const profileDetail = [
  //   {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     ytLink: "",
  //     instaLink: "",
  //   },
  // ];

  const handleModal = () => {
    const showModal = document.querySelector(".show-modal");
    showModal.classList.remove("hidden");
  };
  const hideModal = () => {
    const showModal = document.querySelector(".show-modal");
    showModal.classList.add("hidden");
  };

  const handleNext = () => {
    //next
    const nextBtn = document.querySelector("#nextBtn");
    nextBtn.classList.add("hidden");

    //back
    const back = document.querySelector("#back");
    back.classList.remove("hidden");

    //submit
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.classList.remove("hidden");

    setSocial(false);
    setBasic(true);
    const borderBasic = document.querySelector("#basic");
    const borderSocial = document.querySelector("#social");

    borderBasic.classList.remove("border-b-[#3F84F8]");
    borderBasic.classList.add("border-b-gray");

    borderSocial.classList.remove("border-b-gray");
    borderSocial.classList.add("border-b-[#3F84F8]");
  };
  const handleBack = () => {
    //next
    const nextBtn = document.querySelector("#nextBtn");
    nextBtn.classList.remove("hidden");

    //back
    const back = document.querySelector("#back");
    back.classList.add("hidden");

    //submit
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.classList.add("hidden");

    setSocial(true);
    setBasic(false);

    const borderBasic = document.querySelector("#basic");
    const borderSocial = document.querySelector("#social");

    borderBasic.classList.remove("border-b-gray");
    borderBasic.classList.add("border-b-[#3F84F8]");

    borderSocial.classList.remove("border-b-[#3F84F8]");
    borderSocial.classList.add("border-b-gray");
  };

  const handleSubmit = () => {
    // profileDetail.forEach((item) => {
    //   item.name = name;
    //   item.email = email;
    //   item.phone = phone;
    //   item.ytLink = ytLink;
    //   item.instaLink = instaLink;
    // });
    setProfileEmail(email);
    setProfileName(name);
    setProfilePhone(phone);
    setProfileInstaLink(instaLink);
    setProfileYtLiink(ytLink);
    setName("");
    setEmail("");
    setPhone("");
    setInstaLink("");
    setYtLiink("");
    setDetails(true);

    setBasic(false);
    setSocial(true);
    //next
    const nextBtn = document.querySelector("#nextBtn");
    nextBtn.classList.remove("hidden");

    //back
    const back = document.querySelector("#back");
    back.classList.add("hidden");

    //submit
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.classList.add("hidden");

    const borderBasic = document.querySelector("#basic");
    const borderSocial = document.querySelector("#social");

    borderBasic.classList.remove("border-b-gray");
    borderBasic.classList.add("border-b-[#3F84F8]");

    borderSocial.classList.remove("border-b-[#3F84F8]");
    borderSocial.classList.add("border-b-gray");

    const showModal = document.querySelector(".show-modal");
    showModal.classList.add("hidden");
  };
  return (
    <>
      {/* MODAL */}
      <div className="show-modal rounder-[10px] h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-30">
        <div
          id="MODAL"
          className="bg-white rounded shadow-lg w-[544px] h-[500px]"
        >
          <div className="border-b py-2 px-4 flex justify-between items-center h-[66px]">
            <h2>ADD NEW PROFILE</h2>
            <button onClick={hideModal}>&times;</button>
          </div>
          <div className="h-[377px]">
            <div
              id="ModalPRO"
              className="flex justify-around border-b-blue mx-auto w-[480px] "
            >
              <h2
                id="basic"
                className="border-b-4 border-b-[#3F84F8] w-1/2 text-center"
              >
                BASIC
              </h2>
              <h2
                id="social"
                className="border-b-4 border-b-gray w-1/2 text-center"
              >
                SOCIAL
              </h2>
            </div>
            {social && (
              <div className="flex flex-col justify-between p-4 ">
                <div className="flex flex-col mb-3">
                  <label htmlFor="Name">Enter Name</label>
                  <input
                    type="text"
                    id="Name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Eg. John Doe"
                    className="py-[16px] px-[12px]"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="Email">Enter Email</label>
                  <input
                    type="email"
                    id="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Eg. John@xyz.com"
                    className="py-[16px] px-[12px]"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="Phone">Enter Phone</label>
                  <input
                    type="number"
                    id="Phone"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Eg.  9123456789"
                    className="py-[16px] px-[12px]"
                  />
                </div>
              </div>
            )}
            {basic && (
              <div className="flex flex-col justify-between p-4 ">
                <div className="flex flex-col mb-3">
                  <label htmlFor="instaLink">Instagram Link (Optional)</label>
                  <input
                    type="text"
                    id="instaLink"
                    value={instaLink}
                    onChange={(e) => setInstaLink(e.target.value)}
                    placeholder="Eg. ..instagram.com/username"
                    className="py-[16px] px-[12px]"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="ytLink">Youtube Link (Optional)</label>
                  <input
                    type="text"
                    id="ytLink"
                    value={ytLink}
                    onChange={(e) => setYtLiink(e.target.value)}
                    placeholder="Eg. ..youtebe/username"
                    className="py-[16px] px-[12px]"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mr-4 h-[88px] flex justify-end">
            <button
              id="back"
              className="p-3 w-[64px] h-[40px] rounded-[8px] hidden"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              id="nextBtn"
              className="p-3 bg-[#3E84F8] w-fit-content h-[40px] rounded-[8px]"
              onClick={handleNext}
            >
              Next
            </button>
            <button
              type="submit"
              id="submitBtn"
              className="p-3 bg-[#3E84F8] w-fit-content h-[40px] rounded-[8px] hidden"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div id="bottomCardDiv">
        <div className="p-5 rounded-[10px] bg-white">
          <div className="flex justify-between items-center">
            <div className="flex-[7]">
              <h3 className="font-bold text-lg">Top Products</h3>
            </div>
            <div className="flex-[8] text-sm flex justify-end items-center gap-2">
              <p>May - June 2021</p>
              <Image src={BottomArrow} width={8} height={5} alt="Date" />
            </div>
          </div>
          <div className="flex justify-around mt-7">
            <div>
              <Image src={PieChart} width={134} height={134} alt="Pie" />
            </div>
            <div className="text-left">
              <div className="mb-3">
                <div className="flex items-center text-left">
                  <div className=" w-3 h-3 bg-[#98D89E] rounded-[50%] mr-2"></div>
                  <h4 className="font-bold">Basic Tees</h4>
                </div>
                <p className="text-[#858585] ml-5 text-sm">55%</p>
              </div>
              <div className="mb-3">
                <div className="flex items-center text-left">
                  <div className=" w-3 h-3 bg-[#F6DC7D] rounded-[50%] mr-2"></div>
                  <h4 className="font-bold">Custom Short Pants</h4>
                </div>
                <p className="text-[#858585] ml-5 text-sm">31%</p>
              </div>
              <div className="mb-3">
                <div className="flex items-center text-left">
                  <div className=" w-3 h-3 bg-[#EE8484] rounded-[50%] mr-2"></div>
                  <h4 className="font-bold">Super Hoodies</h4>
                </div>
                <p className="text-[#858585] ml-5 text-sm">14%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-[10px] bg-white flex justify-center items-center modal">
          {!details && (
            <Image
              src={AddProfile}
              alt="Add Profile Button"
              className="cursor-pointer"
              onClick={handleModal}
            />
          )}
          {details && (
            <div
              className="flex flex-col justify-around h-full w-[100%]"
              id="profileCard"
            >
              <div className="text-left ml-4">
                <h3 className="font-bold text-lg">{profilename}</h3>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center p-2 card-id">
                  <div className="flex justify-start">
                    <Image
                      src={whatsapp}
                      alt="Phone"
                      width={36}
                      height={36}
                      className="p-2 rounded-[20px] cursor-pointer hover:scale-125 transition duration-500 bg-[#E9F9EB]"
                    />
                    <p>{profilephone}</p>
                  </div>
                  <div className="flex justify-start">
                    <Image
                      src={instagramLogo}
                      alt="Instagram"
                      width={36}
                      height={36}
                      className="p-2 rounded-[20px] cursor-pointer hover:scale-125 transition duration-500 bg-[#FFE9EC]"
                    />
                    <span>{profileinstaLink}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 card-id">
                  <div className="flex justify-start">
                    <Image
                      src={EmailLogo}
                      alt="Email"
                      width={36}
                      height={36}
                      className="p-2 rounded-[20px] cursor-pointer hover:scale-125 transition duration-500 bg-[#EBE6F9]"
                    />
                    <span>{profileemail}</span>
                  </div>
                  <div className="flex justify-start">
                    <Image
                      src={ytLogo}
                      alt="Youtube"
                      width={36}
                      height={36}
                      className="p-2 rounded-[20px] cursor-pointer hover:scale-125 transition duration-500 bg-[#FFE9E9]"
                    />
                    <span>{profileytLink}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BottomCards;
