import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3">
      <div className="brand-card group relative m-2 h-[calc(100%-1rem)] overflow-hidden px-6 py-8 text-left transition duration-300 hover:-translate-y-1 sm:py-10 lg:px-8 xl:px-10 xl:py-12">
        <span
          className={`features-bg absolute left-0 top-0 -z-1 h-full w-full opacity-0 group-hover:opacity-100 ${
            feature?.rotate && "rotate-180"
          }`}
        ></span>
        <span className="relative mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#b7c5dd]/55">
          <Image src={feature.icon} alt="icon" width={32} height={32} />
        </span>
        <h3 className="mb-4 text-xl font-semibold text-[#111]">
          {feature.title}
        </h3>
        <p className="font-normal leading-6 text-[#333]">{feature.description}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
