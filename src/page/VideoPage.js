import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import useFetch from "../components/useFetch";
import VideoDisplay from "../components/VideoDisplay";
import { Grid, GridItem } from '@chakra-ui/react'
import ProductCard from "../components/ProductCard";
import { SimpleGrid } from '@chakra-ui/react'

const VideoPage = () =>{
    const {id} =  useParams();
   
    const [video] = useFetch("http://localhost:4000/api/get/video/:"+parseInt(id));
    const [product] = useFetch("http://localhost:4000/api/getAll/product");

    
    function shuffleArray(array) {
            let i = array.length - 1;
            for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    }
    return array;
  }

  const shuffledProduct = shuffleArray(product)
    const renderProduct = shuffledProduct.slice(0,5).map((item)=> {
        return(
          <ProductCard name = {item.name} link = {item.link} image = {item.image} price= {item.price}/>
        )
       });

    return(
       
        <>
        <Box w='100%' px={12} py={10}>
            <Grid  gap={4}  
            
            templateRows='repeat(4, 1fr)'
            templateColumns='repeat(7, 1fr)' >
                
            <GridItem rowSpan={4} colSpan={5} >
                <Grid gap={100} >

                
                <GridItem rowSpan={4} >
                     <VideoDisplay title={video.title} video = {video.video} />
                </GridItem>

                <GridItem rowSpan={4} >
                    <Heading as='h3' size='lg' mb="12">
                         Comment Section
                    </Heading>
                </GridItem>

                </Grid>

            

            </GridItem>

            <GridItem rowSpan={4} colSpan={2} >
                <Box w='100%' px={4}>
                    <SimpleGrid columns={1} spacing={4}>
                           {renderProduct}
                    </SimpleGrid>
                </Box>

            </GridItem>

            </Grid>
           
            
        
       </Box>
        </>
    )
}

export default VideoPage;