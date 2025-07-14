import React from 'react';
import type { Task } from '../types';
import { TaskItem } from './TaskItem';
import {  Box, Typography } from '@mui/material';

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
                    No tasks to show. Be free!
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)'
            },
            gap: 3,
            p: { xs: 1.5, sm: 2, md: 3 },
            maxWidth: '1800px',
            mx: 'auto'
        }}>
            {tasks.map((task) => (
                <Box
                    key={task.id}
                    sx={{
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            transition: 'transform 0.3s ease'
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
                </Box>
            ))}
        </Box>
    );
};