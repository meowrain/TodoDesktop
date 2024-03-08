import { Container } from "@mui/material";
import "./App.css";
import Todo from "./components/Todo/Todo";
import PrimarySearchAppBar from "./components/AppBar/AppBarTodo";
function App() {
  return (
    <Container maxWidth="lg">
      <div>
        <PrimarySearchAppBar />
        <Todo />
      </div>
    </Container>
  );
}

export default App;
