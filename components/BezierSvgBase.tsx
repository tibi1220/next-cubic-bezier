import React, { useState } from 'react';
import Circle from './DraggableAnchor';
import DisplayCoords from './DisplayCoords';

type Point = {
  x: number;
  y: number;
};

const BezierSvgBase: React.FC = () => {
  const [p1, setP1] = useState({
    x: 50,
    y: 50,
  });
  const [p2, setP2] = useState({
    x: 350,
    y: 350,
  });
  const [p3, setP3] = useState({
    x: 50,
    y: 350,
  });
  const [p4, setP4] = useState({
    x: 350,
    y: 50,
  });

  const p = [p1, p2, p3, p4];

  return (
    <>
      <div className="flex justify-around">
        <div className="my-auto w-2/12 p-10">
          {p.map((elem, index) => (
            <DisplayCoords key={index} index={index + 1} coord={elem} />
          ))}
        </div>
        <div className="w-10/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="none"
            viewBox="0, 0, 400, 400"
            className="w-10/12 h-[70vh] mx-auto bg-gray-200 mt-10 rounded-xl shadow-inner overflow-visible"
          >
            <Circle position={p1} setPosition={setP1} />
            <Circle position={p2} setPosition={setP2} />
            <Circle position={p3} setPosition={setP3} />
            <Circle position={p4} setPosition={setP4} />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d={`M${p1.x + ' ' + p1.y} C${p2.x + ' ' + p2.y} ${
                p3.x + ' ' + p3.y
              } ${p4.x + ' ' + p4.y}`}
            />
            <line
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              strokeWidth={1.5}
              opacity={0.25}
            />
            <line
              x1={p3.x}
              y1={p3.y}
              x2={p4.x}
              y2={p4.y}
              strokeWidth={1.5}
              opacity={0.25}
            />
          </svg>
        </div>
      </div>
      <div className="mt-20 p-4 bg-gray-800">
        <p className="text-2xl text-gray-100 text-center">
          Sándor Tibor - C7XUDE (
          <a href="https://github.com/tibi1220" className="underline">
            source
          </a>
          )
        </p>
      </div>
    </>
  );
};

export default BezierSvgBase;
