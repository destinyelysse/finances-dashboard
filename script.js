const noGoalsNote = document.getElementById("no-goals-note");
const goalsList = document.getElementById("goals-list");
const newGoalInput = document.getElementById("new-goal");
const addGoalBtn = document.getElementById("add-entered-goal-btn");
const editGoalsBtn = document.getElementById("btn-edit-goals");
const goalInput = document.getElementById("input-goal");

const noActionItemsNote = document.getElementById("no-action-items-note");
const actionItemsList = document.getElementById("action-items-list");
const newActionInput = document.getElementById("new-action-item");
const addActionItemBtn = document.getElementById("add-entered-action-item-btn");
const editActionItemsBtn = document.getElementById("btn-edit-action-items");
const actionInput = document.getElementById("input-action-item");

const goals = [];
const actionItems = [];

function toggleEditGoals() {
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

function toggleEditActionItems() {
  actionInput.hidden = !actionInput.hidden;
  editActionItemsBtn.textContent = actionInput.hidden
    ? "Edit Action Items"
    : "Done";
}

function actionsListContentManager() {
  noActionItemsNote.hidden = actionItems.length !== 0;
  actionItemsList.hidden = actionItems.length == 0;
}

function addActionItemsToList() {
  const newActionItemText = newActionInput.value;
  actionItems.push(newActionItemText);
  const newActionItemLi = document.createElement("li");
  newActionItemLi.textContent = newActionItemText;
  actionItemsList.append(newActionItemLi);
  actionsListContentManager();
  newActionInput.value = "";
}

editGoalsBtn.onclick = toggleEditGoals;
addGoalBtn.onclick = addGoalToList;

editActionItemsBtn.onclick = toggleEditActionItems;
addActionItemBtn.onclick = addActionItemsToList;
