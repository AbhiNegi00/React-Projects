"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };
  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between mb-5 w-2/3 ">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h5 className="text-xl font-semibold">{t.desc}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-100 text-white px-4 py-2 rounded font-bold hover:bg-red-500"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <div className="bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 h-screen">
      <h1 className="bg-gradient-complement text-white p-5 text-5xl font-bold text-center shadow-xl rounded-md mx-auto  max-w-3xl">
        To Do List
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex justify-center bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200"
      >
        <input
          type="text"
          className=" text-2xl m-5 border-black border-5 rounded  px-4 py-2 "
          placeholder="Enter Title Here "
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className=" text-2xl m-5 border-black border-5 rounded  px-4 py-2 "
          placeholder="Enter Description Here "
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-blue-500 text-white font-bold py-1 px-8 text-xl rounded hover:bg-blue-700 m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-emerald-50">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default page;
