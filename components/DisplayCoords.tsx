import React from 'react';

import type { State } from './DraggableAnchor';

interface Props {
  coord: State;
  index: number;
}

const DisplayCoords: React.FC<Props> = ({ coord, index }) => {
  return (
    <div className="font-mono flex flex-col p-4 text-lg">
      <div>
        x<sub>{index}</sub>: {Math.round(coord.x * 100) / 100}
      </div>
      <div>
        y<sub>{index}</sub>: {Math.round(coord.y * 100) / 100}
      </div>
    </div>
  );
};

export default DisplayCoords;
