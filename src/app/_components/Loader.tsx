import React from 'react';
import { CircularProgress } from '@mui/material';

export const Loader = () => {
    return (
        <div className="flex justify-center">
            <CircularProgress />
        </div>
    )
}