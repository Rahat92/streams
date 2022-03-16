import React, { useEffect,useRef } from 'react';
import flv from 'flv.js';
import { fetchStream } from '../../actions';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { use } from 'bcrypt/promises';
const StreamShow = ()=>{
    const {userId} = useParams();
    const dispatch = useDispatch();
    
    const videoRef = useRef();
    const stream = useSelector(state=>state.streams[userId]);
    useEffect(()=>{
        const player = flv.createPlayer({ 
        
            type:'flv',
            url:`http://localhost:8000/live/${userId}.flv`
        }); 
        dispatch(fetchStream(userId))
        .then(()=>{
           
            player.attachMediaElement(videoRef.current);

            player.load();
        
        })
        return ()=>player.destroy();
    },[])
      
    
      
   
    if(!stream){
        return(
            <div>
                Loading...
            </div>
        )
    }
    const { title, description } = stream;
    return(
        <div>
            <video ref = {videoRef} style = {{width:"100%"}} controls/>
            <h1>{title}</h1>
            <h5>{description}</h5>
        </div>
    )
}
export default StreamShow;



// import React, { useEffect,useRef } from 'react';
// import {ReactFlvPlayer} from 'react-flv-player'
// import { fetchStream } from '../../actions';
// import { useParams } from 'react-router-dom';
// import { useSelector,useDispatch } from 'react-redux';
// const StreamShow = ()=>{
//     const {userId} = useParams();
//     const dispatch = useDispatch();
    
//     const videoRef = useRef();
//     const stream = useSelector(state=>state.streams[userId]);
//     useEffect(()=>{
//         dispatch(fetchStream(userId))
//         .then(()=>console.log("have a relax"))
//     },[])
      
    
    
   
//     if(!stream){
//         return(
//             <div>
//                 Loading...
//             </div>
//         )
//     }
//     const { title, description } = stream;
//     return(
//         <div>
//             <ReactFlvPlayer
//                 url =  {`http://localhost:8000/live/${userId}.flv`}
//                 heigh = "800px"
//                 width = "800px"
//                 isMuted={false}
//             />
//             <h1>{title}</h1>
//             <h5>{description}</h5>
//         </div>
//     )
// }
// export default StreamShow;