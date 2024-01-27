import { useForm, SubmitHandler } from "react-hook-form";
export default function Contact() {
  type Inputs = {
    name: string;
    email: string;
    companyName: string;
    title: string;
    message: string;
  };

  const {
    register,
    handleSubmit,

    formState: {},
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <article className=" flex flex-col items-center justify-between px-5 text-center gap-10 py-12 w-[375px] md:w-[768px] xl:w-[1280px]  ">
      <div className=" xl:w-full items-start  text-start">
        <h1 className="text-[#36536B] pb-10  text-[32px] font-normal leading-9 tracking-[-0.246px] md:text-[48px] md:leading-[56px] md:tracking-[-0.369px] md:w-[473px] xl:w-[730px] xl:pl-[50px]">
          Submit a help request and we’ll get in touch shortly.
        </h1>
      </div>
      <div className="flex flex-col gap-20 items-center justify-between xl:flex-row xl:gap-[125px]">
        <form
          className="flex flex-col items-start justify-center gap-6 w-full md:w-[445px] "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="h-10 pl-5 pb-6 text-[#36536B] w-full  bg-[#edf3f8] border-b-[#36536B] border-b border-opacity-50 "
            {...register("name")}
            placeholder="Name"
          />
          <input
            className="h-10 pl-5 pb-6 text-[#36536B] w-full  bg-[#edf3f8] border-b-[#36536B] border-b border-opacity-50 "
            {...register("email")}
            placeholder="Email Address"
          />
          <input
            className="h-10 pl-5 pb-6 text-[#36536B] w-full  bg-[#edf3f8] border-b-[#36536B] border-b border-opacity-50 "
            {...register("companyName")}
            placeholder="Company Name"
          />
          <input
            className="h-10 pl-5 pb-6 text-[#36536B] w-full  bg-[#edf3f8] border-b-[#36536B] border-b border-opacity-50 "
            {...register("title")}
            placeholder="Title"
          />
          <input
            className="h-10 pl-5 pb-6 text-[#36536B] w-full  bg-[#edf3f8] border-b-[#36536B] border-b border-opacity-50 "
            {...register("message")}
            placeholder="Message"
          />
          <div className="flex flex-row items-center justify-center gap-5">
            <input className="w-6 h-6" type="checkbox" />
            <p className=" text-start text-[#36536B] text-[15px] font-normal leading-6 tracking-[-0.115px]">
              Stay up-to-date with company announcements and updates to our API
            </p>
          </div>
          <button className="text-[#36536B] text-[15px] font-bold tracking-[-0.115px] border  border-[#36536B] w-[152px] h-12 rounded-3xl">
            Submit
          </button>
        </form>
        <section className="flex flex-col items-center justify-between w-full px-3 gap-10 pb-10  xl:px-0 xl:items-start xl:w-[568px] ">
          <h2 className="text-[#36536B] text-[24px] font-normal left-8 tracking-[-0.185px] opacity-70 md:w-[445px]">
            Join the thousands of innovators already building with us
          </h2>
          <div className="flex flex-col items-center justify-between md:flex-row gap-10 w-full md:w-[568px]">
            <div className=" flex flex-row w-full items-center justify-between z-20 px-2 md:flex-col md:gap-14 ">
              <img src="./assets/shared/desktop/tesla.svg" alt="" />
              <img src="./assets/shared/desktop/microsoft.svg" alt="" />
            </div>
            <div className=" flex flex-row w-full items-center justify-between px-2 md:flex-col md:gap-14">
              <img src="./assets/shared/desktop/hewlett-packard.svg" alt="" />
              <img src="./assets/shared/desktop/oracle.svg" alt="" />
            </div>
            <div className=" flex flex-row w-full items-center justify-between px-2 md:flex-col md:gap-14">
              <img src="./assets/shared/desktop/google.svg" alt="" />
              <img src="./assets/shared/desktop/nvidia.svg" alt="" />
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
