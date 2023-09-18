// Here I will place a selection of gallery images to display on the homepage
export default function Thumbnails() {
  return (
    <div className="text-center font-bold text-emerald-500 text-xl">
<<<<<<< HEAD
      <p className="my-10 md:text-2xl">Gallery</p>
      <div className="flex flex-col md:flex-row flex-wrap place-content-around md:mx-32 items-center">
        <img className="h-96" src="/img/osher-edited.jpg" alt="" />
        <img className="h-96" src="/img/ouzzan-edited.jpg" alt="" />
        <img className="h-96" src="/img/buch.jpg" alt="" />
=======
      Gallery
      <div className="grid grid-cols-3 gap-4 md:mx-16 items-center auto-cols-max">
        {/* <div className="bg-buch bg-contain bg-no-repeat">.</div> */}
        <img className="h-40 md:h-96" src="/img/buch.jpg" alt="" />
        <img className="h-40 md:h-96" src="/img/osher-edited.jpg" alt="" />
        <img className="h-40 md:h-96" src="/img/ouzzan-edited.jpg" alt="" />
>>>>>>> e9e2a73ae5e7ae09aa25e78f35030cdebb0d1463
      </div>
    </div>
  );
}
