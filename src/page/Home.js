import Videocard from "../components/Videocard";
import { Container } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Flex, Spacer, HStack } from '@chakra-ui/react'
import { useEffect,useState } from 'react';


const Home = () =>{

    const [video,setVideo] = useState([]);
      
    useEffect(()=>{
          const getData = async () => {
                try{
                   const data = await fetch("http://localhost:4000/api/getAll/video");
                   const result = await data.json();

                   setVideo(result);
                }
                catch(e){
                      console.log("cannot fetch data", e.message);
                }
          }

    getData();
    }, [])

    const renderVideo = video.map((item)=> {
          return(
            <Videocard thumbnail= {item.thumbnail} title = {item.title} video = {item.video} creator = {item.creator}/>
          )
         })

    return(
        <>
        <Flex>
      <HStack spacing='24px'>
           {renderVideo}
      </HStack>
     </Flex>
        </>
    )
}

export default Home;