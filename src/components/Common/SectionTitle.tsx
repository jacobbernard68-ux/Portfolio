import Image from "next/image";

type propsType = {
  subTitle?: string;
  title: string;
  paragraph: string;
  center?: boolean;
  icon?: string;
};

const SectionTitle = ({
  subTitle,
  title,
  paragraph,
  icon = "/images/hero/icon-title.svg",
}: propsType) => {
  return (
    <div className="wow fadeInUp relative z-10 mb-16 text-left">
      <span className="relative mb-4 inline-flex items-center gap-2 rounded-full bg-[#b7c5dd]/55 px-4.5 py-2 text-sm font-medium text-[#2f3e5c]">
        <Image src={icon} alt="icon" width={16} height={16} />

        <span> {subTitle} </span>
      </span>
      <h2 className="mb-4.5 text-2xl font-semibold text-[#111] sm:text-4xl xl:text-[36px] xl:leading-[1.2]">
        {title}
      </h2>
      <p className="max-w-[714px] font-normal leading-6 text-[#333]">{paragraph}</p>
    </div>
  );
};

export default SectionTitle;
