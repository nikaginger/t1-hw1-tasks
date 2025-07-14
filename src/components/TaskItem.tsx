import type { Task } from '../types';
import {Card, CardContent, Chip, Button, Typography, Box, Stack, type Theme, type SxProps} from '@mui/material';
import {theme} from "../theme.ts";

interface TaskItemProps {
    task: Task;
    onEdit: () => void;
    sx?: SxProps<Theme>;
}

export const TaskItem = ({ task, onEdit, sx }: TaskItemProps) => {
    type PriorityColor = 'success' | 'warning' | 'error';


    const priorityColorMap: Record<Task['priority'], PriorityColor> = {
        'Low': 'success',
        'Medium': 'warning',
        'High': 'error'
    };

    return (
        <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', borderColor: '#000000', borderWidth: 1, borderStyle: 'solid', boxShadow: 'none', borderRadius: 3, ...sx}}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                    {task.title}
                </Typography>

                {task.description && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {task.description}
                    </Typography>
                )}

                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip
                        label={task.category}
                        color="primary"
                        size="small"
                    />
                    <Chip
                        label={task.status}
                        color="secondary"
                        size="small"
                    />
                    <Chip
                        label={task.priority}
                        color={priorityColorMap[task.priority]}
                        size="small"
                    />
                </Stack>
            </CardContent>

            <Box sx={{ p: 2 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={onEdit}
                    sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: 2,
                        boxShadow: 'none',
                        color: 'black',
                        borderColor: '#000000',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        '&:hover': {
                            borderRadius: 2,
                            boxShadow: 'none',
                            color: 'black',
                            borderColor: theme.palette.secondary.main,
                            borderWidth: 1,
                            borderStyle: 'solid',
                        },

                    }}
                >
                    Edit Task
                </Button>
            </Box>
        </Card>
    );
};