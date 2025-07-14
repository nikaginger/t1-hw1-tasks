import React from 'react';
import { useTasks } from '../hooks/useTasks.ts';
import { TaskList } from '../components/TaskList';
import { useNavigate } from 'react-router-dom';
import {Box, Typography} from '@mui/material';

export const Home: React.FC = () => {
    const { tasks } = useTasks();
    const navigate = useNavigate(); // это типа как router.push во vue

    return (
        <div>
            <Box sx={{
                p: { xs: 2, sm: 3 },
                maxWidth: { lg: 1800, xl: 2000 },
                mx: 'auto'
            }}>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 4,
                        mt: 2,
                        fontWeight: 600,
                        color: 'primary.main',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        letterSpacing: 1
                    }}
                >
                    My Tasks
                </Typography>
                <TaskList
                    tasks={tasks}
                    onEditTask={(id) => navigate(`/task/${id}`)}
                />
            </Box>

        </div>
    );
};