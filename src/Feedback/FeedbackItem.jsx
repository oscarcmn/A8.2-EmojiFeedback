import React from "react";

const FeedbackItem = ({ emoji, onClick }) => {
  return <a onClick={onClick}>{emoji.image}</a>;
};

export default FeedbackItem;
