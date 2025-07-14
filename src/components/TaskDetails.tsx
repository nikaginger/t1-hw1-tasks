import React, { useState } from 'react';
import type {Task} from '../types';
import { TextField, Select, MenuItem, Button, Box } from '@mui/material';

interface TaskDetailsProps {
    task: Task;
    onSave: (updatedTask: Partial<Task>) => void;
    onCancel: () => void;
}

export const TaskDetails: React.FC<TaskDetailsProps> = ({ task, onSave, onCancel }) => {

    const [editedTask, setEditedTask] = useState<Partial<Task>>(task);
    const handleChange = (e: { target: { name: string; value: unknown } }) => {
        const { name, value } = e.target;
        setEditedTask((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Box component="form" sx={{ padding: 2 }}>
            <TextField
                name="title"
                label="Заголовок"
                value={editedTask.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="description"
                label="Описание"
                value={editedTask.description || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
            />
            <Select
                name="category"
                value={editedTask.category}
                onChange={handleChange}
                fullWidth
                margin="dense"
            >
                {['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'].map((cat) => (
                    <MenuItem key={cat} value={cat}>
                        {cat}
                    </MenuItem>
                ))}
            </Select>
            <Button onClick={() => onSave(editedTask)} variant="contained" sx={{ mt: 2 }}>
                Сохранить
            </Button>
            <Button onClick={onCancel} sx={{ mt: 2, ml: 2 }}>
                Отмена
            </Button>
        </Box>
    );
};