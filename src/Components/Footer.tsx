import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1B262F] w-full h-full flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center px-5 justify-between w-full py-10 gap-10 md:flex-row xl:w-[1180px]">
        <div className="flex flex-col gap-10 md:flex-row ">
          <img src="./assets/shared/desktop/footerLogo.svg" alt="" />
          <div className=" text-[15px] font-bold text-[#FBFCFE] opacity-70 flex flex-col items-center justify-between gap-8 md:flex-row">
            <Link to={"/pricing"}>Pricing</Link>

            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-7">
          <img src="./assets/shared/desktop/facebook.svg" alt="" />
          <img src="./assets/shared/desktop/twitter.svg" alt="" />
          <img src="./assets/shared/desktop/linkedin.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}
