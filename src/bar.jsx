import React from "react";

export function Button(props) {
  return <button type="button">{props.text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export const answer = 42;
