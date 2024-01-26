export default function ReadyToStart() {
  return (
    <article className="px-5 flex flex-col items-center justify-between w-full pb-20  gap-4">
      <h2 className="text-[#36536B] text-[32px] font-normal leading-9 tracking-[-0.246px]">
        Ready to start?
      </h2>
      <input
        className="mt-4 w-full  h-12 rounded-3xl px-7"
        placeholder="Enter email address"
        type="text"
      />
      <button className=" w-full h-12 bg-[#BA4270] rounded-3xl text-[#fff] text-[15px] font-bold tracking-[-0.115px]">
        Schedule a Demo
      </button>
    </article>
  );
}
