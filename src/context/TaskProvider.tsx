import React, { useState } from 'react';
import { TaskContext } from './TaskContext';
import type { Task } from '../types';

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: '1',
            title: 'Task #1',
            category: 'Feature',
            status: 'To Do',
            priority: 'High'
        },
        {
            id: '2',
            title: 'Task #2',
            category: 'Bug',
            status: 'In Progress',
            priority: 'Medium'
        }
    ]);

    const addTask = (task: Task) => setTasks([...tasks, task]);

    const updateTask = (id: string, updatedTask: Partial<Task>) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    );
};