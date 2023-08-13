import { Card, CardHeader, CardBody, CardFooter,Heading,Box,Text, Image, Flex } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const Comment = ({username,comment, createdAt}) =>{

    return(
        <>
        <Card

          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        
        >
        <Box p="5">
            <Avatar bg='blue' size='md' name={username} color="white"/>
        </Box>
        

        <Box p="4">
            <Flex>

            <Heading size='md'>
                 {username}
            </Heading>

            <Text  fontSize='xs' mt="1" ml="4">
              {createdAt}
            </Text>

            </Flex>

            <Text pt='2' fontSize='md'>
                 {comment}
            </Text>
        </Box>
        </Card>
        </>
    )
}
export default Comment;