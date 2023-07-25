import { useState } from "react";

export default function Custom() {

  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  
  return (
    <div className="text-center m-10 shadow rounded-md py-8">
      <p className="text-emerald-500 font-semibold">
        Do you have a picture that you want drawn?
      </p>
      <p>Fill in this form and send me your image</p>

      
    <div>
    <form className="pl-8">
      <h1>Submit your own image here</h1>
      <div className="flex" ><p>Name:</p>
      <input className="my-input" type="text" required value={name} onChange={(e) => setName(e.target.value)}/></div>
      
      <div className="flex" >
      <p>Phone number:</p>
      <select>
        <option value="number">+44</option>
        <option value="number">+1</option>
        <option value="number">+972</option>
      </select>
      <input className="my-input" type="number" required/></div>
      
      <div className="flex">
      <p>Email:</p>
      <input className="my-input" type="email" required/></div>
      
      <input className="my-input" type="file" value={file} onChange={(e) => setFile(e.target.files[0])}/>
      <br /><button className="button-main" type="submit">Submit</button>
    </form>
    <p>I will email you back with a quote</p>
  </div>

    </div>

  );
}
