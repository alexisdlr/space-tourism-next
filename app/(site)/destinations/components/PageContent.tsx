import { bellefair } from "@/app/fonts";
import AnimatedBox from "@/components/AnimatedBox";

const PageContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="
          lg:grid 
          lg:grid-cols-2 
          xl:px-40 
          lg:px-20
          lg:gap-x-20 
          md:justify-center 
          md:mt-10 
          h-full 
          flex 
          flex-col 
          gap-y-20 
          justify-start
          items-center
        "
      >
        <AnimatedBox>
          <div
            className="
              md:w-full 
              h-full 
              flex 
              flex-col 
              gap-8 
              justify-center 
              items-center
              lg:items-start 
              text-center 
              lg:text-left 
            "
          >
            <p className="text-paragraph text-2xl md:text-3xl">
              So you want to travel to
            </p>
            <span className={bellefair.className}>
              <h1 className="text-white text-5xl lg:text-9xl uppercase tracking-widest">
                Space
              </h1>
            </span>
            <p className="text-paragraph text-sm leading-6 lg:text-md md:leading-8 w-full px-6 md:px-16 lg:px-0">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </AnimatedBox>
        <div className="w-full">
          <div
            className="
              w-full 
              h-full 
              flex 
              justify-center 
              items-center
            "
          >
            <div className=" w-56 h-56 md:w-72 md:h-72 bg-white rounded-full cursor-pointer hover:scale-125 transition flex justify-center items-center">
              <span className={bellefair.className}>
                <p className="text-black text-2xl uppercase tracking-wider">
                  explore
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
