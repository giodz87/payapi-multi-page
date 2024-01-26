export default function AccountInfo() {
  return (
    <article className="flex flex-col items-center justify-between gap-12 px-5">
      {" "}
      <section className="flex flex-col items-center justify-between gap-4">
        {" "}
        <img src="./assets/home/desktop/icon-banking-and-coverage.svg" alt="" />
        <h2 className="text-[18px] pt-4 font-bold leading-6 tracking-[-0.138px] text-[#36536B]">
          Personal Finances
        </h2>
        <p className="text-[15px] text-center font-normal leading-6 tracking-[-0.115px] text-[#6C8294]">
          {" "}
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.{" "}
        </p>
      </section>
      <section className="flex flex-col items-center justify-between gap-4">
        {" "}
        <img src="./assets/home/desktop/icon-banking-and-coverage.svg" alt="" />
        <h2 className="text-[18px] pt-4 font-bold leading-6 tracking-[-0.138px] text-[#36536B]">
          Banking & Coverage
        </h2>
        <p className="text-[15px] text-center font-normal leading-6 tracking-[-0.115px] text-[#6C8294]">
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.
        </p>
      </section>
      <section className="flex flex-col items-center justify-between gap-4">
        {" "}
        <img src="./assets/home/desktop/icon-banking-and-coverage.svg" alt="" />
        <h2 className="text-[18px]  pt-4 font-bold leading-6 tracking-[-0.138px] text-[#36536B]">
          Consumer Payments
        </h2>
        <p className="text-[15px] text-center font-normal leading-6 tracking-[-0.115px] text-[#6C8294]">
          It’s easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.
        </p>
      </section>
    </article>
  );
}
