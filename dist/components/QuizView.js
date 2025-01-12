import React, { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
const QuizView = ({ quiz, onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const handleAnswer = (optionIndex) => {
        const newAnswers = [...answers, optionIndex];
        setAnswers(newAnswers);
        if (currentQuestion < quiz.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            const correctAnswers = newAnswers.filter((answer, index) => answer === quiz.questions[index].correctAnswer);
            const score = (correctAnswers.length / quiz.questions.length) * 100;
            setShowResults(true);
            onComplete(score);
        }
    };
    if (showResults) {
        const score = ((answers.filter((answer, index) => answer === quiz.questions[index].correctAnswer).length /
            quiz.questions.length) *
            100).toFixed(1);
        return (React.createElement("div", { className: "bg-white shadow sm:rounded-lg p-6" },
            React.createElement("div", { className: "text-center" },
                React.createElement("h3", { className: "text-lg font-medium text-gray-900 mb-4" }, "Resultados del Quiz"),
                React.createElement("p", { className: "text-3xl font-bold text-indigo-600 mb-4" },
                    score,
                    "%"),
                React.createElement("div", { className: "space-y-4" }, quiz.questions.map((question, index) => (React.createElement("div", { key: question.id, className: "border rounded-lg p-4 text-left" },
                    React.createElement("div", { className: "flex items-start" },
                        answers[index] === question.correctAnswer ? (React.createElement(AiOutlineCheckCircle, { className: "h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" })) : (React.createElement(AiOutlineCloseCircle, { className: "h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" })),
                        React.createElement("div", null,
                            React.createElement("p", { className: "text-sm font-medium text-gray-900" }, question.text),
                            React.createElement("p", { className: "text-sm text-gray-500 mt-1" },
                                "Tu respuesta: ",
                                question.options[answers[index]]),
                            answers[index] !== question.correctAnswer && (React.createElement("p", { className: "text-sm text-green-600 mt-1" },
                                "Respuesta correcta:",
                                ' ',
                                question.options[question.correctAnswer])))))))))));
    }
    const question = quiz.questions[currentQuestion];
    return (React.createElement("div", { className: "bg-white shadow sm:rounded-lg p-6" },
        React.createElement("div", { className: "mb-4" },
            React.createElement("div", { className: "flex justify-between items-center mb-4" },
                React.createElement("span", { className: "text-sm text-gray-500" },
                    "Pregunta ",
                    currentQuestion + 1,
                    " de ",
                    quiz.questions.length),
                React.createElement("div", { className: "w-32 h-2 bg-gray-200 rounded-full" },
                    React.createElement("div", { className: "h-2 bg-indigo-600 rounded-full", style: {
                            width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`,
                        } }))),
            React.createElement("h3", { className: "text-lg font-medium text-gray-900" }, question.text)),
        React.createElement("div", { className: "space-y-3" }, question.options.map((option, index) => (React.createElement("button", { key: index, onClick: () => handleAnswer(index), className: "w-full text-left px-4 py-3 border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500" },
            React.createElement("span", { className: "text-sm text-gray-900" }, option)))))));
};
export default QuizView;
