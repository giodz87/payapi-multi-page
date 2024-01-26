import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1B262F] flex flex-col items-center justify-between w-full py-10 gap-10">
      <img src="public/assets/shared/desktop/footerLogo.svg" alt="" />
      <div className=" text-[15px] font-bold text-[#FBFCFE] opacity-70 flex flex-col items-center justify-between gap-8">
        <div>Pricing</div>

        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-row items-center justify-between gap-7">
        <img src="./assets/shared/desktop/facebook.svg" alt="" />
        <img src="./assets/shared/desktop/twitter.svg" alt="" />
        <img src="./assets/shared/desktop/linkedin.svg" alt="" />
      </div>
    </footer>
  );
}
