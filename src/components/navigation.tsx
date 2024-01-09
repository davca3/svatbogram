'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navigation() {
    return (
        <AppBar position="static">
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <h1 
                        className="text-3xl">
                        Svatbogram
                    </h1>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navigation;