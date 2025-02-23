"use client";
import React, { useState } from "react";
import Image from "next/image";
import Heading from "@/components/Heading";

const testimonialData = [
  {
    id: 1,
    image: "/assets/images/client-1.png",
    logo: "/assets/icons/logo-backup.svg",
    company: "liva",
    quote:
      "Liva is the first CRM that feels truly modern. It's powerful, flexible, and fast to build with. There's nothing like it on the market.",
    author: "Sahil Mansuri",
    role: "CEO & Co-founder",
  },
  {
    id: 2,
    image: "/assets/images/client-2.png",
    logo: "/assets/icons/logo-backup.svg",
    company: "Bravado",
    quote:
      "Attio is the first CRM that feels truly modern. It's powerful, flexible, and fast to build with. There's nothing like it on the market.",
    author: "John Smith",
    role: "CTO",
  },
  {
    id: 3,
    image: "/assets/images/client-3.png",
    logo: "/assets/icons/logo-backup.svg",
    company: "TechCorp",
    quote:
      "The platform has transformed how we manage customer relationships. The modern interface and powerful features make it a game-changer.",
    author: "Emma Wilson",
    role: "Head of Sales",
  },
];

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(
    testimonialData[0]
  );

  return (
    <section className="pb-[224px] relative w-full px-[66px]">
      <Heading
        tag="Testimonials"
        heading="Hear from our satisfied customers"
        desc="Start your free trial today and discover the significant difference our solutions can make for you."
      />

      <div className="max-w-full w-full rounded-2xl pl-[34px] pt-[60px] pb-10 pr-48 flex flex-col items-start gap-[84px] border border-black/15 dark:border-white/15">
        <div className="flex flex-row items-center gap-[78px]">
          <div className="flex flex-row gap-4">
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.id}
                onClick={() => setActiveTestimonial(testimonial)}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeTestimonial.id === testimonial.id
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-50 hover:opacity-75"
                }`}
              >
                <Image
                  src={testimonial.image}
                  priority={true}
                  alt={`client-${testimonial.id}`}
                  width={240}
                  height={243}
                  className="object-cover w-[240px] h-[243px] rounded-3xl"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-12">
              <Image
                src={activeTestimonial.logo}
                alt="logo"
                className="size-[24px]"
                width={24}
                height={24}
              />
              <span className="text-xl font-semibold whitespace-nowrap">
                {activeTestimonial.company}
              </span>
            </div>
            <p className="text-[28px] leading-[34.4px] font-medium max-w-[600px] w-full">
              &quot;{activeTestimonial.quote}&quot;
            </p>
            <br />
            <p className="text-sm font-normal">
              <strong>{activeTestimonial.author},</strong>{" "}
              {activeTestimonial.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
