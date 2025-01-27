import React from "react";

const SelectedFeedbackDisplay = ({ emoji }) => {
  return (
    <div>
      {emoji ? (
        <div>
          Your Feedback: {emoji.image} - "{emoji.message}"
        </div>
      ) : (
        <div>Click an item</div>
      )}
    </div>
  );
};

export default SelectedFeedbackDisplay;
