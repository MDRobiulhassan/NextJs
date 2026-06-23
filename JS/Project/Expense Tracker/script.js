document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Initial render
  renderExpenses();
  updateTotal();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name,
        amount,
      };

      expenses.push(newExpense);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();

      expenseName.value = "";
      expenseAmount.value = "";
    }
  });

  function renderExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach((expense) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <span>${expense.name} - ${expense.amount}</span>
        <button data-id="${expense.id}">Delete</button>`;

      expenseList.appendChild(li);
    });
  }

  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function updateTotal() {
    const totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = Number(e.target.getAttribute("data-id"));

      expenses = expenses.filter((expense) => expense.id !== expenseId);

      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
    }
  });
});
