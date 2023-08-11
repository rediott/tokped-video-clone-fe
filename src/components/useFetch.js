import { useState, useEffect } from "react";

const useFetch= (url) =>{
    const [item,setItem] = useState([]);
      
    useEffect(()=>{
          const getData = async () => {
                try{
                   const data = await fetch(url);
                   const result = await data.json();

                   setItem(result);
                }
                catch(e){
                      console.log("cannot fetch data", e.message);
                }
          }

    getData();
    }, [])

    return [item];
}


export default useFetch;