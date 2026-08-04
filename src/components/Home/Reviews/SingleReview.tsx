import { Review } from "@/types/review";
import Image from "next/image";

const SingleReview = ({ review }: { review: Review }) => {
  return (
    <div className="brand-card relative overflow-hidden px-8 py-9">
      <div className="flex items-center gap-4.5">
        <div className="relative h-12 w-full max-w-[48px] overflow-hidden rounded-full">
          <Image
            src={review.userImage}
            alt={review.userName}
            width={48}
            height={48}
          />
        </div>
        <div>
          <h3 className="text-sm font-medium text-[#111]">{review.userName}</h3>
          <p className="text-sm font-medium lowercase">
            {review.userDesignation}
          </p>
        </div>
      </div>

      <div className="relative my-6 h-px w-full bg-[#2f3e5c]/10"></div>

      <p>{review.description}</p>

      {/* <!-- bg shapes --> */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute bottom-0 right-0 -z-1 h-full w-full bg-[url(/images/blur/blur-18.svg)] bg-cover bg-center bg-no-repeat"></span>
      </div>
    </div>
  );
};

export default SingleReview;
