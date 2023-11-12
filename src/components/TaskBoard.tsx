import { v4 as uuidv4 } from "uuid";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";
import { useState } from "react";

import styles from "./TaskBoard.module.css";
import taskIcon from "../assets/task-icon.svg";

export interface AddTask {
  id: string;
  taskValue: string;
  taskComplete: boolean;
}


export const TaskBoard = () => {
  const [tasks, setTasks] = useState<AddTask[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const tasksCompleteLength = tasks.filter((task) => task.taskComplete).length

  const changeInputValue = (value: string) => setTaskInput(value);
  const addTaskToBoard = (task: AddTask) => setTasks([...tasks, task]);
  
  const addTask = (taskText: string) => {
    addTaskToBoard({ id: uuidv4(), taskValue: taskText, taskComplete: false });
    setTaskInput("");
  };

  const deleteTask = (taskKeyToDelete: string) => {
    const tasksWithoutRemovedOne = tasks.filter(
      (task) => task.id !== taskKeyToDelete
    );
    setTasks([...tasksWithoutRemovedOne]);
  };
 
  return (
    <>
      <TaskForm
        changeInputValue={changeInputValue}
        taskInput={taskInput}
        addTask={addTask}
      />
      <section className={styles.taskBoardSection} aria-label="Task's Board">
        <div aria-label="task's info">
          <div className={styles.taskLength}>
            Tarefas criadas
            <span>{tasks.length}</span>
          </div>
          <div className={styles.finishedTask}>
            Concluídas
            <span>
              {tasksCompleteLength} de {tasks.length}
            </span>
          </div>
        </div>
        {tasks.length ? (
          <ul className={styles.tasks}>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  taskValue={task.taskValue}
                  tasks={tasks}
                  setTask={setTasks}
                  isTaskComplete={task.taskComplete}
                  onDeleteTask={deleteTask}
                />
              );
            })}
          </ul>
        ) : (
          <div className={styles.emptyTaskList}>
            <img src={taskIcon} alt="Task Icon" />
            <p>
              <span>Você ainda não tem tarefas cadastradas</span>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </section>
    </>
  );
};
