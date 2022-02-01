
import { Container, Content, NewTask } from "./styles";

import trashImg from "../../assets/trash-icon.svg";

interface TaskProps {
  id: string;
  title: string;
  finished: boolean;
}

interface TasksProps {
  tasks: TaskProps[];
  handleRemoveTask: (id: string) => void;
  handleToogleTask: (id: string) => void;
}

export function Tasks({ tasks, handleRemoveTask, handleToogleTask }: TasksProps) {
  return (
    <Container>
      <Content>
        {tasks.map((task) => (
          <NewTask key={task.id}>
            <input type="checkbox" name="task" onClick={() => handleToogleTask(task.id)}/>
            <p>{task.title}</p>
            <button onClick={() => handleRemoveTask(task.id)} >
              <img src={trashImg} alt="Apagar tarefa" />
            </button>
          </NewTask>
        ))}
      </Content>
    </Container>
  );
}
