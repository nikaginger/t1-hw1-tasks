import React from 'react';
import type { Task } from '../types';
import { TaskItem } from './TaskItem';
import { Grid, Box, Typography } from '@mui/material';

interface TaskListProps {
  tasks: Task[];
  onEditTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onEditTask }) => {
  if (tasks.length === 0) {
    return (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 1
        }}>
          <Typography variant="h6" color="text.secondary">
            No tasks available
          </Typography>
        </Box>
    );
  }

  return (
      <Grid
          container
          spacing={3}
          sx={{
            p: { xs: 1.5, sm: 2, md: 3 },
            maxWidth: '1800px',
            mx: 'auto',
            '& .MuiGrid-item': {
              display: 'flex',
              transition: 'transform 0.3s ease'
            }
          }}
      >
        {tasks.map((task) => (
            <Grid
                item
                key={task.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
            >
              <TaskItem
                  task={task}
                  onEdit={() => onEditTask(task.id)}
                  sx={{
                    height: '100%',
                    width: '100%'
                  }}
              />
            </Grid>
        ))}
      </Grid>
  );
};