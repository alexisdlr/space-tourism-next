import Header from "@/components/Header";
import PageContent from "./components/PageContent";

export default function Destination() {
  return (
    <div
      className="
        bg-[url('../public/images/destination/background-destination-mobile.jpg')]
        md:bg-[url('../public/images/destination/background-destination-tablet.jpg')]
        xl:bg-[url('../public/images/destination/background-destination-desktop.jpg')]
        h-full
        w-full
        bg-cover
        bg-no-repeat
        overflow-x-hidden
        overflow-y-auto
      "
    >
      <Header />
      <PageContent />
    </div>
  );
}
