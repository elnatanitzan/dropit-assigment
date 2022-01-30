import { forwardRef, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CheckoutSnackbars() {

  const open = useSelector((state: any) => state.cart.openSnackBar)

  const [openSnackBar, setOpenSnackBar] = useState(false)

  const dispatch  = useDispatch();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({type: 'CLOSE_SNACK'});
  };

  useMemo(
      () => {
          if(open) setOpenSnackBar(open)
      },[open]
  )

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Purchase completed successfully!
        </Alert>
      </Snackbar>
    </Stack>
  );
}