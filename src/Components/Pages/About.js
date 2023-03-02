import React, { useState } from "react";
import axios from "axios";
import { Button } from "bootstrap";
const About = () => {
  const [state, setState] = useState([]);

  const click = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      setState(response.data.splice(0, 10));
    });
  };
  return (
    <div className=" bg-success p-2">
      <h1 className="text-center">About page</h1>
    </div>
  );
};

export default About;
