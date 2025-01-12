import React, { useState, useEffect } from 'react';
import TopicDetail from './TopicDetail';
import QuizView from './QuizView';
import TopicsList from './TopicList';
import { initialTopics } from '../data/mockData';
import { FaBook } from 'react-icons/fa'; // Importa el ícono de react-icons
const IOSStudyApp = () => {
    const [topics, setTopics] = useState(initialTopics);
    const [currentView, setCurrentView] = useState('topics');
    const [selectedTopic, setSelectedTopic] = useState(null);
    useEffect(() => {
        // Verificar los datos importados
        console.log(initialTopics); // Revisa que los datos estén bien formateados
        setTopics(initialTopics);
    }, []);
    // Función para actualizar la puntuación del quiz
    const updateQuizScore = (topicId, score) => {
        setTopics(currentTopics => currentTopics.map(topic => topic.id === topicId
            ? Object.assign(Object.assign({}, topic), { quiz: Object.assign(Object.assign({}, topic.quiz), { userScore: score }) }) : topic));
    };
    return (React.createElement("div", { className: "min-h-screen bg-gray-100" },
        React.createElement("nav", { className: "bg-white shadow-sm" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "flex justify-between h-16" },
                    React.createElement("div", { className: "flex" },
                        React.createElement("div", { className: "flex-shrink-0 flex items-center" },
                            React.createElement(FaBook, { className: "h-8 w-8 text-indigo-600" }),
                            React.createElement("span", { className: "ml-2 text-xl font-bold text-gray-900" }, "iOS Study App")))))),
        React.createElement("main", { className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" },
            currentView === 'topics' && (React.createElement("div", { className: "px-4 py-6 sm:px-0" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                    React.createElement("h2", { className: "text-2xl font-bold text-gray-900" }, "Temas iOS")),
                React.createElement(TopicsList, { topics: topics, onSelectTopic: (topic) => {
                        setSelectedTopic(topic);
                        setCurrentView('detail');
                    } }))),
            currentView === 'detail' && selectedTopic && (React.createElement(TopicDetail, { topic: selectedTopic, onStartQuiz: () => setCurrentView('quiz'), onBack: () => {
                    setSelectedTopic(null);
                    setCurrentView('topics');
                } })),
            currentView === 'quiz' && selectedTopic && (React.createElement(QuizView, { quiz: selectedTopic.quiz, onComplete: (score) => {
                    updateQuizScore(selectedTopic.id, score);
                    setCurrentView('topics');
                } })))));
};
export default IOSStudyApp;
