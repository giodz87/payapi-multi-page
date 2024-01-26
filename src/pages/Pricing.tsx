import BasicPlan from "../Components/pricing-components/BasicPlan";
import FreePlan from "../Components/pricing-components/FreePlan";
import PremiumPlan from "../Components/pricing-components/PremiumPlan";

export default function Pricing() {
  return (
    <article className=" flex flex-col items-center justify-between py-12">
      <h2 className=" text-[#36536B] text-[32px] font-normal leading-9 tracking-[-0.246]">
        Pricing
      </h2>
      <FreePlan />
      <BasicPlan />
      <PremiumPlan />
    </article>
  );
}
