export default function ReadyToStart() {
  return (
    <article className="px-5 flex flex-col items-center justify-between  pb-20  gap-4 w-[375px] md:w-full xl:flex-row xl:w-[1180px]">
      <h2 className="text-[#36536B] text-[32px] font-normal leading-9 tracking-[-0.246px] md:text-[48px]">
        Ready to start?
      </h2>
      <div className="relative flex flex-col gap-4 ">
        <input
          className="mt-4 w-full  h-12 rounded-3xl px-7 md:w-[445px]"
          placeholder="Enter email address"
          type="text"
        />
        <button className=" w-full h-12 bg-[#BA4270] rounded-3xl text-[#fff] text-[15px] font-bold tracking-[-0.115px] md:w-[173px] md:absolute md:top-4 md:right-0">
          Schedule a Demo
        </button>
      </div>
    </article>
  );
}
