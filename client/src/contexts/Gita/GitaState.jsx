import React from "react";
import GitaContext from "./GitaContext";

const GitaState = (props) => {
    const host = process.env.REACT_APP_HOST_SERVER;

    const getShloka = async (chapter, shloka) => {
        // API call

        const url = `${host}/api/gita/getshloka`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({chapter, shloka})
        });

        // Showing Shloka at Client Side
        const json = await response.json()
        return json;
    }

    return (
        <GitaContext.Provider value={{ getShloka }}>
            {props.children}
        </GitaContext.Provider >
    )

}

export default GitaState;