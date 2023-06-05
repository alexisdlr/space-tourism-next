import { bellefair } from "@/app/fonts";
import AnimatedBox from "@/components/AnimatedBox";
import Link from "next/link";

const PageContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="
          xl:px-40 
          lg:flex-row
          lg:px-20
          lg:gap-x-20 
          lg:justify-center
          sm:justify-center
          h-full 
          justify-center
          flex 
          flex-col 
          gap-y-20 
          items-center
        "
      >
        <AnimatedBox className="flex-5 w-full">
          <div
            className="
              md:w-full 
              h-full 
              flex
              flex-1 
              flex-col 
              gap-8 
              justify-center 
              items-center
              lg:items-start 
              text-center 
              lg:text-left 
            "
          >
            <p className="text-paragraph text-xl uppercase tracking-[5px] lg:text-2xl md:text-3xl">
              So you want to travel to
            </p>
            <span className={bellefair.className}>
              <h1 className="text-white text-8xl lg:text-9xl uppercase tracking-widest">
                Space
              </h1>
            </span>
            <p className="text-paragraph font-light text-sm leading-6 lg:text-xl lg:leading-8 tracking-[1.5px] w-full px-5 md:px-16 xl:pr-80 lg:px-0">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </AnimatedBox>
        <div>
          <div
            className="
              w-full 
              h-full 
              flex 
              justify-center 
              items-center
            "
          >
            <Link
              href={"/destinations"}
              className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-full cursor-pointer hover:scale-125 transition flex justify-center items-center"
            >
              <span className={bellefair.className}>
                <p className="text-black text-2xl uppercase tracking-wider">
                  explore
                </p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
