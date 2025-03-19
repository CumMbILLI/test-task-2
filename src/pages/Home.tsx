import { Header } from "@/components/shared/header/Header";
import { TodoList } from "@/components/shared/todo/TodoList";

export const Home = () => {
  return (
    <article className="px-16 pt-8 space-y-8">
      <Header />

      <TodoList />
    </article>
  );
};
