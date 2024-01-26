import React from "react";

export default function PremiumPlan() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 mt-12 mb-8">
      <p
        className="text-[#BA4270] text-[24px] font-normal leading-8
tracking-[-0.185px]"
      >
        Premium Plan
      </p>
      <div className=" flex flex-col items-center justify-center gap-6">
        <p className="text-[#36536B] text-[56px] font-normal leading-[72px] tracking-[-0.431px]">
          $499.00
        </p>
        <hr className="w-[327px] text-[#36536B]" />
        <ul className="flex flex-col items-start justify-between gap-2 text-[16px] font-normal leading-7 text-[#36536B]">
          <li className=" flex flex-row items-center justify-between gap-6">
            <img
              src="./assets/shared/desktop/icon-check.svg"
              alt="Checkmark icon"
            />{" "}
            <p>Transactions</p>
          </li>
          <li className=" flex flex-row items-center justify-between gap-6">
            <img
              src="./assets/shared/desktop/icon-check.svg"
              alt="Checkmark icon"
            />{" "}
            <p>Auth</p>
          </li>
          <li className=" flex flex-row items-center justify-between gap-6">
            <img
              src="./assets/shared/desktop/icon-check.svg"
              alt="Checkmark icon"
            />{" "}
            <p>Identity</p>
          </li>
          <li className=" flex flex-row items-center justify-between gap-6">
            <img
              src="./assets/shared/desktop/icon-check.svg"
              alt="Checkmark icon"
            />{" "}
            <p>Investments</p>
          </li>
          <li className=" flex flex-row items-center justify-between gap-6">
            <img
              src="./assets/shared/desktop/icon-check.svg"
              alt="Checkmark icon"
            />{" "}
            <p>Assets</p>
          </li>
          <li className=" flex flex-row items-center justify-between gap-6">
            <img
              src="./assets/shared/desktop/icon-check.svg"
              alt="Checkmark icon"
            />{" "}
            <p>Liabilities</p>
          </li>
          <li className=" flex flex-row items-center justify-between gap-6">
            <img
              src="./assets/shared/desktop/icon-check.svg"
              alt="Checkmark icon"
            />{" "}
            <p>Income</p>
          </li>
        </ul>
        <hr className="w-[327px] text-[#36536B]" />
        <button className="text-[#36536B] text-[15px] font-bold tracking-[-0.115px] border  border-[#36536B] w-[168px] h-12 rounded-3xl">
          Request Access
        </button>
      </div>
    </section>
  );
}
