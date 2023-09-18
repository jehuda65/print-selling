import { useState } from "react";
import { Resend } from "resend";

export default function Custom() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div className="flex flex-col text-center shadow py-8 items-center md:my-16 md:w-screen mx-auto">
      <p className="text-emerald-500 font-semibold">
        Do you have a picture that you want drawn?
      </p>

      <div>
        <form className="px-8 w-full">
          <div className="flex flex-col text-left">
            <div>
              <p>Name:</p>
            </div>
            <div>
              <input
                className="my-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <p className="text-left">Phone number:</p>

            <div className="flex">
              <div>
                <select className="my-input w-20 text-sm h-10">
                  <option value="number">+44</option>
                  <option value="number">+1</option>
                  <option value="number">+972</option>
                </select>
              </div>
              <div>
                <input className="my-input" type="number" required />
              </div>
            </div>
          </div>

          <div className="flex flex-col text-left">
            <div>
              <p>Email:</p>
            </div>
            <div>
              <input className="my-input" type="email" required />
            </div>
          </div>

          <input
            className="my-input my-4"
            type="file"
            value={file}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <button className="button-main mb-2" type="submit" onClick={Resend}>
            npm run dev Submit
          </button>
        </form>
        <p>I will email you back with a quote</p>
      </div>
    </div>
  );
}
