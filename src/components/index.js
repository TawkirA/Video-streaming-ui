import SignIn from "./Auth/sign-in";
import SignUp from "./Auth/sign-up";
import NavBar from "./NavBar/nav-bar";
import Video from "./Video/video.js";
import VideoList from "./Video/video-list.js";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export default function Index(props) {
    const { isLoggedIn, setLoggedIn } = props;

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
            <BrowserRouter>
                { isLoggedIn ? 
                    <Routes>
                        <Route path="/video" element={<VideoList setLoggedIn={setLoggedIn} />}></Route>
                        <Route path="/video/:id" element={<Video setLoggedIn={setLoggedIn} />}></Route>
                    </Routes>  
                    :
                    <Routes>
                        <Route path="/" element={<SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}>
                        </Route>
                        <Route path="/signup" element={<SignUp setIsLoggedIn={setLoggedIn} />}>
                        </Route>
                    </Routes>                  
                }
            </BrowserRouter>
        </div>
    )
}