export default function About() {
  return (
    <article className=" flex flex-col items-center justify-between px-5 text-center gap-10 py-12 w-[375px]">
      <h1 className="text-[#36536B]  text-[32px] font-normal leading-9 tracking-[-0.246px]">
        We empower innovators by delivering access to the financial system
      </h1>

      <section className="flex flex-col items-center gap-4 pt-2">
        <p className="text-[#36536B] text-[24px] font-normal leading-8 tracking-[-0.185px]">
          Our Vision
        </p>
        <p className=" text-[#6C8294] text-[15px] font-normal leading-7">
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.{" "}
        </p>
      </section>
      <section className="flex flex-col items-center gap-4 pt-2">
        <p className="text-[#36536B] text-[24px] font-normal leading-8 tracking-[-0.185px]">
          Our Business
        </p>
        <p className=" text-[#6C8294] text-[15px] font-normal leading-7">
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.
        </p>
      </section>

      <img
        className=" pt-8"
        src="./assets/about/mobile/image-team-members.jpg"
        alt=""
      />
      <section className="flex flex-col items-center justify-between gap-4 pt-2">
        <hr className="w-[327px] bg-[#36536B] opacity-25" />
        <div className="flex flex-col items-center gap-8">
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
        <hr className="w-[327px] bg-[#36536B] opacity-25" />
      </section>
      <section className="flex flex-col items-center gap-4 pt-2">
        <p className="text-[#36536B] text-[24px] font-normal leading-8 tracking-[-0.185px]">
          The Culture
        </p>
        <p className=" text-[#6C8294] text-[15px] font-normal leading-7">
          We strongly believe there's always an opportunity to learn from each
          other outside of day-to-day work, whether it's company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title.
        </p>
      </section>
      <section className="flex flex-col items-center gap-4 pt-2">
        <p className="text-[#36536B] text-[24px] font-normal leading-8 tracking-[-0.185px]">
          The People
        </p>
        <p className=" text-[#6C8294] text-[15px] font-normal leading-7">
          We're all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </section>
    </article>
  );
}
