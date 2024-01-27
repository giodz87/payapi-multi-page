export default function WorkWith() {
  return (
    <article className="flex flex-col items-center justify-between gap-11 w-full px-5 bg-[#3c96e0] pt-20">
      <section className="flex flex-col items-center justify-center w-full gap-11 md:flex-row">
        <div className=" flex flex-row w-full items-center justify-between z-20 px-2 md:flex-col gap-12 ">
          <img src="./assets/shared/desktop/tesla.svg" alt="" />
          <img src="./assets/shared/desktop/microsoft.svg" alt="" />
        </div>
        <div className=" flex flex-row w-full items-center justify-between px-2 md:flex-col gap-12">
          <img src="./assets/shared/desktop/hewlett-packard.svg" alt="" />
          <img src="./assets/shared/desktop/oracle.svg" alt="" />
        </div>
        <div className=" flex flex-row w-full items-center justify-between px-2 md:flex-col gap-12">
          <img src="./assets/shared/desktop/google.svg" alt="" />
          <img src="./assets/shared/desktop/nvidia.svg" alt="" />
        </div>
      </section>
      <div className="flex flex-col items-center justify-center text-center  gap-4 pt-4 md:gap-6">
        <h1 className="text-[#FBFCFE] text-[32px] font-normal leading-9 tracking-[-0.246px] md:text-[48px]">
          Who we work with
        </h1>
        <p className="text-[15px] font-normal leading-7 opacity-70 text-[#FBFCFE] md:w-[456px]">
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.{" "}
        </p>
      </div>
      <button className="text-[#FBFCFE] w-[129px] h-[48px] border border-white rounded-3xl mb-20">
        About Us
      </button>
    </article>
  );
}
