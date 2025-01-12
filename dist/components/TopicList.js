import React from 'react';
const TopicsList = ({ topics, onSelectTopic }) => {
    return (React.createElement("div", { className: "bg-white shadow overflow-hidden sm:rounded-md" },
        React.createElement("ul", { className: "divide-y divide-gray-200" }, topics.map((topic) => (React.createElement("li", { key: topic.id },
            React.createElement("button", { onClick: () => onSelectTopic(topic), className: "block hover:bg-gray-50 w-full text-left" },
                React.createElement("div", { className: "px-4 py-4 sm:px-6" },
                    React.createElement("div", { className: "flex items-center justify-between" },
                        React.createElement("p", { className: "text-sm font-medium text-indigo-600 truncate" }, topic.title),
                        React.createElement("div", { className: "ml-2 flex-shrink-0 flex" }, topic.quiz.userScore !== undefined && (React.createElement("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" },
                            "Score: ",
                            topic.quiz.userScore,
                            "%")))),
                    React.createElement("div", { className: "mt-2 sm:flex sm:justify-between" },
                        React.createElement("div", { className: "sm:flex" },
                            React.createElement("p", { className: "flex items-center text-sm text-gray-500" },
                                topic.description.substring(0, 100),
                                "...")))))))))));
};
export default TopicsList;
