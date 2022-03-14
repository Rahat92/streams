import React from 'react';
import { useDispatch } from 'react-redux';
import StreamForm from './StreamForm';
import { createStream } from '../../actions';
const StreamCreate =()=>{
    const dispatch = useDispatch();
    const onSubmit = (formValues)=>{
        dispatch(createStream(formValues))
    }
        return (
            <div>
                <StreamForm onSubmit={onSubmit}/>
            </div>
        );
    }

export default StreamCreate;