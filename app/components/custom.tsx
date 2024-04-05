// import { useLoaderData, useActionData } from "@remix-run/react";

import { Form } from "@remix-run/react";

// export const action = async ({ request }: ActionArgs) => {
//   const userId = await requireUserId(request);
//   const form = await request.formData();
//   const content = form.get("content");
//   const name = form.get("name");
// };

export default function Custom() {
  // const [file, setFile] = useState(null);
  // const form = useRef();
  // const sendEmail = () => {};
  // const data = useLoaderData<typeof loader>();
  // const data = useActionData()

  return (
    <div className="text-center m-1 md:mx-[20vw] shadow rounded-md py-8">
      <p className="text-emerald-500 font-semibold">
        Do you have a picture that you want drawn?
      </p>

      <div>
        <Form
          action="/api/send"
          method="POST"
          className="px-3 md:w-2/3 mx-auto"
        >
          <div className="flex flex-col text-left">
            <p className="text-sm font-semibold py-3">Name:</p>
            <input
              name="first-name"
              className="my-input"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label
              htmlFor="phone-number"
              className="text-sm font-semibold py-3"
            >
              Phone number
            </label>
            <div className="flex flex-row">
              <select
                id="country"
                name="country"
                className="my-input border-0 bg-transparent w-20"
              >
                <option>+44</option>
                <option>+1</option>
                <option>+972</option>
              </select>
              <input
                className="my-input"
                type="tel"
                name="number"
                id="phone-number"
                autoComplete="tel"
                required
              />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <p className="text-sm font-semibold py-3">Email:</p>
            <input name="email" className="my-input" type="email" required />
          </div>

          <input
            className="my-input my-4 file:bg-emerald-500 file:button-main file:border-none file:cursor-pointer"
            type="file"
            // value={file}
            // onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <button className="button-main mb-2" type="submit">
            Submit
          </button>
        </Form>
        <p>I will email you back with a quote</p>
      </div>
    </div>
  );
}
