import React from 'react';
import DisplayCoords from './DisplayCoords';

type Point = {
  x: number;
  y: number;
};

interface Props {
  p: Point[];
  reset: () => void;
}

const LeftPanel: React.FC<Props> = ({ p, reset }) => {
  return (
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
  );
};

export default LeftPanel;
