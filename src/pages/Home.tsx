import { Link } from "react-router-dom";
import AccountInfo from "../Components/Home-components/AccountInfo";
import EasyToImplement from "../Components/Home-components/EasyToImplement";

import WorkWith from "../Components/Home-components/WorkWith";

export default function Home() {
  //   const img = [
  //     "./assets/shared/desktop/tesla.svg",
  //     "./assets/shared/desktop/microsoft.svg",
  //     "./assets/shared/desktop/hewlett-packard.svg",
  //     "./assets/shared/desktop/oracle.svg",
  //   ];  vikitxo damapaze
  return (
    <article className="flex flex-col items-center justify-center overflow-hidden relative w-[375px] md:w-[768px] xl:w-[1280px]  gap-20 pb-20 ">
      <section>
        <div className=" absolute  top-[-270px] overflow-hidden    ">
          {/* <img
            className=" max-w-[780px] max-h-[780px]"
            src="./assets/shared/desktop/bg-pattern-circle.svg"
            alt=""
          /> */}
        </div>

        <div className="px-20 ml-2 md:px-5 flex items-center justify-center">
          {" "}
          <img
            src="./assets/home/desktop/illustration-phone-mockup.svg"
            alt=""
          />
        </div>
        <div className=" flex flex-col items-center justify-center px-5  gap-6 ">
          <h1 className="text-center text-[32px] font-normal leading-9  tracking-[-0.246px] md:text-[48px] md:leading-[56px] md:tracking-[-0.369px]">
            Start building with our APIs for absolutely free.
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 w-[327px] md:w-[445px] relative">
            <input
              className=" w-full h-12 bg-[#FBFCFE] rounded-3xl pl-7"
              type="text"
              placeholder="Enter email address"
            />
            <button className=" w-full h-12 bg-[#BA4270] rounded-3xl text-[#fff] text-[15px] font-bold tracking-[-0.115px] md:w-[173px] md:absolute md:top-0 md:right-0">
              Schedule a Demo
            </button>
          </div>
          <p className=" text-[#6C8294] text-[15px] font-normal">
            Have any questions? <strong>Contact Us</strong>{" "}
          </p>
        </div>
      </section>
      <WorkWith />
      <EasyToImplement />
      <AccountInfo />
    </article>
  );
}
