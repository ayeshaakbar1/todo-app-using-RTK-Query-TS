import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Todo} from "../../todo";
import {getTodosApiResponse} from "../../todo";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getTodosApi: builder.query<getTodosApiResponse, void>({
      query: () => "/todos?limit=10",
    }),
    addTodoApi: builder.mutation<Todo, Todo>({
      query: (todo) => ({
        url: "/todos/add",
        method: "POST",
        body: todo,
      }),
    }),
    deleteTodoApi: builder.mutation<Todo, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTodosApiQuery,
  useAddTodoApiMutation,
  useDeleteTodoApiMutation,
} = todoApi;
