import React from "react";
import { useState, useEffect } from "react";

// import MidiPlayer from "web-midi-player";
import MidiPlayer from "react-midi-player";

function App() {
    const [users, setUsers] = useState([]);
    const [songName, setSongName] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    console.log('song:', songName);
    const context = new AudioContext();
    useEffect(() => {
        const fetch_first = async () => {
            const res = await fetch("api/juanes/");
            console.log(("res:", res));
            const data = await res.json();
            console.log("data:", data);
            setUsers(data);
        };
        fetch_first().catch(console.error);
        // console.log('first state', context.state, context);
        // if (context.state === "suspended") {
        //     context.resume();
        // }
    }, []);

    useEffect(() => {}, [isPlaying]);

    function onSubmit(e) {
        e.preventDefault();
        const firstName = e.target.first.value;
        const lastName = e.target.last.value;
        const post_data = async () => {
            const res = await fetch("api/postdata/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                }),
            });

            const data = await res.json();
            setSongName(data);
            setIsPlaying(true);

            console.log("dataPOST:", data, "context:", context.state);
        };
        post_data();
    }

    return (
        <>
            <div className={isPlaying ? "mood" : ""}>
                <h1>DAILY SONG CREATOR!!!</h1>
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
        </>
    );
}

export default App;
