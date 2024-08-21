import { getTasks, postTasks } from "./src/petitions";
import { renderTasks } from "./src/rendertasks";

const $taskTable = document.querySelector("#tasks-table");

document.addEventListener("DOMContentLoaded", () => {
  getTasks().then((tasks) => {
    tasks.forEach((task) => {
      $taskTable.appendChild(renderTasks(task));
    });
  });
});

const taskForm = document.querySelector("#create-task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const $title = document.querySelector("#input-title");
  const $description = document.querySelector("#input-description");
  const $isComplete = document.querySelector("#input-is-complete");

  const newTask = {
    title: $title.value,
    description: $description.value,
    isComplete: $isComplete.value,
  };

  postTasks(newTask).then((result) => {
    $taskTable.appendChild(renderTasks(result));
    e.target.reset();
  });
});
