import { Card, CardHeader, CardBody, CardFooter, Stack, Button, Divider, Text, Heading,ButtonGroup, Image } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { Wrap, WrapItem } from '@chakra-ui/react'



const Videocard = ({thumbnail,title,video,creator}) => {
    return(
      
        <Card maxW='sm'
       
         overflow='hidden'
         variant='outline'>
        
        <Link to={video}>
        <Image
            objectFit='cover'
            src={thumbnail}
          />
        </Link>
        
        <CardBody>
   
          <Stack spacing='2'>

            <Heading size='sm'><Link to={video}>{title}</Link></Heading>
            <Text color='blue.600' fontSize='small'>
              
             {creator}
            </Text>
          </Stack>
        </CardBody>
      </Card>
     
    )

}

export default Videocard;