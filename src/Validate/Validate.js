import React from "react";

const ValidateComponent = (props) => {
  const lol =
    props.length > 5 && props.length < 20 ? (
      <span>something</span>
    ) : (
      <span>nothing</span>
    );

  return lol;
};

export default ValidateComponent;
