import { ThemeOptions } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';

export const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6b7557',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Sacramento',
        }
    },
});