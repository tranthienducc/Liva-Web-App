import { ArrowUpRight, File, Layers, Play, Table2, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const logoPartner = [
  {
    url: "/assets/icons/logo-1.svg",
  },
  {
    url: "/assets/icons/logo-2.svg",
  },
  {
    url: "/assets/icons/logo-3.svg",
  },
  {
    url: "/assets/icons/logo-4.svg",
  },
  {
    url: "/assets/icons/logo-5.svg",
  },
  {
    url: "/assets/icons/logo-1.svg",
  },
];

const Hero = () => {
  return (
    <section className="pt-44 pb-[18rem] w-full relative z-10">
      <Image
        src="/assets/icons/icon-star.svg"
        alt="icon-star"
        loading="lazy"
        width={60}
        height={60}
        className="size-[60px] absolute top-[10rem] left-[5rem]"
      />
      <Image
        src="/assets/icons/icon-star.svg"
        alt="icon-star"
        loading="lazy"
        width={60}
        height={60}
        className="size-[60px] absolute bottom-[57rem] right-[5rem]"
      />

      <div className="flex flex-col items-center text-center justify-center gap-6 mb-40">
        <EyeBrowText />
        <h1 className="text-[90px] font-bold leading-[76px] max-w-[887px] w-full hero-gradient">
          Share the <span className="font-Telma">Moment</span>, Live the{" "}
          <span className="font-Telma">Experience</span>
        </h1>
        <p className="text-xl font-medium text-[#999] max-w-[600px] w-full">
          Seamless real-time video sharing, anytime, anywhere, scales and grows
          your company to the next level.
        </p>
        <div className="flex items-center gap-4">
          {/* Kiểm tra nếu đăng nhập rồi thì hiển thị cái link là - dashboard */}
          <Link
            href="/sign-in"
            className="shadow-md rounded-[12px] py-[7px] px-[13px] dark:text-black dark:bg-[#f43f5e] text-white bg-black"
          >
            <span className="text-base font-medium">Start for free</span>
          </Link>
          <Link
            href="/contact"
            className="border dark:border-white/10 border-black/10  rounded-[12px] py-[7px] px-[13px] "
          >
            <span className="text-base font-medium text-black dark:text-white">
              Talk to sales
            </span>
          </Link>
        </div>
      </div>

      <Badges />

      <div className="isolate mt-[112px]">
        <Image
          src="/assets/images/bg-img-hero.svg"
          alt="bg-img-hero"
          priority={true}
          width={1392}
          height={746}
          className="object-cover w-[1392px] h-[746px] pointer-events-none select-none"
        />
      </div>

      <ul className="flex flex-row items-center justify-center w-full gap-8">
        {logoPartner.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.url}
              alt="logo-partner"
              priority={true}
              width={115}
              height={40}
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;

function EyeBrowText() {
  return (
    <Link
      href="/changelog"
      className="border dark:border-white/10 border-black/10 py-2 px-4 rounded-full flex items-center gap-3 cursor-pointer"
    >
      <span>🤖 We are launched Liva Beta 1.1 | See Update </span>
      <ArrowUpRight size={20} />
    </Link>
  );
}

const badgesData = [
  {
    icon: <Table2 size={16} />,
    label: "Data",
  },
  {
    icon: <Play size={16} />,
    label: "Automations",
  },
  {
    icon: <Layers size={16} />,
    label: "Pipeline",
  },
  {
    icon: <File size={16} />,
    label: "Productivity",
  },
  {
    icon: <Timer size={16} />,
    label: "Realtime",
  },
];

function Badges() {
  return (
    <div className="flex mx-auto flex-row gap-[6px] items-center justify-center w-full mt-[22px]">
      {badgesData.map((badge) => (
        <button
          key={badge.label}
          className="flex items-center gap-2 flex-row py-[5px] pl-[9px] pr-[11px] border dark:border-white/10 border-black/10 rounded-xl"
        >
          {badge.icon}
          <span>{badge.label}</span>
        </button>
      ))}
    </div>
  );
}
