import React from "react";
import { useState } from "react";
import FeedbackList from "./Feedback/FeedbackList";
import SelectedFeedbackDisplay from "./Feedback/SelectedFeedbackDisplay";

const App = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const emojis = [
    { image: "😊", message: "Happy" },
    { image: "😐", message: "Neutral" },
    { image: "😢", message: "Sad" },
    { image: "🤔", message: "Thinking" },
  ];

  const handleFeedbackSelect = (emoji) => {
    setSelectedFeedback(emoji);
  };

  return (
    <div>
      <h1>How was your experience?</h1>
      <FeedbackList emojis={emojis} onFeedbackSelect={handleFeedbackSelect} />
      <SelectedFeedbackDisplay emoji={selectedFeedback} />
    </div>
  );
};

export default App;
