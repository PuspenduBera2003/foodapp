import React, { useState } from "react";
import SnackBarContext from "./SnackBarContext";

const SnackBarState = (props) => {
    const [open, setOpen] = useState(false);
    const [snackbarDetails, setSnackbarDetails] = useState({
        message: '',
        color: '',
    });;

    const handleSnackBarOpen = () => {
        setOpen(true);
    };

    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <SnackBarContext.Provider value={{ open, handleSnackBarOpen, handleSnackBarClose, snackbarDetails, setSnackbarDetails }}>
            {props.children}
        </SnackBarContext.Provider >
    )

}

export default SnackBarState;