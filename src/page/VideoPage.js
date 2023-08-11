import { useParams } from "react-router-dom";

const VideoPage = () =>{
    const {id} =  useParams();
    return(
       
        <>
        <h1>This is my video {id} page</h1>
        </>
    )
}

export default VideoPage;