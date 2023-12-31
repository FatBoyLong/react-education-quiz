import { useQuestions } from '../contexts/QuestionsContext';

function NextButton() {
  const { dispatch, answer, questionIndex, numQuestions } = useQuestions(
    
  );
  if (questionIndex < numQuestions - 1) {
    return (
      answer !== null && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next question
        </button>
      )
    );
  }

  if (questionIndex === numQuestions - 1) {
    return (
      answer !== null && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'finished' })}
        >
          Finish
        </button>
      )
    );
  }
}

export default NextButton;
