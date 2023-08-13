import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Button,
    VStack
  } from '@chakra-ui/react'


  import { useEffect,useState } from 'react';

const CommentForm = ({ index, addCommentToRender }) =>{
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Create an object with user's username and comment
      const newComment = { username, comment };
  
      try {
        // Send the new comment data to the backend using fetch or an API library
        const response = await fetch('http://localhost:4000/api/post/comment/:'+parseInt(index), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newComment),
        });
  
        if (response.ok) {
          // Clear the form fields after successful submission
          setUsername('');
          setComment('');
          // You can also show a success message to the user
          addCommentToRender(newComment);
          console.log('Comment submitted successfully!');
          alert('Comment submitted successfully!');
          
        } else {
          console.error('Error submitting comment');
          alert('Error submitting comment');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  

    return(
        <>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>

            <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="text"  maxW="560px" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </FormControl>

            <FormControl id="comment">
                <FormLabel>Comment</FormLabel>
                <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required

                maxW="560px"  mt="1"
                />
             </FormControl>
            <FormControl>
             <Button type="submit" colorScheme="blue" mt="6" display={{ base:"block"}}>
                Submit
            </Button>
            </FormControl>

    </VStack>
        </>
    )
}
export default CommentForm;