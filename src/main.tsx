import { Header } from './components/Header'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Tasks from './Tasks'
import "./global.css"
import { TasksProvider } from './contexts/TasksContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  </React.StrictMode>,
)
