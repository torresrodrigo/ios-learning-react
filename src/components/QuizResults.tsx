import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  CircularProgress,
} from '@mui/material';
import {
  EmojiEvents as TrophyIcon,
  Timeline as TimelineIcon,
  Home as HomeIcon,
} from '@mui/icons-material';

type QuizResultsProps = {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  onBackToHome: () => void;
};

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  correctAnswers,
  onBackToHome,
}) => {
  const getFeedback = (score: number) => {
    if (score >= 90) return "¡Excelente! Has dominado este tema.";
    if (score >= 70) return "¡Muy bien! Tienes un buen entendimiento del tema.";
    if (score >= 50) return "Bien. Pero podrías mejorar repasando algunos conceptos.";
    return "Necesitas repasar este tema con más detalle.";
  };

  return (
    <Card elevation={3} sx={{ maxWidth: 600, mx: 'auto', borderRadius: 2 }}>
      <CardContent sx={{ p: 4 }}>
        <Stack spacing={4} alignItems="center">
          {/* Score Circle */}
          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              value={score}
              size={120}
              thickness={4}
              sx={{
                color: score >= 70 ? 'success.main' : score >= 50 ? 'warning.main' : 'error.main',
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" component="div" color="text.primary">
                {score.toFixed(2)}%
              </Typography>
            </Box>
          </Box>

          {/* Feedback Message */}
          <Box textAlign="center">
            <Typography variant="h5" gutterBottom color="primary">
              {score >= 70 ? (
                <TrophyIcon sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
              ) : (
                <TimelineIcon sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
              )}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {getFeedback(score)}
            </Typography>
          </Box>

          {/* Statistics */}
          <Box 
            sx={{ 
              width: '100%',
              bgcolor: 'background.default',
              p: 2,
              borderRadius: 2
            }}
          >
            <Stack spacing={1}>
              <Typography variant="body1">
                Preguntas totales: {totalQuestions}
              </Typography>
              <Typography variant="body1">
                Respuestas correctas: {correctAnswers}
              </Typography>
              <Typography variant="body1">
                Precisión: {score.toFixed(2)}%
              </Typography>
            </Stack>
          </Box>

          {/* Action Button */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            onClick={onBackToHome}
            fullWidth
            sx={{ mt: 2 }}
          >
            Volver al inicio
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default QuizResults;