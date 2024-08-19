const renderTasks = (task) => {
  const $taskRow = document.createElement("tr");
  const $taskTitle = document.createElement("td");
  $taskTitle.textContent = task.title;
  const $taskDescription = document.createElement("td");
  $taskDescription.textContent = task.$taskDescription;
  const $taskStatus = document.createElement("td");
  const $taskIsCompleted = document.createElement("input");
  /* $taskIsCompleted.type = "checkbox"; */
  $taskIsCompleted.checked = task.isComplete;
  // Update task status on checkbox change
  /*     $taskIsCompleted.addEventListener("change", (event) => {
      task.isComplete = event.target.checked;
      putTask(task.id, {
        title: task.title,
        description: task.description,
        isComplete: task.isComplete,
      });
    }); */
  $taskStatus.appendChild($taskIsCompleted);
  $taskRow.appendChild($taskTitle);
  $taskRow.appendChild($taskDescription);
  $taskRow.appendChild($taskStatus);
};
