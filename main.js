import { getTasks } from "./src/petitions";

document.addEventListener("DOMContentLoaded", () => {
  const $taskTable = document.querySelector("#tasks-table");
  getTasks().then((tasks) => {
    tasks.forEach((task) => {
      $taskTable.appendChild(renderTasks(task));
    });
  });
});
