
import { useEffect,useState } from 'react';
import axios from "axios";

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
//const tagUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

const useGif = (tag) => {
  const [gif, setGif] = useState("");
const[loading, setLoading]= useState('false');


async function fetchData(tag){
    setLoading(true); //before requesting the call
    if(tag?"tag hai idhar":"nothing");
   const {data}= await axios.get(tag?`${url}&tag=${tag}`:url);//request
    //return promise
    console.log({data});
    const imageSource= data.data.images.downsized_large.url;
    console.log(imageSource);
    setGif(imageSource);
    setLoading(false); //set false if we get the api output
 
}
useEffect(() => {
  
fetchData('car');
  
}, [])

return {gif,loading, fetchData};
}



export default useGif
