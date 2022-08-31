import React from "react";
import { useState, useEffect } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import MidiPlayer from "react-midi-player";

export default function SongMaker({ songName, isPlaying, onSubmit }) {
    const context = new AudioContext();

    // useEffect(() => {
    //     const fetch_first = async () => {
    //         const res = await fetch("api/juanes/");
    //         console.log(("res:", res));
    //         const data = await res.json();
    //         console.log("data:", data);
    //         setUsers(data);
    //     };
    //     fetch_first().catch(console.error);
    // }, []);

    // function onSubmit(e) {
    //     e.preventDefault();
    //     const firstName = e.target.first.value;
    //     const lastName = e.target.last.value;
    //     const post_data = async () => {
    //         const res = await fetch("api/postdata/", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 firstName: firstName,
    //                 lastName: lastName,
    //             }),
    //         });

    //         const data = await res.json();
    //         setSongName(data);
    //         setIsPlaying(true);
    //     };
    //     post_data();
    // }

    return (
        <>
            <div className={isPlaying ? "mood" : ""}>
                <div className="wrapper">
                    <div>
                        <h1>DAILY SONG CREATOR</h1>

                        <h2 >TELL BOTY HOW IS YOUR MOOD TODAY: "good" or "funky"</h2>
                        <form onSubmit={onSubmit}>
                            <input
                                type="text"
                                name="first"
                                placeholder="first"
                            />
                            {/* <select >
                                <option value={'first'}>good </option>
                                <option value={'first'}>bad</option>
                            </select> */}

                            <input type="submit" value="Get my song!" />
                        </form>
                    </div>
                    <div>
                        {songName && (
                            <MidiPlayer
                                autoplay={true}
                                src={`media/${songName}`}
                            />
                        )}
                    </div>
                    <div className={isPlaying ? "reload": "hiddenBtn"} onClick={() => location.reload()}>Another song</div>
                </div>
            </div>
        </>
    );
}
