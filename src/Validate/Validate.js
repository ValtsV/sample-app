import React from "react";

const ValidateComponent = (props) => {
  const text =
    props.length > 5 && props.length < 20 ? (
      <span>something</span>
    ) : (
      <span>nothing</span>
    );

  return text;
};

export default ValidateComponent;
