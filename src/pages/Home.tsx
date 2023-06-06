import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Paper,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@mui/material";
import { useGetTodosApiQuery } from "../features/todo/services/api/todoApi";
import { setTodo } from "../features/todo/services/Slices/todoSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteTodo from "../features/todo/components/DeleteTodo";
import AddTodo from "../features/todo/components/AddTodo";
import { RootState } from "../services/store";
import {Todo} from "../features/todo/todo";



const Home = () => {
  const todo: Todo[] = useSelector((state: RootState) => state.todo.todos);
  const { data, isSuccess: getIsSuccess } = useGetTodosApiQuery();
  const dispatch = useDispatch();
  const [isTodoOpen, setAddTodoOpen] = useState(false);
  const toggleAddTodo = () => {
    setAddTodoOpen(!isTodoOpen);
  };
  useEffect(() => {
    if (getIsSuccess) {
      dispatch(setTodo(data.todos));
    }
  }, [getIsSuccess]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100vh",
          pt: 11,
          pb: 16,
        }}
      >
        <Button
          onClick={toggleAddTodo}
          sx={{
            backgroundColor: "#096192",
            fontWeight: 600,
            fontSize: 17,
            mb: 2,
          }}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add Todo
        </Button>
        <AddTodo isOpen={isTodoOpen} handleAddTodoModel={toggleAddTodo} />
        <TableContainer component={Paper} sx={{ width: 999 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Task</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todo.length ? (
                <>
                  {todo.map((t: Todo) => (
                    <TableRow key={t.id}>
                      <TableCell>{t.id}</TableCell>
                      <TableCell>{t.todo}</TableCell>
                      <TableCell>
                        {t.completed ? "completed" : "pending"}
                      </TableCell>
                      <Tooltip title="Delete">
                        <TableCell>
                          <DeleteTodo id={t.id} />
                        </TableCell>
                      </Tooltip>
                    </TableRow>
                  ))}
                </>
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <h3>No Todo</h3>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Home;
