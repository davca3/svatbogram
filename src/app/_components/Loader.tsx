'use client';

import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const Loader = () => {
    const skeletonElements = [];
    const numberOfSkeletons = 16;
    for (let i = 0; i < numberOfSkeletons; i++) {
        skeletonElements.push(
            <Skeleton key={i} animation="wave" variant="rectangular" height={'100%'} width={'100%'} className='object-cover aspect-square' />
        );
    }

    return (
        <div className="grid grid-cols-3 gap-1 pt-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {skeletonElements}
        </div>
    )
}

export default Loader;