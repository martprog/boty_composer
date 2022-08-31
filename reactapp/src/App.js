import React from "react";
import { useState, useEffect } from "react";
import {
    Link,
    BrowserRouter as Router,
    Route,
    Routes,
    Switch,
} from "react-router-dom";
import SongMaker from "./SongMaker";
import Biography from "./Biography";

// import MidiPlayer from "web-midi-player";
import MidiPlayer from "react-midi-player";

function App() {
    const [users, setUsers] = useState([]);
    const [songName, setSongName] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
   
    
    // useEffect(() => {
    //     const fetch_first = async () => {
    //         const res = await fetch("/api/juanes/");
    //         console.log(("res:", res));
    //         const data = await res.json();
    //         console.log("data:", data);
    //         setUsers(data);
    //     };
        
    //     fetch_first().catch(console.error);
    // }, []);

    useEffect(() => {}, [isPlaying]);

    function onSubmit(e) {
        console.log(e.target.value)
        e.preventDefault();
        const firstName = e.target.first.value
        
        const post_data = async () => {
            const res = await fetch("api/postdata/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstName.toLowerCase(),
                }),
            });

            const data = await res.json();
            setSongName(data);
            setIsPlaying(true);
        };
        post_data();
    }

    return (
        <>
            <Router>
                <nav className="navbar">
                    <div>
                        <Link to={"/"}>Home</Link>
                    </div>
                    <div>
                        <Link to={"/about"}>About</Link>
                    </div>
                </nav>

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <SongMaker
                                songName={songName}
                                isPlaying={isPlaying}
                                onSubmit={onSubmit}
                            />
                        }
                    ></Route>
                    <Route path="/about" element={<Biography />}></Route>
                </Routes>
            </Router>
            {/* <div className={isPlaying ? "mood" : ""}>
                <div >
                    <h1>DAILY SONG CREATOR</h1>
                    
                    <h2>TELL BOTY HOW IS YOUR MOOD TODAY:</h2>
                    <form onSubmit={onSubmit}>
                        <input type="text" name="first" placeholder="first" />
                        <input type="text" name="last" placeholder="last" />
                        <input type="submit" value="Get my song!" />
                    </form>
                </div>
                <div>
                    {songName && (
                        <MidiPlayer autoplay={true} src={`media/${songName}`} />
                    )}
                </div>
            </div> */}
        </>
    );
}

export default App;
