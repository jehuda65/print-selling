// Here I will place a selection of gallery images to display on the homepage
export default function Thumbnails() {
  return (
    <div className="text-center font-bold text-emerald-500 text-xl">
      Gallery
      <div className="flex flex-col md:flex-row flex-wrap place-content-around md:mx-16 items-center">
        <img className="w-80" src="/img/osher-edited.jpg" alt="" />
        <img className="w-80" src="/img/ouzzan-edited.jpg" alt="" />
        <img className="w-96" src="/img/buch.jpg" alt="" />
      </div>
    </div>
  );
}
