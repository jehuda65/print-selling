import Custom from "./custom";
import Navbar from "../components/navbar";
import Portrait from "../components/portrait";
import Services from "../components/services";
import Thumbnails from "../components/thumbnails";

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

      <div className="py-10">
        <h1 className="text-center font-bold text-3xl">
          Welcome to my studio!
        </h1>
        <Portrait />
        <Custom />
        <Services />
        <Thumbnails />
      </div>
    </div>
  );
}
