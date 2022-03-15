import _ from 'lodash';
import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStream,editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ()=>{
    const navigate = useNavigate();
    
    const { userId } = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchStream(userId))
        
    },[])
    const data = useSelector((state)=>{
        return state.streams[userId]
    });
    
    const onSubmit = (formValues) => {
        dispatch(editStream(userId,formValues,navigate))
    }
    if(!data){
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
                initialValues = {_.pick(data,'title','description')}
            />
                        
        </div>
    )
}

export default StreamEdit;