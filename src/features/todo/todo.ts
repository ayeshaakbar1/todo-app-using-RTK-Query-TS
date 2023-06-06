export interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId?: number;
  }

export interface getTodosApiResponse {
    skip: number;
    limit: number;
    total: number;
    todos: Todo[];
  }