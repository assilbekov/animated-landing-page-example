import { Button } from "@/components/Button";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            $7.5M Seed Round Raised
          </div>
        </div>
        <h1 className="text-center text-6xl font-medium mt-6">
          Impactful desing, created effortlesly.
        </h1>
        <p className="text-center text-xl text-white/50">
          Design tools shouldn&apos;t slow you down. Layers powerful features
          with an intuitive interface that&apos;s a breeze to use.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4"
          />
          <Button
            variant="primary"
            type="submit"
            size="sm"
            className="whitespace-nowrap"
          >
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
}
