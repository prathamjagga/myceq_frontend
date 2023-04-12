import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactCodeSinppet from "react-code-snippet";

import { CodeBlock, dracula } from "react-code-blocks";

const AssignmentPage = () => {
  const params = useParams();
  console.log("params", params);
  const [assData, setAssData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    async function func() {
      console.log("rendered");
      let data = await axios.get(
        `https://myceq-backend.onrender.com/getone/${params.id}`
      );
      console.log("fetched", data.data);
      data = data.data;

      setAssData(data);
      setDataLoaded(true);
    }
    func();
  }, []);
  return (
    <>
      {!dataLoaded && (
        <p>
          Loading the content... It may take time due to the use of a weak
          deployment platform.
        </p>
      )}
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
      {/* <p>{assData.content}</p> */}
      {dataLoaded && (
        <CodeBlock text={assData.content} language="python" theme={dracula} />
      )}
    </>
  );
};

export default AssignmentPage;
