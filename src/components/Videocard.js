import { Card, CardHeader, CardBody, CardFooter, Stack, Button, Divider, Text, Heading,ButtonGroup, Image } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { Wrap, WrapItem } from '@chakra-ui/react'

const Videocard = ({thumbnail,title,video,creator}) => {
    return(
        <WrapItem>
        <Card maxW='sm'>
        <CardBody>
          <Image
            src={thumbnail}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text color='blue.600' fontSize='sm'>
             {creator}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
            <Link to={video}>Watch</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      </WrapItem>
    )

}

export default Videocard;