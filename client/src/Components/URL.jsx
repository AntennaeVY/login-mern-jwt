import React from "react";
import { Link } from "react-router-dom";

const URL = (props) => {
  const { type = "internal", path, text } = props;

  if (type == "internal") {
    return (
      <Link to={path} className="mt-2 text-xs text-blue-400">
        {text}
      </Link>
    );
  } else if (type == "external") {
    return (
      <a href={path} className="mt-2 text-xs text-blue-400">
        {text}
      </a>
    );
  }
};

export default URL;
