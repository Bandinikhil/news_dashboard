import React from "react";

const Cards = ({ card }) => {
  let str = card.hashtags;
  let array = str.split(", ");

  //after fetching the data, card to display on the DOM
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={card.newsIcon} alt="img" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.headline}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {array.map((item, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{item}
          </span>
        ))}
      </div>
      <div className="flex justify-start">
        <span>Source : {card.newsSource} </span>
      </div>
    </div>
  );
};

export default Cards;
