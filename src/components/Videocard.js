import { Card,  CardBody,  Stack,  Text, Heading, Image } from '@chakra-ui/react'
import { Link } from "react-router-dom";



const Videocard = ({thumbnail,title,video,creator,id}) => {

    const vidLink = "http://localhost:3000/video/"+id
    return(
      
        <Card maxW='sm'
       
         overflow='hidden'
         variant='outline'>
        
        <Link to = {vidLink}>
        <Image
            objectFit='cover'
            src={thumbnail}
          />
        </Link>
        
        <CardBody>
   
          <Stack spacing='2'>

            <Heading size='sm'><Link to={vidLink}>{title}</Link></Heading>
            <Text color='blue.600' fontSize='small'>
              
             {creator}
            </Text>
          </Stack>
        </CardBody>
      </Card>
     
    )

}

export default Videocard;