import "./Quiz.css";
import React, { useState, useRef } from "react";
import { data } from "../../assets/data"; // Make sure the data is correctly imported

const Quiz = () => {
  const [index, setIndex] = useState(0); // Initialize with the first question
  const [question, setQuestion] = useState(data[index]);
  const listRef = useRef(null); // Ref to access the list items directly

  const checkAns = (e, answer) => {
    // Add correct/wrong class based on answer
    if (question.answer === answer) {
      e.target.classList.add("Correct");
    } else {
      e.target.classList.add("Wrong");
    }
  };

  const handleNext = () => {
    // Clear all previous selection styles
    if (listRef.current) {
      const items = listRef.current.querySelectorAll("li");
      items.forEach((item) => {
        item.classList.remove("Correct", "Wrong");
      });
    }

    // Move to the next question
    const nextIndex = (index + 1) % data.length; // Increment index by 1 and use modulo to loop back to the start if at the end
    setIndex(nextIndex); // Update the current index state
    setQuestion(data[nextIndex]); // Update the current question state with the next question based on the new index
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        {index + 1}. {question.question}
      </h2>
      <ul ref={listRef}>
        <li className="answer-item" onClick={(e) => checkAns(e, 1)}>
          {question.option1}
        </li>
        <li className="answer-item" onClick={(e) => checkAns(e, 2)}>
          {question.option2}
        </li>
        <li className="answer-item" onClick={(e) => checkAns(e, 3)}>
          {question.option3}
        </li>
        <li className="answer-item" onClick={(e) => checkAns(e, 4)}>
          {question.option4}
        </li>
      </ul>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Quiz;
