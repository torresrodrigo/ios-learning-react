import React from "react";
import { Topic } from '../models/index';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Grid, 
  Box, 
  LinearProgress,
  Avatar,
  Stack
} from '@mui/material';
import { 
  MenuBook as BookIcon,
  EmojiEvents as TrophyIcon,
  ArrowForward as ArrowForwardIcon 
} from '@mui/icons-material';

type TopicsListProps = {
  topics: Topic[];
  onSelectTopic: (topic: Topic) => void;
};

const TopicsList: React.FC<TopicsListProps> = ({ topics, onSelectTopic }) => {
  if (!topics || topics.length === 0) {
    return (
      <Card sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <Typography color="text.secondary">
          No hay temas disponibles
        </Typography>
      </Card>
    );
  }

  return (
    <Grid container spacing={3}>
      {topics.map((topic) => (
        <Grid item xs={12} md={6} lg={4} key={topic.id}>
          <Card 
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: 6
              }
            }}
          >
            <CardContent sx={{ flex: 1, p: 3 }}>
              <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.light',
                    width: 48,
                    height: 48
                  }}
                >
                  <BookIcon />
                </Avatar>
                <Box flex={1}>
                  <Typography variant="h6" gutterBottom>
                    {topic.title}
                  </Typography>
                  {topic.quiz?.userScore !== undefined && (
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <TrophyIcon sx={{ color: 'warning.main', fontSize: 20 }} />
                      <Typography variant="body2" color="text.secondary">
                        Score: {topic.quiz.userScore.toFixed(2)}%
                      </Typography>
                    </Stack>
                  )}
                </Box>
              </Stack>

              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  mb: 2
                }}
              >
                {topic.description}
              </Typography>
            </CardContent>

            <CardActions sx={{ p: 3, pt: 0 }}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={() => onSelectTopic(topic)}
                endIcon={<ArrowForwardIcon />}
              >
                Ver detalles
              </Button>
            </CardActions>

            {topic.quiz?.userScore !== undefined && (
              <LinearProgress 
                variant="determinate" 
                value={topic.quiz.userScore}
                sx={{
                  height: 4,
                  '& .MuiLinearProgress-bar': {
                    transition: 'transform 0.5s'
                  }
                }}
              />
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopicsList;
