import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Todo } from "@/interfaces/todo.interface";
import { useState } from "react";
import { useNavigate } from "react-router";

interface Props {
  formTitle: string;
  initialValues: Todo;
  handleSubmit: (todo: Todo) => void;
}

export const TodoForm = ({ formTitle, initialValues, handleSubmit }: Props) => {
  const [todo, setTodo] = useState<Todo>(initialValues);

  const navigate = useNavigate();

  return (
    <form
      className="p-8"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(todo);
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{formTitle}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-10">
          <section className="flex flex-col flex-1 gap-2">
            <label>Title</label>
            <Input
              value={todo?.title}
              onChange={(event) =>
                setTodo({ ...todo, title: event.target.value })
              }
            />

            <label>Description</label>
            <Textarea
              value={todo?.description}
              onChange={(event) =>
                setTodo({ ...todo, description: event.target.value })
              }
            />

            <section className="flex items-center gap-2 my-4">
              <Select
                value={todo?.importance}
                onValueChange={(value) =>
                  setTodo({ ...todo, importance: value })
                }
              >
                <SelectTrigger className="w-[180px] mr-5">
                  <SelectValue placeholder="Select a importance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="non-urgent">Non-urgent</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 pl-5 border-l-2">
                <label>Complited</label>
                <Checkbox
                  className="w-5 h-5"
                  checked={todo?.completed}
                  onCheckedChange={(value) =>
                    setTodo({ ...todo, completed: value as boolean })
                  }
                />
              </div>
            </section>
          </section>

          <Calendar
            selected={todo?.createdAt}
            onSelect={(value) =>
              setTodo({ ...todo, createdAt: value || todo.createdAt })
            }
            mode="single"
            className="rounded-md border w-fit"
          />
        </CardContent>
        <CardFooter className="space-x-4">
          <Button variant="secondary" onClick={() => navigate("/")}>
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
