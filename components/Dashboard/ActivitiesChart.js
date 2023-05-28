import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import DropArrow from "../../public/dropArrow.png"
import Image from 'next/image';

ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
);

function ActivitiesChart() {
    const [data, setData] = useState({
        labels: ["Week1", "Week2", "Week3", "Week4"],
        datasets: [
            {
                label: "User",
                data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73],
                backgroundColor: 'transparent',
                borderColor: 'green',
                tension: 0.4,
                fill: true,
                showLine: true
            },

            {
                label: "Guest",
                data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73],
                backgroundColor: 'transparent',
                borderColor: 'red',
                tension: 0.4,
                fill: true,
                showLine: true
            }


        ]
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                const arr = json.map(item => item.id).reverse();
                const randomDataUser = getRandomData(arr, 150);
                const randomDataGuest = getRandomData(arr, 150);

                setData({
                    labels: ["Week1", "Week2", "Week3", "Week4"],
                    datasets: [
                        {
                            data: randomDataUser,
                            backgroundColor: 'transparent',
                            borderColor: 'green',
                            tension: 0.4,
                            fill: true,
                            showLine: true
                        },
                        {
                            data: randomDataGuest,
                            backgroundColor: 'transparent',
                            borderColor: 'red',
                            tension: 0.4,
                            fill: true,
                            showLine: true 
                        }
                    ],
                });
            });
    }, []);
    
    function getRandomData(data, count) {
        const randomData = [];
        const length = data.length;
        const visitedIndices = new Set();

        while (randomData.length < count) {
            const randomIndex = Math.floor(Math.random() * length);
            if (!visitedIndices.has(randomIndex)) {
                randomData.push(data[randomIndex]);
                visitedIndices.add(randomIndex);
            }
        }

        return randomData;
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        family: "Lato",
                        weight: 400,
                        size: 14,
                        style: "normal",
                    },
                    color: "#858585"

                }
            },
            y: {
                display: true,
                ticks: {
                    font: {
                        family: "Lato",
                        weight: 400,
                        size: 14,
                        style: "normal",
                    },
                    color: "#858585"

                }
            }
        },
        plugins: {
            tooltip: {
                displayColors: false
            },
            legend: {
                display: false // Hide the legend
            }
        }
    };

    return (

        <div className="w-[90%] lg:w-[70%] 2xl:w-[65%] h-[400px] flex flex-col items-center bg-[#ffffff] rounded-[20px] relative p-[40px] lg:ml-[300px]">
            <div className="top-0 right-0 flex flex-col ">
                <h1 className="absolute top-0 left-0 mt-3 text-lg font-bold xxs:ml-6 md:ml-[34px] font-Mont">Activities</h1>
                <h3 className="absolute left-0  xxs:ml-6  md:ml-[34px] font-Mont text-sm text-[#858585] font-normal flex items-center">
                    May - June 2021
                    <Image
                        src={DropArrow}
                        alt="Drop Arrow"
                        width={8}
                        height={5}
                        className="ml-1"
                    />
                </h3>
            </div>
           
            <div className="absolute top-0 right-0 flex items-center mt-6 xxs:mr-[30px] mr-[60px]">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="ml-2 text-sm font-normal text-black font-lato">Guest</span>
                <div className="ml-[35px]"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="ml-2 text-sm font-normal text-black font-lato">User</span>
            </div>
            <Line data={data} options={options} className="mt-[40px]" />
        </div>
    );
}

export default ActivitiesChart;
