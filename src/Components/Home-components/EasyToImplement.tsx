export default function EasyToImplement() {
  return (
    <article className="flex flex-col items-center justify-between gap-7 px-5">
      <img
        src="./assets/home/desktop/illustration-easy-to-implement.svg"
        alt=""
      />
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-[36px] font-normal leading-9 tracking-[-0.227px] text-center text-[#36536B]">
          Easy to implement
        </h2>
        <p className="text-[15px] font-normal leading-7 text-[#6C8294] text-center">
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
      <img src="./assets/home/desktop/illustration-simple-ui.svg" alt="" />
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-[36px] font-normal leading-9 tracking-[-0.227px] text-center text-[#36536B]">
          Simple UI & UX
        </h2>
        <p className="text-[15px] font-normal leading-7 text-[#6C8294]  text-center">
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.{" "}
        </p>
      </div>
    </article>
  );
}
