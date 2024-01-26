import AccountInfo from "../Components/Home-components/AccountInfo";
import EasyToImplement from "../Components/Home-components/EasyToImplement";
import ReadyToStart from "../Components/Home-components/ReadyToStart";
import WorkWith from "../Components/Home-components/WorkWith";
import useUserContext from "../context";

export default function Home() {
  const context = useUserContext;
  //   const img = [
  //     "./assets/shared/desktop/tesla.svg",
  //     "./assets/shared/desktop/microsoft.svg",
  //     "./assets/shared/desktop/hewlett-packard.svg",
  //     "./assets/shared/desktop/oracle.svg",
  //   ];  vikitxo damapaze
  return (
    <article className="flex flex-col items-center justify-center overflow-hidden relative w-[375px] gap-20 ">
      <section>
        <div className=" absolute  top-[-270px] overflow-hidden    ">
          {/* <img
            className=" max-w-[780px] max-h-[780px]"
            src="./assets/shared/desktop/bg-pattern-circle.svg"
            alt=""
          /> */}
        </div>

        <div className="px-20 ml-2">
          {" "}
          <img
            src="./assets/home/desktop/illustration-phone-mockup.svg"
            alt=""
          />
        </div>
        <div className=" flex flex-col items-center justify-center px-5  gap-6 ">
          <h1 className="text-center text-[32px] font-normal leading-9  tracking-[-0.246px]">
            Start building with our APIs for absolutely free.
          </h1>
          <input
            className=" w-full h-12 bg-[#FBFCFE] rounded-3xl pl-7"
            type="text"
            placeholder="Enter email address"
          />
          <button className=" w-full h-12 bg-[#BA4270] rounded-3xl text-[#fff] text-[15px] font-bold tracking-[-0.115px]">
            Schedule a Demo
          </button>
          <p className=" text-[#6C8294] text-[15px] font-normal">
            Have any questions? <strong>Contact Us</strong>{" "}
          </p>
        </div>
      </section>
      <WorkWith />
      <EasyToImplement />
      <AccountInfo />
      <ReadyToStart />
    </article>
  );
}
