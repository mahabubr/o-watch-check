import React from 'react';
import { useState } from 'react';

import MovingComponent from 'react-moving-text'

const HomeTextSlider = () => {

    return (
        <MovingComponent
            type="squeezeHorizontal"
            duration="4000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none">
            <p className='text-sm text-justify text-black mt-4 w-9/12 rounded-lg mx-auto bg-pink-200 p-4'>the seller receives a notification through direct message, and after agreeing on the terms of sale, the seller will reserve the item for the buyer and schedule a meet up.</p>
        </MovingComponent>
    );
};

export default HomeTextSlider;