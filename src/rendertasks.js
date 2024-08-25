import { deleteTask, putTask } from "./petitions";

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

  if (task.isComplete) {
    $taskIsCompleted.classList.add("btn", "btn-red-600");
    $taskIsCompleted.textContent = "Complete";
  } else {
    $taskIsCompleted.classList.add("btn", "btn-indigo-600");
    $taskIsCompleted.textContent = "Incomplete";
  }

  $taskIsCompleted.type = "button";

  $taskIsCompleted.addEventListener("click", () => {
    const newStatus = !task.isComplete;

    putTask(task.id, {
      title: task.title,
      description: task.description,
      isComplete: newStatus,
    })
      .then(() => {
        task.isComplete = newStatus;

        if (task.isComplete) {
          $taskIsCompleted.classList.remove("btn-indigo-600");
          $taskIsCompleted.classList.add("btn-red-600");
          $taskIsCompleted.textContent = "Complete";
        } else {
          $taskIsCompleted.classList.remove("btn-red-600");
          $taskIsCompleted.classList.add("btn-indigo-600");
          $taskIsCompleted.textContent = "Incomplete";
        }
      })
      .catch((error) => {
        console.log("Error updating task", error);
      });
  });

  const $deleteButton = document.createElement("button");
  $deleteButton.classList.add("btn", "btn-gray-600", "ml-2", "px-2", "py-1");
  $deleteButton.textContent = "DELTE";
  $deleteButton.type = "button";

  $deleteButton.addEventListener("click", () => {
    deleteTask(task.id)
      .then(() => {
        $taskRow.remove();
      })
      .catch((error) => {
        console.log("Error deleting", error);
      });
  });

  $taskStatus.appendChild($taskIsCompleted);
  $taskStatus.appendChild($deleteButton);
  $taskRow.appendChild($taskTitle);
  $taskRow.appendChild($taskDescription);
  $taskRow.appendChild($taskStatus);

  return $taskRow;
};
