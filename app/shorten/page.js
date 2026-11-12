"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
const page = () => {
  const [URL, setURL] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: URL,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())

      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setURL("");
        setshorturl("");
        alert(result.message);
        console.log(result);
      })

      .catch((error) => console.error(error));
  };

  return (
    <div className="max-w-lg mx-auto bg-purple-100 my-16 flex flex-col gap-4 p-8 rounded-lg">
      <h1 className="font-bold text-xl">Generate your short URLs</h1>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter your URLs"
          onChange={(e) => {
            setURL(e.target.value);
          }}
          className="px-4 py-2 focus:outline-purple-600 rounded-md w-full bg-white"
        />
        <input
          type="text"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
          placeholder="Enter your preffered short URL text"
          className="px-4 py-2 focus:outline-purple-600 rounded-md w-full bg-white"
        />
        <button
          onClick={generate}
          className=" cursor-pointer bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-2 font-bold text-white w-full"
        >
          Generate
        </button>
      </div>
      {generated&& <>
        <span className="font-bold text-lg">Your Link</span><code><Link target="_blank" href={generated}>{generated}</Link>
        </code></>}
    </div>
  );
};

export default page;
