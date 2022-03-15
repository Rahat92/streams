import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StreamForm from './StreamForm';
import { createStream } from '../../actions';
const StreamCreate =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (formValues)=>{
        dispatch(createStream(formValues,navigate))
    }
        return (
            <div>
                <StreamForm onSubmit={onSubmit}/>
            </div>
        );
    }

export default StreamCreate;