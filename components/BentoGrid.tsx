import Image from "next/image";

const BentoGrid = () => {
  return (
    <div className="items-center flex flex-none flex-col flex-nowrap gap-6 h-min justify-start max-w-[1024px] overflow-visible p-0 relative w-full">
      <div className="items-start flex flex-none flex-row flex-nowrap gap-4 h-min justify-start overflow-visible p-0 relative w-full">
        <div
          className="border-grid-one pt-6 pb-0 px-6 max-w-[584px]"
          data-border="true"
        >
          <div className="items-start flex flex-none flex-col flex-nowrap gap-2 h-min justify-start overflow-visible relative w-full ">
            <div className="w-full break-words whitespace-pre-wrap relative h-auto flex-none">
              <h3 className="text-xl font-semibold">Dynamic Content Hub</h3>
            </div>
            <div className="w-full break-words whitespace-pre-wrap relative h-auto flex-none">
              <p className="text-base font-normal text-[#dfdfdf] opacity-[.7]">
                Unleash the power of versatile content management with our
                Headless CMS. Tailor your digital experience effortlessly.
              </p>
            </div>
          </div>
          <div className="contents">
            <div className="aspect-ratio-1 flex-none h-auto min-h-[252px] overflow-hidden relative w-full select-none">
              <div className="absolute inset-0">
                <Image
                  src="/assets/images/bento-grid-1.avif"
                  alt="bento-grid"
                  priority={true}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-grid-two pt-0 pb-6 px-6 max-w-[430.08px]"
          data-border="true"
        >
          <div className="contents">
            <div className="aspect-ratio-2 flex-none h-auto min-h-[252px] overflow-hidden relative w-full select-none">
              <div className="absolute inset-0">
                <Image
                  src="/assets/images/bento-grid-2.avif"
                  alt="bento-grid"
                  priority={true}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="items-start flex-none flex flex-col flex-nowrap gap-2 h-min justify-start overflow-visible relative w-full">
            <div className="w-full break-words whitespace-pre-wrap relative h-auto flex-none">
              <h3 className="text-xl font-semibold">One-click publishing</h3>
            </div>
            <div className="w-full break-words whitespace-pre-wrap relative h-auto flex-none">
              <p className="text-base font-normal text-[#dfdfdf] opacity-[.7]">
                Regular security audits and real-time monitoring ensure
                immediate detection of potential threats
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="items-start flex flex-none flex-row flex-nowrap gap-4 min-h-[376px] h-full justify-start overflow-visible p-0 relative w-full mb-[74px]">
        <div
          className="border-grid-two py-6 px-6 max-w-[430.08px]"
          data-border="true"
        >
          <div className="items-start flex flex-none flex-col flex-nowrap gap-2 h-min justify-start overflow-visible relative w-full ">
            <div className="w-full break-words whitespace-pre-wrap relative h-auto flex-none">
              <h3 className="text-xl font-semibold">Built-in analytics</h3>
            </div>
            <div className="w-full break-words whitespace-pre-wrap relative h-auto flex-none">
              <p className="text-base font-normal text-[#dfdfdf] opacity-[.7]">
                Protect your valuables with industry-leading encryption and
                strict access controls.
              </p>
            </div>
          </div>
          <div className="contents">
            <div className="aspect-ratio-2 flex-none h-auto min-h-[252px] overflow-hidden relative w-full select-none">
              <div className="absolute inset-0">
                <Image
                  src="/assets/images/bento-grid-3.avif"
                  alt="bento-grid"
                  priority={true}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-grid-one py-6 px-6 max-w-[584px]"
          data-border="true"
        >
          <div className="contents">
            <div className="aspect-ratio-1 flex-none h-auto min-h-[252px] overflow-hidden relative w-full select-none">
              <div className="absolute inset-0">
                <Image
                  src="/assets/images/bento-grid-4.avif"
                  alt="bento-grid"
                  priority={true}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="items-start flex-none flex flex-col flex-nowrap gap-2 h-min justify-start overflow-visible relative w-full">
            <div className="w-full break-words whitespace-pre-wrap relative h-auto flex-none">
              <h3 className="text-xl font-semibold">Adaptive APIs</h3>
            </div>
            <div className="w-full break-words whitespace-pre-wrap relative h-auto flex-none">
              <p className="text-base font-normal text-[#dfdfdf] opacity-[.7]">
                Embrace the future of content distribution. Our Headless CMS
                offers robust APIs for seamless delivery across platforms and
                channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
