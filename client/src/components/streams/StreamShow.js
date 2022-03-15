import React, { useEffect } from 'react';
import { fetchStream } from '../../actions';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
const StreamShow = ()=>{
    const {userId} = useParams();
    console.log(userId)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchStream(userId))
    },[])
    const stream = useSelector(state=>state.streams[userId]);
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
            <h1>{title}</h1>
            <h5>{description}</h5>
        </div>
    )
}
export default StreamShow;