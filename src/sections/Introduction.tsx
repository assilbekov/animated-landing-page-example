import { Tag } from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
  return (
    <section className="py-28">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing layers</Tag>
        </div>
        <div className="text-center text-4xl font-medium mt-10">
          <span>Your creative process should be fast, flexible, and fun.</span>{" "}
          <span className="text-white/50">{text}</span>{" "}
          <span className="text-lime-400 block">
            That&apos;s why we built layers.
          </span>
        </div>
      </div>
    </section>
  );
}
