import { TaskProvider } from './context/TaskProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <TaskProvider>
                <RouterProvider router={router}/>
            </TaskProvider>
        </ThemeProvider>
    )
}