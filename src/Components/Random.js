import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData(); //to get random gif on every Click
  }

  return (
    <div className="w-full md:w-1/2 border border-teal-950 bg-green-400 rounded-lg flex flex-col items-center gap-y-7 mt-4 ">
      <h1 className="mt-4 text-2xl font-bold">Random Gif</h1>
      
      {
        loading ? (<Spinner />) : (<img src={gif} className="w-full" alt="Gif" />)
      }

      <button
        className="bg-green-100 w-9/12 opacity-80 py-2 mb-20 rounded-lg text-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
