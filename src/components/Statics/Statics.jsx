import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Statics = () => {
    const marks = [
        {
            Assignment_name: "First assignment",
            Assignment_id: 1,
            Assignment_number: 30,
        },
        {
            Assignment_name: "second assignment",
            Assignment_id: 2,
            Assignment_number: 27
        },
        {
            Assignment_name: "third assignment",
            Assignment_id: 3,
            Assignment_number: 30
        },
        {
            name: "fourth assignment",
            Assignment_id: 4,
            Assignment_number: 60,
        },
        {
            Assignment_name: "fivth assignment",
            Assignment_id: 5,
            Assignment_number: 58,
        },
        {
            Assignment_name: "sixth assignment",
            Assignment_id: 6,
            Assignment_number: 56,
        }
    ];
    return (
        <div>
            <ComposedChart width={500} height={300} data={marks}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}>
                {/* <Line dataKey="Assignment_number"></Line> */}
                <XAxis dataKey="Assignment_id" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Assignment_number" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="Assignment_id" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default Statics;