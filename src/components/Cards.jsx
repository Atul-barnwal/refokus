import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-32 flex flex-col sm:flex-row gap-6">
        <Card width="w-full sm:basis-1/3" start={false} para={true} />
        <Card width="w-full sm:basis-2/3" start={true} para={false} hover={"true"} />
      </div>
    </div>
  );
};

export default Cards;
