



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
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Navbar />

      <div className="py-2">
        <h1 className="text-center font-semibold text-2xl py-3 px-4">
          Welcome to my studio!
        </h1>
        <div className="flex">
          <Portrait />
          <Quickview />
        </div>
        <Custom />
        <div>
          {/* <Link to="/custom2" className="button1">
            send image
          </Link> */}
        </div>
        <Services />
        <Thumbnails />
      </div>
    </div>
  );
}
