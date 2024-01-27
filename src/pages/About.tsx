export default function About() {
  return (
    <article className=" flex flex-col items-center justify-between px-5 text-center gap-10 py-12 md:w-[768px] xl:w-[1180px]">
      <h1 className="text-[#36536B]  text-[32px] font-normal leading-9 tracking-[-0.246px] md:text-[48px] md:leading-[56px] md:tracking-[-0.369px] md:w-[540px]">
        We empower innovators by delivering access to the financial system
      </h1>

      <section className="flex flex-col items-center gap-4 pt-2 md:flex-row md:items-start md:gap-20   xl:gap-[168px] ">
        <p className="text-[#36536B] text-[24px] font-normal leading-8 tracking-[-0.185px] md:text-[32px]">
          Our Vision
        </p>
        <p className=" text-[#6C8294] text-[15px] font-normal leading-7 md:w-[456px]  md:text-start ">
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.{" "}
        </p>
      </section>
      <section className="flex flex-col items-center gap-4 pt-2  md:flex-row md:items-start md:gap-10 xl:gap-32 ">
        <p className="text-[#36536B] text-[24px] font-normal leading-8 tracking-[-0.185px]  md:text-[32px]">
          Our Business
        </p>
        <p className=" text-[#6C8294] text-[15px] font-normal leading-7  md:w-[456px]  md:text-start ">
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.
        </p>
      </section>

      <img
        className=" pt-8 md:hidden"
        src="./assets/about/mobile/image-team-members.jpg"
        alt=""
      />
      <img
        className="hidden md:flex xl:hidden"
        src="/assets/about/tablet/image-team-members.jpg"
        alt=""
      />
      <img
        className=" hidden xl:flex"
        src="./assets/about/desktop/image-team-members.jpg"
        alt=""
      />
      <section className="flex flex-col items-center justify-between gap-4 pt-2">
        <hr className="w-[327px] bg-[#36536B] opacity-25 md:w-[650px] xl:w-[980px]" />
        <div className="flex flex-col items-center gap-8 md:flex-row  md:gap-28   xl:gap-72">
          <div>
            <p className="text-[16px] text-[#36536B] opacity-70 font-normal leading-7">
              Team Members
            </p>
            <p className="text-[#BA4270] text-[56px] font-normal leading-[72px] tracking-[-0.431px]">
              300+
            </p>
          </div>
          <div>
            <p className="text-[16px] text-[#36536B] opacity-70 font-normal leading-7">
              Offices in the US
            </p>
            <p className="text-[#BA4270] text-[56px] font-normal leading-[72px] tracking-[-0.431px]">
              3
            </p>
          </div>
          <div>
            <p className="text-[16px] text-[#36536B] opacity-70 font-normal leading-7">
              Transactions analyzed
            </p>
            <p className="text-[#BA4270] text-[56px] font-normal leading-[72px] tracking-[-0.431px]">
              10M+
            </p>
          </div>
        </div>
        <hr className="w-[327px] bg-[#36536B] opacity-25 md:w-[650px] xl:w-[980px]" />
      </section>
      <section className="flex flex-col items-center gap-4 pt-2 md:flex-row md:items-start md:gap-10 xl:gap-32">
        <p className="text-[#36536B] text-[24px] font-normal leading-8 tracking-[-0.185px] md:text-[32px]">
          The Culture
        </p>
        <p className=" text-[#6C8294] text-[15px] font-normal leading-7 md:w-[456px]  md:text-start">
          We strongly believe there's always an opportunity to learn from each
          other outside of day-to-day work, whether it's company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title.
        </p>
      </section>
      <section className="flex flex-col items-center gap-4 pt-2 md:flex-row md:items-start md:gap-10 xl:gap-32">
        <p className="text-[#36536B] text-[24px] font-normal leading-8 tracking-[-0.185px] md:text-[32px]">
          The People
        </p>
        <p className=" text-[#6C8294] text-[15px] font-normal leading-7 md:w-[456px]  md:text-start md:">
          We're all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </section>
    </article>
  );
}
