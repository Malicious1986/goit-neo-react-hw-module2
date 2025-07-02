import "./App.css";
import { useState, useEffect } from "react";

import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import Options from "./Options/Options";

const DEFAULT_FEEDBACK = {
  good: 0,
  bad: 0,
  neutral: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const feedback = localStorage.getItem("feedback");
    if (feedback) {
      return JSON.parse(feedback);
    }
    return DEFAULT_FEEDBACK;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (optionName) => {
    setFeedback((prev) => ({ ...prev, [optionName]: prev[optionName] + 1 }));
  };

  const onFeedbackReset = () => {
    setFeedback(DEFAULT_FEEDBACK);
  };

  return (
    <div className="container">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        shouldShowReset={totalFeedback > 0}
        resetFeedback={onFeedbackReset}
      />
      {totalFeedback > 0 ? (
        <Feedback {...feedback} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
