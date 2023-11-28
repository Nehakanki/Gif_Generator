
import React from "react";

import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

//const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
 
// const [gif, setGif] = useState("");
// const[loading, setLoading]= useState('false')
// async function fetchData(){
//     setLoading(true); //before requesting the call
//     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
//    const {data}= await axios.get(url);//request
//     //return promise
//     console.log({data});
//     const imageSource= data.data.images.downsized_large.url;
//     console.log(imageSource);
//     setGif(imageSource);
//     setLoading(false); //set false if we get the api output
 
// }
// useEffect(() => {
  
// fetchData();
  
// }, [])

const{gif, loading, fetchData}=useGif();



  function clickHandler() {

    fetchData(); //to get random gif on every CLick

  }
  return (
    <div className="w-1/2  border border-teal-950 bg-green-400  rounded-lg flex flex-col items-center gap-y-7 mt-[4px]">
      <h1 className="mt-[4px] text-2xl font-bold">Random Gif</h1>
      


      {
        loading ? (<Spinner/>):(<img src={gif} width="450px" alt="Gif" />)
      }
      <button
        className="bg-green-100 w-9/12 opacity-80 py-2 mb-[20px] rounded-lg text-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;