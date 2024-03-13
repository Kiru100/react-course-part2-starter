import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TasksProvider } from './state-management/tasks';
import Counter from './state-management/counter/Counter';

function App() {
 
  return <>
        <TasksProvider> 
            <Counter/>
            <NavBar></NavBar>
            <HomePage></HomePage>
        </TasksProvider>
    </>;
}

export default App;
