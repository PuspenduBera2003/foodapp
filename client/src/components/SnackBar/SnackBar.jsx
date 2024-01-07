import React, { useContext } from 'react'
import SnackBarContext from '../../contexts/SnackBar/SnackBarContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = () => {
    const snackBarContext = useContext(SnackBarContext);
    const { open, handleSnackBarClose, snackbarDetails } = snackBarContext;
    return (
        <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleSnackBarClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert onClose={handleSnackBarClose} severity={snackbarDetails.color} sx={{ width: '100%' }}>
                {snackbarDetails.message}
            </Alert>
        </Snackbar>
    )
}

export default SnackBar
