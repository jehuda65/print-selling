// Here I will place a selection of gallery images to display on the homepage
export default function Thumbnails() {
  return (
    <div className="text-center font-bold text-emerald-500 text-xl">
      <p className="my-10 md:text-2xl">Gallery</p>
      <div className="flex flex-col md:flex-row flex-wrap place-content-around md:mx-32 items-center">
        <img className="h-96" src="/img/osher-edited.jpg" alt="" />
        <img className="h-96" src="/img/ouzzan-edited.jpg" alt="" />
        <img className="h-96" src="/img/buch.jpg" alt="" />
      </div>
    </div>
  );
}
