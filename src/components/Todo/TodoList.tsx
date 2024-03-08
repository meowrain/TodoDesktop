import {
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemButton,
  Checkbox,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
}
function CheckBoxList({ todos,onDelete }: TodoListProps) {
  const [checked, setChecked] = useState([0]);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo: string, index: number) => {
        const labelId = `checkbox-list-label-${index}`;
        return (
          <ListItem key={index} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(index)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${todo}`} />
              <ButtonGroup aria-label="Basic button group">
                <Button>更新</Button>
                <Button onClick={() => onDelete(index)}>删除</Button>
              </ButtonGroup>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
export default function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <>
      <CheckBoxList todos={todos} onDelete={onDelete}/>
    </>
    // <ul>
    //   {todos.map((todo, index) => (
    //     <li key={index}>
    //       {todo}
    //       <ButtonGroup aria-label="Basic button group">
    //         <Button>Update</Button>
    //         <Button onClick={() => onDelete(index)}>Delete</Button>
    //       </ButtonGroup>
    //     </li>
    //   ))}
    // </ul>
  );
}
