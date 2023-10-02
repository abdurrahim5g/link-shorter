/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Redirect = () => {
  const data = useLoaderData().data[0];
  const { url, shortId, clicks } = data;

  useEffect(() => {
    axios
      .patch(`http://localhost:5000/url/${shortId}`, { clicks: clicks })
      .then((res) => {
        const data = res.data;
        if (data.acknowledged && data.matchedCount) {
          window.location.href = url;
        }
      });
  }, []);
  console.log(url, shortId);

  return "redirecting...";
};

export default Redirect;
