import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../services/Slices/todoSlice";
import { useEffect } from "react";
import { useDeleteTodoApiMutation } from "../services/api/todoApi";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../todo";

interface DeleteTodoProps {
  id: number;
}

const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const [deleteTodoApi, { isSuccess: deleteIsSuccess, data: dataResponse }] = useDeleteTodoApiMutation();
  const dispatch = useDispatch();
  const todo = useSelector((state: { todo: { todos: Todo } }) => state.todo.todos);

  const handleRemoveTodo = () => {
    deleteTodoApi(id);
  };

  useEffect(() => {
    if (deleteIsSuccess) {
      if (dataResponse)
      {
        dispatch(deleteTodo({ id: dataResponse.id }));
      }
    }
  }, [deleteIsSuccess]);

  return (
    <Button onClick={handleRemoveTodo}>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteTodo;
