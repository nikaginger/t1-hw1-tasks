import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { TaskPage } from './pages/TaskPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/task/:id',
        element: <TaskPage />,
    },
])