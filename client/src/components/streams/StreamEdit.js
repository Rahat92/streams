import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream,editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ()=>{
    const { userId } = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchStream(userId))
        
    },[])
    const data = useSelector((state)=>{
        return state
    });
    
    const onSubmit = (formValues) => {
        dispatch(editStream(userId,formValues))
    }
    if(!data.streams[userId]){
        return(
            <div>
                Loading...
            </div>
        )
    }
    return(
        <div>
            <StreamForm 
                onSubmit={onSubmit}
                initialValues = {{
                    title:data.streams[userId].title,
                    description:data.streams[userId].description
                }}
            />
                        
        </div>
    )
}

export default StreamEdit;