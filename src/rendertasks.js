export const renderTasks = (task) => {
  const $taskRow = document.createElement("tr");
  $taskRow.classList.add("bg-white");

  const $taskTitle = document.createElement("td");
  $taskTitle.classList.add("px-4", "py-2", "text-sm", "text-gray-700");
  $taskTitle.textContent = task.title;

  const $taskDescription = document.createElement("td");
  $taskDescription.classList.add("px-4", "py-2", "text-sm", "text-gray-700");
  $taskDescription.textContent = task.description;

  const $taskStatus = document.createElement("td");
  const $taskIsCompleted = document.createElement("button");

  $taskStatus.classList.add("px-4", "py-2");
  $taskIsCompleted.classList.add("btn", "btn-primary");
  $taskIsCompleted.type = "submit";

  // Update task status on checkbox change
  $taskIsCompleted.addEventListener("click", (event) => {
    putTask(task.id, {
      title: task.title,
      description: task.description,
      isComplete: task.isComplete,
    });
  });

  $taskStatus.appendChild($taskIsCompleted);
  $taskRow.appendChild($taskTitle);
  $taskRow.appendChild($taskDescription);
  $taskRow.appendChild($taskStatus);

  return $taskRow;
};
