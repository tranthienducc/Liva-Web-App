import {
  Benefits,
  CTA,
  Enterprise,
  FAQ,
  Features,
  Footer,
  Hero,
  Pricing,
  Testimonial,
} from "@/components/shared";

export default function Home() {
  return (
    <main className="relative w-full h-screen max-w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="px-12 mx-auto">
        <Hero />
        <Features />
        <Benefits />
        <Enterprise />
        <Testimonial />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
