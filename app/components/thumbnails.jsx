// Here I will place a selection of gallery images to display on the homepage
export default function Thumbnails() {
  return (
    <div className="text-center font-bold text-emerald-500 text-xl">
      Gallery
      <div className="grid grid-cols-3 gap-8 mx-[10%] py-[5%] justify-center auto-cols-max">
        {/* <div className="bg-buch bg-contain bg-no-repeat">.</div> */}
        <img
          className="h-40 md:h-96 object-cover w-full border border-emerald-500 rounded-xl shadow-inner"
          src="/img/buch.jpg"
          alt=""
        />
        <img
          className="h-40 md:h-96 object-cover w-full border border-emerald-500 rounded-xl shadow-inner"
          src="/img/osher-edited.jpg"
          alt=""
        />
        <img
          className="h-40 md:h-96 object-cover w-full border border-emerald-500 rounded-xl shadow-inner"
          src="/img/ouzzan-edited.jpg"
          alt=""
        />
        <img
          className="h-40 md:h-96 object-cover w-full border border-emerald-500 rounded-xl shadow-inner"
          src="/img/rfinkel.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
