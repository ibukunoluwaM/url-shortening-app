import React from "react";
import { useState } from "react";

import { useEffect } from "react";

function Search({ refProp }) {
  const [urlInput, setUrlInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState([]);
  const [copyClicked, setCopy] = useState("");
  const  [errorMsg, setErrorMsg] = useState("")
  //use effect for when the page first loads so it can show any existing list
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("shortenedLinks"));
    if (saved) {
      setShortenedLink(saved);
    }
  }, []);

  // now every time a fetch is completed, the link is added to localstorage
  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLink));
    console.log(shortenedLink);
  }, [shortenedLink]);


  // use useeffect to clear error
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg("")
    }, 3000);
  }, [errorMsg]);



  function onCopy(link) {
    navigator.clipboard.writeText(link);
    setCopy(link);
    // use set interval to clear the button back to normal after 3s
    setTimeout(() => {
      setCopy("")
    }, 3000);
  }

  const urlShorten = async (e) => {
    try {
      e.preventDefault();
      if (!urlInput) {
        // throw new Error("URL input is empty");
        setErrorMsg(`Please add a link`)
      }
      // fetch call
      const response = await fetch("http://localhost:5000/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: encodeURI(urlInput) }), // Correct form-encoded body
      });

      if (!response.ok) {
        throw new Error("Failed to shorten link!");
        
      }
      // get data
      const data = await response.json();
      if (data.result_url) {
        const newEntry = { original: urlInput, shortened: data.result_url };
        setShortenedLink([newEntry, ...shortenedLink]);
        setUrlInput("");
      }


    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
  };
  return (
    <div className="w-[100%] pt-4 bg-light-grey relative">
      <div className="w-[80%] mx-auto mt-2  bg-violet p-8 text-center rounded-md  relative ">
        <form className="flex flex-col md:flex-row items-center" onSubmit={urlShorten}
>
          <input
            className={`text-sm w-[100%] md:w-[70%] bg-white pl-4 h-[40px] outline-none rounded-md ${errorMsg ? "border border-x-5px border-solid border-red-700 text-red-500" : "border-none"}`}
            type="text"
            placeholder="Shorten url here..."
            ref={refProp}
            value={urlInput}
            onChange={(e) => {
              setUrlInput(e.target.value);
            }}
          ></input>

          <button
            type="submit"
            className="inline-block mt-2 md:mt-0 bg-cyan rounded-md p-2 ml-4 cursor-pointer"
          >
            Shorten URL
          </button>
        </form>
        {errorMsg && <p className="text-red-500 mt-2 text-left">Please add a link</p>}
      </div>
      {/* keep urls */}
      <div className="w-[80%] mx-auto mt-4 py-12 text-sm">
        {/* url */}
       {shortenedLink.map((item, index)=> {
        return <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-4 md:p-2 rounded-md mb-4">
          <p className="text-sm">{item.original}</p>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <hr className="w-[100%] mt-2 mb-2 md:display: none"/>
            <a className="md:mr-2 mb-2 text-sm text-cyan" href={item.shortened} target="_blank">{item.shortened}</a>
            <button className={copyClicked ? "copy-active" : "copyBtn"} onClick={()=> onCopy(item.shortened)}>{copyClicked ? "Copied" : "Copy"}</button>
          </div>
        </div>
       })}
      </div>
    </div>
  );
}

export default Search;
