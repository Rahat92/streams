import { BrowserRouter,Route,Routes } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import {history} from "../history";

const App = ()=>{
    return(
        <div className="ui container">
            <BrowserRouter history = {history}>
                <Header />
                <Routes>
                    <Route path="/" element = {<StreamList/>}/>
                    <Route path="/streams/new" element = {<StreamCreate />}/>
                    <Route path="/streams/edit/:userId" element = {<StreamEdit />}/>
                    <Route path="/streams/delete" element = {<StreamDelete />}/>
                    <Route path="/streams/show" element = {<StreamShow />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;