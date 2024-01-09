'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

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