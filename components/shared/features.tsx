import BentoGrid from "@/components/BentoGrid";
import Heading from "@/components/Heading";
import GridBackground from "@/components/icons/GridBackground";

const Features = () => {
  return (
    <section className="pb-[242px] relative w-full">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <GridBackground />
      </div>
      <div className="z-10 w-full pt-[5rem] px-[171px]">
        <div className="mx-auto text-center max-w-[829.98px] w-full">
          <h2 className="text-[52px] font-semibold leading-[57.2px] mb-[52px]">
            “When I first opened Liva, I instantly got the feeling this was the
            next generation of CRM.”
          </h2>
          <span className="text-base font-semibold text-[#d6d5d5]">
            Tran Thien Duc
          </span>
          <br />
          <span className="text-sm font-normal text-[#dfdfdf] opacity-[.7]">
            CEO & Frontend Developer at Liva
          </span>

          <Heading
            className="mt-60"
            tag="Valuable Feutures"
            heading="Dynamic Mastery with Powerful CMS Tools"
            desc=" Adapt our platform to suit your unique business needs with
              flexible, scalable solutions designed to grow with you."
          />
        </div>
        <BentoGrid />
      </div>
    </section>
  );
};

export default Features;
