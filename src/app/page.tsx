import Image from "next/image";
import AddNewItem from "./components/AddNewItem";
import ToDoList from "./components/ToDoList";

export default function Home() {
  return (
    <main className="">
      <div>
        <AddNewItem/>
        <ToDoList/>
      </div>
    </main>
  );
}
