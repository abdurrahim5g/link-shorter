import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId();

const Main = () => {
  const [url, setUrl] = useState("");

  const {
    data: allURL,
    refetch,
    isLoading,
  } = useQuery("urlShorter", async () => {
    return axios("http://localhost:5000/url")
      .then((res) => res.data)
      .catch((err) => console.error(err));
  });

  //   console.log(allURL);

  const handleShortURL = (e) => {
    e.preventDefault();
    const shortId = uid.rnd(5);
    const time = new Date().getTime();
    const urlDoc = {
      shortId,
      url,
      clicks: 0,
      time,
    };

    // console.log("Short URL", urlDoc);
    axios
      .post("http://localhost:5000/url", urlDoc)
      .then((res) => {
        const data = res.data;
        if (data.acknowledged) {
          refetch();
          toast.success("URL Short sucessfuly 🚀");
          setUrl("");
        } else {
          toast.info("Something is wrong! Please try again 🚀");
        }
      })
      .catch((err) => console.error(err));
  };

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
                <div>
                  <form
                    onSubmit={handleShortURL}
                    id="urlForm"
                    className="grid grid-cols-3 gap-7 text-xl"
                  >
                    <input
                      type="url"
                      placeholder="Pest your URL!"
                      className="w-full block col-span-2 border py-4 px-6"
                      onChange={(e) => setUrl(e.target.value)}
                      value={url}
                      required
                    />
                    <button
                      className="w-full border border-blue-600 bg-blue-500 transition hover:bg-blue-600 text-white"
                      type="submit"
                    >
                      Get Short URL
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="shorter-url">
            <div className="url-data-table bg-white text-left p-5 rounded-xl shadow-lg">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th>Long URL</th>
                    <th>Short URL</th>
                    <th>Clicks</th>
                  </tr>
                </thead>
                <tbody>
                  {!isLoading &&
                    allURL.map((url) => (
                      <tr key={url.shortId}>
                        <td title={url.url}>{url.url?.slice(0, 30)}...</td>
                        <td>
                          <Link
                            to={`/${url.shortId}`}
                            className="text-blue-500 font-semibold"
                          >
                            {url.shortId}
                          </Link>{" "}
                          <button className="float-right border px-2">
                            Copy
                          </button>
                        </td>
                        <td align="center">{url.clicks}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
