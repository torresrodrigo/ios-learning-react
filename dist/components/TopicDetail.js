import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle } from 'react-icons/ai';
const TopicDetail = ({ topic, onStartQuiz, onBack }) => {
    return (React.createElement("div", { className: "bg-white shadow sm:rounded-lg" },
        React.createElement("div", { className: "px-4 py-5 sm:p-6" },
            React.createElement("div", { className: "flex items-center justify-between mb-6" },
                React.createElement("button", { onClick: onBack, className: "inline-flex items-center text-sm text-gray-600 hover:text-gray-900" },
                    React.createElement(AiOutlineArrowLeft, { className: "h-4 w-4 mr-1" }),
                    "Volver"),
                React.createElement("button", { onClick: onStartQuiz, className: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700" },
                    React.createElement(AiOutlinePlayCircle, { className: "h-4 w-4 mr-2" }),
                    "Iniciar Quiz")),
            React.createElement("h3", { className: "text-lg leading-6 font-medium text-gray-900 mb-4" }, topic.title),
            React.createElement("div", { className: "mt-6 border-t border-gray-200 pt-6" },
                React.createElement("dl", { className: "divide-y divide-gray-200" },
                    React.createElement("div", { className: "py-4" },
                        React.createElement("dt", { className: "text-sm font-medium text-gray-500" }, "Descripci\u00F3n"),
                        React.createElement("dd", { className: "mt-1 text-sm text-gray-900" }, topic.description)),
                    React.createElement("div", { className: "py-4" },
                        React.createElement("dt", { className: "text-sm font-medium text-gray-500" }, "C\u00F3digo de Ejemplo"),
                        React.createElement("dd", { className: "mt-1" },
                            React.createElement("pre", { className: "bg-gray-50 rounded-md p-4 overflow-x-auto" },
                                React.createElement("code", { className: "text-sm text-gray-900" }, topic.codeExample)))),
                    React.createElement("div", { className: "py-4" },
                        React.createElement("dt", { className: "text-sm font-medium text-gray-500" }, "Caso de Uso"),
                        React.createElement("dd", { className: "mt-1 text-sm text-gray-900" }, topic.useCase)),
                    React.createElement("div", { className: "py-4" },
                        React.createElement("dt", { className: "text-sm font-medium text-gray-500" }, "Errores Comunes"),
                        React.createElement("dd", { className: "mt-1" },
                            React.createElement("ul", { className: "list-disc pl-5 text-sm text-gray-900" }, topic.commonMistakes.map((mistake, index) => (React.createElement("li", { key: index, className: "mt-1" }, mistake)))))))))));
};
export default TopicDetail;
