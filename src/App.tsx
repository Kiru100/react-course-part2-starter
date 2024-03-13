import { useReducer } from 'react';
import './App.css';
import AuthProvider from './state-management/AuthProvider';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import TasksContext from './state-management/context/tasksContext';
import tasksReducer from './state-management/reducers/tasksReducer';
import TasksProvider from './state-management/TasksProvider';

function App() {
 
  

  return <>
      <AuthProvider>
        <TasksProvider> 
            <NavBar></NavBar>
            <HomePage></HomePage>
        </TasksProvider>
      </AuthProvider>
    </>;
}

export default App;
