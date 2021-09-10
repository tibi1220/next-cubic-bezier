import React, { useState } from 'react';
import Circle from './DraggableAnchor';
import DisplayCoords from './DisplayCoords';

type Point = {
  x: number;
  y: number;
};

const BezierSvgBase: React.FC = () => {
  const default1 = {
    x: 50,
    y: 50,
  };
  const default2 = {
    x: 350,
    y: 350,
  };
  const default3 = {
    x: 50,
    y: 350,
  };
  const default4 = {
    x: 350,
    y: 50,
  };

  const [p1, setP1] = useState(default1);
  const [p2, setP2] = useState(default2);
  const [p3, setP3] = useState(default3);
  const [p4, setP4] = useState(default4);

  const p = [p1, p2, p3, p4];
  const setP = [setP1, setP2, setP3, setP4];
  const def = [default1, default2, default3, default4];

  const reset = () => {
    for (let i = 0; i < 4; i++) {
      setP[i](def[i]);
    }
  };

  return (
    <>
      <div className="flex justify-around text-sm lg:text-lg xl:text-xl">
        <div className="hidden sm:block my-auto w-2/12 pl-10">
          {p.map((elem, index) => (
            <DisplayCoords key={index} index={index + 1} coord={elem} />
          ))}
          <div className="p-2">
            <button
              className="bg-gray-800 text-gray-100 p-1 px-4 rounded-md"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="w-full sm:w-10/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="none"
            viewBox="0, 0, 400, 400"
            className="w-10/12 h-[70vh] mx-auto bg-gray-200 my-10 rounded-xl shadow-inner overflow-visible"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3.5}
              d={`M${p1.x + ' ' + p1.y} C${p2.x + ' ' + p2.y} ${
                p3.x + ' ' + p3.y
              } ${p4.x + ' ' + p4.y}`}
            />
            <line
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              strokeWidth={2}
              opacity={0.25}
            />
            <line
              x1={p3.x}
              y1={p3.y}
              x2={p4.x}
              y2={p4.y}
              strokeWidth={2}
              opacity={0.25}
            />

            <Circle position={p1} setPosition={setP1} />
            <Circle position={p2} setPosition={setP2} />
            <Circle position={p3} setPosition={setP3} />
            <Circle position={p4} setPosition={setP4} />
          </svg>
        </div>
      </div>
    </>
  );
};

export default BezierSvgBase;
