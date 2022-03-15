import React,{useEffect} from 'react';
import Modal from '../Modal';
import { useNavigate, useParams, Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchStream,deleteStream } from '../../actions';
const StreamDelete = ()=>{
    const navigate = useNavigate();
    const { userId } = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchStream(userId))
    },[])
    const stream = useSelector(state=>{
        return state.streams[userId];
    })
    const streamDelete = () => {
        dispatch(deleteStream(userId,navigate));
    }
    const actions = (
        <React.Fragment>
            <button onClick={streamDelete} className='ui primary button'>Delete</button>
            <Link to='/' className='ui button'>Cancel</Link>
        </React.Fragment>
    )
    const deleteWithTitle = ()=>{
        if(!stream){
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete this stream with title: ${stream.title}`
    }
        return(
                <Modal 
                    title = "Delete Stream"
                    content = {deleteWithTitle()}
                    actions = {actions}
                    onDismiss = {()=>navigate('/')}
                />
        )
    
}
export default StreamDelete;