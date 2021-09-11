import React from 'react';
import BezierSvgBase from '../components/BezierSvgBase';

const Index: React.FC = () => {
  return (
    <div className="h-full">
      <h1 className="text-center text-3xl lg:text-4xl xl:text-5xl p-4 bg-gray-800 text-gray-100">
        Köbös Beziér-görbe ábrázolása
      </h1>
      <BezierSvgBase />
      <div className="p-4 bg-gray-800">
        <p className="text-3xl text-gray-100 text-center">
          Sándor Tibor - C7XUDE (
          <a
            href="https://github.com/tibi1220/next-cubic-bezier"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            source
          </a>
          )
        </p>
      </div>
    </div>
  );
};

export default Index;
