import React from 'react';
import { SpinnerInfinity } from 'spinners-react';

const Loader = () => {
    return (
        <SpinnerInfinity className='h-screen w-screen mx-auto flex justify-center items-center' />
    );
};

export default Loader;