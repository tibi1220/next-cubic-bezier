import React, { useState } from 'react';
import Circle from './DraggableAnchor';
import LeftPanel from './LeftPanel';

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

const BezierSvgBase: React.FC = () => {
  const [p1, setP1] = useState(default1);
  const [p2, setP2] = useState(default2);
  const [p3, setP3] = useState(default3);
  const [p4, setP4] = useState(default4);

  const reset = () => {
    setP1(default1);
    setP2(default2);
    setP3(default3);
    setP4(default4);
  };

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-around text-lg sm:text-md lg:text-lg xl:text-xl">
        <LeftPanel p={[p1, p2, p3, p4]} reset={reset} />

        <div className="w-full sm:w-9/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="none"
            viewBox="0, 0, 400, 400"
            className="w-11/12 h-[70vh] max-h-[700px] mx-auto bg-gray-200 my-10 rounded-xl shadow-inner overflow-visible"
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
