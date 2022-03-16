import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import GoogleAuth from '../components/GoogleAuth';
import { fetchStreams } from "../actions";
const Header = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchStreams());   
    },[])
    const store = useSelector(state=>state.auth.userId);
    console.log(store);
    return(
        <div className="ui secondary pointing menu">
            <Link to = {`/streams/mystreams/${store}`}className="item">
                Streamy
            </Link>
            <div className="right menu">
                <Link to = "/"className="item">
                    All Streams
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    )
}
export default Header;