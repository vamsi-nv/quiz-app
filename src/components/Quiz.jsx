import { useReducer } from "react";
import quizData from "../data/quizData.js";

const reducer = (state, action) => {
  switch (action.type) {
    case "ANSWER": {
      const isCorrect = action.payload === quizData[state.index].answer;
      return {
        ...state,
        isAnswered: true,
        isCorrect,
        selected: action.payload,
        score: isCorrect ? state.score + 1 : state.score,
      };
    }

    case "NEXT": {
      const isLastQuestion = state.index >= quizData.length - 1;
      return {
        ...state,
        index: isLastQuestion ? state.index : state.index + 1,
        isAnswered: false,
        isCorrect: false,
        selected: null,
        isQuizComplete: isLastQuestion,
      };
    }

    case "RESTART": {
      return {
        index: 0,
        score: 0,
        isAnswered: false,
        isCorrect: false,
        selected: null,
        isQuizComplete: false,
      };
    }

    default:
      return state;
  }
};

function Quiz() {
  const [state, dispatch] = useReducer(reducer, {
    index: 0,
    score: 0,
    isAnswered: false,
    isCorrect: false,
    selected: null,
    isQuizComplete: false,
  });

  const question = quizData[state.index];

  const handleNext = () => {
    if (!state.isQuizComplete) dispatch({ type: "NEXT" });
  };

  const handleAnswer = (option) => {
    if (!state.isAnswered) {
      dispatch({ type: "ANSWER", payload: option });
    }
  };

  const getButtonClass = (option) => {
    let baseClass = "border cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800  w-full px-5 py-4 text-left";
    if (state.isAnswered) {
      if (option === question.answer) {
        baseClass += " bg-green-200 text-green-600 font-semibold";
      } else if (option === state.selected && !state.isCorrect) {
        baseClass += " bg-red-200 text-red-600 font-semibold";
      }
    } 
    return baseClass;
  };

  if (state.isQuizComplete) {
    return (
      <div className="border p-7 flex flex-col items-center max-w-[60%]">
        <h2 className="text-2xl mb-6">Quiz Completed!</h2>
        <p className="text-xl mb-8">
          Your score: {state.score} / {quizData.length}
        </p>
        <button
          onClick={() => dispatch({ type: "RESTART" })}
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-2 px-6 text-lg"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="border p-7 flex flex-col items-center justify-evenly w-[430px]  mx-auto">
      <div className="w-full mb-4">
        <span className="text-gray-600">
          Question {state.index + 1} of {quizData.length}
        </span>
        <span className="float-right">Score: {state.score}</span>
      </div>

      <p className="text-xl mb-10 font-semibold">{question.question}</p>

      <div className="w-full flex flex-col gap-4 mb-8 ">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option)}
            className={getButtonClass(option)}
            disabled={state.isAnswered}
          >
            {option}
          </button>
        ))}
      </div>

      {state.isAnswered && (
        <div className="w-full">
          <p className="mb-4">
            {state.isCorrect ? "Correct!" : "Incorrect! The correct answer is: " + question.answer}
          </p>
          <button
            onClick={handleNext}
            className="bg-blue-500 cursor-pointer hover:bg-blue-600 w-full text-white py-2 text-lg"
          >
            {state.index === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;


