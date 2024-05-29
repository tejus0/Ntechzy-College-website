import React from 'react'
import AboutImg from "../../../assets/AboutImage.jpg";
import { useState, useEffect } from 'react';
// import About2List from "../About2/About2ListData.json"

const About2 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const module = await import('./About2ListData.json'); // Replace './data.json' with the path to your JSON file in the public directory
      const jsonData = module.default;
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  console.log(new Date());

  return (
<div class="grid grid-cols-2 h-[25rem] bg-red-600 gap-3">
  <div className='bg-blue-500'>
    <img className="object-cover h-full" src={AboutImg} alt="" />
  </div>
  <div className="w-full flex pl-5">
  <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
  
  {data.sort((a, b) => (
    new Date(b.date) - new Date(a.date))).map((x, i) => (
    <li class="pb-3 sm:pb-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
       <div class="flex-shrink-0">
          <img class="w-8 h-8 rounded-full" src={x.image} alt="Neil image"/>
       </div>
       <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
             {x.title}
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
             {x.description}
          </p>
       </div>
       <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {x.date}
          
       </div>
    </div>
 </li>
  ))}
</ul>
      {/* <ol className="space-y-3 ">
      <li className="group/item hover:bg-slate-100 text-body-color dark:text-dark-6 flex text-base h-[30%]">
      <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded-full text-base text-white">
        1
      </span>
      <div>
      <h3 className='title'> Title</h3>
    <div className='flex flex-row '>
        <h4>text</h4>
        <h5>subtext</h5>
    </div>
      </div>
      <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible" href="#">
        <span class="group-hover/edit:text-blue-700 ">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ">
        </svg>
      </a>
    </li>
      <li className="group/item text-body-color dark:text-dark-6 flex text-base h-[30%]">
      <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded-full text-base text-white">
        2
      </span>
      <div class="ml-3 ">
        <h3 class="text-lg font-medium text-slate-900">name</h3>
        <p class="text-sm text-slate-500 truncate">mail</p>
        <div className='flex flex-row '>
        <h4>text</h4>
        <h5>subtext</h5>
    </div>
      </div>
      <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible" href="#">
        <span class="group-hover/edit:text-blue-700 ">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ">
        </svg>
      </a>
    </li>
      <li className="text-body-color dark:text-dark-6 flex text-base h-[30%]">
      <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded-full text-base text-white">
        3
      </span>
      <div>
      <h3> Title</h3>
    <div className='flex flex-row '>
        <h4>text</h4>
        <h5>subtext</h5>
    </div>
      </div>
    </li>
      </ol> */}
    </div>
</div>
  )
}

export default About2;
