// 'use client';

// import React, { useState } from 'react';
// import Snackbar from '@mui/material/Snackbar';
// import Alert, { AlertColor } from '@mui/material/Alert';
// import { FunctionComponent, PropsWithChildren } from "react";
// import { Slide, SlideProps } from '@mui/material';

// interface SnackbarContextProps {
//     message: string;
//     severity?: AlertColor;
//     timeout?: number;
//     showMessage: (message: string, severity?: AlertColor, timeout?: number) => void;
// }

// export const SnackbarContext = React.createContext<SnackbarContextProps>({
//     message: '',
//     severity: 'success',
//     timeout: 6000,
//     showMessage: () => { },
// });

// export const SnackbarProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
//     const [message, setMessage] = useState('');
//     const [severity, setSeverity] = useState<AlertColor>('success');
//     const [timeout, setTimeout] = useState<number>(6000);

//     const showMessage = (newMessage: string, newSeverity?: AlertColor, timeout?: number) => {
//         setMessage(newMessage);
//         if (newSeverity) {
//             setSeverity(newSeverity);
//         }
//         if(timeout) {
//             setTimeout(timeout);
//         }
//     };

//     const handleClose = () => {
//         setMessage('');
//     };

//     return (
//         <SnackbarContext.Provider value={{ message, showMessage }}>
//             {children}
//             <Snackbar
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                 }}
//                 TransitionComponent={(props: SlideProps) => <Slide {...props} direction="up" />}
//                 open={message !== ''}
//                 autoHideDuration={timeout}
//                 onClose={handleClose}>
//                 <Alert onClose={handleClose} severity={severity} variant="filled">
//                     {message}
//                 </Alert>
//             </Snackbar>
//         </SnackbarContext.Provider>
//     );
// };
