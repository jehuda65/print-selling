import Custom from "../components/custom";
import Navbar from "../components/navbar";
import Portrait from "../components/portrait";
import Services from "../components/services";
import Thumbnails from "../components/thumbnails";
import Quickview from "../components/quickview";
// import { Link } from "react-router";

export const meta = () => {
  return [
    { title: "Yehudah's Prints" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      className="bg-gray-900 text-gray-200"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <Navbar />
      <div
        className="fixed inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-500 to-emerald-600 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 54.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="pb-2">
        <h1 className="text-center text-emerald-500 font-semibold text-2xl py-8 px-4">
          Welcome to my studio!
        </h1>
        <div className="flex">{/* <Quickview /> */}</div>

        <div className="flex"></div>
        <div className="flex flex-col space-y-10">
          <Portrait />
          <Custom />
        </div>
        <div>
          {/* <Link to="/custom2" className="button1">
            send image
          </Link> */}
        </div>
        <div>
          <Services />
        </div>
      </div>
      <Thumbnails />
    </div>
  );
}
