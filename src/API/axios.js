import axios from "axios";
import React from "react";

import { useState, useEffect } from "react";

import TextGrid from "../COMPONENTS/textGrid";

export default function Data() {
  const [info, setInfo] = useState([]);

  axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers["Access-Control-Allow-Origin"] =
    "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type, Host, Accept, Acces-Control-Allow-Methods";

  useEffect(() => {
    axios
      .get("https://localhost:44326/TarGet/Products")

      .then((response) => {
        console.log(response.data);
        console.log(info)
        setInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {info &&
        info.map((data2) => <TextGrid key={data2.key} text0={data2.pt_Name} text2={data2.pt_Description} />)}
    </>
  );
}
