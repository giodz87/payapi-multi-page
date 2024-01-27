import BasicPlan from "../Components/pricing-components/BasicPlan";
import FreePlan from "../Components/pricing-components/FreePlan";
import PremiumPlan from "../Components/pricing-components/PremiumPlan";

export default function Pricing() {
  return (
    <article className=" flex flex-col items-center justify-between py-12 w-[375px] md:w-[768px] xl:w-[1180px]   ">
      <div className="flex flex-col items-center justify-center w-full xl:items-start xl:px-6">
        <h2 className=" text-[#36536B] text-[32px] font-normal leading-9 tracking-[-0.246] md:text-[48px] xl:text-[56px]">
          Pricing
        </h2>
      </div>
      <div className="flex flex-col items-center justify-between md:flex-row md:py-16 xl:w-[1130px]">
        <FreePlan />
        <BasicPlan />
        <PremiumPlan />
      </div>
    </article>
  );
}
