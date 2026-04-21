import AddTask from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/task";
import React from "react";

const TaskPage = async () => {
  const data = await getTasks();
  const tasks = data.tasks;
  console.log(tasks);
  return (
    <div className="container mx-auto mt-10 text-center">
      <h2>Total Task: {tasks.length}</h2>
      <AddTask createATask = {createATask} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 pt-10">
        {
            tasks.map(task => <TaskCard key={task.id} task={task} />)
        }
      </div>
    </div>
  );
};

export default TaskPage;
