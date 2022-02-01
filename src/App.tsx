import { FormEvent, SetStateAction, useRef, useState } from "react";
import Modal from "react-modal";
import closeImg from "./assets/close-icon.svg";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import { GlobalStyle } from "./styles/global";

interface TaskProps {
  id: string;
  title: string;
  finished: boolean;
}

Modal.setAppElement("#root");

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [myTask, setMyTask] = useState("");
  const inputRef = useRef(null);

  function handleNewTaskModalOpen() {
    setIsNewTaskModalOpen(true);
  }

  function handleNewTaskModalClose() {
    setIsNewTaskModalOpen(false);
  }

  function handleRemoveTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  function handleToogleTask(id: string) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            finished: !task.finished,
          }
        : task
    );

    setTasks(newTasks);
  }

  async function createNewTask(event: FormEvent) {
    event.preventDefault();

    if (!myTask) {
      return;
    }

    const newTask = {
      id: uuidv4(),
      title: myTask,
      finished: false,
    };

    setTasks([...tasks, newTask]);

    handleNewTaskModalClose();
  }

  function handleChange(event: { target: { value: SetStateAction<string> } }) {
    setMyTask(event.target.value);
  }

  return (
    <>
      <Header
        isOpen={isNewTaskModalOpen}
        handleNewTaskModalOpen={handleNewTaskModalOpen}
      />

      <Tasks
        tasks={tasks}
        handleRemoveTask={handleRemoveTask}
        handleToogleTask={handleToogleTask}
      />

      <Modal
        isOpen={isNewTaskModalOpen}
        onRequestClose={handleNewTaskModalClose}
        overlayClassName="overlay"
        className="new-task-modal"
      >
        <button className="close-modal" onClick={handleNewTaskModalClose}>
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <form onSubmit={createNewTask}>
          <h3>Nova tarefa</h3>

          <input
            onChange={handleChange}
            ref={inputRef}
            type="text"
            placeholder="Tarefa"
          />

          <button type="submit">Salvar</button>
        </form>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
