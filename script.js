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

const noAccountsNote = document.getElementById("no-accounts-note");
const accountsTable = document.getElementById("accounts-table");
const accountsRows = document.getElementById("accounts-rows");
const newAccountForm = document.getElementById("new-account-form");
const accountNameInput = document.getElementById("acct-name-input");
const accountBalanceInput = document.getElementById("acct-balance-input");
const accountType = document.getElementById("acct-type-select");
const addNewAcctBtn = document.getElementById("add-entered-account");
const editAcctsBtn = document.getElementById("new-account-btn");

const noTransactionsNote = document.getElementById("no-transactions-note");
const transactionsTable = document.getElementById("transactions-table");
const transactionsRows = document.getElementById("transactions-rows");
const newTransactionForm = document.getElementById("new-transaction-form");
const transactionDateInput = document.getElementById("new-transaction-date");
const transactionAmountInput = document.getElementById("new-transaction-amt");
const transactionFromAccountInput = document.getElementById(
  "new-transaction-from-acct",
);
const transactionToAccountInput = document.getElementById(
  "new-transaction-to-acct",
);
const transactionTypeInput = document.getElementById("new-transaction-type");
const addNewTransactionBtn = document.getElementById(
  "add-entered-transaction-btn",
);
const editTransactionsBtn = document.getElementById("new-transaction-btn");

const goals = [];
const actionItems = [];
const accounts = [];
const transactions = [];

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

function toggleEditAccts() {
  newAccountForm.hidden = !newAccountForm.hidden;
  editAcctsBtn.textContent = newAccountForm.hidden ? "Edit Accounts" : "Done";
}

function accountListContentManager() {
  noAccountsNote.hidden = accounts.length !== 0;
  accountsTable.hidden = accounts.length == 0;
}

function addAccountToTable() {
  const newAccountName = accountNameInput.value;
  const newAccountBalance = "$" + accountBalanceInput.value;
  const newAccountType = accountType.value;
  const newAccount = {
    name: newAccountName,
    balance: newAccountBalance,
    type: newAccountType,
  };
  accounts.push(newAccount);
  const newAcctRow = document.createElement("tr");
  const newAccountNameTd = document.createElement("td");
  newAccountNameTd.textContent = newAccountName;
  const newAccountBalanceTd = document.createElement("td");
  newAccountBalanceTd.textContent = newAccountBalance;
  const newAccountTypeTd = document.createElement("td");
  newAccountTypeTd.textContent = newAccountType;
  newAcctRow.append(newAccountNameTd);
  newAcctRow.append(newAccountBalanceTd);
  newAcctRow.append(newAccountTypeTd);
  accountsRows.append(newAcctRow);
  accountListContentManager();
  accountNameInput.value = "";
  accountBalanceInput.value = "";
  accountType.value = "";
}

function toggleEditTransactions() {
  newTransactionForm.hidden = !newTransactionForm.hidden;
  editTransactionsBtn.textContent = newTransactionForm.hidden
    ? "Edit Transactions"
    : "Done";
}

function transactionListContentManager() {
  noTransactionsNote.hidden = transactions.length !== 0;
  transactionsTable.hidden = transactions.length == 0;
}

function addTransactionToTable() {
  const newTransactionDate = transactionDateInput.value;
  const newTransactionAmount = "$" + transactionAmountInput.value;
  const newTransactionFromAccount = transactionFromAccountInput.value;
  const newTransactionToAccount = transactionToAccountInput.value;
  const newTransactionType = transactionTypeInput.value;
  const newTransaction = {
    date: newTransactionDate,
    amount: newTransactionAmount,
    from: newTransactionFromAccount,
    to: newTransactionToAccount,
    type: newTransactionType,
  };
  transactions.push(newTransaction);
  const newTransactionRow = document.createElement("tr");
  const newTransactionDateTd = document.createElement("td");
  newTransactionDateTd.textContent = newTransactionDate;
  const newTransactionAmountTd = document.createElement("td");
  newTransactionAmountTd.textContent = newTransactionAmount;
  const newTransactionFromTd = document.createElement("td");
  newTransactionFromTd.textContent = newTransactionFromAccount;
  const newTransactionToTd = document.createElement("td");
  newTransactionToTd.textContent = newTransactionToAccount;
  const newTransactionTypeTd = document.createElement("td");
  newTransactionTypeTd.textContent = newTransactionType;
  newTransactionRow.append(newTransactionDateTd);
  newTransactionRow.append(newTransactionAmountTd);
  newTransactionRow.append(newTransactionFromTd);
  newTransactionRow.append(newTransactionToTd);
  newTransactionRow.append(newTransactionTypeTd);
  transactionsRows.append(newTransactionRow);
  transactionListContentManager();
  transactionDateInput.value = "";
  transactionAmountInput.value = "";
  transactionFromAccountInput.value = "";
  transactionToAccountInput.value = "";
  transactionTypeInput.value = "";
}

editGoalsBtn.onclick = toggleEditGoals;
addGoalBtn.onclick = addGoalToList;

editActionItemsBtn.onclick = toggleEditActionItems;
addActionItemBtn.onclick = addActionItemsToList;

editAcctsBtn.onclick = toggleEditAccts;
addNewAcctBtn.onclick = addAccountToTable;

editTransactionsBtn.onclick = toggleEditTransactions;
addNewTransactionBtn.onclick = addTransactionToTable;
