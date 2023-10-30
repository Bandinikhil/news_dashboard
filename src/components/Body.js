import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { addAll } from "../utils/allSlice";
import Shimmer from "../utils/Shimmer";
import { NEWS_API } from "../utils/constants";

const Body = () => {
  const [data, setData] = useState(null);
  const flag = useSelector((store) => store.filter?.flag);
  const filterData = useSelector((store) => store?.filter?.items);

  const dispatch = useDispatch();

  //fetch data from API
  const fetchData = async () => {
    const data = await fetch(NEWS_API);
    const res = await data.json();
    console.log(res.data);
    setData(res.data);
    dispatch(addAll(res.data));
  };

  //Function gets called when the user click on filters
  const applyFilter = () => {
    if (filterData && filterData.length !== 0) {
      setData(filterData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    applyFilter(); // Apply the filter when filterData changes
  }, [filterData]);

  //if data is fetching, show shimmer
  if (data === null) {
    <Shimmer />;
  }

  return (
    <div className="flex flex-wrap gap-12 justify-center mb-9">
      {data?.map((element) => (
        <Cards key={element.id} card={element?.attributes} />
      ))}
    </div>
  );
};

export default Body;
