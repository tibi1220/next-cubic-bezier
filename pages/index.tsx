import React from 'react';
import BezierSvgBase from '../components/BezierSvgBase';

const Index: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-3xl lg:text-4xl xl:text-5xl p-4">
        Sándor Tibor - Köbös Beziér-görbe ábrázolása
      </h1>
      <BezierSvgBase />
      <div className="mt-20 p-4 bg-gray-800">
        <p className="text-2xl text-gray-100 text-center">
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
    </>
  );
};

export default Index;
