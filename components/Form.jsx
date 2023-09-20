import Image from "next/image";
import { signIn } from "next-auth/react";

const Form = () => {
  const styles = {
    background: "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)",
  };
  return (
    <div id="main-div" className="w-[386px]">
      <h1 className="text-4xl font-bold">Sign In</h1>
      <p className="font-bold">Sign in to your account</p>
      <div id="login-buttons" className="flex justify-between my-5 mx-0">
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-[180px] text-[#858585] text-[12px] font-Montserrat tracking-wider justify-center flex items-center px-2 py-2 font-bold bg-white border-none rounded-[10px] cursor-pointer hover:scale-110 transition duration-500"
        >
          <Image
            src="https://i.ibb.co/cgTYRDJ/google-logo-png-29546.png"
            alt="Google"
            width={24}
            height={24}
            style={{ marginRight: "4px" }}
          />
          <span>Sign in with Google</span>
        </button>
        <button className="w-[180px] text-[#858585] text-[12px] font-Montserrat tracking-wider justify-center flex items-center py-2 px-2 font-bold bg-white border-none rounded-md cursor-pointer hover:scale-110 transition duration-500">
          <Image
            src="https://i.ibb.co/ykw4txp/apple-1-3x.png"
            alt="Apple"
            width={18}
            height={20}
            style={{ marginRight: "8px" }}
          />
          <span className="mt-1">Sign in with Apple</span>
        </button>
      </div>
      <div
        id="form"
        className="bg-white flex flex-col py-6 px-8 rounded-2xl font-Lato"
      >
        <label htmlFor="">Email address</label>
        <input
          type="email"
          id="input"
          className="bg-[#f5f5f5] border-none p-3 rounded-[10px] my-[10px] mx-0 text-base font-normal"
        />

        <br />

        <label htmlFor="">Password</label>
        <input
          type="password"
          id="input"
          className="bg-[#f5f5f5] border-none p-3 rounded-[10px] my-[9px] mx-0 text-base font-normal"
        />

        <p className="text-[#346bd4] my-5 mx-0 cursor-pointer">
          Forgot Password?
        </p>

        <button
          onClick={() => alert("Please use Sign In with Google")}
          className="font-Montserrat text-white rounded-[10px] p-3 text-base font-bold border-none cursor-pointer hover:scale-105 transition duration-500"
          style={styles}
        >
          Sign In
        </button>
      </div>
      <p className="text-[#858585] text-center mt-5">
        Don&apos;t have an account?
        <span className="text-[#346bd4] my-5 mx-0 cursor-pointer">
          {" "}
          Register here
        </span>
      </p>
    </div>
  );
};

export default Form;
