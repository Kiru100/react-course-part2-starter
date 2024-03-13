import { useContext } from "react";
import TasksContext from "../context/tasksContext";

 "../context/authenticationContext";

const useTasks = () => useContext(TasksContext);

export default useTasks;