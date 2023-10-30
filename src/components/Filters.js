// Filters.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter, setFlag } from "../utils/filterSlice";

// Filter components to filter the data
const Filters = () => {
  const dispatch = useDispatch();
  const alldata = useSelector((store) => store.all.items);

  //function to filter the data and update in the redux store
  const handleFilter = (filterobj) => {
    dispatch(removeFilter());
    if (alldata) {
      let filteredData = alldata?.filter(
        (item) => item?.attributes?.category === filterobj
      );
      if (filteredData.length === 0) {
        filteredData = alldata;
      }
      dispatch(addFilter(filteredData));
    }
  };

  const filters = [
    "ALL",
    "SPORTS",
    "POLITICS",
    "WORLD",
    "TECHNOLOGY",
    "HEALTH",
  ];

  return (
    <div className=" w-full border-b-4 lg:ml-28 ml-0 sticky top-24 bg-white">
      <div className="p-4 overflow-x-auto">
        <div className=" mx-auto flex space-x-4 p-2">
          <div className="flex items-center">
            <span className="text-gray-700 md:mr-2 mr-1">Filter:</span>
            <div className="flex space-x-2">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-blue-500 text-sm md:text-lg text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={() => handleFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
