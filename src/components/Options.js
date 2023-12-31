import { useQuestions } from '../contexts/QuestionsContext';

function Options() {
  const { questions, questionIndex, dispatch, answer } = useQuestions();

  const hasAnswered = answer !== null;

  const question = questions[questionIndex];
  console.log(question);

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
