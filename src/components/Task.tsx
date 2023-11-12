import styles from "./Task.module.css";
import trashIcon from "../assets/trash-icon.svg";
import { AddTask } from "./TaskBoard";

interface Task {
  taskValue: string;
  id: string;
  isTaskComplete: boolean;
  setTask: React.Dispatch<React.SetStateAction<AddTask[]>>;
  tasks: AddTask[];
  onDeleteTask: (task: string) => void;
}

export const Task = ({
  taskValue,
  id,
  onDeleteTask,
  setTask,
  isTaskComplete,
  tasks,
}: Task) => {

  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  const modifyCurrentTask = (previousTasks: AddTask[], isComplete: boolean) => {
    const modifiedTasks = previousTasks.map((eachTask) => {
      if (eachTask.id === id) {
        return { ...eachTask, taskComplete: isComplete };
      }
      return { ...eachTask };
    });

    return [...modifiedTasks];
  };

  const handleTaskCompleteChange = () => {
    if (!isTaskComplete) {
      setTask((task) => {
        const modifiedTasks = modifyCurrentTask(task, true);
        return [...modifiedTasks];
      });
    } else {
      setTask((task) => {
        const modifiedTasks = modifyCurrentTask(task, false);
        return [...modifiedTasks];
      });
    }
  };

  const isTaskCompleteCheck= tasks.some((taskE) => {
    if (taskE.id === id) {
      return taskE.taskComplete;
    }
    return false;
  });

  return (
    <li>
      <div className={styles.taskElement}>
        <input
          type="checkbox"
          name="finished"
          id={id}
          checked={isTaskCompleteCheck}
          onChange={handleTaskCompleteChange}
        />
        <label htmlFor={id}>{taskValue}</label>
      </div>
      <button onClick={handleDeleteTask}>
        <img src={trashIcon} title="lixeira" width="12.48" height="14" />
      </button>
    </li>
  );
};
