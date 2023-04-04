import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const AssignmentPage = () => {
  const params = useParams();
  console.log("params", params);
  const [assData, setAssData] = useState({});
  useEffect(() => {
    async function func() {
      console.log("rendered");
      let data = await axios.get(
        `https://myceq-backend.onrender.com/getone/${params.id}`
      );
      console.log("fetched", data.data);
      data = data.data;
      setAssData(data);
    }
    func();
  }, []);
  return (
    <>
      <div>Assignment Info</div>
      <h3>Assignment Name: {assData.name}</h3>
      <h3>
        Submission Date: {assData.date} {assData.day}
      </h3>
      {assData.codelink && (
        <h3>
          View <a href={assData.codelink}>Code</a>
        </h3>
      )}
      <h3>Content: </h3>
      <p>{assData.content}</p>
    </>
  );
};

export default AssignmentPage;
