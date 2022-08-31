import React from "react";
import { useState, useEffect } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";

export default function Biography() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <>
            {hasMounted &&
                <div>
                    <h1>About Boty:</h1>

                    <h2>The composer, the legend</h2>
                    {/* <form >
                        <input type="text" name="first" placeholder="first" />
                        <input type="text" name="last" placeholder="last" />
                        <input type="submit" value="Get my song!" />
                    </form> */}
                </div>
            }
        </>
    );
}
