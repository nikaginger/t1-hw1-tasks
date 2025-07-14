import { createContext } from 'react';
import type { Task } from '../types';

export interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (id: string, updatedTask: Partial<Task>) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);