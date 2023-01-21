import React from 'react';
import { Helmet } from 'react-helmet';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

const data = [
    {
        subject: 'Watch',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Sell',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Buy',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Reported',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Wishlist',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'User',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

const Dashboard = () => {
    return (
        <>
        <Helmet>
                <title>O-Watch Check - Dashboard</title>
            </Helmet>
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
        </>
    );
};

export default Dashboard;