import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AssList = () => {
  const [list, setList] = useState([]);
  const params = useParams();
  useEffect(() => {
    console.log("params", params);

    async function func() {
      let data;
      if (Object.keys(params).length == 0)
        data = await axios.get("https://myceq-backend.onrender.com/getall");
      else
        data = await axios.get(
          `https://myceq-backend.onrender.com/filter/${params.filter}`
        );
      console.log(data.data);
      setList(data.data);
    }
    func();
  }, [params]);

  return (
    <>
      <div>Assignments Submitted by Pratham Jagga:</div>
      {list.map((item) => {
        return (
          <div key={item._id}>
            <Link to={`/show/${item._id}`}>{item.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default AssList;
