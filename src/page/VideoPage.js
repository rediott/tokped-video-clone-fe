import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Center, Square, Circle, AbsoluteCenter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import useFetch from "../components/useFetch";
import { AspectRatio } from '@chakra-ui/react'

const VideoPage = () =>{
    const {id} =  useParams();
   
    const [video] = useFetch("http://localhost:4000/api/get/video/:"+parseInt(id))


    return(
       
        <>
        <Box w='100%' px={12} py={10}>
           
           <Heading as='h2' size='xl' textAlign="center" mb="12">
                {video.title}
           </Heading>
           <AspectRatio ratio={16 / 9} maxW='560px' m="auto">
                <iframe
                    title={video.title}
                    src={video.video}
                    allowFullScreen
                />
            </AspectRatio>
        
       </Box>
        </>
    )
}

export default VideoPage;