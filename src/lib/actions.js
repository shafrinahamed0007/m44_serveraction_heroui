// export const createATask = async (formData) => {
//   "use server";
//   const name = formData.get("name");
//   console.log("Adding a task with name: ", name);
// };

import { postTask } from "./task";

export const createATask = async (formData) => {
  "use server";
  //   const title = formData.get("title");
  //   const description = formData.get("description");
  //   const priority = formData.get("priority");
  //   const status = formData.get("status");
  //   const assignedTo = formData.get("assignedTo");

  //   const newTask = { title, description, priority, status, assignedTo };

  const newTask = Object.fromEntries(formData.entries());

  console.log("Adding a taskw with name: ", newTask);

  const res = await postTask(newTask);
  return res;
};
