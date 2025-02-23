import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="w-full relative pb-[224px]">
      <Image
        src="/assets/images/abstract-star.avif"
        alt="abstract-star"
        priority={true}
        width={360}
        height={360}
        className="size-[360px] object-cover absolute top-[-9rem] left-[3rem]"
      />
      <Image
        src="/assets/images/abstract-row.avif"
        alt="abstract-star"
        priority={true}
        width={360}
        height={360}
        className="size-[360px] object-cover absolute right-[6rem] bottom-[5rem]"
      />
      <div className="flex items-center justify-center w-full text-center flex-col">
        <h3 className="mb-5 text-[57px] font-semibold leading-[59.4px]">
          Sign up free to day
        </h3>
        <p className="mb-10 text-base font-normal text-[#dfdfdf] opacity-[.7] max-w-[440px] w-full">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className="flex flex-row items-center gap-[10px]">
          <Link
            href="/sign-in"
            className="rounded-[10px] flex items-center justify-center dark:bg-white bg-black py-[10px] px-[15px]"
          >
            <span className="text-sm font-semibold text-white dark:text-black">
              Get started
            </span>
          </Link>
          <Link
            href="/change-log"
            className="flex items-center justify-center bg-inherit py-[10px] px-[15px] flex-row gap-3"
          >
            <span className="text-sm font-semibold text-black dark:text-white">
              Learn more
            </span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
