import { Link } from "react-router-dom";
import useUserContext from "../context";

export default function Header() {
  const context = useUserContext();
  return (
    <header
      className="w-full flex items-center justify-center relative
     
    "
    >
      <div className=" w-[375px] flex flex-row items-center justify-between py-6  px-5 md:w-full xl:w-[1180px] ">
        <div className="flex w-[375px] flex-row items-center justify-between gap-16">
          {" "}
          <img src="./assets/shared/desktop/logo.svg" alt="" />
          <img
            className=" z-50 md:hidden"
            onClick={() => context.setMenu(!context.menu)}
            src={` ${
              context.menu
                ? " public/assets/shared/mobile/close.svg"
                : "./assets/shared/mobile/menu.svg"
            }  `}
            alt=""
          />
          <div className=" hidden md:flex text-[15px] font-bold text-[#36536B] opacity-70  flex-row items-center justify-between gap-10">
            <Link to={"/pricing"}>Pricing</Link>

            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
        <button className=" hidden md:flex items-center justify-center w-[173px] h-12 bg-[#BA4270] rounded-3xl text-[#fff] text-[15px] font-bold tracking-[-0.115px]">
          Schedule a Demo
        </button>
      </div>
    </header>
  );
}
