import { useState } from "react";
import { useNavigate } from "react-router-dom";
const useHistory = ()=>{
    const navigate = useNavigate();
    const [initialState,setState] = useState();
    const onSubmit = () =>{
        setState(navigate('/'))
    }
    return {initialState};
}
export default useHistory;