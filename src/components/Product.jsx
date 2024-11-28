import React from 'react';
import Button from './Button';

const Product = ({ val, mover, count }) => {
  return (
    <div
      onMouseEnter={() => {
        mover(count);
      }}
      className="w-full py-16 text-white h-[23rem]"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl capitalize font-medium mb-6 sm:mb-0">{val.title}</h1>

        {/* Description and Buttons */}
        <div className="dets w-full sm:w-1/3">
          <p className="mb-6 sm:mb-10 text-sm sm:text-base">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button value="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
