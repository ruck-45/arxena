// Dependencies
import { useLocation } from "react-router-dom";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

// Local Files
import SideBar from "./subcomponents/SideBar";
import Logo from "../../globalAssets/logo.svg";
import SignUp from "./subcomponents/SignUp";
import Login from "./subcomponents/Login";

const Auth = () => {
  const location = useLocation();

  const mode = location.state.mode;

  return (
    <div className="flex min-h-[100vh]">
      <div className="flex flex-col items-center w-[100%] md:w-[70%] pb-[2rem]">
        <div className="w-[100%] p-[2rem]">
          <Link to="../Home">
            <Image width={150} alt="Logo" src={Logo} />
          </Link>
        </div>
        {mode === "login"? <Login/> : <SignUp/>}
      </div>
      <SideBar className="hidden md:flex" />
    </div>
  );
};

export default Auth;
