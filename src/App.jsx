import "./App.scss";

function App() {
  return (
    <section className="main h-screen grid items-center min-h-[500px] ">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 ">
          <div className="shorter-function">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold">Create Short URL!</h1>
              <p className="text-2xl my-10">
                Fast and simple website to create a shortened URL, to remember
                and share.
              </p>
            </div>

            <div className="link-shorter-input">
              <div className="shadow-lg p-10  rounded-lg bg-[#030a3aa8]">
                <div className="grid grid-cols-3 gap-7 text-xl">
                  <input
                    type="url"
                    placeholder="Pest your URL!"
                    className="w-full block col-span-2 border py-4 px-6"
                  />
                  <button className="w-full border border-blue-600 bg-blue-500 transition hover:bg-blue-600 text-white">
                    Get Short URL
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shorter-url">
            <div className="url-data-table bg-white text-left p-5 rounded-xl shadow-lg">
              <table className="table-auto w-full">
                <tr>
                  <th>Long URL</th>
                  <th>Short URL</th>
                  {/* <th>Action</th> */}
                </tr>
                <tr>
                  <td>Long URL</td>
                  <td>
                    Short URL{" "}
                    <button className="float-right border px-2">Copy</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
