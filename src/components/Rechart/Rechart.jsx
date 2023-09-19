import React from "react";
import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Rechart = () => {
    const studentMarks = [
        { name: "Alice", math: 90, physics: 85, id: 1 },
        { name: "Bob", math: 75, physics: 92, id: 2 },
        { name: "Charlie", math: 88, physics: 78, id: 3 },
        { name: "David", math: 95, physics: 89, id: 4 },
        { name: "Eve", math: 82, physics: 91, id: 1 },
    ];

    return (
        <div>
            <h1>Wanna watch rechart</h1>
            <LineChart
                className="mt-20 mx-auto"
                width={500}
                height={300}
                data={studentMarks}
                // margin={{
                //     top: 50,
                //     right: 5,
                //     left: 0,
                //     bottom: 0,
                // }}
            >
                <XAxis dataKey={`name`}></XAxis>
                <YAxis dataKey={`math`}></YAxis>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <Tooltip></Tooltip>
                <Line type="monotone" dataKey="math" stroke="#82ca9d" />
                <Line type="monotone" dataKey="physics" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Rechart;
