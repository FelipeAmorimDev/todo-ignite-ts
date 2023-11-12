import styles from "./TaskForm.module.css";
import createIcon from "../assets/plus-icon.png";

interface TaskChange {
  changeInputValue: (value: string) => void;
  addTask: (taskValue: string) => void;
  taskInput: string;
}

export const TaskForm = ({changeInputValue, taskInput, addTask,}: TaskChange) => {
  
  return (
    <form
      className={styles.taskForm}
      onSubmit={(e) => {
        e.preventDefault()

        addTask(taskInput)
      }}
      aria-label="add new task in board"
    >
      <input
        type="text"
        name="task"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => changeInputValue(e.target.value)}
        value={taskInput}
        required
      />
      <button type="submit" disabled={!taskInput}>
        Criar
        <img
          src={createIcon}
          title="Create a new task"
          width="15.97"
          height="15.97"
        />
      </button>
    </form>
  );
};
