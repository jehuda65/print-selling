import { useState } from "react";
import { Resend } from "resend";

export default function Custom() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div className="text-center m-1 shadow rounded-md py-8">
      <p className="text-emerald-500 font-semibold">
        Do you have a picture that you want drawn?
      </p>

      <div>
        <form className="px-3">
          <div className="flex flex-col md:flex-row text-left">
            <p className="text-sm font-semibold py-3">Name:</p>
            <input
              className="my-input"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row text-left">
            <label
            htmlFor="phone-number" className="text-sm font-semibold py-3">Phone number</label>
            <select 
            id="country"
            name="country" className="my-input border-0 bg-transparent w-20">
              <option>+44</option>
              <option>+1</option>
              <option>+972</option>
            </select>
            <input className="my-input" type="tel"  name="phone-number"
                id="phone-number" autoComplete="tel" required />
          </div>

          <div className="flex flex-col md:flex-row text-left">
            <p className="text-sm font-semibold py-3">Email:</p>
            <input className="my-input" type="email" required />
          </div>

          <input
            className="my-input my-4"
            type="file"
            value={file}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <button className="button-main mb-2" type="submit" onClick={Resend}>
            Submit
          </button>
        </form>
        <p>I will email you back with a quote</p>
      </div>
    </div>
  );
}
