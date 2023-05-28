import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DropArrow from "../../public/dropArrow.png"
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


function TopProductDetails() {
  const [data, setData] = useState({
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        'red',
        'yellow',
        'yellow'
      ]
    },
    ],
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ],
  });


  useEffect(() => {
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((data) => data.json())
        .then((res) => {
          const label = [];
          const ids = [];
          let counter = 0;
          for (const user of res) {
            if (counter >= 3) {
              break;
            }
            label.push(user.name);
            ids.push(user.id);
            counter++;
          }
          setData({
            datasets: [
              {
                data: ids,
                backgroundColor: ['red', 'green', 'yellow'],
              },
            ],
            labels: label,
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);


  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
    <div className='bg-[#ffffff] lg:w-[480px] xxs:w-[350px] xl:w-[380px] rounded-[20px] h-[256px] flex flex-col items-center relative'>
      <div className="absolute left-2 top-[30px]">
        <h1 className="text-lg font-bold font-Mont">Top products</h1>
      </div>
      <div className="absolute right-2 top-[30px]">
        <h3 className="font-Mont text-sm text-[#858585] font-normal flex items-center">
          May - June 2021
          <Image
            src={DropArrow}
            alt="Drop Arrow"
            width={8}
            height={5}
            className="ml-2"
          />
        </h3>
      </div>
      <div className="w-[134px] h-[134px] top-[82px] absolute left-2" >
        <Pie data={data} options={options} />
      </div>
      <div className="absolute flex items-center right-[80px] top-[82px]">
        <div className="w-3 h-3 bg-green-700 rounded-full"></div>
        <span className="ml-2 text-sm font-bold text-black font-Mont">Basic Trees</span>
      </div>
      <span className="absolute top-[100px] right-[130px] font-lato font-normal text-sm text-[#858585]">31%</span>
      <div className="absolute flex items-center right-[57px] top-[129px]">
        <div className="w-3 h-3 bg-red-700 rounded-full"></div>
        <span className="ml-2 text-sm font-bold text-black font-Mont">Super Hoodies</span>
      </div>
      <span className="absolute top-[151px] right-[130px] font-lato font-normal text-sm text-[#858585]">14%</span>
      <div className="absolute flex items-center right-[17px] top-[186px]">
        <div className="w-3 h-3 bg-yellow-200 rounded-full"></div>
        <span className="ml-2 text-sm font-bold text-black font-Mont">Custom Short Pants</span>
      </div>
      <span className="absolute bottom-[30px] right-[130px] font-lato font-normal text-sm text-[#858585]">55%</span>
    </div>
  )
}

export default TopProductDetails
