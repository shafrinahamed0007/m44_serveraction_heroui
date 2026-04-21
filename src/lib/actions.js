// export const createATask = async (formData) => {
//   "use server";
//   const name = formData.get("name");
//   console.log("Adding a task with name: ", name);
// };

export const createATask = async (formData) => {
  "use server";
  const name = formData.get("name");
  console.log("Adding a taskw with name: ", formData);
};
