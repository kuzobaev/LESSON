import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/use-hooks";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((tasksObject) => {
    const loadedTasks = [];
    for (const taskKey in tasksObject) {
      loadedTasks.push({
        id: taskKey,
        text: tasksObject[taskKey].text,
      });
    }
    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, sendRequest: fetchTasks } = useFetch();

  useEffect(() => {
    fetchTasks(
      { url: "https://todo-session-default-rtdb.firebaseio.com/tasks.json" },
      transformTasks
    );
  }, [fetchTasks, transformTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
