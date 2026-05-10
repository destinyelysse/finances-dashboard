const noGoalsNote = document.getElementById("no-goals-note");
const goalsList = document.getElementById("goals-list");
const newGoalInput = document.getElementById("new-goal");
const addGoalButton = document.getElementById("add-entered-goal-btn");
const editGoalsBtn = document.getElementById("btn-edit-goals");

const goals = [];
console.log("rerunning");

function toggleEditGoals() {
  const goalInput = document.getElementById("input-goal");
  goalInput.hidden = !goalInput.hidden;
  editGoalsBtn.textContent = goalInput.hidden ? "Edit Goals" : "Done";
}

function goalsListContentManager() {
  noGoalsNote.hidden = goals.length !== 0;
  goalsList.hidden = goals.length == 0;
}

function addGoalToList() {
  const newGoalText = newGoalInput.value;
  goals.push(newGoalText);
  const newGoalLi = document.createElement("li");
  newGoalLi.textContent = newGoalText;
  goalsList.append(newGoalLi);
  goalsListContentManager();
  newGoalInput.value = "";
}

editGoalsBtn.onclick = toggleEditGoals;
addGoalButton.onclick = addGoalToList;
