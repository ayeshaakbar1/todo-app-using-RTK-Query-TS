import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Box, TextField, Dialog, Stack } from "@mui/material";

import { addTodo } from "../services/Slices/todoSlice";
import { useAddTodoApiMutation } from "../services/api/todoApi";
import {Todo} from "../todo";


interface AddTodoProps {
  isOpen: boolean;
  handleAddTodoModel: () => void;
}

const AddTodo = ({ isOpen, handleAddTodoModel }: AddTodoProps) => {
  const [addTodoApi, { isSuccess, data }] = useAddTodoApiMutation();
  const dispatch = useDispatch();
  const [values, setValues] = useState<Todo>({
    id: 0,
    userId: 1,
    todo: "",
    completed: false,
  });

  const handleAddTodo = () => {
    addTodoApi(values);
  };

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addTodo(data));
      setValues({ id: 0, userId: 1, todo: "", completed: false });
      handleAddTodoModel();
    }
  }, [isSuccess]);

  return (
    <Dialog onClose={handleAddTodoModel} open={isOpen}>
      <Box sx={{ p: "20px", justifyContent: "center", display: "flex" }}>
        <Stack>
          <TextField
            label="Task"
            id="standard-multiline-static"
            multiline
            rows={3}
            type="text"
            value={values.todo}
            onChange={(e) => setValues({ ...values, todo: e.target.value })}
            placeholder="What's on your mind?"
            fullWidth
            margin="normal"
            variant="standard"
          />
          <Button
            variant="contained"
            onClick={handleAddTodo}
            fullWidth
            sx={{
              mt: 3,
              fontWeight: 700,
              backgroundColor: "#096192",
              width: "280px",
              margin: "8px 100px",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default AddTodo;
