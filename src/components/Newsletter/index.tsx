const Newsletter = () => {
  return (
    <section className="pb-11 pt-17.5 sm:pt-22.5 xl:pt-27.5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="brand-surface flex flex-wrap items-center justify-between gap-10 rounded-2xl p-8 md:p-10">
          <div className="w-full max-w-[352px]">
            <h3 className="mb-2 text-heading-5 font-semibold text-[#111]">
              News & Update
            </h3>
            <p className="font-medium">
              Keep up to date with everything about our tool
            </p>
          </div>
          <div className="w-full max-w-[534px]">
            <form>
              <div className="flex items-center gap-4">
                <div className="w-full max-w-[395px]">
                  <input
                    id="newsletterEmail"
                    type="email"
                    name="newsletterEmail"
                    placeholder="Enter your Email"
                    className="w-full rounded-lg border border-[#2f3e5c]/20 bg-white px-6 py-3 text-[#111] outline-hidden focus:border-[#2f3e5c]"
                  />
                </div>
                <button className="relative flex items-center gap-1.5 rounded-lg bg-[#2f3e5c] px-7 py-3.5 text-sm text-white shadow-button transition hover:bg-[#253149]">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
