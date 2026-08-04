import { AiExample } from "@/types/aiExample";
import Image from "next/image";
import Link from "next/link";

const SingleExample = ({ example }: { example: AiExample }) => {
  return (
    <div className="brand-card relative h-full">
      <div className="group relative h-full overflow-hidden rounded-xl px-8 py-9">
        <span
          className={`features-bg absolute left-0 top-0 -z-1 h-full w-full ${
            example?.rotate && "rotate-180"
          }`}
        ></span>
        <span className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#b7c5dd]/55">
          <Image src={example.icon} alt="icon" width={32} height={32} />
        </span>

        <h3 className="mb-4 text-2xl font-semibold text-[#111]">
          {example.title}
        </h3>
        <p className="font-medium">{example.description}</p>

        <Link
          href={example.path}
          aria-label="Try it out! button"
          className="relative mt-9 inline-block gap-1.5 rounded-lg bg-[#2f3e5c] px-6 py-3 text-sm text-white shadow-button transition hover:bg-[#253149]"
        >
          Try it out!
        </Link>
      </div>
    </div>
  );
};

export default SingleExample;
