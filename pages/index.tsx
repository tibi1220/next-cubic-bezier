import React from 'react';
import BezierSvgBase from '../components/BezierSvgBase';

const Index: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-6xl p-8">
        Sándor Tibor - Köbös Beziér-görbe ábrázolása
      </h1>
      <BezierSvgBase />
    </>
  );
};

export default Index;
