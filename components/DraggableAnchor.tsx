import React, { useState } from 'react';

export type Event = React.PointerEvent<SVGCircleElement>;
export type State = {
  x: number;
  y: number;
  active?: boolean;
  offset?: {
    x: number;
    y: number;
  };
};

interface Props {
  position: State;
  setPosition: React.Dispatch<React.SetStateAction<State>>;
}

const Circle: React.FC<Props> = ({ position, setPosition }) => {
  const handlePointerDown = (e: Event) => {
    const target = e.target as HTMLElement;
    const box = target.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    target.setPointerCapture(e.pointerId);
    setPosition({
      ...position,
      active: true,
      offset: {
        x,
        y,
      },
    });
  };

  const handlePointerMove = (e: Event) => {
    const target = e.target as HTMLElement;
    const box = target.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    if (position.active && typeof position.offset !== 'undefined') {
      setPosition({
        ...position,
        x: position.x - (position.offset.x - x),
        y: position.y - (position.offset.y - y),
      });
    }
  };
  const handlePointerUp = (e: Event) => {
    setPosition({
      ...position,
      active: false,
    });
  };

  return (
    <circle
      cx={position.x}
      cy={position.y}
      fill={position.active ? 'red' : 'black'}
      opacity=".5"
      r={5}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    />
  );
};

export default Circle;
