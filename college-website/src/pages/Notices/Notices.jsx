import React from "react";

const Notices = () => {
  const latestNews = [
    "16 Feb 2022 Ph D merit list Part 01_16 Feb 2022",
    "16 Feb 2022 Ph D merit list Part 02_16 Feb 2022",
    "17 Oct 2022 Consolidate academic Calender",
  ];

  const upcomingEvents = [
    "29 April Seminar is conducted on BCA courses.",
    "30 April Seminar is conducted on B.com courses.",
    "2 Mar Conducted its 2nd convocation ceremony.",
    "5 Mar Annual Meeting for Batch of BBA ( 2018 to 2021 ) and seminar will be conducted for future growth and opportunity.",
  ];

  const noticeBoard = [
    "Participation in Climate Correction Day (CCD) Challenge for Mission LiFE",
    "West Zone Inter University Table Tennis (man) Tournament 2022-23",
    "PhD Registration Form for Selected Candidates",
    "List of Activities organised under TEQIP-III",
    "Documents for empanelment of vendor for A Class contractor",
    "School of Architecture College Level counselling 2022-23",
  ];
  return (
    <div className=" min-h-[48vh]">
      <div className=" flex align-center justify-center">
      <h1 class="mb-4 text-4xl border-b pb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">NOTICE BOARD</h1>
      {/* <h3 class="mb-4 border-b pb-4 text-8xl leading-tight"> NOTICE BOARD</h3> */}
      {/* <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> NOTICE BOARD</h1> */}
      </div>
      <div className=" md:container md:mx-auto  p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-lg rounded-lg bg-green-500">
          <div className="flex justify-between  pb-4">
              <div className="text-3xl font-bold  py-2 px-4">Latest News</div>
                <button class="bg-red-500 hover:bg-blue-700 text-white py-2 px-4 square-full">
                  View All
                </button>
            </div>
            <ul>
              {latestNews.map((news, index) => (
                <li key={index} className="mb-1">
                  {news}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="flex justify-between  pb-4">
              <div className="text-3xl font-bold  py-2 px-4">Upcoming Events</div>
                <button class="bg-red-500 hover:bg-blue-700 text-white py-2 px-4 square-full">
                  View All
                </button>
            </div>
            <ul>
              {upcomingEvents.map((event, index) => (
                <li key={index} className="mb-1">
                  {event}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg  ">
            <div className="flex justify-between  pb-4">
              <div className="text-3xl font-bold  py-2 px-4">Latest Notice</div>
                <button class="bg-red-500 hover:bg-blue-700 text-white py-2 px-4 square-full">
                  View All
                </button>
            </div>
            <ul className="overflow-y-auto h-48">
              {noticeBoard.map((notice, index) => (
                <li key={index} className="mb-1">
                  {notice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;
