import { getUserTodos } from "@/app/apis/tasks/todoApi";
import { useUserAuth } from "@/context/userAuthContext";
import { Todo } from "@/interfaces/todo.interface";
import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { user } = useUserAuth();

  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    loadTasks();
  }, [user]);

  const loadTasks = async () => {
    if (user) {
      const userTasks = await getUserTodos(user.uid);
      setTodos(userTasks);
    }
  };

  if (!todos?.length)
    return <div className="text-center text-gray-600">Todos not founds!</div>;

  return (
    <ol>
      {todos?.map((todo, index) => (
        <TodoItem key={todo.id} {...todo} index={index} />
      ))}
    </ol>
  );
};
