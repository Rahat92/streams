import { BrowserRouter,Route,Routes } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import MyStreams from './streams/MyStreams';
import Header from "./Header";

const App = ()=>{
    return(
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element = {<StreamList/>}/>
                    <Route path="/streams/new" element = {<StreamCreate />}/>
                    <Route path="/streams/edit/:userId" element = {<StreamEdit />}/>
                    <Route path="/streams/delete/:userId" element = {<StreamDelete />}/>
                    <Route path="/streams/:userId" element = {<StreamShow />}/>
                    <Route path="/streams/myStreams/:authId" element = {<MyStreams />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;