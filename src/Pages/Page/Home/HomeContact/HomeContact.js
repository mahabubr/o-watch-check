import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './HomeContact.css'
import { FaLocationArrow } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';


const HomeContact = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center drop-shadow-md'>Contact Us</h1>
                <p className='text-center my-4 mb-8'>If you have any doubt with us. Feel free and contact with us.</p>
            </div>
            <div className='mb-20 w-8/12 mx-auto block lg:flex justify-center items-center'>
                <div className='lg:w-4/12 p-8' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <h1 className='text-indigo-600 border-b-2 border-indigo-500 mb-10'>Contact Info</h1>
                    <div className='space-y-2'>
                        <div className='flex'>
                            <FaLocationArrow className='text-2xl mr-4 text-blue-500' />
                            <p>5100, Dhaka, Bangladesh</p>
                        </div>
                        <div className='flex'>
                            <AiFillPhone className='text-2xl mr-4 text-blue-500' />
                            <p>+880 12345-678910</p>
                        </div>
                        <div className='flex'>
                            <MdEmail className='text-2xl mr-4 text-blue-500' />
                            <p>admin@owatch.com</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-8/12' data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">
                    <MapContainer className='leaflet-container' center={[23.6850, 90.3563]} zoom={8} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[23.8103, 90.4125]}>
                            <Popup>
                                O Watch Check
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;