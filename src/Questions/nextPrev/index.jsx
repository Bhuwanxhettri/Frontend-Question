import React, { useCallback, useEffect, useState } from "react";
import Data from "./data";
const index = () => {
  const [data, setData] = useState([...Data]);
  const [index, setIndex] = useState(0);
  const [showData, setShowData] = useState(
    <h2>
      {data[index].title}
      {data[index].details}
    </h2>
  );

  const restart = () => {
    setShowData(
      <h2>
        {data[0].title}
        {data[0].details}
      </h2>
    );
  };
  const Previous = () => {
    setIndex((prev) => prev - 1);

    setShowData(
      <h2>
        {data[index]?.title}
        {data[index]?.details}
      </h2>
    );
  };
  const next = () => {
    setIndex((prev) => prev + 1);
    setShowData(
      <h2>
        {data[index]?.title}
        {data[index]?.details}
      </h2>
    );
  };

  useEffect(() => {
    setShowData(
      <h2>
        {data[index]?.title}
        {data[index]?.details}
      </h2>
    );
  }, [index, data]);
  return (
    <>
      <div className="flex justify-center py-4 gap-20">
        <button
          onClick={restart}
          className="bg-red-400 px-2 py-1 rounded-md text-white"
        >
          Restart
        </button>
        <button
          onClick={Previous}
          className="bg-red-400 px-2 py-1 rounded-md text-white"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="bg-red-400 px-2 py-1 rounded-md text-white"
        >
          Next
        </button>
      </div>
      {index}
      <div className="flex justify-center bg-slate-300">{showData}</div>
    </>
  );
};

export default index;
