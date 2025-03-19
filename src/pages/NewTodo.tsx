import { addTodos } from "@/app/apis/tasks/todoApi";
import { TodoForm } from "@/components/shared/todo/TodoForm";
import { useUserAuth } from "@/context/userAuthContext";
import { Todo } from "@/interfaces/todo.interface";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const NewTodo = () => {
  const { user } = useUserAuth();

  const navigate = useNavigate();

  const defaultFormValues: Todo = {
    title: "",
    description: "",
    userId: user?.uid as string,
    completed: false,
    createdAt: new Date(),
    importance: "non-urgent",
  };

  const onSubmit = (newTodo: Todo) => {
    navigate("/");
    addTodos(newTodo).then(() => toast.success("Successfully created!"));
  };

  return (
    <TodoForm
      formTitle="New todo"
      handleSubmit={onSubmit}
      initialValues={defaultFormValues}
    />
  );
};
