import { title } from "faker/lib/locales/az";
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStreams } from "../../actions";
const MyStreams = () => {
    const {authId} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchStreams());
    },[])
    const store = useSelector(state=>Object.values(state.streams));
    const checking = ()=>{
        return store.map(item=>{
            if(item.userId === authId){
                return(
                    <div>
                        {item.title}
                    </div>
                )
            }
        }) 
    }  
    if(!store){
        return(
            <div>Loading...</div>
        )
    }
    else{
        return (
            <div>{checking()}</div>
        )
    }
}
export default MyStreams;