import { deleteTodo } from "@/app/apis/tasks/todoApi";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "@/interfaces/todo.interface";

import { EditIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

interface Props extends Todo {
  index: number;
}

export const TodoItem = ({
  id,
  title,
  description,
  completed,
  index,
}: Props) => {
  const navigate = useNavigate();

  const handleDeleteTodo = () => {
    if (id)
      deleteTodo(id)
        .then(() => toast.success("Successfully removed!"))
        .catch(() => toast.error("Something went wrong!"));
  };

  return (
    <li className="flex items-center border-b-2 border-b-blue-400 py-2">
      <span className="pr-4 border-r-2 border-r-blue-400">{index + 1}.</span>
      <div className="flex justify-between items-center flex-1 pl-4">
        <div>
          <p>{title}</p>
          <p>{description}</p>
        </div>
        <div className="flex gap-3">
          <TrashIcon
            size={18}
            className="text-red-500 cursor-pointer"
            onClick={handleDeleteTodo}
          />
          <EditIcon
            size={18}
            className="cursor-pointer"
            onClick={() => navigate(`/edit-todo/${id}`)}
          />
          <Checkbox checked={completed} />
        </div>
      </div>
    </li>
  );
};
