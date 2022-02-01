import { Container, Content } from "./styles";


interface HeaderProps {
  isOpen: boolean;
  handleNewTaskModalOpen: () => void;
}

export function Header({ isOpen, handleNewTaskModalOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <h1>to.do</h1>

        <button type="button" onClick={handleNewTaskModalOpen}>Nova tarefa</button>
      </Content>
    </Container>
  );
}
