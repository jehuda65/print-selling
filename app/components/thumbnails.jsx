// Here I will place a selection of gallery images to display on the homepage
export default function Thumbnails() {
  return (
    <div className="text-center font-bold text-emerald-500 text-xl">
      Gallery
      <div className="grid grid-cols-3 gap-4 md:mx-16 items-center auto-cols-max">
        {/* <div className="bg-buch bg-contain bg-no-repeat">.</div> */}
        <img className="h-40 md:h-96" src="/img/buch.jpg" alt="" />
        <img className="h-40 md:h-96" src="/img/osher-edited.jpg" alt="" />
        <img className="h-40 md:h-96" src="/img/ouzzan-edited.jpg" alt="" />
      </div>
    </div>
  );
}
