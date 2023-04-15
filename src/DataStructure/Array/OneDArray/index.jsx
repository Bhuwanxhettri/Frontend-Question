import React, { useState } from "react";
import { people } from "./data";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

const index = () => {
  const [peoples, setpeoples] = useState([...people]);
  const [output, setOutput] = useState();
  const [codeOutput, setCodeOutput] = useState(null);

  const sumOfArray = () => {
    const result = peoples.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.age;
    }, 0);
    setOutput(result);
    const codeString = ` const sumOfArray = () => {
      const result = peoples.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.age;
      }, 0));
    }`;
    const codeReslut = (
      <SyntaxHighlighter language="javascript" style={vs}>
        {codeString}
      </SyntaxHighlighter>
    );
    setCodeOutput(codeReslut);
  };
  const average = () => {
    const sumArray = peoples.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.age;
    }, 0);
    const result = sumArray / people.length;
    setOutput(result);
    const codeString = `
    // Code Average of array
    const average = () => {
      const sumArray = peoples.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.age;
      }, 0);
    const result = sumArray / people.length;`;
    const codeResult = (
      <SyntaxHighlighter language="javascript" style={vs}>
        {codeString}
      </SyntaxHighlighter>
    );
    setCodeOutput(codeResult);
  };
  return (
    <div>
      <h1 className="text-center text-purple-800 font-bold py-3 text-4xl">
        {" "}
        Age Group store in array
      </h1>
      <div className="justify-center flex items-center">
        <ul className="flex">
          {peoples.map((people, id) => {
            return (
              <>
                <div className="flex flex-col items-center">
                  <div>
                    <span className="text-xs font-bold">{id}</span>
                  </div>
                  <div>
                    <li
                      className={`border-2 font-bold  shadow-md bg-${people.color}-300 text-xl px-3 py-1`}
                    >
                      {people.age}
                    </li>
                  </div>
                </div>
              </>
            );
          })}
        </ul>
      </div>
      <div className="justify-center container px-10 mx-auto flex items-center">
        <ul className="flex items-center gap-8 my-4">
          {peoples.map((people, id) => {
            return (
              <>
                <li
                  className={`font-bold text-${people.color}-500 text-md my-1`}
                  key={id}
                >
                  <span className="font-bold text-black">{id + 1}. </span>
                  {people.name}
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="px-4 flex justify-center gap-5 container py-10">
        <button
          onClick={sumOfArray}
          className="bg-green-500 text-white font-bold px-3 py-1 rounded-md"
        >
          Sum
        </button>
        <button
          onClick={average}
          className="bg-pink-500 text-white font-bold px-3 py-1 rounded-md"
        >
          Average
        </button>
        <button className="bg-blue-500 text-white font-bold px-3 py-1 rounded-md">
          Largest Age
        </button>
        <button className="bg-black text-white font-bold px-3 py-1 rounded-md">
          Smallest Age
        </button>
        <button className="bg-purple-500 text-white font-bold px-3 py-1 rounded-md">
          Length Of an Array
        </button>
        <button className="bg-purple-500 text-white font-bold px-3 py-1 rounded-md">
          Sort Acending
        </button>
        <button className="bg-purple-500 text-white font-bold px-3 py-1 rounded-md">
          Sort Decending
        </button>
      </div>
      <div
        className=" shadow-4xl px-20 h-[50vh] mx-20 justify-center flex  
      "
      >
        <div className="px-26 flex items-center justify-between text-lg font-bold container">
          <div className="w-[30%]">
            <h1 className="text-3xl my-auto text-blue-900">{output}</h1>
          </div>
          {codeOutput !== null && (
            <div className="w-[70%]   ">{codeOutput}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
