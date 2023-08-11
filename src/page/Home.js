import Videocard from "../components/Videocard";
import { useEffect,useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Center, Square, Circle, AbsoluteCenter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'



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
       
        <Box w='100%' px={12} py={10}>
           
            <Heading as='h2' size='xl' textAlign="center" mb="12">
                  Video yang Cocok Menemani waktu Makan
            </Heading>
            

        <SimpleGrid columns={4} spacing={10}>
             {renderVideo}
        </SimpleGrid>
        </Box>

        </>
    )
}

export default Home;