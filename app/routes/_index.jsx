import Custom from "./custom";
import Navbar from "./navbar";
import Portrait from "./portrait";
import Services from "./services";

export const meta = () => {
  return [
    { title: "Yehudah Prints" },
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
      </div>
    </div>
  );
}
