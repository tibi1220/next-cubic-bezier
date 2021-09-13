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
    <>
      <div className="grid grid-cols-2 m-4 my-auto sm:w-3/12 sm:flex flex-col place-items-center">
        <p className="col-span-2 text-center pb-4">
          (A kontroll pontok egérrel elhúzhatóak.)
        </p>
        {p.map((elem, index) => (
          <DisplayCoords key={index} index={index + 1} coord={elem} />
        ))}
        <div className="p-2 col-span-2 mb-10">
          <button
            className="bg-gray-800 text-gray-100 p-1 px-2 rounded-md flex justify-center"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;
