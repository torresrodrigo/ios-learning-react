import React, { useState } from 'react';
import { Quiz } from '../models/index';
import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Stack,
  Box,
  Chip,
  Divider
} from '@mui/material';
import { RadioButtonUnchecked as RadioIcon } from '@mui/icons-material';

type QuizViewProps = {
  quiz: Quiz;
  onComplete: (score: number) => void;
};

const QuizView: React.FC<QuizViewProps> = ({ quiz, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const correctAnswers = newAnswers.filter(
        (answer, index) => answer === quiz.questions[index].correctAnswer
      );
      const score = (correctAnswers.length / quiz.questions.length) * 100;
      onComplete(score);
    }
  };

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <Card elevation={2} sx={{ borderRadius: 2 }}>
      <CardContent sx={{ p: 4 }}>
        <Stack spacing={3}>
          {/* Progress Header */}
          <Box>
            <Stack 
              direction="row" 
              justifyContent="space-between" 
              alignItems="center" 
              mb={2}
            >
              <Chip 
                label={`Pregunta ${currentQuestion + 1} de ${quiz.questions.length}`}
                color="primary"
                variant="outlined"
                size="small"
              />
              <Typography variant="body2" color="text.secondary">
                {progress.toFixed(0)}% Completado
              </Typography>
            </Stack>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                bgcolor: 'grey.100',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                }
              }} 
            />
          </Box>

          <Divider />

          {/* Question */}
          <Typography variant="h6">
            {question.text}
          </Typography>

          {/* Options */}
          <Stack spacing={2}>
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outlined"
                color="primary"
                onClick={() => handleAnswer(index)}
                startIcon={<RadioIcon />}
                sx={{
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  p: 2,
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'primary.50'
                  }
                }}
              >
                <Typography variant="body1" color="text.primary">
                  {option}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default QuizView;