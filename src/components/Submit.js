import axios from "axios";
import React, { useState } from "react";

const Submit = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [codeLink, setCodeLink] = useState("");
  const [passCode, setPassCode] = useState("");

  const submitHandler = async (e) => {
    console.log(e);
    if (passCode != "9569") {
      alert("invalid passcode");
      return;
    }
    if (date == "" || day == "" || name == "" || content == "" || subject == "")
      alert("Please fill all the values");
    else {
      try {
        const { data } = await axios.post(
          `https://myceq-backend.onrender.com/add`,
          {
            name,
            date,
            day,
            subject,
            content,
            codelink: codeLink,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert("assignment submitted sucessfully");
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <>
      <h2>Submit Assignment</h2>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Assignment Name"
      ></input>
      <input
        type="text"
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
      ></input>
      <input
        type="text"
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      ></input>
      <input
        type="text"
        onChange={(e) => setDay(e.target.value)}
        placeholder="Day"
      ></input>
      <textarea
        type="text"
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      ></textarea>
      <input
        type="text"
        onChange={(e) => setCodeLink(e.target.value)}
        placeholder="Code Link (Can be empty)"
      ></input>
      <input
        type="text"
        onChange={(e) => setPassCode(e.target.value)}
        placeholder="Passcode"
      ></input>
      <button onClick={submitHandler}>Submit Assignment</button>
    </>
  );
};

export default Submit;
