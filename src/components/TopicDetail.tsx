import React, { useEffect } from 'react';
import { Topic } from '../models/index';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  Paper,
  IconButton,
  Stack
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  PlayCircleOutline as PlayCircleIcon,
  Code as CodeIcon,
  Error as ErrorIcon,
  Cases as CasesIcon,
  Description as DescriptionIcon
} from '@mui/icons-material';

// Importar la librería de resaltado de sintaxis
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type TopicDetailProps = {
  topic: Topic;
  onStartQuiz: () => void;
  onBack: () => void;
};

const TopicDetail: React.FC<TopicDetailProps> = ({ topic, onStartQuiz, onBack }) => {
  return (
    <Card elevation={2} sx={{ borderRadius: 2 }}>
      <CardContent sx={{ p: 3 }}>
        {/* Header con botones de navegación */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <IconButton
            onClick={onBack}
            color="inherit"
            sx={{ 
              '&:hover': { 
                backgroundColor: 'grey.100' 
              }
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Button
            variant="contained"
            color="primary"
            startIcon={<PlayCircleIcon />}
            onClick={onStartQuiz}
            sx={{
              textTransform: 'none',
              boxShadow: 2
            }}
          >
            Iniciar Quiz
          </Button>
        </Stack>

        {/* Título */}
        <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 4 }}>
          {topic.title}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Contenido principal */}
        <Stack spacing={4}>
          {/* Descripción */}
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <DescriptionIcon color="primary" />
              <Typography variant="subtitle1" color="text.secondary">
                Descripción
              </Typography>
            </Stack>
            <Typography variant="body1">
              {topic.description}
            </Typography>
          </Box>

          {/* Código de ejemplo con resaltado de sintaxis */}
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <CodeIcon color="primary" />
              <Typography variant="subtitle1" color="text.secondary">
                Código de Ejemplo
              </Typography>
            </Stack>
            <Paper 
              variant="outlined" 
              sx={{ 
                bgcolor: 'grey.50',
                p: 2,
                borderRadius: 1,
                overflow: 'auto'
              }}
            >
              <SyntaxHighlighter language="swift" style={atomOneDarkReasonable}>
                {topic.codeExample}
              </SyntaxHighlighter>
            </Paper>
          </Box>

          {/* Caso de uso */}
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <CasesIcon color="primary" />
              <Typography variant="subtitle1" color="text.secondary">
                Caso de Uso
              </Typography>
            </Stack>
            <Typography variant="body1">
              {topic.useCase}
            </Typography>
          </Box>

          {/* Errores comunes */}
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <ErrorIcon color="primary" />
              <Typography variant="subtitle1" color="text.secondary">
                Errores Comunes
              </Typography>
            </Stack>
            <List sx={{ listStyleType: 'disc', pl: 4 }}>
              {topic.commonMistakes.map((mistake, index) => (
                <ListItem 
                  key={index}
                  sx={{ 
                    display: 'list-item',
                    padding: '4px 0'
                  }}
                >
                  <Typography variant="body1">
                    {mistake}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TopicDetail;
