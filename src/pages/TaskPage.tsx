// src/pages/TaskPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks.ts';
import { TaskDetails } from '../components/TaskDetails.tsx';

export const TaskPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { tasks, updateTask } = useTasks();
    const navigate = useNavigate();

    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return <div> The task is lost </div>;
    }

    return (
        <TaskDetails
            task={task}
            onSave={(updatedTask) => {
                updateTask(id!, updatedTask);
                navigate('/');
            }}
            onCancel={() => navigate('/')}
        />
    );
};