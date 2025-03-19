import { getTodo, updateTodo } from "@/app/apis/tasks/todoApi";
import { TodoForm } from "@/components/shared/todo/TodoForm";

import { Todo } from "@/interfaces/todo.interface";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

export const EditTodo = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [todo, setTodo] = useState<Todo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTodo();
  }, []);

  const loadTodo = async () => {
    if (id) setTodo(await getTodo(id).finally(() => setIsLoading(false)));
  };

  const onSubmit = (changedTodo: Todo) => {
    if (!todo || !todo.id) return;

    updateTodo(todo?.id, changedTodo).then(() => {
      navigate("/");
      toast.success("Successfully changed!");
    });
  };

  if (!todo) return null;

  if (isLoading) return <div>loading...</div>;

  return (
    <TodoForm
      formTitle="Edit todo"
      initialValues={todo}
      handleSubmit={onSubmit}
    />
  );
};
