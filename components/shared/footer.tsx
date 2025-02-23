import Image from "next/image";
import Link from "next/link";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  FigmaLogoIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";
import { Dot } from "lucide-react";
import GridBackground from "@/components/icons/GridBackground";

const Footer = () => {
  return (
    <footer className="relative w-full px-[66px] pb-10">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <GridBackground />
      </div>
      <div className="contents">
        <div className="items-center flex-col flex flex-nowrap gap-20 h-min overflow-visible relative">
          <div className="items-start flex flex-none flex-nowrap flex-row gap-[10px] h-min justify-center overflow-hidden p-0 relative w-full">
            <div className="items-start flex flex-grow-[2] flex-shrink-0 basis-0 flex-col flex-nowrap gap-[30px] h-min justify-center overflow-visible p-0 relative">
              <Link href="/" className="flex items-center gap-2 lg:mr-6">
                <Image
                  src="/assets/icons/logo-backup.svg"
                  alt="logo"
                  className="size-[24px]"
                  width={24}
                  height={24}
                />
                <span className="text-xl font-semibold whitespace-nowrap">
                  liva
                </span>
              </Link>

              <div className="max-w-[300px] whitespace-pre-wrap break-words w-auto">
                <p className="text-sm font-normal text-[#dfdfdf] opacity-[.7]">
                  We create high-quality digital products to aid you in building
                  stunning websites.
                </p>
              </div>

              <div className="relative">
                <div className="items-center flex flex-row flex-nowrap gap-[15px] h-[30px] justify-center overflow-hidden p-0 relative">
                  <GitHubLogoIcon className="size-6" />
                  <LinkedInLogoIcon className="size-6" />
                  <TwitterLogoIcon className="size-6" />
                  <FigmaLogoIcon className="size-6" />
                  <VercelLogoIcon className="size-6" />
                </div>
              </div>
            </div>
            <div className="items-start flex flex-grow-[4] flex-shrink-0 basis-0 flex-row flex-nowrap gap-[10px] h-min justify-center overflow-visible p-0 relative">
              <div className="items-start flex flex-none flex-row flex-nowrap gap-[10px] h-min justify-center overflow-visible p-0 relative w-[337px]">
                <div className="flex flex-col items-start flex-shrink-0 flex-grow basis-0 flex-nowrap gap-5 h-min justify-center overflow-visible p-0 relative">
                  <p className="text-base font-medium">Demos</p>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Original
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Agency
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    SasS
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Creative
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Marketing
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Landing
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Software
                  </Link>
                </div>
                <div className="flex flex-col items-start flex-shrink-0 flex-grow basis-0 flex-nowrap gap-5 h-min justify-center overflow-visible p-0 relative">
                  <p className="text-base font-medium">Features</p>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Pages
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Component
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-normal text-[#dfdfdf] opacity-[.7]"
                  >
                    Changlog
                  </Link>
                </div>
              </div>
              <div className="items-start flex flex-grow-[2] flex-shrink-0 basis-0 flex-col flex-nowrap gap-5 h-min justify-center p-0 relative overflow-visible">
                <h5 className="text-base font-medium">Newsletter</h5>
                <p className="text-sm font-normal text-[#dfdfdf] opacity-[.7]">
                  Discover the latest handpicked blog entries to get started.
                </p>
                <form className="items-start flex flex-none flex-row flex-nowrap gap-[10px] h-min justify-start overflow-hidden p-0 relative w-full">
                  <label className="items-start flex flex-grow-[4] flex-shrink-0 basis-0 flex-col flex-nowrap gap-[10px] h-min justify-start p-0 relative">
                    <div className="w-full">
                      <input
                        type="email"
                        name="Email"
                        placeholder="pixkit@framer.com"
                        className="border border-black/10 dark:border-white/10 rounded-xl text-sm font-normal p-3 bg-inherit"
                        required
                      />
                    </div>
                  </label>
                  <div className="flex-shrink-0 flex-grow-[2] basis-0 h-11 relative">
                    <button className="items-center cursor-pointer flex-row flex-nowrap flex gap-0 h-[40px] justify-center overflow-visible p-0 relative w-[240px] bg-black text-white dark:bg-white dark:text-black rounded-xl max-w-[145px]">
                      <span className="text-sm font-medium">Subscribe</span>
                    </button>
                  </div>
                </form>
                <div className="max-w-[650px] w-auto">
                  <p className="text-sm font-normal text-[#dfdfdf] opacity-[.7]">
                    By signing up you agree to our{" "}
                    <span className="text-black dark:text-white dark:opacity-100">
                      privacy policy
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 relative w-full overflow-hidden justify-between flex flex-row h-min flex-nowrap items-center">
            <span className="text-sm font-medium text-grayLight dark:text-grayDark">
              @2024 liva. Uncoypright
            </span>

            <div className="flex flex-row items-center gap-0">
              <Dot className="text-blue-500 size-16" />
              <span className="text-sm font-medium text-blue-500">
                All Systems normal
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
