import React, { useState } from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter } from "../utils/filterSlice";
import Loader from "./Loader";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const alldata = useSelector((store) => store.all.items);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  //search functionnality based on the query and update the redux store, filterSlice
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Filter data based on the search query
    dispatch(removeFilter());
    setLoading(true);
    const filteredData = alldata.filter(
      (item) =>
        item?.attributes?.headline
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        item?.attributes?.hashtags
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        item?.attributes?.category.toLowerCase().includes(query.toLowerCase())
    );

    dispatch(addFilter(filteredData));
    setLoading(false);
  };

  return (
    <>
      <header className="bg-white p-1 sticky top-0 z-50">
        {loading && <Loader />}
        <div className="container mx-auto flex items-center justify-between sticky">
          <div className="flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3vPqSNeNW8FpGsqAOZt8YgQDt4eirxGWC0w&usqp=CAU"
              alt="Logo"
              className=" w-12 h-8 md:w-16 md:h-12 mr-2"
            />
          </div>
          <div className="w-3/4 rounded-full search flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search news..."
              className="search w-full md:p-1 md:px-2 border text-black border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
              id="search"
            />
          </div>
        </div>
      </header>
      <div className="h-150px mt-0  md:h-[250px] w-full ">
        <img
          className="h-150px mt-0  md:h-[250px] w-full object-fill "
          src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
          alt="img"
        />
        <div className="">
          <h1 className="top-[13rem] md:top-[16rem] left-10 lg:left-44 text-blue-500 z-20 absolute text-2xl font-extrabold md:text-5xl md:font-extrabold">
            DON'T PANIC
          </h1>
          <h2 className="top-[14.5rem] md:top-[19rem] overflow-x left-10 lg:left-44 text-white z-20 absolute">
            We Stay You Informed
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;

//https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg
