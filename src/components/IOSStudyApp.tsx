import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import {
  MenuBook as BookIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import TopicDetail from './TopicDetail';
import QuizView from './QuizView';
import QuizResults from './QuizResults';
import TopicsList from './TopicList';
import { initialTopics } from '../data/mockData';
import { Topic } from '../models/index';

// Crear un tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5',
      light: '#EEF2FF',
    },
    secondary: {
      main: '#6B7280',
    },
    background: {
      default: '#F3F4F6',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

type ViewType = 'topics' | 'detail' | 'quiz' | 'results';

const IOSStudyApp = () => {
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [currentView, setCurrentView] = useState<ViewType>('topics');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [quizResults, setQuizResults] = useState<{
    score: number;
    totalQuestions: number;
    correctAnswers: number;
  } | null>(null);

  useEffect(() => {
    setTopics(initialTopics);
  }, []);

  const handleQuizComplete = (score: number) => {
    if (selectedTopic?.quiz) {
      const totalQuestions = selectedTopic.quiz.questions.length;
      const correctAnswers = Math.round((score * totalQuestions) / 100);
      
      setQuizResults({
        score,
        totalQuestions,
        correctAnswers,
      });
      
      // Actualizar el score en topics
      setTopics(currentTopics =>
        currentTopics.map(topic =>
          topic.id === selectedTopic.id
            ? { ...topic, quiz: { ...topic.quiz, userScore: score } }
            : topic
        )
      );
      
      // Cambiar a la vista de resultados
      setCurrentView('results');
    }
  };

  const handleBackToHome = () => {
    setCurrentView('topics');
    setSelectedTopic(null);
    setQuizResults(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
        <AppBar position="sticky" elevation={1} sx={{ bgcolor: 'white' }}>
          <Toolbar>
            {currentView !== 'topics' && (
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleBackToHome}
                sx={{ mr: 2 }}
              >
                <ArrowBackIcon />
              </IconButton>
            )}
            <BookIcon sx={{ mr: 2, color: 'primary.main' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary', fontWeight: 600 }}>
              iOS Study App
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ py: 4 }}>
          {currentView === 'topics' && (
            <Box>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                Temas iOS
              </Typography>
              <TopicsList
                topics={topics}
                onSelectTopic={(topic) => {
                  setSelectedTopic(topic);
                  setCurrentView('detail');
                }}
              />
            </Box>
          )}

          {currentView === 'detail' && selectedTopic && (
            <TopicDetail
              topic={selectedTopic}
              onStartQuiz={() => setCurrentView('quiz')}
              onBack={handleBackToHome}
            />
          )}

          {currentView === 'quiz' && selectedTopic?.quiz && (
            <QuizView
              quiz={selectedTopic.quiz}
              onComplete={handleQuizComplete}
            />
          )}

          {currentView === 'results' && quizResults && (
            <QuizResults
              {...quizResults}
              onBackToHome={handleBackToHome}
            />
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default IOSStudyApp;