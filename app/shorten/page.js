"use client"
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {

      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    
    seturl("")
    setshorturl("")
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    alert(result.message)
    
    console.log(result)})
  .catch((error) => console.error(error));
    }

  return (
    <div className="bg-purple-200 w-lg px-5 py-8 mx-auto flex flex-col gap-10 items-center justify-center mt-10 rounded-xl ">
      <h1 className="text-3xl font-bold">Shorten your URL</h1>
      <div className="flex flex-col justify-center gap-4">
        <input type="text"
        value={url}
         placeholder="Enter your URL"
        onChange={e =>{seturl(e.target.value)}}
         className="p-3 w-[50vh] bg-white focus:outline-purple-600 rounded-md"/>
        <input type="text"
        placeholder="Enter your perferred short URL"
        value={shorturl}
        onChange={e =>{setshorturl(e.target.value)}}
        className="p-3 w-[50vh] bg-white focus:outline-purple-600  rounded-md" />
        <button onClick={generate} className="bg-purple-500 rounded lg py-2 px-6 shadow-lg text-white text-2xl font-bold">Generate</button>

      </div>

      {generated && <><span className="font-bold text-lg">Your URL : </span>
      <code> <Link target="blank" href={generated}>{generated}</Link>
        </code></>}
    </div>
  )
}

export default Shorten
