import Heading from "@/components/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="w-full relative pb-[224px]">
      <Heading
        tag="FAQ"
        heading="Common questions — answered"
        desc="Explore tailored solutions that meet the unique needs of your business, driving efficiency and productivity in every aspect."
        className="max-w-[870px]"
      />

      <div className="flex items-center justify-center relative w-[700px] mx-auto">
        <AccordionFAQ />
      </div>
    </section>
  );
};

export default FAQ;

function AccordionFAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="pb-9  text-[#ADADAD] hover:text-white active:text-white">
          What is your refund policy for dissatisfied customers?
        </AccordionTrigger>
        <AccordionContent className="text-[#ADADAD]">
          We offer a 30-day money-back guarantee on all plans to ensure your
          satisfaction.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="pb-9  text-[#ADADAD] hover:text-white active:text-white">
          Can I easily upgrade my plan later on?
        </AccordionTrigger>
        <AccordionContent className="text-[#ADADAD]">
          Absolutely! You can upgrade at any time with no hassle, ensuring
          flexibility as you grow.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="pb-9  text-[#ADADAD] hover:text-white active:text-white">
          Is there a free trial available for new users?
        </AccordionTrigger>
        <AccordionContent className="text-[#ADADAD]">
          Yes, we offer a 14-day free trial with full access to all features and
          capabilities.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="pb-9  text-[#ADADAD] hover:text-white active:text-white">
          What kind of support do you offer for users?
        </AccordionTrigger>
        <AccordionContent className="text-[#ADADAD]">
          Our dedicated team is available 24/7 via chat, email, and phone to
          assist you with any questions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="pb-9  text-[#ADADAD] hover:text-white active:text-white">
          How secure is my data within your platform?
        </AccordionTrigger>
        <AccordionContent className="text-[#ADADAD]">
          We prioritize your security with advanced encryption and regular
          audits to protect your information.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
