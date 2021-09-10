import React from 'react';
import BezierSvgBase from '../components/BezierSvgBase';

const Index: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-3xl lg:text-4xl xl:text-5xl p-4">
        Sándor Tibor - Köbös Beziér-görbe ábrázolása
      </h1>
      <BezierSvgBase />
    </>
  );
};

export default Index;
