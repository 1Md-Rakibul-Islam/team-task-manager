import React, { useEffect, useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // console.log(tasks);

  if (!tasks) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="min-h-screen">
      <section className=" lg:mx-20 md:mx-10 mx-5">
        <h2 className="text-green-600 text-center mb-10 text-4xl font-bold">
          Tasks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center md:gap-10 gap-5"></div>
      </section>
    </div>
  );
};

export default Home;
