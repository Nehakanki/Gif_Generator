import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value);
  }

  function clickHandler() {
    fetchData(tag);
  }

  return (
    <div className="w-full md:w-1/3 border border-teal-950 bg-blue-400 rounded-lg flex flex-col p-3  items-center gap-y-7 mt-3">
      <h1 className="mt-4 text-2xl font-bold">Random {tag} Gif</h1>
      
      {
        loading ? (<Spinner />) : (<img src={gif} className="w-full p-3 sm:h-[300px] md:h-[300px] object-cover" alt="Gif" />)
      }

      <input
        className="w-10/12 md:w-4/12 opacity-80 py-2 text-center mb-7 rounded-lg text-lg"
        onChange={changeHandler}
        value={tag}
      />
      
      <button
        className="bg-green-100 w-10/12 md:w-9/12 opacity-80 py-2 mb-20 rounded-lg text-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
