
import { Card, CardBody, CardFooter, Image, Stack, Button, Heading, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom";


const ProductCard  = ({name,link,image,price}) =>{
    return(
        <>
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    h="130px"
    w="100%"
  >
    <Link to={link}>
    <Image
      objectFit='cover'
      maxW={{ base: '40%', sm: '140px' }}
      src={image}
      alt='Caffe Latte'
    />
    </Link>
  
    <Stack>
      <CardBody

      >
        <Heading fontSize='14px'><Link to={link}>{name}</Link></Heading>
  
        <Text mt ="2" fontSize='12px'>
          {price}
        </Text>
      </CardBody>
  
    </Stack>
  </Card>
        </>
    )

}

export default ProductCard