import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ emojis, onFeedbackSelect }) => {
  return (
    <div>
      {emojis.map((emoji, index) => (
        <FeedbackItem
          key={index}
          emoji={emoji}
          onClick={() => onFeedbackSelect(emoji)}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
