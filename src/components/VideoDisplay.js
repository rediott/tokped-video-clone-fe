import { Heading, Text } from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

const VideoDisplay = ({title,video,creator}) =>{
    return(
     <>
      
        
    <Box>
    
    <AspectRatio ratio={16 / 9} maxW='920px'>
        <iframe
            title={title}
            src={video}
            allowFullScreen
        />
    </AspectRatio>
    <Heading as='h2' size='xl' mt="8">
        {title}
    </Heading>
    <Text color='blue.600' fontSize='m' mt="4">
              
    By : {creator}
    </Text>
    </Box>
    
    </>

    )

}

export default VideoDisplay;