import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TasksProvider } from './state-management/tasks';
import { AuthProvider } from './state-management/auth';

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
