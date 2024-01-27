import useUserContext from "../context";

export default function Menu() {
  const context = useUserContext();
  const button = ["Pricing", "About", "Contact", "Schedule a Demo"];
  return (
    <div className=" flex flex-col items-center justify-center md:hidden">
      <div
        className={` ${
          context.menu ? "flex" : "hidden"
        }  w-[300px]  h-full  z-30 bg-[#1B262F] absolute top-0 right-0 flex flex-col items-center justify-start `}
      >
        <div className="flex flex-col items-center justify-between mt-28 gap-12">
          <hr className=" bg-[#FBFCFE;] w-[249px] h-[1px] opacity-15 " />
          <div className="flex flex-col items-center justify-center gap-8 text-[#fff]  opacity-70 text-[20px] font-bold  ">
            {button.map((item: string) => (
              <div
                key={item}
                className=" hover:w-[252px] hover:h-12 hover:bg-[#BA4270] flex items-center justify-center hover:rounded-3xl cursor-pointer hover:opacity-0]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
