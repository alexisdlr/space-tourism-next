import Header from "@/components/Header";
import PageContent from "./components/PageContent";

export default function Home() {
  return (
    <div
      className="
        bg-[url('../public/images/home/background-home-mobile.jpg')]
        md:bg-[url('../public/images/home/background-home-tablet.jpg')]
        xl:bg-[url('../public/images/home/background-home-desktop.jpg')]
        h-screen
        bg-cover
        bg-no-repeat

        "
    >
      <Header />
      <PageContent />
    </div>
  );
}
